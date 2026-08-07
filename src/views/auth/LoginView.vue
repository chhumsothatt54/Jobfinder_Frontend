<template>
    <!-- Replaced h-full with h-screen or min-h-screen for full viewport height -->
    <main class="min-h-screen h-screen">
        <div class="h-full grid lg:grid-cols-2">

            <!-- LEFT: brand / atmosphere panel -->
            <div class="hidden lg:flex relative overflow-hidden bg-teal-900 grain flex-col justify-between p-12">
                <div class="absolute inset-0 bg-gradient-to-br from-teal-900 via-teal-800 to-teal-950"></div>

                <!-- Angkor silhouette signature -->
                <svg class="absolute bottom-0 left-0 w-full text-teal-950/60" viewBox="0 0 1440 180" fill="none"
                    preserveAspectRatio="none" style="height:150px">
                    <path fill="currentColor"
                        d="M0,180 L0,120 L60,120 L60,95 L80,95 L80,70 L90,70 L90,50 L100,50 L100,30 L108,30 L108,15 L114,15 L114,4 L120,0 L126,4 L126,15 L132,15 L132,30 L140,30 L140,50 L150,50 L150,70 L160,70 L160,95 L180,95 L180,120 L260,120 L260,90 L280,90 L280,65 L292,65 L292,45 L302,45 L302,25 L310,25 L310,10 L316,10 L316,0 L322,0 L322,10 L328,10 L328,25 L336,25 L336,45 L346,45 L346,65 L358,65 L358,90 L378,90 L378,120 L460,120 L460,100 L480,100 L480,80 L495,80 L495,60 L505,60 L505,40 L513,40 L513,20 L519,20 L519,6 L525,0 L531,6 L531,20 L537,20 L537,40 L545,40 L545,60 L555,60 L555,80 L570,80 L570,100 L590,100 L590,120 L680,120 L680,95 L700,95 L700,70 L712,70 L712,50 L722,50 L722,30 L730,30 L730,15 L736,15 L736,4 L742,0 L748,4 L748,15 L754,15 L754,30 L762,30 L762,50 L772,50 L772,70 L784,70 L784,95 L804,95 L804,120 L900,120 L900,90 L920,90 L920,65 L932,65 L932,45 L942,45 L942,25 L950,25 L950,10 L956,10 L956,0 L962,0 L962,10 L968,10 L968,25 L976,25 L976,45 L986,45 L986,65 L998,65 L998,90 L1018,90 L1018,120 L1110,120 L1110,100 L1130,100 L1130,80 L1145,80 L1145,60 L1155,60 L1155,40 L1163,40 L1163,20 L1169,20 L1169,6 L1175,0 L1181,6 L1181,20 L1187,20 L1187,40 L1195,40 L1195,60 L1205,60 L1205,80 L1220,80 L1220,100 L1240,100 L1240,120 L1330,120 L1330,95 L1350,95 L1350,70 L1362,70 L1362,50 L1372,50 L1372,30 L1380,30 L1380,15 L1386,15 L1386,4 L1392,0 L1398,4 L1398,15 L1404,15 L1404,30 L1412,30 L1412,50 L1422,50 L1422,70 L1434,70 L1434,95 L1440,95 L1440,180 Z" />
                </svg>

                <router-link :to="{name: 'index'}" class="relative flex items-center gap-2.5 z-10">
                    <span
                        class="w-9 h-9 rounded-lg bg-teal-800 text-gold-400 flex items-center justify-center font-display font-bold text-lg border border-white/10">J</span>
                    <span class="font-display text-xl font-bold text-white">JobFinder<span
                            class="text-emerald-400">.kh</span></span>
                </router-link>

                <div class="relative z-10 max-w-md">
                    <p class="text-gold-400 text-xs font-semibold tracking-[0.2em] uppercase mb-4">Welcome back</p>
                    <h1 class="font-display text-4xl font-bold text-white leading-[1.15] mb-4">
                        ស្វែងរកការងារ.<br>Pick up right where you left off.
                    </h1>
                    <p class="text-teal-100/70 leading-relaxed">
                        Track your applications, get matched with new listings, and manage your profile — all in one
                        place.
                    </p>
                </div>

                <div class="relative z-10 flex items-center gap-8 text-teal-200/50 text-xs">
                    <span><span class="text-white font-semibold">4,200+</span> jobs</span>
                    <span><span class="text-white font-semibold">890+</span> companies</span>
                    <span><span class="text-white font-semibold">25k+</span> job seekers</span>
                </div>
            </div>

            <!-- RIGHT: form panel -->
            <div class="flex items-center justify-center px-6 py-12">
                <div class="w-full max-w-sm">

                    <!-- mobile logo -->
                    <a href="#" class="lg:hidden flex items-center gap-2.5 mb-10 justify-center">
                        <span
                            class="w-9 h-9 rounded-lg bg-teal-800 text-gold-400 flex items-center justify-center font-display font-bold text-lg">J</span>
                        <span class="font-display text-xl font-bold text-teal-900">JobFinder<span
                                class="text-emerald-500">.kh</span></span>
                    </a>

                    <p class="text-emerald-600 text-xs font-semibold tracking-[0.2em] uppercase mb-3">Log in</p>
                    <h2 class="font-display text-3xl font-bold text-teal-900 mb-2">Good to see you again</h2>
                    <p class="text-sm text-teal-800/60 mb-9">Don't have an account? <router-link to="/register"
                            class="text-emerald-600 font-semibold hover:text-emerald-500">Sign up free</router-link></p>

                    <form class="space-y-5" @submit.prevent>

                        <!-- Email -->
                        <div>
                            <label for="email" class="block text-xs font-semibold text-teal-900 mb-2">Email
                                address</label>
                            <div
                                class="input-field flex items-center gap-3 border border-teal-900/15 rounded-xl px-4 py-3 bg-white transition-all">
                                <i class="bi bi-envelope text-teal-900/40"></i>
                                <input id="email" type="email" required placeholder="you@example.com"
                                    class="w-full outline-none text-sm text-teal-900 placeholder:text-teal-900/35 bg-transparent">
                            </div>
                        </div>

                        <!-- Password -->
                        <div>
                            <div class="flex items-center justify-between mb-2">
                                <label for="password" class="block text-xs font-semibold text-teal-900">Password</label>
                                <a href="#" class="text-xs font-medium text-emerald-600 hover:text-emerald-500">Forgot
                                    password?</a>
                            </div>
                            <div
                                class="input-field flex items-center gap-3 border border-teal-900/15 rounded-xl px-4 py-3 bg-white transition-all">
                                <i class="bi bi-lock text-teal-900/40"></i>
                                <input id="password" type="password" required placeholder="••••••••"
                                    class="w-full outline-none text-sm text-teal-900 placeholder:text-teal-900/35 bg-transparent">
                                <button type="button"
                                    class="text-teal-900/40 hover:text-teal-900/70">
                                    <i id="toggleIcon" class="bi bi-eye"></i>
                                </button>
                            </div>
                        </div>

                        <!-- Remember me -->
                        <label class="flex items-center gap-2.5 cursor-pointer select-none">
                            <input type="checkbox"
                                class="w-4 h-4 rounded border-teal-900/25 text-emerald-500 focus:ring-emerald-400/40">
                            <span class="text-sm text-teal-800/70">Keep me signed in</span>
                        </label>

                        <!-- Submit -->
                        <button type="submit"
                            class="w-full bg-teal-800 hover:bg-teal-700 text-white font-semibold text-sm py-3.5 rounded-xl transition-colors shadow-sm">
                            Log in
                        </button>

                        <!-- Divider -->
                        <div class="flex items-center gap-3 py-1">
                            <div class="h-px bg-teal-900/10 flex-1"></div>
                            <span class="text-xs text-teal-900/40">or continue with</span>
                            <div class="h-px bg-teal-900/10 flex-1"></div>
                        </div>

                        <!-- Social -->
                        <div class="grid grid-cols-2 gap-3">
                            <button type="button"
                                class="flex items-center justify-center gap-2 border border-teal-900/15 rounded-xl py-2.5 text-sm font-medium text-teal-800 hover:bg-teal-900/5 transition-colors">
                                <i class="bi bi-google text-emerald-600"></i> Google
                            </button>
                            <button type="button"
                                class="flex items-center justify-center gap-2 border border-teal-900/15 rounded-xl py-2.5 text-sm font-medium text-teal-800 hover:bg-teal-900/5 transition-colors">
                                <i class="bi bi-facebook text-teal-700"></i> Facebook
                            </button>
                        </div>
                    </form>

                    <p class="text-xs text-teal-900/40 mt-10 text-center leading-relaxed">
                        By logging in you agree to JobFinder.kh's <a href="#"
                            class="underline hover:text-teal-900/70">Terms of Service</a> and <a href="#"
                            class="underline hover:text-teal-900/70">Privacy Policy</a>.
                    </p>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup>

</script>