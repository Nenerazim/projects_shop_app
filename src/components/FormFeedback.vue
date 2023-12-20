<script lang="ts" setup>
    import { useForm } from 'stores/form'
    import ValidationClass from '../validators/validator'
    import form_img from 'assets/media/images/form.webp'
    import { ref } from 'vue'

    const props = defineProps({
        componentData: {
            type: Object,
            required: true
        }
    })

    const data = props.componentData.settings
    
    const form = useForm()
    const success = ref(false)
    const model = ref({
        name: '',
        email: '',
        phone: '',
        message: ''
    })
    const fieldErrors = ref({})
    const validateRules = ref({
        name: ['empty'],
        email: ['email'],
        phone: ['empty']
    })

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

    function phoneCheck() {
      const x = model.value.phone.replace(/\D/g, '').match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/) as RegExpMatchArray
      if (!x[2] && x[1] !== '') {
        model.value.phone = x[1] === '7' ? '+7 (' : '+7 (' + x[1]
      } else {
        model.value.phone = !x[3] ? '+' + x[1] + ' (' + x[2] : '+' + x[1] + ' (' + x[2] + ') ' + x[3] + (x[4] ? '-' + x[4] : '') + (x[5] ? '-' + x[5] : '')
      }
    }

    async function sendData() {
        if(!validation()) {
            return false
        }
        const request = await form.sendForm(model.value)
        if (request) {
            success.value = true
        }
    }
</script>

<template>
    <section class="form-feedback">
        <div class="container">
            <div class="row gap-50">
                <div class="form">
                    <form @submit.prevent="sendData" v-if="!success">
                        <h4>{{data.title}}</h4>
                        <div class="form-group" v-bind:class="{errored: fieldErrors.name}">
                            <input type="text" v-model="model.name" placeholder="Ваше имя">
                            <div class="help-block" v-if="fieldErrors.name">{{fieldErrors.name}}</div>
                        </div>
                        <div class="form-group" v-bind:class="{errored: fieldErrors.email}">
                            <input type="text" v-model="model.email" placeholder="Email">
                            <div class="help-block" v-if="fieldErrors.email">{{fieldErrors.email}}</div>
                        </div>
                        <div class="form-group" v-bind:class="{errored: fieldErrors.phone}">
                            <input type="text" v-model="model.phone" placeholder="Телефон" @input="phoneCheck()">
                            <div class="help-block" v-if="fieldErrors.phone">{{fieldErrors.phone}}</div>
                        </div>
                        <div class="form-group">
                            <textarea type="text" v-model="model.message" rows="5" placeholder="Ваше сообщение"></textarea>
                        </div>
                        <button type="submit" class="button primary">Отправить сообщение</button>
                    </form>
                    <div class="form-success" v-else>
                        <h4>Ваше сообщение отправлено</h4>
                        {{data.success_message}}
                    </div>
                    <div class="image">
                    <img v-lazy="form_img" src="/default.png" alt="Изображение формы">
                </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
export default defineComponent({
    name: 'FormFeedback'
})
</script>