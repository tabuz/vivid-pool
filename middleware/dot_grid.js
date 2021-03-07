export default function ({ store, route, app }) {
  store.commit('DotGrid/set_config', app.getRouteBaseName(route))
}
