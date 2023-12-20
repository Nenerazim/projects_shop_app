<script lang="ts" setup>
    import { Loading } from 'quasar'
    import { ref, computed } from 'vue'
    import { $vfm } from 'vue-final-modal'
    import { useForm } from 'stores/form'
    import { useCart } from 'stores/cart'
    import ValidationClass from '../../validators/validator'

    const cart = useCart()
    const cartItems = computed(() => cart.cart)
    const form = useForm()
    const success = ref(false)
    const model = ref({
        name: '',
        last_name: '',
        email: '',
        phone: '',
        city: '',
        street: '',
        house: '',
        building: '',
        flat: '',
        items: {}
    })
    const fieldErrors = ref({})
    const validateRules = ref({
        name: ['empty'],
        last_name: ['empty'],
        email: ['email'],
        phone: ['empty']
    })

    function closeModal() {
        $vfm.hide('order')
    }

    function validation() {
        fieldErrors.value = {}
        const validation = new ValidationClass
        let validate = validation.validate(validateRules.value, model.value)
        if(validate !== true) {
            fieldErrors.value = validate
            return false
        }
        return true
    }

    function sendOrder() {
        Loading.show()
        if(!validation()) {
            Loading.hide()
            return false
        }
        let items = {} as any
        let i = 0
        for (let item in cartItems.value) {
            i++
            items[i] = {}
            items[i].count = cartItems.value[item].count
            items[i].item_id = cartItems.value[item].id
            items[i].order_price = cartItems.value[item].price
            items[i].type = cartItems.value[item].type
        }
        model.value.items = items
        const request = form.sendOrder(model.value)
        if (Boolean(request)) {
            setTimeout(() => {
                Loading.hide()
                success.value = true
                cart.clearCart()
            }, 500)
            setTimeout(() => {$vfm.hide('order')}, 3500)
        } else {
            Loading.hide()
            alert('Произошла ошибка при оформлении заказа')
        }
    }
</script>

<template>
    <vue-final-modal :name="'order'" :ssr="true" classes="modal-container-plugin" content-class="modal-content-plugin">
        <div class="modal-template">
            <div class="modal-head">
                <h3 class="mobile">Оформление заказа</h3>
            </div>
            <div class="modal-content">
                <p class="to-login" v-if="!success">Для оформления заказа - заполните поля ниже.</p>
                <form @submit.prevent="sendOrder()" v-if="!success">
                    <div class="form-group">
                        <input type="text" v-model="model.name" placeholder="Ваше Имя">
                        <div class="help-block" v-if="fieldErrors.name">{{fieldErrors.name}}</div>
                    </div>
                    <div class="form-group">
                        <input type="text" v-model="model.last_name" placeholder="Ваша Фамилия">
                        <div class="help-block" v-if="fieldErrors.last_name">{{fieldErrors.last_name}}</div>
                    </div>
                    <div class="form-group">
                        <input type="text" v-model="model.email" placeholder="Email">
                        <div class="help-block" v-if="fieldErrors.email">{{fieldErrors.email}}</div>
                    </div>
                    <div class="form-group">
                        <input type="text" v-model="model.phone" placeholder="Номер телефона">
                        <div class="help-block" v-if="fieldErrors.phone">{{fieldErrors.phone}}</div>
                    </div>
                    <div class="form-group">
                        <input type="text" v-model="model.city" placeholder="Город">
                        <div class="help-block" v-if="fieldErrors.city">{{fieldErrors.city}}</div>
                    </div>
                    <div class="form-group">
                        <input type="text" v-model="model.street" placeholder="Улица">
                        <div class="help-block" v-if="fieldErrors.street">{{fieldErrors.street}}</div>
                    </div>
                    <div class="form-group">
                        <input type="text" v-model="model.house" placeholder="Дом">
                        <div class="help-block" v-if="fieldErrors.house">{{fieldErrors.house}}</div>
                    </div>
                    <div class="form-group">
                        <input type="text" v-model="model.building" placeholder="Корпус">
                        <div class="help-block" v-if="fieldErrors.building">{{fieldErrors.building}}</div>
                    </div>
                    <div class="form-group">
                        <input type="text" v-model="model.flat" placeholder="Квартира/Офис">
                        <div class="help-block" v-if="fieldErrors.flat">{{fieldErrors.flat}}</div>
                    </div>
                    <div class="buttons-form-row">
                        <button type="submit" class="button blue bordered" style="width:unset">Оформить заказ</button>
                        <button @click="closeModal" type="button" class="button bordered" style="width:unset">Отмена</button>
                    </div>
                </form>
                <p class="to-login" v-else>Огромное спасибо за заказ! Наш менеджер свяжется с вами в ближайшее время.</p>
            </div>
        </div>
    </vue-final-modal>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'Order'
})
</script>
