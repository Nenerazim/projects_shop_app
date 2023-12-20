<script lang="ts" setup>
    import { Navigation } from 'swiper'
    import { Swiper as SwiperType} from 'swiper/types'
    import { Swiper, SwiperSlide } from 'swiper/vue'
    import { ref } from 'vue'

    const props = defineProps({
        images: {
            type: Array,
            required: true
        },
        imgIndex: {
            type: Number,
            required: false
        },
        hide: {
            type: Function,
            required: true
        }
    })

    const swiperRef = ref()
    const modules = [Navigation]
    const slidesPerView = 1
    const spaceBetween = 0

    const onSwiper = (swiper: SwiperType) => {
        swiperRef.value = swiper
        if(props.imgIndex) {
            swiperRef.value.slideTo(props.imgIndex)
        }
        
    }

    function close() {
        props.hide()
    }
</script>

<template>
    <div class="lightbox-overlay">
        <div class="close" @click="close">&times;</div>
        <swiper
            @swiper="onSwiper"
            :slides-per-view="slidesPerView"
            :space-between="spaceBetween"
            :modules="modules"
            navigation
            keyboard
            ref="swiperComponentRef"
            class="gallery-lightbox"
        >
            <swiper-slide class="lightbox-image" v-for="(img, index) in props.images" :key="index">
                <img :src="img.webp" :alt="`Галерея-${index}`">
            </swiper-slide>
        </swiper>
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
export default defineComponent({
    name: 'LightBox'
})
</script>