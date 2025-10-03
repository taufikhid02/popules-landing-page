<script setup>
import { ref } from 'vue'
defineProps({
    dropdown: Boolean
})

const menus = ref([
            {label: "Explore", icon: "pi-home"}, 
            {label: "Following", icon: "pi-users"},
            {label: "Messages", icon: "pi-send"},
            {label: "Profile", icon: "pi-user"},
            {label: "Business", icon: "pi-building"},
            {label: "Settings", icon: "pi-cog"},
    ])
</script>
<template>
    <div v-if="dropdown" class="absolute z-10 top-full origin-top mt-1 right-0 h-fit max-h-[300px] w-[250px] p-4 gap-1 bg-white border-2 border-gray-400/20 flex flex-col lg:hidden group-hover:flex overflow-y-auto rounded-lg">
        <div v-for="(menu, index) in menus" :key="index" class="text-black  font-medium flex gap-4 items-center p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
            <i :class="['pi', menu.icon ]" style="font-size: 1.3rem; color: gray;"></i>
            <h1>{{ menu.label }}</h1>
        </div>
    </div>
</template>