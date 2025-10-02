<script setup>
    import MasonryWall from '@yeger/vue-masonry-wall'
    import { computed, ref } from 'vue'
    import { useQuery } from '@tanstack/vue-query'
    import api from '../axiosInstance'
    import defaultprofilepicture from '../assets/defaultprofilepicture.jpg'

    // import image1 from '../assets/image-1.jpeg'
    // import image2 from '../assets/image-2.jpeg'
    // import image3 from '../assets/image-3.jpeg'
    // import image4 from '../assets/image-4.jpeg'
    // import image5 from '../assets/image-5.jpeg'

    //     const posts1 = ref([
    //         {id: 1, src: image1, title: 'Adam Hat', author: 'Amie Zaha'},
    //         {id: 2, src: image2, title: 'Pikachu', author: 'Amie Zahar'},
    //         {id: 3, src: image1, title: 'Sick Car', author: 'Amiera Zaha'},
    //         {id: 4, src: image4, title: 'Adam Cap', author: 'Amien Zaha'},
    //         {id: 5, src: image2, title: 'Hawa Cap', author: 'Ammar Nazhan'},
    //         {id: 6, src: image3, title: 'Adam Hat', author: 'Amie Zaha'},
    //         {id: 7, src: image1, title: 'Pikachu', author: 'Amie Zahar'},
    //         {id: 8, src: image5, title: 'Sick Car', author: 'Amiera Zaha'},
    //         {id: 9, src: image4, title: 'Adam Cap', author: 'Amien Zaha'},
    //         {id: 10, src: image4, title: 'Hawa Cap', author: 'Ammar Nazhan'},
    //         {id: 1, src: image2, title: 'Adam Hat', author: 'Amie Zaha'},
    //         {id: 2, src: image3, title: 'Pikachu', author: 'Amie Zahar'},
    //         {id: 3, src: image3, title: 'Sick Car', author: 'Amiera Zaha'},
    //         {id: 4, src: image5, title: 'Adam Cap', author: 'Amien Zaha'},
    //         {id: 5, src: image1, title: 'Hawa Cap', author: 'Ammar Nazhan'},
    //         {id: 6, src: image2, title: 'Adam Hat', author: 'Amie Zaha'},
    //         {id: 7, src: image3, title: 'Pikachu', author: 'Amie Zahar'},
    //         {id: 8, src: image4, title: 'Sick Car', author: 'Amiera Zaha'},
    //         {id: 9, src: image4, title: 'Adam Cap', author: 'Amien Zaha'},
    //         {id: 10, src: image3, title: 'Hawa Cap', author: 'Ammar Nazhan'},
    // ])

    const offset = ref(0)
    const limit = ref(15)

    //Fetch chat sessions
    const {
        data: feedsData,
        isPending: isPendingFeeds,
        isSuccess: isSuccessFeeds,
        isError: isErrorFeeds,
        refetch: refetchFeeds,
        error: errorFeeds,
    } = useQuery({
  queryFn: async () => {
    const {data} = await api.get("/api/feed", {params:{
        offset: offset.value,
        limit: limit.value,
    },
})
    return data.data
  },
  keepPreviousData: true,
  queryKey: ["feedItems", offset, limit],
})

//
const feedItems = computed(() => feedsData.value ?? [])

</script>
<template>
    <div>
        <div v-if="isPendingFeeds" class="flex w-full h-full text-black items-center justify-center text-2xl">Loading...</div>
        <div v-else-if="isErrorFeeds" class="text-red-600 flex items-center justify-center text-2xl">{{ errorFeeds.message }}</div>
        <MasonryWall v-else-if="isSuccessFeeds" :items="feedItems" :ssr="true" :column-width="200" class="bg-white" :gap="16">
            <template #default="{ item }">
                <img :src="item?.thumbnail" alt="/" class="rounded-2xl w-full h-fit max-w-[300px] object-cover">
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
        </MasonryWall>
    </div>

</template>