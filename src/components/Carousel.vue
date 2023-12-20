<script lang="ts" setup>
    import Img from 'components/helpers/Img.vue'
    import {Swiper, SwiperSlide} from 'swiper/vue'
    import { Navigation } from 'swiper'

    const props = defineProps({
        componentData: {
            type: Object,
            required: true
        }
    })

    const data = props.componentData.settings
    const modules = [Navigation]
    const slidesPerView = 'auto'
    const spaceBetween = 10
    function setLink(type: any, item: any) {
        if (type === 'item') {
            return `/catalog/${item.category_url}/${item.url}`
        }
    }
</script>

<template>
    <section class="carousel-section">
        <div class="container">
            <h4>{{data.title}}</h4>
            <swiper
                :slides-per-view="slidesPerView"
                :space-between="spaceBetween"
                :modules="modules"
                navigation
                ref="swiperComponentRef"
            >
                <swiper-slide v-for="(item, i) in data.items" :key="i">
                    <router-link class="carousel-item" :to="setLink(data.type, item)">
                        <Img :src="item.imageFile" :thumb="true" :alt="item.name" />
                        <div class="content">
                            <div class="name">{{item.name}}</div>
                        </div>
                    </router-link>
                </swiper-slide>
            </swiper>
        </div>
    </section>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
export default defineComponent({
    name: 'Carousel'
})
</script>