export default function ({ env, isDev }: any) {
  env.baseURL = isDev ? 'http://localhost:8080' : 'https://chat-nuxtjs.herokuapp.com'
}