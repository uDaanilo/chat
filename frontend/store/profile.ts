interface IProfile {
  user: object
  x: string
  y: string
  show: boolean
}

export const state = () => ({
  user: {},
  x: '',
  y: '',
  show: false
})

export const mutations = {
  show(state: IProfile, data: any) {
    state.user = data.user
    state.x = data.x
    state.y = data.y
    state.show = true
  },
  hide(state: IProfile) {
    state.show = false
  }
}