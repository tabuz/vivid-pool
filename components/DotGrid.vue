<template>
  <canvas id="dot-grid"></canvas>
</template>
<script>
import {
  Clock,
  Scene,
  PerspectiveCamera,
  ShaderMaterial,
  TextureLoader,
  BufferGeometry,
  Points,
  WebGLRenderer,
  Float32BufferAttribute,
  AdditiveBlending,
} from 'three'

import { mapState } from 'vuex'

const vertexshader = `
attribute float scale;
void main() {

    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );

    gl_PointSize = scale * ( 300.0 / - mvPosition.z );

    gl_Position = projectionMatrix * mvPosition;

}`

const fragmentshader = `
uniform sampler2D pointTexture;

void main() {

    if ( length( gl_PointCoord - vec2( 0.5, 0.5 ) ) > 0.475 ) discard;

    gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
    gl_FragColor = gl_FragColor * texture2D( pointTexture, gl_PointCoord );

}
`

// function onPointerLeftClick(event) {
//   // TODO smooth rotate on click
//   if (event.isPrimary === false) return
//   rotate += PI / 4
// }

export default {
  name: 'DotGrid',
  data() {
    return {
      SEPARATION: 100,
      AMOUNTX: 120,
      AMOUNTY: 70,
      SCALE: 2,
      clock: new Clock(),
    }
  },
  computed: {
    ...mapState('DotGrid', ['x', 'y']),
  },
  mounted() {
    this.$nextTick(() => {
      this.init()
      this.tick()
    })
  },
  methods: {
    init() {
      const component = this
      const width = window.innerWidth
      const height = window.innerHeight

      let mouseX = 0
      let mouseY = 0
      // const rotate = 0

      // Canvas
      const canvas = document.querySelector('#dot-grid')

      // Scene
      const scene = new Scene()

      // Sizes
      const sizes = {
        width,
        height,
      }

      // Camera
      const camera = new PerspectiveCamera(
        100,
        sizes.width / sizes.height,
        2,
        10000
      )
      scene.add(camera)

      const material = new ShaderMaterial({
        uniforms: {
          pointTexture: {
            value: new TextureLoader().load(require('static/sqTest2.png')),
          },
        },
        vertexShader: vertexshader,
        fragmentShader: fragmentshader,
        blending: AdditiveBlending,
        depthTest: false,
        transparent: true,
        vertexColors: true,
      })

      const numParticles = this.AMOUNTX * this.AMOUNTY

      const positions = new Float32Array(numParticles * 3)
      const scales = new Float32Array(numParticles)

      let i = 0
      let j = 0

      for (let ix = 0; ix < this.AMOUNTX; ix++) {
        for (let iy = 0; iy < this.AMOUNTY; iy++) {
          positions[i] =
            ix * this.SEPARATION - (this.AMOUNTX * this.SEPARATION) / 2 // x
          positions[i + 1] = 0 // y
          positions[i + 2] =
            iy * this.SEPARATION - (this.AMOUNTY * this.SEPARATION) / 2 // z
          scales[j] = this.SCALE
          i += 3
          j++
        }
      }

      const geometry = new BufferGeometry()

      const particles = new Points(geometry, material)

      updateGeometry(positions, scales)

      scene.add(particles)

      // Renderer
      const renderer = new WebGLRenderer({
        canvas,
        alpha: false,
        antialias: true,
      })
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      renderer.setSize(sizes.width, sizes.height)

      document.body.addEventListener('pointermove', onPointerMove)

      // OnResize
      window.addEventListener('resize', () => {
        // Update sizes
        sizes.width = window.innerWidth
        sizes.height = window.innerHeight

        // Update camera
        camera.aspect = sizes.width / sizes.height
        camera.updateProjectionMatrix()

        // Update renderer
        renderer.setSize(sizes.width, sizes.height)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      })

      function updateGeometry(updatePosition, updateScale) {
        geometry.setAttribute(
          'position',
          new Float32BufferAttribute(updatePosition, 3)
        )
        geometry.setAttribute(
          'scale',
          new Float32BufferAttribute(updateScale, 1)
        )
      }

      function animate(elapsedTime) {
        // Comment out below to allow camera to react to DotGrid state
        // const grid_x = component.x
        // const grid_y = component.y

        // camera.position.x += (mouseX - grid_x - camera.position.x) * 0.05 + 15
        // camera.position.y +=
        //   (-mouseY - -1 * grid_y - camera.position.y) * 0.05 + 35

        camera.position.x += (mouseX - camera.position.x) * 0.05 + 15
        camera.position.y += (-mouseY - camera.position.y) * 0.05 + 35

        // camera.rotation.y += ( mouseX - camera.rotation.y )/1200000;
        // camera.lookAt( scene.position );

        const positions = particles.geometry.attributes.position.array
        const scales = particles.geometry.attributes.scale.array

        let i = 0
        let j = 0

        for (let ix = 0; ix < component.AMOUNTX; ix++) {
          for (let iy = 0; iy < component.AMOUNTY; iy++) {
            positions[i + 1] =
              Math.sin((ix + elapsedTime) * 0.3) * 50 +
              Math.sin((iy + elapsedTime) * 0.5) * 50

            scales[j] =
              ((Math.sin((ix + elapsedTime) * 0.3) + 1) * 20 +
                (Math.sin((iy + elapsedTime) * 0.5) + 1) * 20) *
              component.SCALE

            i += 3
            j++
          }
        }
        updateGeometry(positions, scales)
      }

      function tick() {
        const elapsedTime = component.clock.getElapsedTime()
        animate(elapsedTime)
        renderer.render(scene, camera)
        // Call tick again on the next frame
        window.requestAnimationFrame(component.tick)
      }

      function onPointerMove(event) {
        if (event.isPrimary === false) return

        mouseX = -(event.clientX - sizes.width / 2) / 2
        mouseY = -(event.clientY - sizes.height / 2) / 6
        // console.log(mouseY)
      }

      this.tick = tick
    },
  },
}
</script>

<style lang="scss">
#dot-grid {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 0;
}
</style>
