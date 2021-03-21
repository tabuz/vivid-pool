export const state = () => ({
  next_category: null,
  next_article: null,
})

export const mutations = {
  set_props(state, { next_category, next_article }) {
    state.next_category = next_category
    state.next_article = next_article
  },
}
