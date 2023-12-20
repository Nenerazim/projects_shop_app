import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'
import { IProject, ICartItem } from 'components/models'

const router = useRouter()

export const useCart = defineStore({
    id: 'useCart',
    state: () => ({
        cart: {} as any
    }),
    getters: {
        total(state) {
            let totalValue: number = 0
            for (let item in state.cart) {
                let price: number = Number(state.cart[item].price)
                totalValue = totalValue + price * Number(state.cart[item].count)
            }
            return totalValue
        },
        count(state) {
            return Object.keys(state.cart).length
        }
    },
    actions: {
        async toCart(item: IProject, type: number) {
            let itemCart = {} as ICartItem
            itemCart.id = item.id
            itemCart.name = item.name
            itemCart.vendor_code = item.vendor_code
            itemCart.imageFile = {webp: ''} 
            itemCart.imageFile.webp = item.imageFile.webp
            itemCart.count = 1
            switch (type) {
                case 1:
                    itemCart.price =  item.price
                    itemCart.type = type
                    itemCart.typeName = 'Проект'
                break
                case 2:
                    itemCart.price =  item.house_kit_price
                    itemCart.type = type
                    itemCart.typeName = 'Домокомплект'
                break
                case 3:
                    itemCart.price =  item.build_price
                    itemCart.type = type
                    itemCart.typeName = 'Строительство'
                break
            }
            let key = itemCart.id + '-' + itemCart.type
            if (key in this.cart) {
                return false
            }
            this.cart[key] = { ...itemCart }
            return true
        },
        async deleteCart(item: ICartItem) {
            let key = item.id + '-' + item.type
            delete this.cart[key]
        },
        async increment(item: ICartItem) {
            let key = item.id + '-' + item.type
            this.cart[key].count++
        },
        async decrement(item: ICartItem) {
            let key = item.id + '-' + item.type
            if (this.cart[key].count > 1) {
                this.cart[key].count--
            }
        },
        async clearCart() {
            this.cart = {}
        }
    }
})