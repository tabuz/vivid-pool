export default function ({ store, route }) {
  store.commit('DotGrid/set_config', route.name)
}
