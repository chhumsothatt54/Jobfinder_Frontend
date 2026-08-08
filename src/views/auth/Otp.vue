<template>
    <div class="flex min-h-screen items-center justify-center bg-slate-50 px-6 py-12">
    <div class="w-full max-w-md">
      <!-- Card -->
      <div class="rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <!-- Icon -->
        <div class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-teal-50 text-teal-600">
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
          </svg>
        </div>

        <h1 class="mt-4 text-center text-xl font-bold text-slate-900">
          Verify your code
        </h1>
        <p class="mt-2 text-center text-sm text-slate-500">
          We've sent a 6-digit code to
          <span class="font-medium text-slate-700">{{ maskedEmail }}</span>
        </p>

        <!-- Success -->
        <div
          v-if="verified"
          class="mt-6 flex items-start gap-3 rounded-lg border border-teal-200 bg-teal-50 p-4"
        >
          <svg class="mt-0.5 h-5 w-5 flex-shrink-0 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <p class="text-sm font-medium text-teal-800">Code verified</p>
            <p class="mt-0.5 text-sm text-teal-700">Redirecting you to reset your password...</p>
          </div>
        </div>

        <template v-else>
          <!-- OTP inputs -->
          <form class="mt-6" @submit.prevent="handleVerify">
            <div class="flex justify-between gap-2 sm:gap-3">
              <input
                v-for="(digit, index) in otp"
                :key="index"
                :ref="(el) => (inputs[index] = el)"
                v-model="otp[index]"
                type="text"
                inputmode="numeric"
                maxlength="1"
                autocomplete="one-time-code"
                class="h-12 w-12 flex-1 rounded-lg border text-center text-lg font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500/20 sm:h-14 sm:w-14"
                :class="error ? 'border-red-300 focus:border-red-500' : 'border-slate-300 focus:border-teal-500'"
                @input="handleInput(index, $event)"
                @keydown="handleKeydown(index, $event)"
                @paste="handlePaste"
              />
            </div>

            <!-- Error message -->
            <p v-if="error" class="mt-3 text-center text-sm text-red-600">
              {{ error }}
            </p>

            <button
              type="submit"
              :disabled="!isComplete || verifying"
              class="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-teal-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-700 active:bg-teal-800 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <svg v-if="verifying" class="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
              </svg>
              {{ verifying ? 'Verifying...' : 'Verify code' }}
            </button>
          </form>

          <!-- Resend -->
          <p class="mt-5 text-center text-sm text-slate-500">
            <span v-if="cooldown > 0">
              Resend code in {{ cooldown }}s
            </span>
            <template v-else>
              Didn't get a code?
              <button
                type="button"
                @click="handleResend"
                class="font-medium text-teal-600 hover:text-teal-700"
              >
                Resend
              </button>
            </template>
          </p>
        </template>

        <button
          type="button"
          @click="goBack"
          class="mt-6 inline-flex w-full items-center justify-center gap-1.5 text-sm font-medium text-slate-500 transition hover:text-teal-600"
        >
          <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Back to sign in
        </button>
      </div>
    </div>
  </div>

</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import FooterView from '@/components/layout/FooterView.vue'

const route = useRoute()
const router = useRouter()

const email = ref(route.query.email || 'your email')
const otp = ref(['', '', '', '', '', ''])
const inputs = ref([])

const verifying = ref(false)
const verified = ref(false)
const error = ref('')

const cooldown = ref(30)
let timer = null

const maskedEmail = computed(() => {
  const parts = String(email.value).split('@')
  if (parts.length !== 2) return email.value
  const [name, domain] = parts
  if (name.length <= 2) return `${name[0]}***@${domain}`
  return `${name.slice(0, 2)}${'*'.repeat(Math.max(name.length - 2, 3))}@${domain}`
})

const isComplete = computed(() => otp.value.every((d) => d !== ''))

function handleInput(index, event) {
  const value = event.target.value.replace(/[^0-9]/g, '')
  otp.value[index] = value.slice(-1)
  error.value = ''

  if (value && index < otp.value.length - 1) {
    inputs.value[index + 1]?.focus()
  }
}

function handleKeydown(index, event) {
  if (event.key === 'Backspace' && !otp.value[index] && index > 0) {
    inputs.value[index - 1]?.focus()
  }
}

function handlePaste(event) {
  event.preventDefault()
  const pasted = event.clipboardData.getData('text').replace(/[^0-9]/g, '').slice(0, otp.value.length)
  pasted.split('').forEach((char, i) => {
    otp.value[i] = char
  })
  const nextIndex = Math.min(pasted.length, otp.value.length - 1)
  inputs.value[nextIndex]?.focus()
}

async function handleVerify() {
  error.value = ''
  verifying.value = true

  try {
    const code = otp.value.join('')
    // Replace with your API call, e.g.:
    // const res = await fetch('/api/verify-otp', {
    //   method: 'POST',
    //   body: JSON.stringify({ email: email.value, code }),
    // })
    await new Promise((resolve) => setTimeout(resolve, 800))

    if (code.length === 6) {
      verified.value = true
      setTimeout(() => {
        router.push({ name: 'ResetPassword', query: { email: email.value } })
      }, 1200)
    } else {
      error.value = 'Invalid code. Please try again.'
    }
  } catch (err) {
    error.value = 'Something went wrong. Please try again.'
  } finally {
    verifying.value = false
  }
}

function handleResend() {
  otp.value = ['', '', '', '', '', '']
  error.value = ''
  cooldown.value = 30
  inputs.value[0]?.focus()
  // Replace with your API call, e.g.:
  // fetch('/api/resend-otp', { method: 'POST', body: JSON.stringify({ email: email.value }) })
  startCooldown()
}

function startCooldown() {
  clearInterval(timer)
  timer = setInterval(() => {
    if (cooldown.value > 0) {
      cooldown.value -= 1
    } else {
      clearInterval(timer)
    }
  }, 1000)
}

function goBack() {
  router.push({ name: 'Login' })
}

onMounted(() => {
  inputs.value[0]?.focus()
  startCooldown()
})

onBeforeUnmount(() => {
  clearInterval(timer)
})
</script>