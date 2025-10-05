<script setup>
    import defaultprofilepicture from '../assets/defaultprofilepicture.jpg'
    defineProps({
        item: Array
    });
</script>

<template>
    <div class="shrink-0 relative w-full overflow-hidden rounded-2xl">
        <img :src="item?.thumbnail" alt="/" class="rounded-2xl w-full min-h-[250px] max-h-[350px] object-cover hover:scale-105 transform transition duration-500 ease-in-out">
    </div>
    <div class="p-4 h-fit w-full flex flex-col gap-y-2 text-black">
        <h1>{{ item?.title }}</h1>
        <div class="h-f w-full flex flex-row items-center justify-between">
            <div class="flex flex-row gap-x-2">
                <img :src="[item?.user?.logo_url ? item?.user?.logo_url : defaultprofilepicture]" alt="/" class="h-[20px] w-[20px] rounded-full"/>
                <h1 class="text-sm">{{ item?.user?.username }}</h1>            
            </div>
            <i class="pi pi-heart" style="color: gray"></i>
        </div>
    </div>
</template>