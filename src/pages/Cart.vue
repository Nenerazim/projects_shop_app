<script lang="ts" setup>
    import { ModalsContainer } from 'vue-final-modal'
    import { useCart } from 'stores/cart'
    import { computed } from 'vue'
    import { $vfm } from 'vue-final-modal'
    import Order from 'components/modals/Order.vue'
    import Price from 'components/widgets/Price.vue'

    const cart = useCart()
    const cartItems = computed(() => cart.cart)
    const order = computed(() => {{
        for (let item in cart.cart) {
            if (parseInt(cart.cart[item].price) === 0) {
                return true
            }
        }
    }})

    function toOrder() {
        $vfm.show({ component: Order })
    }
</script>
<template>
    <div class="page top-padding">
        <ModalsContainer></ModalsContainer>
        <section class="cart">
            <div class="container">
                <h1 class="mobile">Корзина</h1>
                <q-no-ssr>
                    <table class="cart-table" v-if="Object.keys(cartItems).length">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Название</th>
                                <th class="center">Артикул</th>
                                <th class="center">Количество</th>
                                <th class="center">Цена</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item, i) of cartItems" :key="i">
                                <td class="image">
                                    <img :src="item.imageFile.webp" :alt="item.name">
                                </td>
                                <td data-name="Название:">
                                    <div class="content">
                                        <div class="name">{{item.name}}</div>
                                        <div class="type">{{item.typeName}}</div>
                                    </div>
                                </td>
                                <td class="vendor center" data-name="Артикул:">
                                    {{item.vendor_code}}
                                </td>
                                <td class="counter-td center" data-name="Кол-во:">
                                    <div class="counter">
                                        <div class="minus-counter" @click="cart.decrement(item)"><i class="material-icons">remove</i></div>
                                        <div class="count">{{item.count}}</div>
                                        <div class="plus-counter" @click="cart.increment(item)"><i class="material-icons">add</i></div>
                                    </div>
                                </td>
                                <td class="price center" data-name="Цена:">
                                    <Price :price="item.price" />
                                </td>
                                <td class="delete">
                                    <i class="delete-cart material-icons" @click="cart.deleteCart(item)">delete</i>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="order-notify mg-50" v-else>
                        Ваша корзина пуста...
                    </div>
                    <div class="order-notify" v-if="order">
                        В корзине присутствуют товары под заказ, после оформления заказа с вами свяжется менеджер для уточнения стоимости.
                    </div>
                    <div class="order-notify mg-50" v-if="Object.keys(cartItems).length">
                        Ваш заказ на сумму: <div class="price-cart"><Price :price="cart.total" /></div> <button @click="toOrder" class="button blue bordered">Оформить заказ</button>
                    </div>
                </q-no-ssr>
            </div>
        </section>
    </div>
</template>
