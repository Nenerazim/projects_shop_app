<script lang="ts" setup>
    import { ref } from 'vue'
    const props = defineProps({
        componentData: {
            type: Object,
            required: true
        }
    })

    const data = props.componentData.settings

    const isActive = ref(1);

    function toggleItem(index: number) {
        if (Number(isActive.value) === index) {
            isActive.value = null as any
        } else {
            isActive.value = index
        }
    }

    function enter(el: HTMLElement) {
        // set the element to his natural hight
        el.style.height = 'auto'
        const height = getComputedStyle(el).height
        // set the height to zero for the opening animation
        el.style.height = '0'
        getComputedStyle(el)
        setTimeout(() => {
            el.style.height = height
        })
    }

    function afterEnter(el: HTMLElement) {
        el.style.height = 'auto'
    }

    function leave(el: HTMLElement) {
        el.style.height = getComputedStyle(el).height
        getComputedStyle(el)
        setTimeout(() => {
            el.style.height = '0'
        })
    }
</script>

<template>
    <section class="accordion-section">
        <q-no-ssr>
            <div class="container">
                <ul class="accordion">
                    <li v-for="(item, i) in data" :key="i" @click="toggleItem(Number(i))">
                        <div class="heading">
                            <h5>{{item.name}}</h5><div class="plus" v-bind:class="{active: Number(isActive) !== Number(i)}"></div>
                        </div>
                        <q-slide-transition>
                            <div v-show="Number(isActive) === Number(i)" class="content-text" v-html="item.text"></div>
                        </q-slide-transition>
                    </li>
                </ul>
            </div>
        </q-no-ssr>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'Accordion'
})
</script>
