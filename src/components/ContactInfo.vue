<script lang="ts" setup>
    const props = defineProps({
        componentData: {
            type: Object,
            required: true
        }
    })

    const data = props.componentData.settings
</script>

<template>
    <section class="contact-info">
        <div class="container">
            <div class="contact-block">
                <h5>Контактная информация</h5>
                <ul>
                    <li><b>{{data.company_name}}</b></li>
                    <li><b>Адрес:</b> {{data.company_address}}</li>
                    <li><b>Email:</b> {{data.email}}</li>
                    <li><b>Телефоны в офисе:</b> <span v-for="(phone, i) in data.company_phones" :key="i">{{phone}}; </span></li>
                    <li v-if="data.socials.vk && data.socials.vk !== ''"><b>VK:</b> {{data.socials.vk}}</li>
                    <li v-if="data.socials.telegram && data.socials.telegram !== ''"><b>Telegram:</b> {{data.socials.telegram}}</li>
                    <li v-if="data.socials.whatsapp && data.socials.whatsapp !== ''"><b>WhatsApp:</b> {{data.socials.whatsapp}}</li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
export default defineComponent({
    name: 'ContactInfo'
})
</script>