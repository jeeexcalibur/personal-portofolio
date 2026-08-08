<script setup lang="ts">
import emailjs from '@emailjs/browser'

onMounted(() => useReveal())

const EMAILJS_SERVICE_ID = 'service_7vxaka8'
const EMAILJS_TEMPLATE_ID = 'template_g7pjjmg'
const EMAILJS_PUBLIC_KEY = 'qcpezEgoC_JEcApqd'
const form = reactive({
  name: '',
  email: '',
  message: ''
})
const isSending = ref(false)
const formStatus = ref<'idle' | 'success' | 'error'>('idle')
const formMessage = ref('')

const sendMessage = async () => {
  formStatus.value = 'idle'
  formMessage.value = ''

  if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
    formStatus.value = 'error'
    formMessage.value = 'Please complete all fields before sending.'
    return
  }

  isSending.value = true
  try {
    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        from_email: form.email,
        reply_to: form.email,
        message: form.message
      },
      { publicKey: EMAILJS_PUBLIC_KEY }
    )
    form.name = ''
    form.email = ''
    form.message = ''
    formStatus.value = 'success'
    formMessage.value = 'Message sent successfully. I will get back to you soon.'
  } catch {
    formStatus.value = 'error'
    formMessage.value = 'Something went wrong. Please try emailing me directly.'
  } finally {
    isSending.value = false
  }
}
</script>

<template>
  <section id="contact" class="contact reveal">
    <p class="contact-time reveal">GET IN TOUCH</p>
    <p class="contact-time contact-location">BALIKPAPAN, ID / {{ new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }) }} WITA</p>
    <br>
    <p class="contact-intro reveal">Have a project in mind? Tell me a little about it and I’ll get back to you.</p>

    <div class="contact-layout reveal">
      <form class="contact-form reveal" @submit.prevent="sendMessage">
        <label for="contact-name">NAME</label>
        <input id="contact-name" v-model="form.name" name="name" type="text" placeholder="Your name" autocomplete="name" />

        <label for="contact-email-input">EMAIL</label>
        <input id="contact-email-input" v-model="form.email" name="email" type="email" placeholder="your@email.com" autocomplete="email" />

        <label for="contact-message">MESSAGE</label>
        <textarea id="contact-message" v-model="form.message" name="message" placeholder="Tell me about your project..." rows="5"></textarea>

        <button type="submit" :disabled="isSending">
          {{ isSending ? 'SENDING...' : 'SEND MESSAGE' }} <span aria-hidden="true">↗</span>
        </button>
        <p v-if="formMessage" class="contact-form-status" :class="`is-${formStatus}`" role="status">{{ formMessage }}</p>
      </form>

      <aside class="contact-information reveal">
        <p class="contact-information-kicker">CONTACT INFORMATION</p>
        <p class="contact-information-copy">Feel free to reach out. I’m open to discussing new projects, creative ideas, and opportunities.</p>
        <a href="mailto:anandajein12@gmail.com" class="contact-detail"><span class="contact-detail-icon">@</span><span><small>EMAIL</small><strong>anandajein12@gmail.com</strong></span></a>
        <div class="contact-detail"><span class="contact-detail-icon">⌖</span><span><small>LOCATION</small><strong>Balikpapan, Indonesia</strong></span></div>
        <div class="contact-follow">
          <small>FOLLOW ME</small>
          <div class="contact-socials"><a href="https://github.com/jeeexcalibur" target="_blank" rel="noreferrer" aria-label="GitHub">GH</a><a href="https://www.linkedin.com/in/jein-ananda-36a05b2b0/" target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a><a href="https://www.instagram.com/anandajein/" target="_blank" rel="noreferrer" aria-label="Instagram">◎</a></div>
        </div>
      </aside>
    </div>

    <footer class="site-footer">© {{ new Date().getFullYear() }} JEIN ANANDA · ALL RIGHTS RESERVED.</footer>
  </section>
</template>

