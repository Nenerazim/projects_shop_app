<script lang="ts" setup>
  import { usePage } from 'stores/page'
  
  const store = usePage()
  const page = await store.setPage('pages/home')
</script>

<template>
  <q-page class="page">
    <component 
      v-for="component in page.blocks"
      :key="component.id"
      :is="component.name" 
      :componentData="component" 
    />
  </q-page>
</template>

