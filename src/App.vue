<script setup>
import { ref } from 'vue'
import popules_logo from './assets/popules_logo.svg'
const categories = ["All", "Vacancies", "Workplace", "Food", "Design", "Cars", "Finance", "Lifestyle", "Travel", "Makeup", "Fitness"]
const sidebar = [{menu: "Explore", icon: "pi-home"}, {menu: "Following", icon: "pi-users"},{menu: "Explore", icon: "pi-home"},{menu: "Explore", icon: "pi-home"},{menu: "Explore", icon: "pi-home"},

]
const dropdown = ref("more")
</script>

<template>
  <!-- Parent Div -->
  <div class="bg-white h-screen w-screen flex flex-col">
    <!-- Header -->
    <div class="w-full h-[80px] flex items-center justify-between px-4 border-b-2 border-gray-200">
      <!-- Header Logo -->
      <div class="h-full w-fit flex items-center justify-center">      
        <img src="./assets/popules_logo.svg" alt="/" class="h-8 w-full md:h-11 pl-5"/>
      </div>

      <!-- Header Icons (Mobile) -->
      <div class="flex flex-row h-fit items-center justify-evenly gap-4 gap-x-8 p-4 lg:hidden">
        <i class="pi pi-search" style="font-size: 1.3rem; color: gray;"></i>
        <i class="pi pi-bars" style="font-size: 1.3rem; color: gray;"></i>
      </div>

      <!-- Header Icons (Large) -->
      <div class="hidden lg:flex items-center justify-evenly">
        <button class="bg-pink-600 hover:bg-pink-500 py-1 px-4 rounded-3xl text-xl font-bold">Post</button>
        <i class="pi pi-th-large" style="font-size: 1.3rem; color: gray;"></i>
        <i class="pi pi-bell" style="font-size: 1.3rem; color: gray;"></i>
      </div>
    </div>

    <!-- Body -->
    <div class="flex flex-1 bg-pink-100 w-full h-full ">
      
      <!-- Body (Sidebar) -->
      <div class="hidden lg:block md:relative h-full lg:w-[300px] xl:w-[250px] min-w-[300px] bg-amber-300">
        <div class="w-full bg-red-500 p-2 flex flex-row items-center justify-start gap-3">
          <i class="pi pi-home" style="font-size: 1.3rem; color: gray;"></i>
          <h1>Explore</h1>
        </div>
        <div class="w-full bg-red-500 p-2 flex flex-row items-center justify-start gap-3">
          <i class="pi pi-users" style="font-size: 1.3rem; color: gray;"></i>
          <h1>Following</h1>
        </div>
        <div class="w-full bg-red-500 p-2 flex flex-row items-center justify-start gap-3">
          <i class="pi pi-send" style="font-size: 1.3rem; color: gray;"></i>
          <h1>Messages</h1>
        </div>
        <div class="w-full bg-red-500 p-2 flex flex-row items-center justify-start gap-3">
          <i class="pi pi-user" style="font-size: 1.3rem; color: gray;"></i>
          <h1>Profile</h1>
        </div>
        <div class="w-full bg-red-500 p-2 flex flex-row items-center justify-start gap-3">
          <i class="pi pi-building" style="font-size: 1.3rem; color: gray;"></i>
          <h1>Business</h1>
        </div>
        <div class="w-full bg-red-500 p-2 flex flex-row items-center justify-start gap-3">
          <h1>More</h1>
          <i class="pi pi-angle-down" style="font-size: 1.3rem; color: gray;"></i>
        </div>
      </div>

      <!-- Categories -->
      <div class="flex w-full h-fit p-3">
        <div class="flex flex-row items-center justify-start gap-3 w-full h-fit overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <div v-for="(category, index) in categories" :key="index" class="h-[30px] w-fit flex items-center justify-center rounded-full px-3 cursor-pointer hover:bg-gray-50 text-gray-500 hover:text-gray-700 duration-200">
            <p class="text-[18px] font-normal">{{ category }}</p>
          </div>
        </div>
      </div>

      

    </div>
  </div>
</template>

<style src="./style.css"></style>
