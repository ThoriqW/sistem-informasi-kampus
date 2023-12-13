<script setup>
import { ref } from 'vue';
import axios from "axios";
import router from "../router/index";

let user = ref({
    username: "",
    password: "",
})

const login = () => {
    const userData = {
        username: user.value.username,
        password: user.value.password
    }
    console.log(userData);
    axios.post("http://localhost:5000/login", 
    userData
    ).then((res) => {
        console.log(res.data);
        alert('Login successful');
        router.push({ name: 'dashboard' });
    }).catch((err) => {
        console.error(err.response);
        alert('Login failed');
    });
}

</script>

<template>
    <div class="flex justify-center items-center h-screen w-full">
        <div class="border border-2 border-secondary-color p-5">
            <div class="text-center">
                <p class="text-2xl">STMIK BINA MULIA PALU</p>
                <p class="text-sub-font">LOGIN</p>
            </div>
            <form @submit.prevent="login" class="mt-5 flex flex-col">
                <label class="text-sm text-sub-font mb-1">Username</label>
                <input v-model="user.username" name="username" id="username" type="text" class="w-full mb-2 border-2 border-secondary-color focus:ring-0 focus:border-primary-color transition-colors text-sm">
                <label class="text-sm text-sub-font mb-1">Password</label>
                <input v-model="user.password" name="password" id="password" type="password" class="w-full mb-5 border-2 border-secondary-color focus:ring-0 focus:border-primary-color transition-colors text-sm">
                <button type="submit" class="bg-gradient-to-r from-primary-color to-primary-gradient-color hover:from-transparent hover:to-transparent hover:ring-1 hover:ring-primary-color hover:ring-inset text-white-color inline-block py-2 px-3 cursor-pointer hover:text-primary-color transition-colors">
                    Login
                </button>
            </form>
        </div>
    </div>
</template>