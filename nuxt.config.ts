export default defineNuxtConfig({
  extends: ['./woonuxt_base'],

  components: [{ path: './components', pathPrefix: false }],

  modules: ['nuxt-graphql-client'],

  runtimeConfig: {
    public: {
      GQL_HOST: 'https://woonuxt-shop.admin-panels.com/graphql'
    }
  },

  'graphql-client': {
    clients: {
      default: {
        host: 'https://woonuxt-shop.admin-panels.com/graphql',
        tokenStorage: {
          cookieOptions: {
            name: 'authToken',
            maxAge: 60 * 60 * 24 * 7,
            sameSite: 'None',
            secure: true
          }
        }
      }
    }
  },

  nitro: {
    prerender: {
      concurrency: 10,
      interval: 1000,
      failOnError: false
    }
  }
});