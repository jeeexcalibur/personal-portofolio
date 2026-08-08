export const useReveal = (options: IntersectionObserverInit = {}) => {
  if (!import.meta.client) return
  document.documentElement.classList.add('js')

  const defaultOptions: IntersectionObserverInit = {
    threshold: 0.12,
    rootMargin: '0px 0px -8% 0px',
    ...options
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return
      entry.target.classList.add('is-visible')
      observer.unobserve(entry.target)
    })
  }, defaultOptions)

  const observe = (target: Element) => {
    if (target.classList.contains('is-visible')) return
    observer.observe(target)
  }

  const refresh = () => {
    document.querySelectorAll('.reveal').forEach(observe)
  }

  refresh()

  const stop = () => observer.disconnect()
  onBeforeUnmount(stop)

  return { observer, refresh, stop }
}