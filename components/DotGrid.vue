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

export default {
  name: 'DotGrid',
  mounted() {
    const SEPARATION = 100
    const AMOUNTX = 150
    const AMOUNTY = 70

    let container
    let camera, scene, renderer

    let particles
    let particle
    let count = 0

    const mouseX = 85
    const mouseY = -342

    // const windowHalfX = window.innerWidth / 2
    // const windowHalfY = window.innerHeight / 2

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

      let i = 0

      for (let ix = 0; ix < AMOUNTX; ix++) {
        for (let iy = 0; iy < AMOUNTY; iy++) {
          particle = particles[i++] = new Particle(material)
          particle.position.x = ix * SEPARATION - (AMOUNTX * SEPARATION) / 2
          particle.position.z = iy * SEPARATION - (AMOUNTY * SEPARATION) / 2
          scene.add(particle)
        }
      }

      renderer = new CanvasRenderer()
      renderer.setSize(window.innerWidth, window.innerHeight)
      container.appendChild(renderer.domElement)

      // document.addEventListener('mousemove', onDocumentMouseMove, false)
      // document.addEventListener('touchstart', onDocumentTouchStart, false)
      // document.addEventListener('touchmove', onDocumentTouchMove, false)

      //

      window.addEventListener('resize', onWindowResize, false)
    }

    function onWindowResize() {
      // windowHalfX = window.innerWidth / 2
      // windowHalfY = window.innerHeight / 2

      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()

      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    //

    // function onDocumentMouseMove(event) {
    //   mouseX = event.clientX - windowHalfX
    //   mouseY = event.clientY - windowHalfY
    // }

    // function onDocumentTouchStart(event) {
    //   if (event.touches.length === 1) {
    //     event.preventDefault()

    //     mouseX = event.touches[0].pageX - windowHalfX
    //     mouseY = event.touches[0].pageY - windowHalfY
    //   }
    // }

    // function onDocumentTouchMove(event) {
    //   if (event.touches.length === 1) {
    //     event.preventDefault()

    //     mouseX = event.touches[0].pageX - windowHalfX
    //     mouseY = event.touches[0].pageY - windowHalfY
    //   }
    // }

    //

    function animate() {
      requestAnimationFrame(animate)

      render()
    }

    function render() {
      camera.position.x += (mouseX - camera.position.x) * 0.05
      camera.position.y += (-mouseY - camera.position.y) * 0.05
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
