// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    runtimeConfig: {
        public: {
            baseUrl: 'http://localhost:8080'
        }
    },
    app: {
        pageTransition: { name: 'page', mode: 'out-in' }
    },
})
