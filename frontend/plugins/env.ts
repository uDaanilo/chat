export default function ({ env, isDev, $config }: any) {
  env.baseURL = isDev ? 'http://localhost:8080' : 'https://chat-nuxtjs.herokuapp.com'
  $config.ghRedirectUrl = isDev ? 'http://localhost:3000/chat/login' : 'https://udaanilo.github.io/chat/login'
}