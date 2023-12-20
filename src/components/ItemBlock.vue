<script lang="ts" setup>
    import { IProject } from 'components/models'
    import { useCart } from 'stores/cart'
    import { computed } from 'vue'
    import { useRouter } from 'vue-router'
    import Price from 'components/widgets/Price.vue'
    import Img from 'components/helpers/Img.vue'

    const props = defineProps({
        item: {
            type: Object,
            required: true
        }
    })

    const cart = useCart()
    const cartItems = computed(() => cart.cart)
    const project = 1
    const house_kit = 2
    const building = 3

    const router = useRouter()
    function toCart(item: IProject, project: number) {
        if (!cart.toCart(item, project)) {
            router.push('/cart')
        }
    }

    function inCart(item: IProject, type: number) {
        let key = item.id + '-' + type
        let inCart = cartItems.value[key]
        if (inCart) {
            return true
        }
        return false
    }
</script>

<template>
    <section class="item-block-section">
        <div class="container">
            <div class="item-grid">
                <div class="image">
                    <Img :src="item.imageFile" :alt="`${item.name} - представление`" />
                </div>
                <div class="content">
                    <h1 class="mobile">{{item.name}}</h1>
                    <div class="info-item">Артикул: <strong>{{item.vendor_code}}</strong></div>
                    <div class="info-item">Площадь: <strong>{{item.square}} м<sup>2</sup></strong></div>
                    <div class="info-item">Этажи: <strong>{{item.floors}}</strong></div>
                    <div class="info-item">Категория: <strong>{{item.category_name}}</strong></div>
                    <div class="prices">
                        <div class="price">
                            <div class="name">Цена проекта</div>
                            <div class="actions">
                                <Price :price="item.price" />
                                <q-no-ssr>
                                    <button class="button primary small" v-bind:class="{blue: inCart(item, project)}" @click="toCart(item, project)">
                                        {{inCart(item, project) ? 'В корзине' : 'В корзину'}}
                                    </button>
                                </q-no-ssr>
                            </div>
                        </div>
                        <div class="price">
                            <div class="name">Цена домокомплекта</div>
                            <div class="actions">
                                <Price :price="item.house_kit_price" />
                                <q-no-ssr>
                                    <button class="button primary small" v-bind:class="{blue: inCart(item, house_kit)}" @click="toCart(item, house_kit)">
                                        {{inCart(item, house_kit) ? 'В корзине' : 'В корзину'}}
                                    </button>
                                </q-no-ssr>
                            </div>
                        </div>
                        <div class="price">
                            <div class="name">Цена строительства</div>
                            <div class="actions">
                                <Price :price="item.build_price" />
                                <q-no-ssr>
                                    <button class="button primary small" v-bind:class="{blue: inCart(item, building)}" @click="toCart(item, building)">
                                        {{inCart(item, building) ? 'В корзине' : 'В корзину'}}
                                    </button>
                                </q-no-ssr>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
export default defineComponent({
    name: 'ItemBlock'
})
</script>