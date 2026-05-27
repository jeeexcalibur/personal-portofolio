// Scroll Narrative composable
// Handles parallax, scroll-reveal animations, active chapter tracking, and reduced motion

export const useScrollNarrative = () => {
  const activeChapter = ref(0)
  const parallaxOffset = ref(0)
  const prefersReducedMotion = ref(false)

  const chapters = [
    { id: 'home', label: 'Home', index: 0 },
    { id: 'about', label: 'About', index: 1 },
    { id: 'education', label: 'Education', index: 2 },
    { id: 'experience', label: 'Experience', index: 3 },
    { id: 'projects', label: 'Projects', index: 4 },
    { id: 'contact', label: 'Contact', index: 5 },
  ]

  let ticking = false
  let observer: IntersectionObserver | null = null

  const onScroll = () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        parallaxOffset.value = window.scrollY
        ticking = false
      })
      ticking = true
    }
  }

  const getParallaxStyle = (speed: number) => {
    if (prefersReducedMotion.value) return {}
    return {
      transform: `translateY(${parallaxOffset.value * speed}px)`,
    }
  }

  const initScrollReveal = () => {
    if (typeof window === 'undefined') return

    // Detect reduced motion preference
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    prefersReducedMotion.value = mq.matches
    mq.addEventListener('change', (e) => {
      prefersReducedMotion.value = e.matches
    })

    // Observe sections for active chapter + scroll-reveal
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Scroll reveal animation
          if (entry.isIntersecting) {
            entry.target.classList.add('scroll-revealed')
          }

          // Active chapter detection
          if (entry.isIntersecting) {
            const chapter = chapters.find((c) => c.id === entry.target.id)
            if (chapter) {
              activeChapter.value = chapter.index
            }
          }
        })
      },
      {
        root: null,
        rootMargin: '-15% 0px -40% 0px',
        threshold: 0.1,
      }
    )

    // Observe all beat sections
    chapters.forEach((chapter) => {
      const el = document.getElementById(chapter.id)
      if (el) {
        observer!.observe(el)
      }
    })

    // Parallax scroll listener
    window.addEventListener('scroll', onScroll, { passive: true })
  }

  const scrollToChapter = (index: number) => {
    const chapter = chapters[index]
    if (!chapter) return
    const el = document.getElementById(chapter.id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const cleanup = () => {
    if (observer) {
      observer.disconnect()
      observer = null
    }
    window.removeEventListener('scroll', onScroll)
  }

  return {
    activeChapter,
    parallaxOffset,
    prefersReducedMotion,
    chapters,
    getParallaxStyle,
    initScrollReveal,
    scrollToChapter,
    cleanup,
  }
}
