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
    <section class="banner-section">
        <div class="container">
            <div class="row gap-50">
                <div class="banner-img">
                    <Img :src="data.imageFile" :alt="data.name" />    
                </div>
                <div class="banner-content">
                    <h3>{{data.name}}</h3>
                    <div class="p-18" v-html="data.text"></div>
                    <router-link :to="data.button_link" class="button primary arrow" v-if="data.button_link && data.button_link !== ''">Подробнее <img src="/icons/arrow-right.svg" :alt="data.name"></router-link>
                </div>
            </div>
        </div>
    </section>
</template>


<script lang="ts">
import {defineComponent} from 'vue'
export default defineComponent({
    name: 'Banner'
})
</script>