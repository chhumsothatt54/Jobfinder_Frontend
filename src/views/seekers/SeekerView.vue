<template>
  <div class="min-h-screen bg-slate-50">
    <!-- Header -->
     <HeaderView/>
    <div class="border-b border-slate-200 bg-white">
      <div class="mx-auto max-w-6xl px-6 py-10">
        <p class="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">
          Directory
        </p>
        <h1 class="mt-2 text-3xl font-bold text-slate-900">
          Seekers
        </h1>
        <p class="mt-1 text-sm text-slate-500">
          {{ filteredSeekers.length }} of {{ seekers.length }} people shown
        </p>

        <!-- Search bar -->
        <div class="mt-6 flex flex-col gap-3 sm:flex-row">
          <div class="relative flex-1">
            <svg
              class="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-4.35-4.35m0 0a7.5 7.5 0 10-10.6 0 7.5 7.5 0 0010.6 0z" />
            </svg>
            <input
              v-model="query"
              type="text"
              placeholder="Search by name or location..."
              class="w-full rounded-lg border border-slate-300 bg-white py-2.5 pl-10 pr-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20"
              @keyup.enter="handleSearch"
            />
          </div>
          <button
            type="button"
            @click="handleSearch"
            class="inline-flex items-center justify-center gap-2 rounded-lg bg-teal-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-700 active:bg-teal-800"
          >
            <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-4.35-4.35m0 0a7.5 7.5 0 10-10.6 0 7.5 7.5 0 0010.6 0z" />
            </svg>
            Search
          </button>
        </div>
      </div>
    </div>

    <!-- Cards grid -->
    <div class="mx-auto max-w-6xl px-6 py-8">
      <div
        v-if="filteredSeekers.length"
        class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        <div
          v-for="seeker in filteredSeekers"
          :key="seeker.id"
          class="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md"
        >
          <div class="flex items-center gap-4 p-5">
            <img
              :src="seeker.image"
              :alt="seeker.name"
              class="h-14 w-14 flex-shrink-0 rounded-full object-cover ring-2 ring-slate-100"
            />
            <div class="min-w-0">
              <h3 class="truncate text-base font-semibold text-slate-900">
                {{ seeker.name }}
              </h3>
              <p class="truncate text-sm text-slate-500">
                {{ seeker.email }}
              </p>
            </div>
          </div>

          <div class="flex items-center gap-1.5 border-t border-slate-100 px-5 py-3 text-sm text-slate-500">
            <svg class="h-4 w-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span class="truncate">{{ seeker.location }}</span>
          </div>

          <div class="mt-auto border-t border-slate-100 p-4">
            <button
              type="button"
              @click="viewSeeker(seeker)"
              class="w-full rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white transition group-hover:bg-teal-600 hover:bg-teal-600 active:bg-teal-700"
            >
              View
            </button>
          </div>
        </div>
      </div>

      <!-- Empty state -->
      <div
        v-else
        class="flex flex-col items-center justify-center rounded-xl border border-dashed border-slate-300 bg-white py-16 text-center"
      >
        <svg class="h-10 w-10 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-4.35-4.35m0 0a7.5 7.5 0 10-10.6 0 7.5 7.5 0 0010.6 0z" />
        </svg>
        <p class="mt-3 text-sm font-medium text-slate-700">No seekers found</p>
        <p class="mt-1 text-sm text-slate-400">Try a different name or location.</p>
      </div>
    </div>
  </div>

  <FooterView/>
</template>

<script setup>
import { ref, computed } from 'vue'
import HeaderView from '@/components/layout/HeaderView.vue'
import FooterView from '@/components/layout/FooterView.vue'

// Replace with data from your API
const seekers = ref([
  {
    id: 1,
    name: 'Sophie Carter',
    email: 'sophie.carter@example.com',
    location: 'Phnom Penh, Cambodia',
    image: 'https://i.pravatar.cc/150?img=1',
  },
  {
    id: 2,
    name: 'Daniel Kim',
    email: 'daniel.kim@example.com',
    location: 'Seoul, South Korea',
    image: 'https://i.pravatar.cc/150?img=12',
  },
  {
    id: 3,
    name: 'Amara Okafor',
    email: 'amara.okafor@example.com',
    location: 'Lagos, Nigeria',
    image: 'https://i.pravatar.cc/150?img=32',
  },
  {
    id: 4,
    name: 'Liam Nguyen',
    email: 'liam.nguyen@example.com',
    location: 'Ho Chi Minh City, Vietnam',
    image: 'https://i.pravatar.cc/150?img=51',
  },
  {
    id: 5,
    name: 'Elena Rossi',
    email: 'elena.rossi@example.com',
    location: 'Milan, Italy',
    image: 'https://i.pravatar.cc/150?img=45',
  },
  {
    id: 6,
    name: 'Marcus Lee',
    email: 'marcus.lee@example.com',
    location: 'Singapore',
    image: 'https://i.pravatar.cc/150?img=60',
  },
])

const query = ref('')
const activeQuery = ref('')

const filteredSeekers = computed(() => {
  const q = activeQuery.value.trim().toLowerCase()
  if (!q) return seekers.value
  return seekers.value.filter(
    (s) =>
      s.name.toLowerCase().includes(q) ||
      s.location.toLowerCase().includes(q)
  )
})

function handleSearch() {
  activeQuery.value = query.value
}

function viewSeeker(seeker) {
  // Hook up to your router, e.g. router.push(`/seekers/${seeker.id}`)
  console.log('View seeker:', seeker)
}
</script>