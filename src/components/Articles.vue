<script lang="ts" setup>
    import Img from 'components/helpers/Img.vue'
    const props = defineProps({
        componentData: {
            type: Object,
            required: true
        }
    })

    const data = props.componentData.settings

    function toDate(timestamp: number) {
        let date = new Date(timestamp * 1000);
        return ('0' + date.getDate()).slice(-2) + '.' + ('0' + (date.getMonth() + 1)).slice(-2) + '.' + date.getFullYear() + ' ' + ((date.getHours() < 10 ? '0' : '') + date.getHours()) + ':' + ((date.getMinutes()<10?'0':'') + date.getMinutes())
    }

    function short(str: string) {
        if (str.length > 150) {
            return str.substr(0, 100) + '...' 
        } 
        return str
    }
</script>

<template>
    <section class="articles-section bg">
        <div class="container">
            <div class="row">
                <h3>Последние {{data.type}}</h3>
                <div class="articles-grid">
                    <router-link class="article" v-for="(article, i) in data.items" :key="i" :to="`/articles/${article.url}`">
                        <Img :src="article.imageFile" :thumb="true" :alt="article.name" />
                        <div class="content">
                            <div class="name">{{article.name}}</div>
                            <div class="desc">{{short(article.short_desc)}}</div>
                            <div class="date">{{toDate(article.updated_at)}}</div>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
export default defineComponent({
    name: 'Articles'
})
</script>