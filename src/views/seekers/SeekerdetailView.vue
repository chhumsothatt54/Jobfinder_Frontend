<template>
  <div class="min-h-screen bg-slate-50">
    <!-- Header -->
     <HeaderView/>
    <div class="border-b border-slate-200 bg-white">
      <div class="mx-auto max-w-4xl px-6 py-8">
        <button
          type="button"
          @click="goBack"
          class="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 transition hover:text-teal-600"
        >
          <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Back to seekers
        </button>
      </div>
    </div>

    <div class="mx-auto max-w-4xl px-6 py-10">
      <!-- Loading state -->
      <div v-if="loading" class="flex justify-center py-24">
        <svg class="h-8 w-8 animate-spin text-teal-600" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
        </svg>
      </div>

      <!-- Not found state -->
      <div
        v-else-if="!seeker"
        class="flex flex-col items-center justify-center rounded-xl border border-dashed border-slate-300 bg-white py-16 text-center"
      >
        <svg class="h-10 w-10 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p class="mt-3 text-sm font-medium text-slate-700">Seeker not found</p>
        <p class="mt-1 text-sm text-slate-400">This profile may have been removed.</p>
      </div>

      <!-- Detail content -->
      <div v-else class="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <!-- Profile card -->
        <div class="lg:col-span-1">
          <div class="sticky top-8 rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm sm:p-8">
            <img
              :src="seeker.image"
              :alt="seeker.name"
              class="mx-auto h-28 w-28 rounded-full object-cover ring-4 ring-teal-50"
            />
            <h1 class="mt-4 text-xl font-bold text-slate-900">{{ seeker.name }}</h1>
            <p class="mt-1 text-sm font-medium text-teal-600">{{ seeker.title }}</p>

            <div class="mt-6 flex flex-col gap-3 text-left">
              <a
                :href="`mailto:${seeker.email}`"
                class="flex items-center gap-3 rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-slate-700 transition hover:border-teal-300 hover:bg-teal-50"
              >
                <svg class="h-4 w-4 flex-shrink-0 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <span class="truncate">{{ seeker.email }}</span>
              </a>

              <div class="flex items-center gap-3 rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-slate-700">
                <svg class="h-4 w-4 flex-shrink-0 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span class="truncate">{{ seeker.location }}</span>
              </div>
            </div>

            <a
              :href="`mailto:${seeker.email}`"
              class="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-teal-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-700 active:bg-teal-800"
            >
              Contact
            </a>
          </div>
        </div>

        <!-- Bio + skills -->
        <div class="space-y-6 lg:col-span-2">
          <div class="rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 class="text-lg font-bold text-slate-900">About</h2>
            <p class="mt-3 text-sm leading-relaxed text-slate-600">
              {{ seeker.bio }}
            </p>
          </div>

          <div class="rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 class="text-lg font-bold text-slate-900">Skills</h2>
            <div class="mt-4 flex flex-wrap gap-2">
              <span
                v-for="skill in seeker.skills"
                :key="skill"
                class="rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-xs font-medium text-teal-700"
              >
                {{ skill }}
              </span>
            </div>
          </div>

          <div class="rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 class="text-lg font-bold text-slate-900">Experience</h2>
            <div class="mt-4 space-y-5">
              <div
                v-for="job in seeker.experience"
                :key="job.company + job.role"
                class="flex gap-4"
              >
                <div class="flex flex-col items-center">
                  <span class="h-2.5 w-2.5 rounded-full bg-teal-500"></span>
                  <span class="mt-1 w-px flex-1 bg-slate-200"></span>
                </div>
                <div class="pb-1">
                  <p class="text-sm font-semibold text-slate-900">{{ job.role }}</p>
                  <p class="text-sm text-slate-500">{{ job.company }} · {{ job.period }}</p>
                </div>
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
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import HeaderView from '@/components/layout/HeaderView.vue'
import FooterView from '@/components/layout/FooterView.vue'

const route = useRoute()
const router = useRouter()

const loading = ref(true)
const seeker = ref(null)

// Replace with your API data source
const seekersData = [
  {
    id: 1,
    name: 'Sophie Carter',
    email: 'sophie.carter@example.com',
    location: 'Phnom Penh, Cambodia',
    image: 'https://i.pravatar.cc/150?img=1',
    title: 'Frontend Developer',
    bio: 'Frontend developer focused on building clean, accessible interfaces. Enjoys turning designs into responsive, well-structured components.',
    skills: ['Vue.js', 'JavaScript', 'Tailwind CSS', 'HTML', 'CSS'],
    experience: [
      { role: 'Frontend Developer', company: 'Bright Labs', period: '2023 – Present' },
      { role: 'Junior Developer', company: 'PixelWorks', period: '2021 – 2023' },
    ],
  },
  {
    id: 2,
    name: 'Daniel Kim',
    email: 'daniel.kim@example.com',
    location: 'Seoul, South Korea',
    image: 'https://i.pravatar.cc/150?img=12',
    title: 'Backend Developer',
    bio: 'Backend developer with a focus on scalable APIs and database design. Comfortable working across the stack when needed.',
    skills: ['Node.js', 'Express.js', 'MySQL', 'Docker'],
    experience: [
      { role: 'Backend Developer', company: 'Hana Robotics', period: '2022 – Present' },
    ],
  },
  {
    id: 3,
    name: 'Amara Okafor',
    email: 'amara.okafor@example.com',
    location: 'Lagos, Nigeria',
    image: 'https://i.pravatar.cc/150?img=32',
    title: 'Full-Stack Developer',
    bio: 'Full-stack developer who enjoys building products end to end, from database schema to polished UI.',
    skills: ['Laravel', 'PHP', 'Vue.js', 'MySQL'],
    experience: [
      { role: 'Full-Stack Developer', company: 'Lagos Fintech Group', period: '2021 – Present' },
    ],
  },
]

onMounted(async () => {
  loading.value = true
  try {
    // Replace with a real API call, e.g.:
    // const { data } = await fetch(`/api/seekers/${route.params.id}`).then(r => r.json())
    await new Promise((resolve) => setTimeout(resolve, 300))
    const id = Number(route.params.id)
    seeker.value = seekersData.find((s) => s.id === id) || null
  } finally {
    loading.value = false
  }
})

function goBack() {
  router.back()
}
</script>