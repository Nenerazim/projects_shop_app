import { defineStore } from 'pinia'
import { api } from 'boot/axios'

export const useForm = defineStore({
    id: 'useForm',
    state: () => ({
    }),
    
    actions: {
        async sendForm(data: Object): Promise<boolean | undefined> {
            try {
                const page = await api.get(`https://admin.drevproektstroi.ru/api/form/feedback/${JSON.stringify(data)}`)
                if (page.data) {
                    return true
                } else {
                    return false
                }
            } catch (error) {
                console.log(error)
            }
        },
        async sendOrder(data: Object): Promise<boolean | undefined> {
            try {
                const page = await api.get(`https://admin.drevproektstroi.ru/api/form/order/${JSON.stringify(data)}`)
                if (page.data) {
                    return true
                } else {
                    return false
                }
            } catch (error) {
                console.log(error)
            }
        }
    }
})