<style scoped>
.contact-location {
  margin-top: 14px;
}
.contact h2 {
  margin-bottom: 28px;
}
.contact-intro {
  color: #999;
  font-size: 14px;
  line-height: 1.5;
  margin: 0 auto;
  max-width: 430px;
}
.contact-layout {
  align-items: start;
  display: grid;
  gap: 72px;
  grid-template-columns: minmax(0, 500px) minmax(260px, 420px);
  margin: 75px auto 0;
  max-width: 1000px;
  text-align: left;
}
.contact-form {
  border: 1px solid #333;
  border-radius: 16px;
  padding: 30px 32px 32px;
}
.contact-form label,
.contact-information-kicker,
.contact-follow small,
.contact-detail small {
  color: #999;
  display: block;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: .24em;
}
.contact-form label + input,
.contact-form input + label,
.contact-form label + textarea {
  margin-top: 10px;
}
.contact-form input,
.contact-form textarea {
  background: transparent;
  border: 0;
  border-bottom: 1px solid #3b3b3b;
  color: var(--paper);
  display: block;
  font: inherit;
  font-size: 14px;
  outline: 0;
  padding: 12px 0;
  resize: vertical;
  width: 100%;
}
.contact-form input + label,
.contact-form textarea + button {
  margin-top: 27px;
}
.contact-form textarea {
  min-height: 105px;
}
.contact-form input::placeholder,
.contact-form textarea::placeholder {
  color: #666;
}
.contact-form input:focus,
.contact-form textarea:focus {
  border-bottom-color: #ddd;
}
.contact-form button {
  background: var(--paper);
  border: 0;
  border-radius: 999px;
  color: var(--ink);
  cursor: pointer;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: .2em;
  margin-top: 28px;
  padding: 15px 22px;
  text-transform: uppercase;
  transition: transform .2s, background .2s;
  width: 100%;
}
.contact-form button:hover:not(:disabled) {
  background: #d5d5d1;
  transform: translateY(-2px);
}
.contact-form button:disabled {
  cursor: wait;
  opacity: .65;
}
.contact-form-status {
  font-size: 11px;
  line-height: 1.45;
  margin-top: 16px;
}
.contact-form-status.is-success { color: #b9c8b7; }
.contact-form-status.is-error { color: #d1a7a0; }
.contact-information {
  padding-top: 6px;
}
.contact-information-copy {
  color: #999;
  font-size: 14px;
  line-height: 1.55;
  margin: 20px 0 28px;
  max-width: 390px;
}
.contact-detail {
  align-items: center;
  color: var(--paper);
  display: flex;
  gap: 14px;
  margin-top: 18px;
}
.contact-detail-icon {
  align-items: center;
  border: 1px solid #444;
  border-radius: 10px;
  color: #bbb;
  display: grid;
  font-size: 14px;
  height: 42px;
  place-items: center;
  width: 42px;
}
.contact-detail small,
.contact-detail strong {
  display: block;
}
.contact-detail strong {
  font-size: 14px;
  font-weight: 400;
  margin-top: 5px;
}
.contact-follow {
  border-top: 1px solid #333;
  margin-top: 35px;
  padding-top: 25px;
}
.contact-socials {
  display: flex;
  gap: 10px;
  margin-top: 16px;
}
.contact-socials a {
  align-items: center;
  border: 1px solid #444;
  border-radius: 50%;
  color: #bbb;
  display: grid;
  font-size: 10px;
  height: 38px;
  place-items: center;
  width: 38px;
}
.contact-socials a:hover {
  border-color: #aaa;
  color: var(--paper);
}
.contact-email {
  margin-top: 80px;
}
@media (max-width: 800px) {
  .contact-layout {
    gap: 45px;
    grid-template-columns: 1fr;
    margin-top: 55px;
  }
  .contact-form {
    padding: 25px 22px 26px;
  }
  .contact-information {
    padding: 0 4px;
  }
  .contact-email {
    margin-top: 55px;
  }
}
</style>