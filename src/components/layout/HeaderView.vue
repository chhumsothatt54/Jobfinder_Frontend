<template>
  <header class="sticky top-0 z-50 bg-cream/90 backdrop-blur border-b border-teal-900/10">
    <div class="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
      <router-link to="/" class="flex items-center gap-2.5">
        <span
          class="w-9 h-9 rounded-lg bg-teal-800 text-gold-400 flex items-center justify-center font-display font-bold text-lg">J</span>
        <span class="font-display text-xl font-bold text-teal-900">JobFinder<span
            class="text-emerald-500">.kh</span></span>
      </router-link>
      <nav class="hidden md:flex items-center gap-9 text-sm font-medium text-teal-800">
        <router-link to="/" class="hover:text-emerald-500 transition-colors">Home</router-link>
        <router-link to="/finjob" class="hover:text-emerald-500 transition-colors">Find Job</router-link>
        <router-link to="/seeker" class="hover:text-emerald-500 transition-colors">Seeker</router-link>
        <router-link to="/companies" class="hover:text-emerald-500 transition-colors">Companies</router-link>
        <router-link to="/contact" class="hover:text-emerald-500 transition-colors">Contact</router-link>
        <router-link to="/about" class="hover:text-emerald-500 transition-colors">About</router-link>
      </nav>
      <div class="flex items-center gap-3">
        <router-link to="/login" v-if="!check"
          class="hidden sm:inline-block text-sm font-medium text-teal-800 hover:text-emerald-500 px-4 py-2 transition-colors">Log
          in</router-link>
        <router-link to="/register" v-if="!check"
          class="text-sm font-semibold text-white bg-teal-800 hover:bg-teal-700 px-5 py-2.5 rounded-full transition-colors shadow-sm">
          Register
        </router-link>
        <a href="" v-if="check">
          <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" class="w-10 h-10 rounded-circle" alt="">
        </a>
        <a  v-if="check" @click="handleLogout"
          class="text-sm font-semibold text-white bg-teal-800 hover:bg-teal-700 px-5 py-2.5 rounded-full transition-colors shadow-sm">
          Logout
        </a>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';
import { useAuthStore } from '@/stores/auth';
import router from '@/router';
const auth = useAuthStore();

// ----check token
let check = ref(false);
let isLogin = localStorage.getItem("token");
if (isLogin) {
  check.value = true;
}

const handleLogout =  () => {
  auth.logout();
  console.log('Logout Successfully');
  check.value = false;
  window.location.href = "/";
  
}


</script>

<style scoped></style>