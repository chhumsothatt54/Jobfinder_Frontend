<script setup>
import HeaderView from '../components/layout/HeaderView.vue';
import FooterViwe from '../components/layout/FooterView.vue';
import FooterView from '../components/layout/FooterView.vue';

</script>

<template>
  <main class="bg-cream text-teal-950">
     <!-- NAV -->
    <HeaderView/>
 
  <!-- HERO -->
  <section class="relative overflow-hidden bg-teal-900 grain">
    <div class="absolute inset-0 bg-gradient-to-br from-teal-900 via-teal-800 to-teal-950"></div>
 
    <!-- Angkor silhouette signature -->
    <svg class="absolute bottom-0 left-0 w-full text-teal-950/60" viewBox="0 0 1440 180" fill="none" preserveAspectRatio="none" style="height:170px">
      <path fill="currentColor" d="M0,180 L0,120 L60,120 L60,95 L80,95 L80,70 L90,70 L90,50 L100,50 L100,30 L108,30 L108,15 L114,15 L114,4 L120,0 L126,4 L126,15 L132,15 L132,30 L140,30 L140,50 L150,50 L150,70 L160,70 L160,95 L180,95 L180,120 L260,120 L260,90 L280,90 L280,65 L292,65 L292,45 L302,45 L302,25 L310,25 L310,10 L316,10 L316,0 L322,0 L322,10 L328,10 L328,25 L336,25 L336,45 L346,45 L346,65 L358,65 L358,90 L378,90 L378,120 L460,120 L460,100 L480,100 L480,80 L495,80 L495,60 L505,60 L505,40 L513,40 L513,20 L519,20 L519,6 L525,0 L531,6 L531,20 L537,20 L537,40 L545,40 L545,60 L555,60 L555,80 L570,80 L570,100 L590,100 L590,120 L680,120 L680,95 L700,95 L700,70 L712,70 L712,50 L722,50 L722,30 L730,30 L730,15 L736,15 L736,4 L742,0 L748,4 L748,15 L754,15 L754,30 L762,30 L762,50 L772,50 L772,70 L784,70 L784,95 L804,95 L804,120 L900,120 L900,90 L920,90 L920,65 L932,65 L932,45 L942,45 L942,25 L950,25 L950,10 L956,10 L956,0 L962,0 L962,10 L968,10 L968,25 L976,25 L976,45 L986,45 L986,65 L998,65 L998,90 L1018,90 L1018,120 L1110,120 L1110,100 L1130,100 L1130,80 L1145,80 L1145,60 L1155,60 L1155,40 L1163,40 L1163,20 L1169,20 L1169,6 L1175,0 L1181,6 L1181,20 L1187,20 L1187,40 L1195,40 L1195,60 L1205,60 L1205,80 L1220,80 L1220,100 L1240,100 L1240,120 L1330,120 L1330,95 L1350,95 L1350,70 L1362,70 L1362,50 L1372,50 L1372,30 L1380,30 L1380,15 L1386,15 L1386,4 L1392,0 L1398,4 L1398,15 L1404,15 L1404,30 L1412,30 L1412,50 L1422,50 L1422,70 L1434,70 L1434,95 L1440,95 L1440,180 Z"/>
    </svg>
 
    <div class="relative max-w-7xl mx-auto px-6 lg:px-10 pt-20 pb-48 lg:pt-28 lg:pb-56">
      <div class="max-w-3xl">
        <p class="inline-flex items-center gap-2 text-gold-400 text-xs font-semibold tracking-[0.2em] uppercase mb-6 border border-gold-500/30 rounded-full px-4 py-1.5">
          <i class="bi bi-geo-alt"></i> Built for Cambodia's workforce
        </p>
        <h1 class="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-3">
          ស្វែងរកការងារ.<br>
          <span class="text-emerald-400">Find work that fits.</span>
        </h1>
        <p class="text-teal-100/80 text-lg mb-10 max-w-xl leading-relaxed">
          From Phnom Penh to Siem Reap — connect with real companies hiring right now across tech, tourism, finance, and more.
        </p>
 
        <!-- Search bar -->
        <div class="bg-white rounded-2xl shadow-2xl shadow-black/30 p-2 flex flex-col sm:flex-row gap-2 max-w-2xl">
          <div class="flex items-center gap-2.5 flex-1 px-4 py-3">
            <i class="bi bi-search text-teal-700/50"></i>
            <input type="text" placeholder="Job title or keyword" class="w-full outline-none text-sm text-teal-900 placeholder:text-teal-900/40">
          </div>
          <div class="hidden sm:block w-px bg-teal-900/10 my-2"></div>
          <div class="flex items-center gap-2.5 flex-1 px-4 py-3">
            <i class="bi bi-geo-alt text-teal-700/50"></i>
            <input type="text" placeholder="Phnom Penh, Siem Reap..." class="w-full outline-none text-sm text-teal-900 placeholder:text-teal-900/40">
          </div>
          <button class="bg-emerald-500 hover:bg-emerald-400 text-teal-950 font-semibold text-sm px-7 py-3 rounded-xl transition-colors whitespace-nowrap">
            Search Jobs
          </button>
        </div>
 
        <p class="text-teal-200/60 text-xs mt-4">Popular: <a href="#" class="underline decoration-dotted hover:text-emerald-400">Developer</a>, <a href="#" class="underline decoration-dotted hover:text-emerald-400">Sales Executive</a>, <a href="#" class="underline decoration-dotted hover:text-emerald-400">Hotel Staff</a>, <a href="#" class="underline decoration-dotted hover:text-emerald-400">Accountant</a></p>
      </div>
    </div>
  </section>
 
  <div class="temple-divider"></div>
 
  <!-- STATS -->
  <section class="bg-cream border-b border-teal-900/10">
    <div class="max-w-7xl mx-auto px-6 lg:px-10 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
      <div>
        <p class="font-display text-3xl font-bold text-teal-900">4,200<span class="text-emerald-500">+</span></p>
        <p class="text-sm text-teal-800/60 mt-1">Active job listings</p>
      </div>
      <div>
        <p class="font-display text-3xl font-bold text-teal-900">890<span class="text-emerald-500">+</span></p>
        <p class="text-sm text-teal-800/60 mt-1">Hiring companies</p>
      </div>
      <div>
        <p class="font-display text-3xl font-bold text-teal-900">25<span class="text-emerald-500">k+</span></p>
        <p class="text-sm text-teal-800/60 mt-1">Registered job seekers</p>
      </div>
      <div>
        <p class="font-display text-3xl font-bold text-teal-900">18</p>
        <p class="text-sm text-teal-800/60 mt-1">Provinces covered</p>
      </div>
    </div>
  </section>
 
  <!-- CATEGORIES -->
  <section id="categories" class="max-w-7xl mx-auto px-6 lg:px-10 py-24">
    <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
      <div>
        <p class="text-emerald-600 text-xs font-semibold tracking-[0.2em] uppercase mb-3">Browse by field</p>
        <h2 class="font-display text-3xl lg:text-4xl font-bold text-teal-900">Popular categories</h2>
      </div>
      <a href="#" class="text-sm font-semibold text-teal-800 hover:text-emerald-600 flex items-center gap-1.5">
        View all categories <i class="bi bi-arrow-right"></i>
      </a>
    </div>
 
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      <a href="#" class="group p-6 rounded-2xl border border-teal-900/10 hover:border-emerald-500/40 hover:shadow-lg hover:shadow-teal-900/5 transition-all bg-white flex items-start gap-4">
        <span class="w-12 h-12 shrink-0 rounded-xl bg-teal-800 text-white flex items-center justify-center text-xl"><i class="bi bi-laptop"></i></span>
        <div>
          <h3 class="font-display font-semibold text-teal-900 mb-1">Information Technology</h3>
          <p class="text-sm text-teal-800/60">612 open positions</p>
        </div>
      </a>
      <a href="#" class="group p-6 rounded-2xl border border-teal-900/10 hover:border-emerald-500/40 hover:shadow-lg hover:shadow-teal-900/5 transition-all bg-white flex items-start gap-4">
        <span class="w-12 h-12 shrink-0 rounded-xl bg-gold-500 text-white flex items-center justify-center text-xl"><i class="bi bi-building"></i></span>
        <div>
          <h3 class="font-display font-semibold text-teal-900 mb-1">Hospitality &amp; Tourism</h3>
          <p class="text-sm text-teal-800/60">784 open positions</p>
        </div>
      </a>
      <a href="#" class="group p-6 rounded-2xl border border-teal-900/10 hover:border-emerald-500/40 hover:shadow-lg hover:shadow-teal-900/5 transition-all bg-white flex items-start gap-4">
        <span class="w-12 h-12 shrink-0 rounded-xl bg-teal-700 text-white flex items-center justify-center text-xl"><i class="bi bi-graph-up-arrow"></i></span>
        <div>
          <h3 class="font-display font-semibold text-teal-900 mb-1">Finance &amp; Banking</h3>
          <p class="text-sm text-teal-800/60">356 open positions</p>
        </div>
      </a>
      <a href="#" class="group p-6 rounded-2xl border border-teal-900/10 hover:border-emerald-500/40 hover:shadow-lg hover:shadow-teal-900/5 transition-all bg-white flex items-start gap-4">
        <span class="w-12 h-12 shrink-0 rounded-xl bg-emerald-500 text-white flex items-center justify-center text-xl"><i class="bi bi-mortarboard"></i></span>
        <div>
          <h3 class="font-display font-semibold text-teal-900 mb-1">Education</h3>
          <p class="text-sm text-teal-800/60">241 open positions</p>
        </div>
      </a>
      <a href="#" class="group p-6 rounded-2xl border border-teal-900/10 hover:border-emerald-500/40 hover:shadow-lg hover:shadow-teal-900/5 transition-all bg-white flex items-start gap-4">
        <span class="w-12 h-12 shrink-0 rounded-xl bg-teal-800 text-white flex items-center justify-center text-xl"><i class="bi bi-cone-striped"></i></span>
        <div>
          <h3 class="font-display font-semibold text-teal-900 mb-1">Construction</h3>
          <p class="text-sm text-teal-800/60">498 open positions</p>
        </div>
      </a>
      <a href="#" class="group p-6 rounded-2xl border border-teal-900/10 hover:border-emerald-500/40 hover:shadow-lg hover:shadow-teal-900/5 transition-all bg-white flex items-start gap-4">
        <span class="w-12 h-12 shrink-0 rounded-xl bg-gold-500 text-white flex items-center justify-center text-xl"><i class="bi bi-cart3"></i></span>
        <div>
          <h3 class="font-display font-semibold text-teal-900 mb-1">Sales &amp; Retail</h3>
          <p class="text-sm text-teal-800/60">527 open positions</p>
        </div>
      </a>
    </div>
  </section>
 
  <!-- FEATURED JOBS -->
  <section id="jobs" class="bg-teal-950 py-24">
    <div class="max-w-7xl mx-auto px-6 lg:px-10">
      <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
        <div>
          <p class="text-gold-400 text-xs font-semibold tracking-[0.2em] uppercase mb-3">Fresh this week</p>
          <h2 class="font-display text-3xl lg:text-4xl font-bold text-white">Featured jobs</h2>
        </div>
        <a href="#" class="text-sm font-semibold text-emerald-400 hover:text-emerald-300 flex items-center gap-1.5">
          Browse all jobs <i class="bi bi-arrow-right"></i>
        </a>
      </div>
 
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div class="bg-teal-900/60 border border-white/10 rounded-2xl p-6 hover:border-emerald-500/50 transition-colors">
          <div class="flex items-center justify-between mb-5">
            <span class="w-11 h-11 rounded-lg bg-white/10 flex items-center justify-center font-display font-bold text-white">AB</span>
            <span class="text-xs font-medium text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full">Full-time</span>
          </div>
          <h3 class="font-display font-semibold text-white text-lg mb-1">Frontend Developer</h3>
          <p class="text-sm text-teal-200/60 mb-5">ABA Bank &middot; Phnom Penh</p>
          <div class="flex items-center justify-between text-sm">
            <span class="text-gold-400 font-semibold">$700 – $1,100</span>
            <a href="#" class="text-white/70 hover:text-emerald-400">Apply <i class="bi bi-arrow-right ml-0.5"></i></a>
          </div>
        </div>
 
        <div class="bg-teal-900/60 border border-white/10 rounded-2xl p-6 hover:border-emerald-500/50 transition-colors">
          <div class="flex items-center justify-between mb-5">
            <span class="w-11 h-11 rounded-lg bg-white/10 flex items-center justify-center font-display font-bold text-white">SR</span>
            <span class="text-xs font-medium text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full">Full-time</span>
          </div>
          <h3 class="font-display font-semibold text-white text-lg mb-1">Front Office Manager</h3>
          <p class="text-sm text-teal-200/60 mb-5">Angkor Grand Hotel &middot; Siem Reap</p>
          <div class="flex items-center justify-between text-sm">
            <span class="text-gold-400 font-semibold">$450 – $650</span>
            <a href="#" class="text-white/70 hover:text-emerald-400">Apply <i class="bi bi-arrow-right ml-0.5"></i></a>
          </div>
        </div>
 
        <div class="bg-teal-900/60 border border-white/10 rounded-2xl p-6 hover:border-emerald-500/50 transition-colors">
          <div class="flex items-center justify-between mb-5">
            <span class="w-11 h-11 rounded-lg bg-white/10 flex items-center justify-center font-display font-bold text-white">PP</span>
            <span class="text-xs font-medium text-gold-400 bg-gold-500/10 px-3 py-1 rounded-full">Part-time</span>
          </div>
          <h3 class="font-display font-semibold text-white text-lg mb-1">Accounts Executive</h3>
          <p class="text-sm text-teal-200/60 mb-5">Prince Holding Group &middot; Phnom Penh</p>
          <div class="flex items-center justify-between text-sm">
            <span class="text-gold-400 font-semibold">$500 – $750</span>
            <a href="#" class="text-white/70 hover:text-emerald-400">Apply <i class="bi bi-arrow-right ml-0.5"></i></a>
          </div>
        </div>
      </div>
    </div>
  </section>
 
  <!-- HOW IT WORKS -->
  <section id="how" class="max-w-7xl mx-auto px-6 lg:px-10 py-24">
    <div class="text-center max-w-2xl mx-auto mb-16">
      <p class="text-emerald-600 text-xs font-semibold tracking-[0.2em] uppercase mb-3">Getting started</p>
      <h2 class="font-display text-3xl lg:text-4xl font-bold text-teal-900">Three steps to your next role</h2>
    </div>
 
    <div class="grid md:grid-cols-3 gap-10 relative">
      <div class="text-center">
        <div class="w-16 h-16 mx-auto rounded-2xl bg-teal-800 text-white flex items-center justify-center text-2xl mb-5"><i class="bi bi-person-plus"></i></div>
        <h3 class="font-display font-semibold text-lg text-teal-900 mb-2">Create your profile</h3>
        <p class="text-sm text-teal-800/60 leading-relaxed">Sign up as a job seeker in minutes and build a profile that shows employers what you can do.</p>
      </div>
      <div class="text-center">
        <div class="w-16 h-16 mx-auto rounded-2xl bg-emerald-500 text-white flex items-center justify-center text-2xl mb-5"><i class="bi bi-search"></i></div>
        <h3 class="font-display font-semibold text-lg text-teal-900 mb-2">Search &amp; match</h3>
        <p class="text-sm text-teal-800/60 leading-relaxed">Filter by industry, location, and salary to find roles that actually fit what you're looking for.</p>
      </div>
      <div class="text-center">
        <div class="w-16 h-16 mx-auto rounded-2xl bg-gold-500 text-white flex items-center justify-center text-2xl mb-5"><i class="bi bi-send-check"></i></div>
        <h3 class="font-display font-semibold text-lg text-teal-900 mb-2">Apply directly</h3>
        <p class="text-sm text-teal-800/60 leading-relaxed">Send your application straight to the company and track every response in one dashboard.</p>
      </div>
    </div>
  </section>
 
  <!-- FOR COMPANIES CTA -->
  <section id="companies" class="max-w-7xl mx-auto px-6 lg:px-10 pb-24">
    <div class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-teal-800 to-teal-900 px-8 py-14 lg:px-16 lg:py-16 grid lg:grid-cols-2 gap-10 items-center">
      <svg class="absolute -right-10 -bottom-16 w-72 h-72 text-white/5" viewBox="0 0 200 200" fill="currentColor"><circle cx="100" cy="100" r="100"/></svg>
      <div class="relative">
        <p class="text-gold-400 text-xs font-semibold tracking-[0.2em] uppercase mb-3">For employers</p>
        <h2 class="font-display text-3xl lg:text-4xl font-bold text-white mb-4">Hiring in Cambodia? <br class="hidden sm:block">Post your first job free.</h2>
        <p class="text-teal-100/70 mb-8 max-w-md leading-relaxed">Reach thousands of qualified candidates across Phnom Penh and every major province — no agency fees.</p>
        <a href="#" class="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-teal-950 font-semibold text-sm px-7 py-3.5 rounded-full transition-colors">
          Post a Job <i class="bi bi-arrow-right"></i>
        </a>
      </div>
      <div class="relative grid grid-cols-2 gap-4">
        <div class="bg-white/10 rounded-2xl p-5 backdrop-blur">
          <i class="bi bi-lightning-charge text-gold-400 text-xl mb-3 block"></i>
          <p class="text-white font-semibold text-sm mb-1">Fast listing</p>
          <p class="text-teal-100/60 text-xs">Live in under 5 minutes</p>
        </div>
        <div class="bg-white/10 rounded-2xl p-5 backdrop-blur mt-6">
          <i class="bi bi-people text-emerald-400 text-xl mb-3 block"></i>
          <p class="text-white font-semibold text-sm mb-1">25k+ candidates</p>
          <p class="text-teal-100/60 text-xs">Active talent pool</p>
        </div>
      </div>
    </div>
  </section>
 
  <!-- FOOTER -->
  <FooterView/>
  </main>
</template>
