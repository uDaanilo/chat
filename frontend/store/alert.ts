export const state = () => ({
  show: false,
  type: 'info',
  message: 'Alerta',
  time: 5,
  dismissable: true,
  color: 'info'
})

export const mutations = {
  set(state: any, config: any) {
    state.show = true
    state.type = config.type || state.type
    state.message = config.message || state.message
    state.time = config.time || state.time
    state.dismissable = typeof config.dismissable == "boolean" ? config.dismissable : true
    state.color = config.color || state.color
  },
  hide(state: any) {
    state.show = false
  }
}

export const actions = {
  set({ commit, state }: any, payload: any) {
    if(state.show) return
    if(payload.type && payload.type == 'error') payload.color = 'error'

    commit('set', payload)

    if(payload.time == Infinity) return
    setTimeout(() => commit('hide'), (payload.time || 5) * 1000)
  }
}