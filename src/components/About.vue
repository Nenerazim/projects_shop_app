<script lang="ts" setup>
    import Img from 'components/helpers/Img.vue'

    const props = defineProps({
        componentData: {
            type: Object,
            required: true
        }
    })

    const data = props.componentData.settings
</script>

<template>
    <section class="about-section bg">
        <div class="container">
            <div class="row gap-50">
                <div class="content">
                    <h3>Немного о нас</h3>
                    <p class="head">{{data.title}}</p>
                    <p class="p-18 justify" v-html="data.text"></p>
                </div>
                <div class="video">
                    <Img :src="data.imageFile" :thumb="true" :alt="'О нас'" />
                    <a class="play-btn" :href="data.video_link" target="_blank">
                        <img src="/icons/youtube.png" alt="Значок Youtube">
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
export default defineComponent({
    name: 'About'
})
</script>