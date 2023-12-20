<script lang="ts" setup>
  import { useCart } from 'stores/cart'
  import { computed } from 'vue'

  const cart = useCart()
  const cartCount = computed(() => Object.keys(cart.cart).length)
</script>
<template>
  <q-layout view="lHh Lpr lFf">
    <header>
      <ul>
        <li>
          <q-item tag="a" clickable to="/">
            <span class="material-icons">
              cottage
            </span>            
            <span class="name">Главная</span>
          </q-item>
        </li>
        <li>
          <q-item tag="a" clickable to="/catalog">
            <span class="material-icons">
              holiday_village
            </span>
            <span class="name">Каталог</span>
          </q-item>
        </li>
        <li>
          <q-item tag="a" clickable to="/services">
            <span class="material-icons">
              settings_suggest
            </span>
            <span class="name">Услуги</span>
          </q-item>
        </li>
        <li>
          <q-item tag="a" clickable to="/contact">
            <span class="material-icons">
              contact_mail
            </span>
            <span class="name">Контакты</span>            
          </q-item>
        </li>
        <li>
          <q-item tag="a" clickable to="/cart">
            <span class="material-icons">
              shopping_cart
            </span>
            <q-no-ssr>
              <div class="badge">
                {{cartCount}}
              </div>
            </q-no-ssr>
            <span class="name">Корзина</span>
          </q-item>
        </li>
      </ul>
    </header>     
    <q-page-container>
      <Suspense>
        <router-view />
      </Suspense>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'MainLayout'
})
</script>
