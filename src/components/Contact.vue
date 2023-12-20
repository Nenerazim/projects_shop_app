<script lang="ts" setup>
    import {ref} from 'vue'

    const props = defineProps({
        componentData: {
            type: Object,
            required: true
        }
    })

    const data = props.componentData.settings

    const activeCard = ref(null as any)
    const mainActive = ref(true)
    function toggleCard(index: number) {
        if (activeCard.value === index) {
            activeCard.value = null
            return
        }
        activeCard.value = index
    }

</script>

<template>
    <section class="contact-block-section">
        <div class="container">
            <div class="row gap-50">
                <div class="contacts-cards">
                    <div class="contact-card">
                        <div class="name" @click="mainActive = !mainActive">Наши контакты <i class="material-icons more">expand_more</i></div>
                        <div class="info" v-bind:class="{active: mainActive}">
                            <ul>
                                <li>
                                    <div class="contact-line address">
                                        <i class="material-icons">location_on</i>
                                        <div class="content">
                                            <div class="line-head">Наш адрес</div>
                                            <div class="text">{{data.company_address}}</div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="contact-line phones">
                                        <i class="material-icons">phone</i>
                                        <div class="content">
                                            <div class="line-head"><span v-for="(phone, i) of data.company_phones" :key="i">{{phone}}; </span></div>
                                            <div class="text">{{data.email}}</div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="contact-line phones">
                                        <i class="material-icons">schedule</i>
                                        <div class="content">
                                            <div class="line-head">Время работы</div>
                                            <div class="text">{{data.work_hours}}</div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="contact-card" v-for="(contact, i) of data.additional_contact" :key="i">
                        <div class="name" @click="toggleCard(i)">{{contact.name}} <i class="material-icons more">expand_more</i></div>
                        <div class="info" v-bind:class="{active: activeCard === i}">
                            <ul>
                                <li>
                                    <div class="contact-line address">
                                        <i class="material-icons">location_on</i>
                                        <div class="content">
                                            <div class="line-head">Адрес</div>
                                            <div class="text">{{contact.address}}</div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="contact-line phones">
                                        <i class="material-icons">phone</i>
                                        <div class="content">
                                            <div class="line-head">{{contact.phone}}</div>
                                            <div class="text">{{contact.email}}</div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="contact-line phones">
                                        <i class="material-icons">schedule</i>
                                        <div class="content">
                                            <div class="line-head">Время работы</div>
                                            <div class="text">{{contact.work_hours}}</div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    .show-contact-enter-active {
        transition: all .3s ease;
    }
    .show-contact-leave-active {
        transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .show-contact-enter, .show-contact-leave-to
    /* .slide-fade-leave-active до версии 2.1.8 */ {
        transform: translateX(10px);
        opacity: 0;
        max-height: 300px;
    }
</style>

<script lang="ts">
import {defineComponent} from 'vue'
export default defineComponent({
    name: 'Contact'
})
</script>