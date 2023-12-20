<script lang="ts" setup>
    import image from 'assets/media/images/default.png'
    const props = defineProps({
        src: {
            type: Object,
            default: null
        },
        thumb: {
            type: Boolean,
            default: false
        },
        alt: {
            type: String,
            required: true
        }
    })

    function setImage() {
        if (props.thumb) {
            if (props.src.thumb && props.src.thumb !== '') {
                return props.src.thumb
            }
        }
        if (props.src && props.src !== null  && props.src !== undefined) {
            if (props.src.webp && props.src.webp !== '') {
                return props.src.webp
            }
            if (props.src.url && props.src.url !== '') {
                return props.src.url
            }
            return image
        }
        return image
    }
</script>

<template>
    <img v-lazy="setImage()" :src="image"  :alt="props.alt" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'Img'
})
</script>