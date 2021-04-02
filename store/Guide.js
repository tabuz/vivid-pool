export const state = () => ({
  question_step: 0,
})

export const mutations = {
  set_question_step(state, { question_step }) {
    state.question_step = question_step
  },
}

export const actions = {
  async set_question_step({ commit }, { question_step }) {
    await new Promise((resolve) => setTimeout(resolve, 100))
    commit('set_question_step', { question_step })
  },
}
