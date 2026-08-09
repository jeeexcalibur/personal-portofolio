<script setup lang="ts">
const isOpen = ref(false)
const pendingHash = ref<string | null>(null)
const links = [
  { number: '01', label: 'Home', href: '/#home' },
  { number: '02', label: 'About', href: '/#about' },
  { number: '03', label: 'Education', href: '/#education' },
  { number: '04', label: 'Experience', href: '/#experience' },
  { number: '05', label: 'Projects', href: '/#projects' },
  { number: '06', label: 'Contact', href: '/#contact' }
]

const navigateToSection = async (href: string) => {
  closeMenu()

  if (!import.meta.client) return

  const target = new URL(href, window.location.origin)
  if (window.location.pathname !== target.pathname) {
    await navigateTo(target.pathname + target.hash)
    return
  }

  pendingHash.value = target.hash
  window.history.replaceState(null, '', target.pathname + target.hash)
}

const scrollToPendingSection = () => {
  const hash = pendingHash.value
  pendingHash.value = null
  if (!hash) return

  const target = document.querySelector(hash)
  if (!target) return

  const navbar = document.querySelector('.site-nav')
  const offset = navbar ? navbar.getBoundingClientRect().height + 16 : 0
  const top = target.getBoundingClientRect().top + window.scrollY - offset
  window.scrollTo({ top: Math.max(top, 0), behavior: 'smooth' })
}

const closeMenu = () => {
  isOpen.value = false
}

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') closeMenu()
}

watch(isOpen, (open) => {
  if (!import.meta.client) return
  document.body.style.overflow = open ? 'hidden' : ''
  if (open) pendingHash.value = null
})

onMounted(() => window.addEventListener('keydown', handleKeydown))
onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeydown)
  if (import.meta.client) document.body.style.overflow = ''
})
</script>

<template>
  <header class="site-nav" :class="{ 'site-nav-open': isOpen }">
    <div class="nav-left">
      <NuxtLink to="/#home" class="nav-mark" aria-label="Jein Ananda home" @click="closeMenu">JA.</NuxtLink>

    </div>
    <button type="button" class="nav-menu" :aria-expanded="isOpen" aria-controls="site-menu" @click="isOpen = !isOpen">
      {{ isOpen ? 'CLOSE' : 'MENU' }} <i>{{ isOpen ? '×' : '+' }}</i>
    </button>
  </header>

  <Transition name="menu-fade" @after-leave="scrollToPendingSection">
    <div v-if="isOpen" id="site-menu" class="editorial-menu" role="dialog" aria-modal="true" aria-label="Site navigation" @click.self="closeMenu">
      <div class="editorial-menu-inner">
        <div class="editorial-menu-heading">
          <p class="editorial-menu-kicker">NAVIGATION</p>
          <p class="editorial-menu-note">A small map of the work, experience, and details behind this portfolio.</p>
        </div>

        <div class="editorial-menu-content">
          <nav class="editorial-menu-links" aria-label="Main navigation">
            <a v-for="link in links" :key="link.label" :href="link.href" class="editorial-menu-link" @click.prevent="navigateToSection(link.href)">
              <span>{{ link.number }}</span>
              <strong>{{ link.label }}</strong>
              <i>↗</i>
            </a>
          </nav>

          <aside class="editorial-menu-aside">
            <div class="editorial-menu-status"><span></span> AVAILABLE FOR OPPORTUNITIES</div>
            <p>Balikpapan · Indonesia</p>
            <div class="editorial-menu-socials">
              <a href="https://github.com/jeeexcalibur" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
              <a href="https://www.linkedin.com/in/jein-ananda-36a05b2b0/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
              <a href="mailto:hello@jeinananda.com">Email ↗</a>
            </div>
          </aside>
        </div>

        <div class="editorial-menu-footer"><span>JEIN / PORTFOLIO</span><span>© {{ new Date().getFullYear() }}</span></div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.site-nav-open {
  z-index: 1002;
}

