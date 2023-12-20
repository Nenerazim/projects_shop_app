<script lang="ts" setup>
    import { computed, ref } from 'vue'
    import { usePage } from 'stores/page'
    import { useRoute, useRouter, onBeforeRouteUpdate} from 'vue-router'
    import ItemBlock from 'components/ItemBlock.vue'

    const store = usePage()
    const route = useRoute()
    const router = useRouter()
    const page = ref()
    page.value = await store.setPage(`items/${route.params.item}`)

    onBeforeRouteUpdate(async(to) => {
        page.value = await store.setPage(`items/${to.params.item}`)
    })

    if (route.params.category !== page.value.category_url) {
        throw {statusCode: 404}
    }

    const itemInfo = computed(() => {
        let value = {
            id: page.value.id,
            name: page.value.name,
            square: page.value.square,
            floors: page.value.floors,
            short_description: page.value.short_description,
            vendor_code: page.value.vendor_code,
            price: page.value.price,
            house_kit_price: page.value.house_kit_price,
            build_price: page.value.build_price,
            imageFile: page.value.imageFile,
            category_name: page.value.category_name,
            category_url: page.value.category_url,
        }
        return value
    })

    function prev() {
        router.back()
    }
</script>

<template>
    <q-page class="page top-padding">
        <div class="container">
            <div class="breadcrumbs">
                <div class="bc-a" @click="prev()">
                    <span class="material-icons">
                        keyboard_backspace
                    </span>
                </div>
            </div>
        </div>
        <ItemBlock :item="itemInfo" />
        <component
            v-for="component in page.blocks"
            :key="component.id"
            :is="component.name"
            :componentData="component"
        />
    </q-page>
</template>
