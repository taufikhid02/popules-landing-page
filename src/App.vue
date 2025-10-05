<script setup>
  import { ref } from 'vue'
  import Sidebar from './components/Sidebar.vue'
  import popules_logo from './assets/popules_logo.svg'
  import CardList from './components/CardList.vue'
  import DropdownMenu from './components/DropdownMenu.vue'
  import AboutUsDialog from './components/AboutUsDialog.vue'
  import PrivacyPolicyDialog from './components/PrivacyPolicyDialog.vue'
  import profilepicture from './assets/profilepicture.jpg'
  import DropdownProfile from './components/DropdownProfile.vue'

  const categories = ["All", "Vacancies", "Workplace", "Food", "Design", "Cars", "Finance", "Lifestyle", "Travel", "Makeup", "Fitness"]
  const dropdownMenu = ref(false)
  const toggleDropdownMenu = () => {
    dropdownMenu.value = !dropdownMenu.value
  }
  const dropdownProfile = ref(false)
  const toggleDropdownProfile = () => {
    dropdownProfile.value = !dropdownProfile.value
  }
  const showAboutUsDialog = ref(false)
  const showPrivacyPolicyDialog = ref(false)

</script>

<template>
  <!-- Parent Div -->
  <div class="bg-white h-screen w-screen flex flex-col items-center justify-center">
    <AboutUsDialog :show="showAboutUsDialog" @close="showAboutUsDialog = false"/>
    <PrivacyPolicyDialog :show="showPrivacyPolicyDialog" @close="showPrivacyPolicyDialog = false"/>

    <!-- Header -->
    <header class="w-full h-1/10 flex items-center justify-between px-4 border-b-2 border-gray-200 gap-x-2">
      <!-- Header Logo -->
      <div class="h-full w-fit flex items-center justify-center">      
        <img :src="popules_logo" alt="/" class="h-8 w-full md:h-11 pl-5"/>
      </div>

      <!-- Header Icons (Mobile) -->
      <div class="relative flex flex-row h-fit items-center justify-evenly gap-4 gap-x-8 p-4 lg:hidden">
        <i class="pi pi-search" style="font-size: 1.3rem; color: gray;"></i>
        <i class="pi pi-bars cursor-pointer" @click="toggleDropdownMenu" style="font-size: 1.3rem; color: gray;"></i>
        <DropdownMenu :dropdown="dropdownMenu"/>
      </div>

      <!-- Search Bar (Large) -->
      <div class="hidden h-full w-[500px] lg:flex items-center justify-evenly p-3">
        <div class="h-10 w-full flex flex-row items-center gap-2">
          <input type="text" placeholder="Search..." class="w-full h-full bg-gray-100 rounded-3xl text-sm text-black focus:outline-none p-4"></input>
          <i class="pi pi-search" style="font-size: 1.3rem; color: gray;"></i>
        </div>
      </div>     
      
      <!-- Header Icons (Large) -->
      <div class="relative hidden h-full w-fit lg:flex items-center justify-evenly gap-x-4 p-2">
        <button class="bg-pink-600 hover:bg-pink-500 py-2 px-4 rounded-2xl text-xl font-semibold cursor-pointer duration-200">Post</button>
        <div class="h-fit w-fit p-2 flex items-center justify-center rounded-full hover:bg-gray-300 hover:scale-110 cursor-pointer duration-200">
          <i class="pi pi-th-large" style="font-size: 1.3rem; color: gray;"></i>
        </div>
        <div class="h-fit w-fit p-2 flex items-center justify-center rounded-full hover:bg-gray-300 hover:scale-110 cursor-pointer duration-200">
          <i class="pi pi pi-bell" style="font-size: 1.3rem; color: gray;"></i>
        </div>
        <div class="h-fit w-fit flex items-center justify-center rounded-full hover:bg-gray-300 hover:scale-110 cursor-pointer duration-200" >
          <img :src="profilepicture" alt="/" class="rounded-full h-[35px] w-[35px] object-cover" @click="toggleDropdownProfile"/>
        </div>
        <DropdownProfile :dropdown="dropdownProfile"/>
      </div>
    </header>


    <!-- Body -->
    <div class="flex flex-1 bg-white w-full h-9/10 ">
      
      <!-- Body (Sidebar) -->
      <Sidebar @open-about-dialog="showAboutUsDialog = true" @open-privacy-dialog="showPrivacyPolicyDialog = true"/>

      <!-- Body (Main Content) -->
      <div class="h-full w-full flex-1 flex flex-col overflow-x-auto">

        <!-- Categories -->
        <div class="flex w-full h-fit p-3">
          <div class="flex flex-row items-center justify-start gap-3 w-full h-fit overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <div v-for="(category, index) in categories" :key="index" class="h-[30px] w-fit flex items-center justify-center rounded-full px-3 cursor-pointer text-gray-500 hover:bg-gray-200 hover:scale-110 hover:text-gray-700 duration-200">
              <p class="text-md font-normal">{{ category }}</p>
            </div>
          </div>
        </div>

        <!-- Posts -->
        <main class="flex flex-1 w-full h-full px-4 overflow-y-auto overflow-x-hidden">
          <div class="gap-4 h-full w-full  overflow-y-auto space-y-5 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <CardList/>
          </div> 
        </main>
      </div>

    </div>
  </div>
</template>

<style src="./style.css"></style>
