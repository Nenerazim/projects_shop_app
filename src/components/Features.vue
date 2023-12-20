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
    <section class="features-section">
        <div class="container">
            <h4>Почему выбирают нас?</h4>
            <div class="features-grid">
                <div class="feature" v-for="(feature, i) of data" :key="i">
                    <Img :src="feature.imageFile" :thumb="true" :alt="feature.name" />
                    <div class="content">
                        <div class="name">{{feature.name}}</div>
                        <div class="text">{{feature.description}}</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'Features'  
})
</script>