import { computed, ref } from "vue"
import { defineStore } from "pinia";

export const useAuthStore = defineStore('auth',()=>{
    let user = ref({});
    let token = ref(localStorage.getItem('token'));
    let isLogin = computed(()=> !!token.value);

    let getMe = ref({});

})