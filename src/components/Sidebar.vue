<script setup>
import { ref } from 'vue'
    const menus = ref([
            {label: "Explore", icon: "pi-home", visible: true}, 
            {label: "Following", icon: "pi-users", visible: true},
            {label: "Messages", icon: "pi-send", visible: true},
            {label: "Profile", icon: "pi-user", visible: false},
            {label: "Business", icon: "pi-building", visible: false},
    ])
    const dropdown = ref(menus.visible)
    const showMoreMenu = () => {
        dropdown.value = !dropdown.value
        menus.value.map(menu => {
            if(menu.visible === false) {
                menu.visible = true
            } 
            else if(menu.visible === true && (menu.label === "Profile" || menu.label === "Business")) {
                menu.visible = false
            }
        })
    }
    const dropdownMore = ref(false)
    const toggleDropdownMore = () => {
        dropdownMore.value = !dropdownMore.value
    }

    const emit = defineEmits(['open-about-dialog', 'open-privacy-dialog'])

</script>

<template>
    <!-- Sidebar -->
    <nav class="hidden md:relative h-full md:w-[250px] xl:w-[300px] bg-white font-semibold lg:flex flex-col py-2 px-4 items-center gap-y-1 duration-200">
        <!-- Sidebar Content -->
        <div class="w-full h-full flex  flex-col justify-start gap-4 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <!-- Navigation Menu -->
            <div class="w-full h-fit flex flex-col gap-y-1">
                <div v-for="(menu, index) in menus" :key="index">
                    <div v-if="menu.visible" class="flex w-full bg-white text-black text-md font-medium p-2 flex-row items-center justify-start gap-3 rounded-2xl cursor-pointer hover:bg-gray-200 hover:scale-105 duration-200">
                        <i :class="['pi', menu.icon ]" style="font-size: 1.3rem; color: gray;"></i>
                        <h1>{{ menu.label }}</h1>
                    </div>
                </div>
            </div>
        
            <!-- Expand/Shrink Options -->
            <div @click="showMoreMenu" class="w-full bg-white text-black p-2 flex flex-row items-center justify-start gap-3 rounded-2xl text-md cursor-pointer hover:bg-gray-100 duration-200">
                <h1>{{ dropdown ? "Less" : "More" }}</h1>
                <i :class="['pi pi-angle-down', dropdown && 'rotate-180' ]" style="font-size: 1.3rem; color: gray;"></i>
            </div>

            <!-- Following Accounts -->
            <div class="w-full text-black p-2 flex flex-row items-center justify-start gap-3 text-md">
                <h1>Following Accounts</h1>
            </div>
            <!-- Following Accounts Info -->
            <div class="w-full text-black/60 font-normal p-2 flex flex-row items-center justify-start gap-3 text-sm">
                <h1>You have no following accounts. Starts following <span class="hover:text-black/80 cursor-pointer">here</span></h1>
            </div>
        </div>
        
        <!-- Sidebar Footer -->
        <div class="flex relative w-full h-[50px] self-end">
            <!-- More -->
            <div v-if="dropdownMore" class="absolute bottom-full origin-bottom mb-1 h-fit max-h-[300px] w-fit p-4 gap-1 bg-white border-2 border-gray-400/20 flex flex-col items-center overflow-y-auto rounded-lg">
                <!-- About Us -->
                <div @click="$emit('open-about-dialog')" class="text-black font-medium flex gap-4 items-center p-2 hover:bg-gray-100 rounded-lg cursor-pointer w-full">
                    <h1>About Us</h1>
                </div>

                <!-- Privacy Policy -->
                <div @click="$emit('open-privacy-dialog')" class="text-black  font-medium flex gap-4 items-center p-2 hover:bg-gray-100 rounded-lg cursor-pointer w-full">
                    <h1>Privacy Policy</h1>
                </div>

                <!-- Theme -->
                <div class="text-black  font-medium flex gap-4 items-center p-2 hover:bg-gray-100 rounded-lg cursor-pointer w-full">
                    <i class="pi pi-sun" style="font-size: 1rem"></i>
                    <div 
                        @click="enabled = !enabled"
                        class="w-12 h-6 flex items-center rounded-full cursor-pointer transition-colors duration-300"
                        :class="enabled ? 'bg-green-500' : 'bg-gray-300'"
                    >
                        <div 
                        class="w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300"
                        :class="enabled ? 'translate-x-6' : 'translate-x-1'"
                        ></div>
                    </div>
                    <i class="pi pi-moon" style="font-size: 1rem"></i>
                </div>
            </div>

            <!-- More Button -->
            <div @click="toggleDropdownMore" class="w-full text-black p-2 flex flex-row items-center justify-start gap-3 text-lg cursor-pointer">
                <i class="pi pi-bars" style="font-size: 1.3rem; color: gray;"></i>
                <h1>More</h1>
            </div>
        </div>
        
    </nav>
</template>