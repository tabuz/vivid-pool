const page_name__config = {
  index: { x: 0, y: -800, sinx: 0.1, siny: 0.13 },
  mission: { x: -400, y: -250, sinx: 0.3, siny: 0.2 },
  about: { x: -800, y: -550, sinx: 0.6, siny: 0 },
  'guide-category-article': { x: -600, y: -700, sinx: 0.6, siny: 0 },
  guide: { x: -600, y: -700, sinx: 0.6, siny: 0 },
  null: { x: -600, y: -700, sinx: 0.6, siny: 0 },
  contact: { x: -400, y: -600, sinx: 0.1, siny: 0.15 },
  partners: { x: -400, y: -600, sinx: 0.1, siny: 0.15 },
}
export const state = () => ({
  x: 85,
  y: -345,
  sinx: 0,
  siny: 0,
})

export const mutations = {
  set_config(state, page_name) {
    const { x, y, sinx, siny } = page_name__config[page_name]

    state.x = x
    state.y = y
    state.sinx = sinx
    state.siny = siny
  },
}
