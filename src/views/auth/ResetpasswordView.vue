<template>
  <div class="flex min-h-screen items-center justify-center bg-slate-50 px-6 py-12">
    <div class="w-full max-w-md">
      <div class="rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <!-- Icon -->
        <div class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-teal-50 text-teal-600">
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
          </svg>
        </div>

        <h1 class="mt-4 text-center text-xl font-bold text-slate-900">
          Set new password
        </h1>
        <p class="mt-2 text-center text-sm text-slate-500">
          Your new password must be different from previously used passwords.
        </p>

        <!-- Success -->
        <div
          v-if="success"
          class="mt-6 flex items-start gap-3 rounded-lg border border-teal-200 bg-teal-50 p-4"
        >
          <svg class="mt-0.5 h-5 w-5 flex-shrink-0 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <p class="text-sm font-medium text-teal-800">Password updated</p>
            <p class="mt-0.5 text-sm text-teal-700">Redirecting you to sign in...</p>
          </div>
        </div>

        <form v-else class="mt-6 space-y-5" @submit.prevent="handleSubmit">
          <!-- New password -->
          <div>
            <label for="password" class="mb-1.5 block text-sm font-medium text-slate-700">
              New password
            </label>
            <div class="relative">
              <input
                id="password"
                v-model="form.password"
                :type="showPassword ? 'text' : 'password'"
                placeholder="Enter new password"
                required
                class="w-full rounded-lg border px-3.5 py-2.5 pr-10 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20"
                :class="fieldError('password') ? 'border-red-300 focus:border-red-500' : 'border-slate-300 focus:border-teal-500'"
                @input="error = ''"
              />
              <button
                type="button"
                @click="showPassword = !showPassword"
                class="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                :aria-label="showPassword ? 'Hide password' : 'Show password'"
              >
                <svg v-if="showPassword" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.774 3.162 10.066 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.243L9.88 9.88" />
                </svg>
                <svg v-else class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </button>
            </div>

            <!-- Strength meter -->
            <div v-if="form.password" class="mt-2">
              <div class="flex gap-1">
                <span
                  v-for="i in 4"
                  :key="i"
                  class="h-1 flex-1 rounded-full"
                  :class="i <= strength.score ? strength.barColor : 'bg-slate-200'"
                ></span>
              </div>
              <p class="mt-1 text-xs" :class="strength.textColor">{{ strength.label }}</p>
            </div>

            <ul class="mt-3 space-y-1">
              <li
                v-for="rule in passwordRules"
                :key="rule.label"
                class="flex items-center gap-1.5 text-xs"
                :class="rule.test(form.password) ? 'text-teal-600' : 'text-slate-400'"
              >
                <svg class="h-3.5 w-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path v-if="rule.test(form.password)" stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  <path v-else stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                {{ rule.label }}
              </li>
            </ul>
          </div>

          <!-- Confirm password -->
          <div>
            <label for="confirmPassword" class="mb-1.5 block text-sm font-medium text-slate-700">
              Confirm password
            </label>
            <div class="relative">
              <input
                id="confirmPassword"
                v-model="form.confirmPassword"
                :type="showConfirm ? 'text' : 'password'"
                placeholder="Re-enter new password"
                required
                class="w-full rounded-lg border px-3.5 py-2.5 pr-10 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20"
                :class="fieldError('confirmPassword') ? 'border-red-300 focus:border-red-500' : 'border-slate-300 focus:border-teal-500'"
                @input="error = ''"
              />
              <button
                type="button"
                @click="showConfirm = !showConfirm"
                class="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                :aria-label="showConfirm ? 'Hide password' : 'Show password'"
              >
                <svg v-if="showConfirm" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.774 3.162 10.066 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.243L9.88 9.88" />
                </svg>
                <svg v-else class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </button>
            </div>
            <p
              v-if="form.confirmPassword && form.password !== form.confirmPassword"
              class="mt-1.5 text-xs text-red-600"
            >
              Passwords do not match.
            </p>
          </div>

          <p v-if="error" class="text-sm text-red-600">{{ error }}</p>

          <button
            type="submit"
            :disabled="!canSubmit || submitting"
            class="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-teal-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-700 active:bg-teal-800 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <svg v-if="submitting" class="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
            </svg>
            {{ submitting ? 'Updating...' : 'Update password' }}
          </button>
        </form>

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
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const email = ref(route.query.email || '')

const form = ref({
  password: '',
  confirmPassword: '',
})

const showPassword = ref(false)
const showConfirm = ref(false)
const submitting = ref(false)
const success = ref(false)
const error = ref('')

const passwordRules = [
  { label: 'At least 8 characters', test: (v) => v.length >= 8 },
  { label: 'One uppercase letter', test: (v) => /[A-Z]/.test(v) },
  { label: 'One number', test: (v) => /[0-9]/.test(v) },
  { label: 'One special character', test: (v) => /[^A-Za-z0-9]/.test(v) },
]

const strength = computed(() => {
  const passed = passwordRules.filter((r) => r.test(form.value.password)).length
  const levels = [
    { label: 'Very weak', barColor: 'bg-red-400', textColor: 'text-red-500' },
    { label: 'Weak', barColor: 'bg-orange-400', textColor: 'text-orange-500' },
    { label: 'Good', barColor: 'bg-amber-400', textColor: 'text-amber-500' },
    { label: 'Strong', barColor: 'bg-teal-500', textColor: 'text-teal-600' },
  ]
  const score = Math.max(passed, form.value.password ? 1 : 0)
  return { score, ...levels[Math.min(score, 4) - 1] }
})

const canSubmit = computed(() => {
  return (
    passwordRules.every((r) => r.test(form.value.password)) &&
    form.value.password === form.value.confirmPassword &&
    form.value.confirmPassword.length > 0
  )
})

function fieldError(field) {
  if (field === 'confirmPassword') {
    return form.value.confirmPassword && form.value.password !== form.value.confirmPassword
  }
  return false
}

async function handleSubmit() {
  error.value = ''

  if (form.value.password !== form.value.confirmPassword) {
    error.value = 'Passwords do not match.'
    return
  }

  submitting.value = true
  try {
    // Replace with your API call, e.g.:
    // await fetch('/api/reset-password', {
    //   method: 'POST',
    //   body: JSON.stringify({ email: email.value, password: form.value.password }),
    // })
    await new Promise((resolve) => setTimeout(resolve, 800))

    success.value = true
    setTimeout(() => {
      router.push({ name: 'Login' })
    }, 1500)
  } catch (err) {
    error.value = 'Something went wrong. Please try again.'
  } finally {
    submitting.value = false
  }
}

function goBack() {
  router.push({ name: 'Login' })
}
</script>