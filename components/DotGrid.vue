<template>
  <div id="dot-grid"></div>
</template>
<script>
import {
  PerspectiveCamera,
  Scene,
  ParticleCanvasMaterial,
  Particle,
  CanvasRenderer,
} from 'three'
import { mapState } from 'vuex'

export default {
  name: 'DotGrid',
  computed: {
    ...mapState('DotGrid', ['x', 'y']),
  },
  mounted() {
    const SEPARATION = 100
    const AMOUNTX = 150
    const AMOUNTY = 70
    const component = this

    let container
    let camera, scene, renderer

    let particles
    let particle
    let count = 0

    init()
    animate()

    function init() {
      container = document.getElementById('dot-grid')

      camera = new PerspectiveCamera(
        120,
        window.innerWidth / window.innerHeight,
        1,
        10000
      )
      camera.position.z = 1000

      scene = new Scene()

      particles = []

      const PI2 = Math.PI * 2
      const material = new ParticleCanvasMaterial({
        color: '#FFFFFF',
        program(context) {
          context.beginPath()
          context.arc(0, 0, 0.6, 0, PI2, true)
          context.fill()
        },
      })

      const blue = new ParticleCanvasMaterial({
        color: '#e6007a',
        program(context) {
          context.beginPath()
          context.arc(0, 0, 0.6, 0, PI2, true)
          context.fill()
        },
      })

      let i = 0

      for (let ix = 0; ix < AMOUNTX; ix++) {
        for (let iy = 0; iy < AMOUNTY; iy++) {
          if (Math.random() < 0.05) {
            particle = particles[i++] = new Particle(blue)
            particle.scale.x = particle.scale.y = 2
          } else {
            particle = particles[i++] = new Particle(material)
          }
          particle.position.x = ix * SEPARATION - (AMOUNTX * SEPARATION) / 2
          particle.position.z = iy * SEPARATION - (AMOUNTY * SEPARATION) / 2
          scene.add(particle)
        }
      }

      renderer = new CanvasRenderer()
      renderer.setSize(window.innerWidth, window.innerHeight)
      container.appendChild(renderer.domElement)

      window.addEventListener('resize', onWindowResize, false)
    }

    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()

      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    function animate() {
      requestAnimationFrame(animate)
      render()
    }

    function render() {
      const grid_x = component.x
      const grid_y = component.y

      camera.position.x += (grid_x - camera.position.x) * 0.05
      camera.position.y += (-grid_y - camera.position.y) * 0.05
      camera.lookAt(scene.position)

      let i = 0

      for (let ix = 0; ix < AMOUNTX; ix++) {
        for (let iy = 0; iy < AMOUNTY; iy++) {
          particle = particles[i++]
          particle.position.y =
            Math.sin((ix + count) * 0.3) * 50 +
            Math.sin((iy + count) * 0.5) * 50
          particle.scale.x = particle.scale.y =
            (Math.sin((ix + count) * 0.3) + 1) * 2 +
            (Math.sin((iy + count) * 0.5) + 1) * 2
        }
      }

      renderer.render(scene, camera)

      count += 0.1
    }
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
