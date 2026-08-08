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
            user.value = res.data.data;
            token.value = res.data?.data?.[0]?.token;
            localStorage.setItem("token", token.value); 
            console.log("Login Successfully");

        } catch (err) {
            console.log("Login Error", err);
            // throw new Error(err.response.data.message || 'Unknown error')
        }
    }
    async function logout(){
        try{
            await api.delete('/auth/logout');
            user.value = {};
            token.value = null;
            localStorage.removeItem("token");
            console.log("Logout Successfully");
            

        }catch(err){
            console.log("Logout Error", err);
            throw new Error(err.response.data.message || 'Unknown error')
        }
    }

    async function register(name,email,password) {
        try{
            const res = await api.post('/auth/register', { name, email, password});
            console.log("Register Successfully");
        } catch (err) {
            console.log("Register Error", err);
            throw new Error(err.response.data.message || 'Unknown error')
        }
    }

    // return
    return {
        login,
        logout,
        register
    }

})

