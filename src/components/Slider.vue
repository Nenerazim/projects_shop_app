<script lang="ts" setup>
    import {Swiper, SwiperSlide} from 'swiper/vue'
    import { Navigation } from 'swiper'
    import Img from 'components/helpers/Img.vue'

    const props = defineProps({
        componentData: {
            type: Object,
            required: true
        }
    })

    const data = props.componentData.settings
    const modules = [Navigation]
    const slidesPerView = 1
    const spaceBetween = 0
</script>

<template>
    <section class="slider-section">
        <swiper
            :slides-per-view="slidesPerView"
            :space-between="spaceBetween"
            :modules="modules"
            navigation
            ref="swiperComponentRef"
            class="slides swiper main-slider"
        >
            <swiper-slide v-for="(slide, i) in data" :key="i">
                <div class="main-slide">
                    <div class="overlay">
                        <div class="left-slide-content">
                            <div class="slide-content">
                                <h1 class="slide-title" v-if="i === 0">{{slide.title}}</h1>
                                <h2 class="title" v-else>{{slide.title}}</h2>
                                <div class="text">{{slide.text}}</div>
                                <router-link :to="slide.button_link" class="button second">{{slide.button_text}} <i class="material-icons">trending_flat</i></router-link>
                            </div>
                        </div>
                        <div class="right-slide-content">
                            <Img :src="slide.imageFile" :alt="slide.title" />
                        </div>
                    </div>
                    <Img :src="slide.imageFile" :alt="slide.title" />
                </div>
            </swiper-slide>
        </swiper>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'Slider'
})
</script>