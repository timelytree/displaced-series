export default function ({ store }) {
  function checkWindowScrollTop (next) {
    const doc = document.documentElement
    const top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0)
    return next(top)
  }
  if (process.browser) {
    window.scroll({ top: 0, behavior: 'smooth' })
    store.app.router.beforeEach((to, from, next) => {
      const interval = setInterval(() => {
        checkWindowScrollTop((pos) => {
          if (pos === 0) {
            clearInterval(interval)
            return next()
          }
        })
      }, 5)
    })
  }
}
