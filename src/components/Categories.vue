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
    <section class="categories-section">
        <div class="container">
            <div class="categories-grid">
                <router-link v-for="(category, i) of data" :key="i" :to="`/catalog/${category.url}`" class="category">
                    <Img :src="category.imageFile" :thumb="true" :alt="category.name" />
                    <div class="content">
                        <div class="name">{{category.name}}</div>
                    </div>
                </router-link>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
export default defineComponent({
    name: 'Categories'
})
</script>