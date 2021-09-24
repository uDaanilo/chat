<h1 align="center">📧 CHAT</h1>
<p align="center">A simple realtime chat</p>

<p align="center">
 <a href="#live-demo">Live demo</a> •
 <a href="#features">Features</a> • 
 <a href="#built-with">Built with</a> • 
 <a href="#development">Development</a>
</p>

## Live demo
You can test [here](https://udaanilo.github.io/chat)

## ✔️ Features
 * Authentication
 * Image upload
## 🛠️ Built with
### Frontend
 * [Vuejs](https://vuejs.org)
 * [Nuxt](https://nuxtjs.org)
 * [Vuetify](https://vuetifyjs.com)
 * [Typescript](https://www.typescriptlang.org)
 * [Socket.io](https://socket.io)
### Backend
 * [Typescript](https://www.typescriptlang.org)
 * [MongoDB](https://www.mongodb.com/)
 * [Nodejs](https://nodejs.dev)
 * [Express](https://expressjs.com/)
 * [Socket.io](https://socket.io)

## 🚧 Development

First of all, clone this repository
```sh
git clone https://github.com/uDaanilo/chat.git
```

### Frontend
```sh
# Go to frontend folder
cd frontend

# Install the dependencies
npm i
yarn

# Go to plugins folder
cd plugins

# Insert your baseURL on env.ts file

# Finally, start the project
npm run dev
yarn dev
```
### Backend
```sh
# Go to backend folder
cd backend

# Install the dependencies
npm i
yarn

# Rename .example.env to .env and insert your informations
mv .example.env .env

# Finally, start the project
npm run dev
yarn dev
```