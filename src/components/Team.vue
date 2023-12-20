<script lang="ts" setup>
    import {Swiper, SwiperSlide} from 'swiper/vue'
    import Img from 'components/helpers/Img.vue'   

    const props = defineProps({
        componentData: {
            type: Object,
            required: true
        }
    })

    const data = props.componentData.settings
    const slidesPerView = 'auto'
    const spaceBetween = 50
</script>

<template>
    <section class="team-section">
        <div class="container">
            <h4>Познакомьтесь с нашей командой</h4>
            <swiper
                :slides-per-view="slidesPerView"
                :space-between="spaceBetween"
                ref="swiperComponentRef"
                class="slides swiper"
            >
                <swiper-slide v-for="(item, i) in data" :key="i">
                    <div class="team-item">
                        <div class="team-circle">
                            <Img :src="item.imageFile" :thumb="true" :alt="item.name" />
                        </div>
                        <div class="content">
                            <div class="name">{{item.name}}</div>
                            <span>{{item.description}}</span>
                        </div>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
    </section>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
export default defineComponent({
    name: 'Team'
})
</script>