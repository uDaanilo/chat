interface IUser {
  name: string,
  email: string,
  img: string
}

export const state = () => ({
  name: '',
  email: '',
  img: ''
})

export const mutations = {
  set(state: IUser, profile: IUser) {
    state.name = profile.name
    state.email = profile.email
    state.img = profile.img
  }
}