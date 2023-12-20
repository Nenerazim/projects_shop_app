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
    <section class="two-images-text-section">
        <div class="container">
            <div class="row gap-50">
                <div class="image-full-height">
                    <Img :src="data.imageFile" :alt="data.name" />
                </div>
                <div class="image-text-content">
                    <h3>{{data.name}}</h3>
                    <p class="p-18" v-html="data.text"></p>
                    <Img :src="data.secondImage" :alt="data.name" />
                </div>
            </div>
        </div>
    </section>
</template>


<script lang="ts">
import {defineComponent} from 'vue'
export default defineComponent({
    name: 'TwoImagesText'
})
</script>