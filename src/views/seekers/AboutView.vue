<template>
  <div class="min-h-screen bg-slate-50">
    <!-- Header -->
     <HeaderView/>
    <div class="border-b border-slate-200 bg-white">
      <div class="mx-auto max-w-6xl px-6 py-10">
        <p class="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">
          About
        </p>
        <h1 class="mt-2 text-3xl font-bold text-slate-900">
          About me
        </h1>
        <p class="mt-1 text-sm text-slate-500">
          A little about who I am and what I do.
        </p>
      </div>
    </div>

    <div class="mx-auto max-w-6xl px-6 py-10">
      <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <!-- Profile card -->
        <div class="lg:col-span-1">
          <div class="sticky top-8 rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm sm:p-8">
            <img
              src="https://api.dicebear.com/7.x/initials/svg?seed=Chhum%20Sothatt&backgroundColor=0f766e&textColor=ffffff"
              alt="Chhum Sothatt"
              class="mx-auto h-28 w-28 rounded-full object-cover ring-4 ring-teal-50"
            />
            <h2 class="mt-4 text-xl font-bold text-slate-900">Chhum Sothatt</h2>
            <p class="mt-1 text-sm font-medium text-teal-600">Web Developer</p>
            <p class="mt-3 text-sm text-slate-500">
              22 years old · Student at National Technical Training Institute (NTTI)
            </p>

            <div class="mt-6 flex flex-col gap-3 text-left">
              <a
                href="mailto:chhumsothatt54@gmail.com"
                class="flex items-center gap-3 rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-slate-700 transition hover:border-teal-300 hover:bg-teal-50"
              >
                <svg class="h-4 w-4 flex-shrink-0 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <span class="truncate">chhumsothatt54@gmail.com</span>
              </a>

              <a
                href="https://github.com/chhumsothatt54"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-3 rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-slate-700 transition hover:border-teal-300 hover:bg-teal-50"
              >
                <svg class="h-4 w-4 flex-shrink-0 text-teal-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.93.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.05 11.05 0 015.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.43-2.7 5.4-5.27 5.69.41.36.78 1.07.78 2.15 0 1.55-.01 2.81-.01 3.19 0 .31.21.67.8.56A10.51 10.51 0 0023.5 12c0-6.35-5.15-11.5-11.5-11.5z" />
                </svg>
                <span class="truncate">github.com/chhumsothatt54</span>
              </a>
            </div>
          </div>
        </div>

        <!-- Bio + skills -->
        <div class="space-y-6 lg:col-span-2">
          <div class="rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h3 class="text-lg font-bold text-slate-900">Who I am</h3>
            <p class="mt-3 text-sm leading-relaxed text-slate-600">
              My name is Chhum Sothatt. I am 22 years old and currently studying at the
              National Technical Training Institute (NTTI). I am passionate about web
              development and enjoy learning new technologies and building practical
              projects to improve my skills.
            </p>
            <p class="mt-3 text-sm leading-relaxed text-slate-600">
              I build every project on my own, from planning and design through to
              development and deployment — it's how I learn fastest and take full
              ownership of the result.
            </p>
          </div>

          <div class="rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h3 class="text-lg font-bold text-slate-900">Skills</h3>
            <p class="mt-1 text-sm text-slate-500">
              Technologies I work with.
            </p>

            <div class="mt-5 space-y-5">
              <div v-for="group in skillGroups" :key="group.title">
                <p class="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  {{ group.title }}
                </p>
                <div class="mt-2 flex flex-wrap gap-2">
                  <span
                    v-for="skill in group.items"
                    :key="skill"
                    class="rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-xs font-medium text-teal-700"
                  >
                    {{ skill }}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div class="rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h3 class="text-lg font-bold text-slate-900">What I'm looking for</h3>
            <p class="mt-3 text-sm leading-relaxed text-slate-600">
              I'm always open to new projects, internships, and collaboration
              opportunities where I can keep learning and put these skills to work.
              Feel free to reach out by email or check out my work on GitHub.
            </p>
            <div class="mt-5 flex flex-wrap gap-3">
              <a
                href="mailto:chhumsothatt54@gmail.com"
                class="inline-flex items-center gap-2 rounded-lg bg-teal-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-700 active:bg-teal-800"
              >
                Contact me
              </a>
              <a
                href="https://github.com/chhumsothatt54"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                View GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <FooterView/>
</template>

<script setup>
import FooterView from '@/components/layout/FooterView.vue';
import HeaderView from '@/components/layout/HeaderView.vue';
const skillGroups = [
  {
    title: 'Frontend',
    items: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'Vue.js'],
  },
  {
    title: 'Backend',
    items: ['PHP', 'Laravel', 'Node.js', 'Express.js'],
  },
  {
    title: 'Database & tools',
    items: ['MySQL', 'Git', 'GitHub'],
  },
]
</script>