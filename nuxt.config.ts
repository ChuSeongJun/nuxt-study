// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    typeCheck: false
  },
  modules: ['nuxt-quasar-ui', '@pinia/nuxt', '@pinia-plugin-persistedstate/nuxt'],
  quasar: {
    plugins: ['Notify'],
    config: {
      notify: {
        position: 'top-right'
      }
    }
  },
  imports: {
    presets: [
      {
        from: 'vue-i18n',
        imports: ['useI18n']
      }
    ]
  },
  app: {
    head: {
      title: '넉스트 공부',
      meta: [{ name: 'description', content: '추성준' }]
    }
  }
});
