<script lang="ts" setup>
    const props = defineProps({
        price: {
            default: 0
        }
    })
</script>

<template>
    <span class="format-price">{{parseInt(price) === 0 ? 'Под заказ' : price}} {{parseInt(price) === 0 ? '': '₽'}}</span>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({    
    name: 'Price'
})
</script>