.editorial-menu {
  background: var(--ink, #151515);
  color: var(--paper, #e9e9e6);
  inset: 0;
  overflow-y: auto;
  position: fixed;
  z-index: 1001;
}

.editorial-menu-inner {
  display: flex;
  flex-direction: column;
  min-height: 100%;
  padding: 150px clamp(24px, 7vw, 110px) 32px;
}

.editorial-menu-heading {
  align-items: end;
  border-bottom: 1px solid rgba(233, 233, 230, 0.2);
  display: flex;
  gap: 40px;
  justify-content: space-between;
  padding-bottom: 24px;
}

.editorial-menu-kicker {
  color: rgba(233, 233, 230, 0.62);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: .28em;
  margin: 0;
  text-transform: uppercase;
}

.editorial-menu-note {
  color: rgba(233, 233, 230, 0.58);
  font-size: 13px;
  line-height: 1.5;
  margin: 0;
  max-width: 270px;
}

.editorial-menu-content {
  display: grid;
  flex: 1;
  gap: 8vw;
  grid-template-columns: minmax(0, 1fr) 230px;
  padding: 46px 0 70px;
}

.editorial-menu-links {
  align-self: start;
  display: grid;
}

.editorial-menu-link {
  align-items: center;
  border-bottom: 1px solid rgba(233, 233, 230, 0.2);
  display: grid;
  gap: 24px;
  grid-template-columns: 48px 1fr 40px;
  padding: 18px 0;
  text-decoration: none;
  transition: color .2s ease, padding-left .2s ease;
}

.editorial-menu-link:first-child {
  border-top: 1px solid rgba(233, 233, 230, 0.2);
}

.editorial-menu-link span {
  color: rgba(233, 233, 230, 0.45);
  font-size: 11px;
  letter-spacing: .16em;
}

.editorial-menu-link strong {
  font-size: clamp(38px, 6vw, 84px);
  font-weight: 500;
  letter-spacing: -.07em;
  line-height: .95;
}

.editorial-menu-link i {
  color: rgba(233, 233, 230, 0.5);
  font-size: 20px;
  font-style: normal;
  text-align: right;
  transition: color .2s ease, transform .2s ease;
}

.editorial-menu-link:hover {
  color: var(--paper, #e9e9e6);
  padding-left: 12px;
}

.editorial-menu-link:hover i {
  color: var(--paper, #e9e9e6);
  transform: translate(4px, -4px);
}

.editorial-menu-aside {
  align-self: start;
  border-left: 1px solid rgba(233, 233, 230, 0.2);
  color: rgba(233, 233, 230, 0.62);
  padding-left: 22px;
}

.editorial-menu-status {
  align-items: center;
  color: var(--paper, #e9e9e6);
  display: flex;
  font-size: 9px;
  font-weight: 700;
  gap: 8px;
  letter-spacing: .16em;
  line-height: 1.4;
}

.editorial-menu-status span {
  background: #7d9b72;
  border-radius: 50%;
  display: block;
  height: 7px;
  width: 7px;
}

.editorial-menu-aside > p {
  font-size: 14px;
  margin: 18px 0 56px;
}

.editorial-menu-socials {
  display: grid;
  gap: 14px;
}

.editorial-menu-socials a {
  border-bottom: 1px solid rgba(233, 233, 230, 0.2);
  color: rgba(233, 233, 230, 0.7);
  font-size: 12px;
  padding-bottom: 10px;
  text-decoration: none;
}

.editorial-menu-socials a:hover {
  color: var(--paper, #e9e9e6);
}

.editorial-menu-footer {
  border-top: 1px solid rgba(233, 233, 230, 0.2);
  color: rgba(233, 233, 230, 0.45);
  display: flex;
  font-size: 9px;
  justify-content: space-between;
  letter-spacing: .2em;
  padding-top: 18px;
  text-transform: uppercase;
}

.menu-fade-enter-active,
.menu-fade-leave-active {
  transition: opacity .25s ease;
}

.menu-fade-enter-from,
.menu-fade-leave-to {
  opacity: 0;
}

@media (max-width: 700px) {
  .editorial-menu-inner {
    padding: 118px 20px 24px;
  }

  .editorial-menu-heading {
    align-items: start;
    flex-direction: column;
    gap: 14px;
  }

  .editorial-menu-content {
    display: block;
    padding: 34px 0 58px;
  }

  .editorial-menu-link {
    gap: 12px;
    grid-template-columns: 30px 1fr 24px;
  }

  .editorial-menu-link strong {
    font-size: clamp(34px, 12vw, 58px);
  }

  .editorial-menu-aside {
    border-left: 0;
    border-top: 1px solid rgba(233, 233, 230, 0.2);
    margin-top: 48px;
    padding: 24px 0 0;
  }

  .editorial-menu-aside > p {
    margin-bottom: 28px;
  }
}
</style>
