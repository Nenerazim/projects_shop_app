<script lang="ts" setup>
    import Img from 'components/helpers/Img.vue'
    const props = defineProps({
        componentData: {
            type: Object,
            required: true
        },
        type: {
            type: String,
            default: ''
        }
    })

    const data = props.componentData.settings
</script>

<template>
    <section class="services-section" v-bind:class="{'padding-sm': type === 'page'}">
        <div class="container">
            <h3 v-if="type !== 'page'">Наши услуги</h3>
            <div class="services-grid">
                <router-link class="service" v-for="(service, i) of data" :key="i" :to="`/services/${service.url}`">
                    <Img :src="service.imageFile" :thumb="true" :alt="service.name" />
                    <div class="content">
                        <span class="name">{{service.name}}</span>
                    </div>
                </router-link>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
export default defineComponent({
    name: 'Services'
})
</script>