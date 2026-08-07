<template>
  <div class="min-h-screen bg-slate-50">
    <!-- Header -->
     <HeaderView/>
    <div class="border-b border-slate-200 bg-white">
      <div class="mx-auto max-w-6xl px-6 py-10">
        <p class="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">
          Get in touch
        </p>
        <h1 class="mt-2 text-3xl font-bold text-slate-900">
          Contact us
        </h1>
        <p class="mt-1 text-sm text-slate-500">
          Have a question or feedback? Send us a message and we'll get back to you.
        </p>
      </div>
    </div>

    <div class="mx-auto max-w-6xl px-6 py-10">
      <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <!-- Contact form -->
        <div class="lg:col-span-2">
          <div class="rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <!-- Success message -->
            <div
              v-if="submitted"
              class="mb-6 flex items-start gap-3 rounded-lg border border-teal-200 bg-teal-50 p-4"
            >
              <svg class="mt-0.5 h-5 w-5 flex-shrink-0 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <p class="text-sm font-medium text-teal-800">Message sent</p>
                <p class="mt-0.5 text-sm text-teal-700">Thanks for reaching out — we'll reply within 1–2 business days.</p>
              </div>
            </div>

            <form class="grid grid-cols-1 gap-5 sm:grid-cols-2" @submit.prevent="handleSubmit">
              <div>
                <label for="name" class="mb-1.5 block text-sm font-medium text-slate-700">
                  Full name
                </label>
                <input
                  id="name"
                  v-model="form.name"
                  type="text"
                  placeholder="Jane Doe"
                  required
                  class="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20"
                />
              </div>

              <div>
                <label for="email" class="mb-1.5 block text-sm font-medium text-slate-700">
                  Email
                </label>
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  placeholder="jane@example.com"
                  required
                  class="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20"
                />
              </div>

              <div class="sm:col-span-2">
                <label for="subject" class="mb-1.5 block text-sm font-medium text-slate-700">
                  Subject
                </label>
                <input
                  id="subject"
                  v-model="form.subject"
                  type="text"
                  placeholder="How can we help?"
                  required
                  class="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20"
                />
              </div>

              <div class="sm:col-span-2">
                <label for="message" class="mb-1.5 block text-sm font-medium text-slate-700">
                  Message
                </label>
                <textarea
                  id="message"
                  v-model="form.message"
                  rows="5"
                  placeholder="Tell us more..."
                  required
                  class="w-full resize-none rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20"
                ></textarea>
              </div>

              <div class="sm:col-span-2">
                <button
                  type="submit"
                  :disabled="sending"
                  class="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-teal-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-700 active:bg-teal-800 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                >
                  <svg v-if="sending" class="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                  </svg>
                  {{ sending ? 'Sending...' : 'Send message' }}
                </button>
              </div>
            </form>
          </div>
        </div>

        <!-- Contact info sidebar -->
        <div class="space-y-4">
          <div class="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div class="flex items-start gap-3">
              <div class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-teal-50 text-teal-600">
                <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <div>
                <p class="text-sm font-semibold text-slate-900">Email</p>
                <p class="mt-0.5 text-sm text-slate-500">support@example.com</p>
              </div>
            </div>
          </div>

          <div class="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div class="flex items-start gap-3">
              <div class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-teal-50 text-teal-600">
                <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a1.5 1.5 0 001.5-1.5v-3.379a1.5 1.5 0 00-1.06-1.436l-4.234-1.412a1.5 1.5 0 00-1.629.44l-1.005 1.204a11.25 11.25 0 01-5.685-5.685l1.204-1.005a1.5 1.5 0 00.44-1.629L7.564 3.06A1.5 1.5 0 006.129 2H2.75a1.5 1.5 0 00-1.5 1.5v3.25z" />
                </svg>
              </div>
              <div>
                <p class="text-sm font-semibold text-slate-900">Phone</p>
                <p class="mt-0.5 text-sm text-slate-500">+855 12 345 678</p>
              </div>
            </div>
          </div>

          <div class="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div class="flex items-start gap-3">
              <div class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-teal-50 text-teal-600">
                <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <div>
                <p class="text-sm font-semibold text-slate-900">Office</p>
                <p class="mt-0.5 text-sm text-slate-500">Phnom Penh, Cambodia</p>
              </div>
            </div>
          </div>

          <div class="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div class="flex items-start gap-3">
              <div class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-teal-50 text-teal-600">
                <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p class="text-sm font-semibold text-slate-900">Hours</p>
                <p class="mt-0.5 text-sm text-slate-500">Mon–Fri, 9:00–18:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <FooterView/>
</template>

<script setup>
import { ref } from 'vue'
import HeaderView from '@/components/layout/HeaderView.vue'
import FooterView from '@/components/layout/FooterView.vue'

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const sending = ref(false)
const submitted = ref(false)

async function handleSubmit() {
  sending.value = true
  submitted.value = false

  try {
    // Replace with your API call, e.g.:
    // await fetch('/api/contact', { method: 'POST', body: JSON.stringify(form.value) })
    await new Promise((resolve) => setTimeout(resolve, 800))

    submitted.value = true
    form.value = { name: '', email: '', subject: '', message: '' }
  } catch (error) {
    console.error('Failed to send message:', error)
  } finally {
    sending.value = false
  }
}
</script>