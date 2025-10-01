<script setup>
    import image1 from '../assets/image-1.jpeg'
</script>
<template>
    <div class="h-fit w-[200px] bg-white text-black shadow-2xl shadow-gray-300/80 flex items-center justify-center flex-col rounded-2xl">
       <div>
        <img :src="image1" alt="/" class="rounded-2xl">
       </div>
       <div class="p-4 h-fit w-full flex flex-col gap-y-2">
         <h1>Adam Hat</h1>
         <div class="h-f w-full flex flex-row items-center justify-between">
            <div class="flex flex-row gap-x-2">
                <img :src="image1" alt="/" class="h-[20px] w-[20px] rounded-full"/>
                <h1 class="text-sm">Amie Zaha</h1>            
            </div>
            <i class="pi pi-heart" style="color: gray"></i>
        </div>
       </div>
    </div>
</template>