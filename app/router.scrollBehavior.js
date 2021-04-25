export default function (to, from, savedPosition) {
  if (to.hash) {
    return {
      selector: window.decodeURIComponent(to.hash),
      behavior: 'smooth',
    }
  } else {
    return { x: 0, y: 0, behavior: 'smooth' }
  }
}
