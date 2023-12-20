<script lang="ts" setup>
    import {Swiper, SwiperSlide} from 'swiper/vue'
    import { Navigation, Autoplay } from 'swiper'
    import Img from 'components/helpers/Img.vue'

    const props = defineProps({
        componentData: {
            type: Object,
            required: true
        }
    })
    const modules = [Navigation, Autoplay]
    const slidesPerView = 1
    const spaceBetween = 10
    const data = props.componentData.settings
</script>

<template>
    <section class="project-tile-section bg">
        <div class="container">
            <h3>Популярные проекты</h3>
            <div class="project-tile">
                <div class="top-projects">
                    <router-link class="project-item" v-for="(item, i) in (data.items).slice(0, 3)" :key="i" :to="`/catalog/${item.category_url}/${item.url}`">
                        <Img :src="item.imageFile" :thumb="true" :alt="item.name" />
                        <div class="content">
                            <div class="name">{{item.name}}</div>
                        </div>
                    </router-link>
                </div>
                <swiper
                    :slides-per-view="slidesPerView"
                    :space-between="spaceBetween"
                    :modules="modules"
                    :autoplay="{
                        delay: 4000,
                    }"
                    navigation
                    ref="swiperComponentRef"
                    class="slides swiper"
                >
                    <swiper-slide v-for="(item, i) in (data.items).slice(3, 12)" :key="i">
                        <router-link class="carousel-item" :to="`/catalog/${item.category_url}/${item.url}`">
                            <Img :src="item.imageFile" :thumb="true" :alt="item.name" />
                            <div class="content">
                                <div class="name">{{item.name}}</div>
                            </div>
                        </router-link>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
export default defineComponent({
    name: 'ProjectsTile'
})
</script>
