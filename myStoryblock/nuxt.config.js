// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [['@storyblok/nuxt', { accessToken: 'RpdujQKwLln9LBJIKk7M4Qtt' }]],
apiOptions: {
    region: "us",
},
})
