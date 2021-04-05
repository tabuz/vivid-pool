export const state = () => ({
  is_drawer_open: false,
  is_article_tree_drawer_open: false,
})

export const mutations = {
  set_is_drawer_open(state, is_drawer_open) {
    state.is_drawer_open = is_drawer_open
  },
  set_is_article_tree_drawer_open(state, is_article_tree_drawer_open) {
    state.is_article_tree_drawer_open = is_article_tree_drawer_open
  },
}
