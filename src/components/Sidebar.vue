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
</script>

<template>
    <!-- Sidebar -->
    <div class="hidden md:relative h-full min-w-[300px] md:w-[300px] xl:w-[300px] bg-white font-semibold md:flex flex-col py-2 px-4 items-center gap-y-1">
        <!-- Sidebar Content -->
        <div class="w-full h-[550px] flex  flex-col justify-start gap-4 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <!-- Navigation Menu -->
            <div class="w-full h-fit flex flex-col gap-y-1">
                <div v-for="(menu, index) in menus" :key="index">
                    <div v-if="menu.visible" class="flex w-full bg-white text-black p-2 flex-row items-center justify-start gap-3 rounded-2xl text-lg cursor-pointer hover:bg-gray-100 duration-200">
                        <i :class="['pi', menu.icon ]" style="font-size: 1.3rem; color: gray;"></i>
                        <h1>{{ menu.label }}</h1>
                    </div>
                </div>
            </div>
        
            <!-- Expand/Shrink Options -->
            <div @click="showMoreMenu" class="w-full bg-white text-black p-2 flex flex-row items-center justify-start gap-3 rounded-2xl text-lg cursor-pointer hover:bg-gray-100 duration-200">
                <h1>{{ dropdown ? "Less" : "More" }}</h1>
                <i :class="['pi pi-angle-down', dropdown && 'rotate-180' ]" style="font-size: 1.3rem; color: gray;"></i>
            </div>

            <!-- Following Accounts -->
            <div class="w-full bg-red-500 p-2 flex flex-row items-center justify-start gap-3 text-lg">
                <h1>Following Accounts</h1>
            </div>
            <!-- Following Accounts Info -->
            <div class="w-full bg-red-500 p-2 flex flex-row items-center justify-start gap-3 text-lg">
                <h1>You have no following accounts. Starts following here</h1>
            </div>
        </div>
        
        <!-- Sidebar Footer -->
        <div class="flex w-full h-1/10 self-end">
            <!-- More -->
            <div class="w-full bg-red-500 p-2 flex flex-row items-center justify-start gap-3 text-lg">
                <i class="pi pi-bars" style="font-size: 1.3rem; color: gray;"></i>
                <h1>More</h1>
            </div>
        </div>
        
    </div>
</template>