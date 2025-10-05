<script setup>
    import MasonryWall from '@yeger/vue-masonry-wall'
    import { computed, ref } from 'vue'
    import { useQuery } from '@tanstack/vue-query'
    import api from '../utils/axiosInstance'
    import CardItem from './CardItem.vue'

    const offset = ref(0)
    const limit = ref(35)

    //Fetch Feeds Data
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

const feedItems = computed(() => feedsData.value ?? [])

</script>

<template>
    <div>
        <div v-if="isPendingFeeds" class="flex w-full h-full text-black items-center justify-center text-2xl">Loading...</div>
        <div v-else-if="isErrorFeeds" class="text-red-600 flex items-center justify-center text-2xl">{{ errorFeeds.message }}</div>
        <MasonryWall v-else-if="isSuccessFeeds" :items="feedItems" :ssr="true" :column-width="200" class="bg-white" :gap="16">
            <template #default="{ item }">
                <CardItem :item="item"/>
            </template>
        </MasonryWall>
    </div>

</template>