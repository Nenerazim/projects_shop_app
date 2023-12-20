<script lang="ts" setup>
    import Pagination  from 'components/widgets/Pagination.vue'
    import { ref, computed } from 'vue'
    import { useRoute, useRouter, onBeforeRouteUpdate } from 'vue-router'
    import { api } from 'boot/axios'

    const route = useRoute()
    const router = useRouter()
    const perPage = 12
    const page = ref(route.query.page || 1)
    const items = ref()

    await api.get(`items-by-category/${route.params.category}?page=${page.value}&per-page=12`).then((response) => {
        items.value = response.data
    })

    onBeforeRouteUpdate(async(to) => {
        await api.get(`items-by-category/${to.params.category}?page=${to.query.page || 1}&per-page=12`).then((response) => {
            items.value = response.data
        })
    })

    const pages = computed(() => Math.ceil(items.value.totalCount / 12))
    async function changePage(n: number) {
        const string = `${route.path}?page=${n}`
        page.value = n
        router.push(string)
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
</script>

<template>
    <q-page class="page padding">
        <div class="container">
            <div class="breadcrumbs">
                <router-link to="/catalog">
                    <span class="material-icons">
                        keyboard_backspace
                    </span>
                </router-link>
            </div>
            <Suspense>
                <template #default>
                    <div>
                        <h1 class="mobile">{{items.category.name}}</h1>
                        <div class="items-page-grid">
                            <router-link class="page-item" v-for="(item, i) in items.items" :key="i" :to="`/catalog/${item.category_url}/${item.url}`">
                                <img :src="item.imageFile.thumb" :alt="item.name">
                                <div class="square">
                                    <span class="material-icons">
                                        check_box_outline_blank
                                    </span>
                                    {{item.square}} м<sup>2</sup>
                                </div>
                                <div class="overlay-item">
                                    <ul>
                                        <li>
                                            Артикул: {{item.vendor_code}}
                                        </li>
                                        <li>
                                            Этажность: {{item.floors}}
                                        </li>
                                        <li>
                                            Краткое описание: {{item.short_description}}
                                        </li>
                                    </ul>
                                </div>
                                <div class="content">
                                    {{item.name}}
                                </div>
                            </router-link>
                        </div>
                        <Pagination :pages="parseInt(pages)" :page="parseInt(page)" @switch="changePage" />
                    </div>
                </template>
                <template #fallback>
                    <div>
                        Loading....
                    </div>
                </template>
            </Suspense>
        </div>
    </q-page>
</template>
