<script lang="ts" setup>
    import Pagination  from 'components/widgets/Pagination.vue'
    import Img from 'components/helpers/Img.vue'
    import { ref, computed } from 'vue'
    import { useRoute, useRouter } from 'vue-router'
    import { api } from 'boot/axios'

    const props = defineProps({
        componentData: {
            type: Object,
            required: true
        }
    })
    

    const route = useRoute()
    const router = useRouter()
    const data = props.componentData.settings
    const perPage = 12
    const page = ref(route.query.page || 1)
    const articles = ref()

    await api.get(`${data.type}?page=${page.value}&per-page=${perPage}`).then((response) => {
        articles.value = response.data
    })

    const pages = computed(() => Math.ceil(articles.value.totalCount / 12))

    function toDate(timestamp: number) {
        let date = new Date(timestamp * 1000);
        return ('0' + date.getDate()).slice(-2) + '.' + ('0' + (date.getMonth() + 1)).slice(-2) + '.' + date.getFullYear() + ' ' + ((date.getHours() < 10 ? '0' : '') + date.getHours()) + ':' + ((date.getMinutes()<10?'0':'') + date.getMinutes())
    }

    async function changePage(n: number) {
        const string = `${route.path}?page=${n}`
        page.value = n
        router.push(string)
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
        await api.get(`${data.type}?page=${page.value}&per-page=${perPage}`).then((response) => {
            articles.value = response.data
        })
    }
</script>

<template>
    <div>
        <section class="articles-full-section">
            <div class="container">
                <div class="articles-full-grid">
                    <router-link class="full-article" v-for="(article, i) of articles.data" :key="i" :to="`/articles/${article.url}`">
                        <Img :src="article.imageFile" :thumb="true" :alt="article.name" />
                        <div class="content">
                            <div class="row">
                                <div class="type">{{article.type}}</div>
                                <div class="date">
                                    {{toDate(article.updated_at)}}
                                </div>
                            </div>
                            <div class="name">
                                {{article.name}}
                            </div>
                        </div>
                    </router-link>
                </div>
                <Pagination :pages="parseInt(pages)" :page="parseInt(page)" @switch="changePage" />
            </div>
        </section>
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
export default defineComponent({
    name: 'ArticlesFull'
})
</script>