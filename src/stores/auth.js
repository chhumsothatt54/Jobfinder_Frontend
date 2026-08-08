import { computed, ref } from "vue"
import { defineStore } from "pinia";
import api from '../api/http';

export const useAuthStore = defineStore('auth', () => {
    //state
    let user = ref({});
    let token = ref(localStorage.getItem('token'));
    let isLogin = computed(() => !!token.value);
    let getMe = ref({});

    //action
    async function login(email, password) {
        try {
            const res = await api.post('/auth/login', { email, password });
            console.log(res.data.data);
            
            user.value = res.data.data;
            token.value = res.data?.data?.[0]?.token;
            console.log(token.value);
            
            localStorage.setItem("token", token.value);

        } catch (err) {
            throw new Error(err.response.data.message || 'Unknown error')
        }
    }
    async function logout(){
        try{
            await api.delete('/auth/logout');
            user.value = {};
            token.value = null;
            console.log(token.value);
            localStorage.removeItem("token");

        }catch(err){
            throw new Error(err.response.data.message || 'Unknown error')
        }
    }

    // return
    return {
        login,
        logout
    }

})

