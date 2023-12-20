<script lang="ts" setup>
    const props = defineProps({
        componentData: {
            type: Object,
            required: true
        }
    })

    const data = props.componentData.settings
</script>

<template>
    <section class="simple-text-section">
        <div class="container">
            <h4 class="heading" v-if="data.title !== ''">{{data.title}}</h4>
            <div class="simple-text" v-html="data.text"></div>
        </div>
    </section>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
export default defineComponent({
    name: 'SimpleText'
})
</script>