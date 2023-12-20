<script lang="ts" setup>
    const emit = defineEmits(['switch'])
    const props = defineProps({
        pages: {
            type: Number,
            default: 0
        },
        page: {
            type: Number,
            default: 1
        }
    })
</script>

<template>
    <ul class="pagination" v-if="pages && pages > 1">
        <li v-if="page !== 1 && page !== 2" @click="$emit('switch', 1)">&#171;</li>
        <li v-if="page !== 1" @click="$emit('switch', page - 1)">&#8249;</li>
        <li v-for="onePage in pages" :key="onePage" @click="$emit('switch', onePage)" v-bind:class="{active: page === onePage}">{{onePage}}</li>
    </ul>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
export default defineComponent({
    name: 'Pagination'
})
</script>