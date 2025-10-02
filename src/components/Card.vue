<script setup>
    import MasonryWall from '@yeger/vue-masonry-wall'
    import { ref } from 'vue'

    import image1 from '../assets/image-1.jpeg'
    import image2 from '../assets/image-2.jpeg'
    import image3 from '../assets/image-3.jpeg'
    import image4 from '../assets/image-4.jpeg'
    import image5 from '../assets/image-5.jpeg'
    const posts = ref([
        {id: 1, src: image1, title: 'Adam Hat', author: 'Amie Zaha'},
        {id: 2, src: image2, title: 'Pikachu', author: 'Amie Zahar'},
        {id: 3, src: image3, title: 'Sick Car', author: 'Amiera Zaha'},
        {id: 4, src: image4, title: 'Adam Cap', author: 'Amien Zaha'},
        {id: 5, src: image5, title: 'Hawa Cap', author: 'Ammar Nazhan'},
        {id: 6, src: image1, title: 'Adam Hat', author: 'Amie Zaha'},
        {id: 7, src: image2, title: 'Pikachu', author: 'Amie Zahar'},
        {id: 8, src: image3, title: 'Sick Car', author: 'Amiera Zaha'},
        {id: 9, src: image4, title: 'Adam Cap', author: 'Amien Zaha'},
        {id: 10, src: image5, title: 'Hawa Cap', author: 'Ammar Nazhan'},
        {id: 1, src: image1, title: 'Adam Hat', author: 'Amie Zaha'},
        {id: 2, src: image2, title: 'Pikachu', author: 'Amie Zahar'},
        {id: 3, src: image3, title: 'Sick Car', author: 'Amiera Zaha'},
        {id: 4, src: image4, title: 'Adam Cap', author: 'Amien Zaha'},
        {id: 5, src: image5, title: 'Hawa Cap', author: 'Ammar Nazhan'},
        {id: 6, src: image1, title: 'Adam Hat', author: 'Amie Zaha'},
        {id: 7, src: image2, title: 'Pikachu', author: 'Amie Zahar'},
        {id: 8, src: image3, title: 'Sick Car', author: 'Amiera Zaha'},
        {id: 9, src: image4, title: 'Adam Cap', author: 'Amien Zaha'},
        {id: 10, src: image5, title: 'Hawa Cap', author: 'Ammar Nazhan'},
])
</script>
<template>
    <MasonryWall :items="posts" :ssr="true" :column-width="200" class="bg-white" :gap="16">
        <template #default="{ item }">
            <img :src="item.src" alt="/" class="rounded-2xl w-full h-fit max-w-[300px] ">
            <div class="p-4 h-fit w-full flex flex-col gap-y-2 text-black">
                <h1>{{ item.title }}</h1>
                <div class="h-f w-full flex flex-row items-center justify-between">
                    <div class="flex flex-row gap-x-2">
                        <img :src="image1" alt="/" class="h-[20px] w-[20px] rounded-full"/>
                        <h1 class="text-sm">{{ item.author }}</h1>            
                    </div>
                    <i class="pi pi-heart" style="color: gray"></i>
                </div>
            </div>
        </template>
    </MasonryWall>
</template>