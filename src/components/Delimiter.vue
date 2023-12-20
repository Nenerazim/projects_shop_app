<template>
    <div class="container">
        <div class="delimiter" />
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
export default defineComponent({
    name: 'Delimiter'
})
</script>

<style lang="scss" scoped>
    .delimiter {
        display: block;
        height: 1px;
        width: 100%;
        background: #f7f7f7;
        margin: 30px 0;
    }
</style>