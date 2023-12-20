<script lang="ts" setup>
  import { usePage } from 'stores/page'
  import { onBeforeRouteUpdate, useRoute, useRouter } from 'vue-router'
  import { ref } from 'vue'

  const route = useRoute()
  const store = usePage()
  const router = useRouter()
  const page = ref()
  page.value = await store.setPage(`pages/${route.params.page}`)

  onBeforeRouteUpdate(async(to) => {
    page.value = await store.setPage(`pages/${to.params.page}`)
  })
</script>

<template>
  <q-page class="page padding" v-if="page">
    <div class="container">
        <h1 class="mobile">{{page.name}}</h1>
    </div>
    <component
      v-for="component in page.blocks"
      :key="component.id"
      :is="component.name"
      :componentData="component"
      :type="'page'"
    />
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'DynamicPage'
})
</script>
