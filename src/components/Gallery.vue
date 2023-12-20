<script lang="ts" setup>
    import LightBox from 'components/widgets/LightBox.vue'
    import Img from 'components/helpers/Img.vue'
    import {Swiper, SwiperSlide} from 'swiper/vue'
    import { Navigation } from 'swiper'
    import { ref } from 'vue'

    const props = defineProps({
        componentData: {
            type: Object,
            required: true
        }
    })

    const data = props.componentData.settings
    const slidesPerView = 1
    const spaceBetween = 10
    const showLightbox = ref(false)
    const imgIndex = ref(0)
    const modules = [Navigation]
    function showImg(newIndex: number) {
        imgIndex.value = newIndex
        showLightbox.value = true
    }

    function handleHide() {
        showLightbox.value = false
    }
    const breakpoints = {
        768: {
            slidesPerView: 'auto',
            spaceBetween: 10
        },
        360: {
            slidesPerView: 1,
            spaceBetween: 0
        }
    }
</script>

<template>
    <section class="gallery-section">
        <div class="container">
            <div class="gallery-wrapper">
                <swiper
                    :slides-per-view="slidesPerView"
                    :space-between="spaceBetween"
                    :modules="modules"
                    :breakpoints="breakpoints"
                    navigation
                    ref="swiperComponentRef"
                    class="slides swiper gallery"
                >
                    <swiper-slide v-for="(img, i) in data" :key="i" @click="() => showImg(i)">
                        <Img :src="img" :alt="`Изображение галлереи-${i}`" />
                    </swiper-slide>
                </swiper>
            </div>
            <transition name="slide-fade">
                <LightBox :images="data" :imgIndex="imgIndex" :hide="handleHide" v-if="showLightbox"/>
            </transition>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'Gallery'
})
</script>