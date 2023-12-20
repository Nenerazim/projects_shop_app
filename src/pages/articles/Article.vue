<script lang="ts" setup>
  import { usePage } from 'stores/page'
  import { useRoute, useRouter } from 'vue-router'

  const route = useRoute()
  const router = useRouter()
  const store = usePage()
  const page = await store.setPage(`articles/${route.params.article}`)

  function prev() {
    router.push('/')
  }
</script>

<template>
    <q-page class="page top-padding">
        <div class="container service-page">
            <div class="breadcrumbs">
                <div class="bc-a" @click="prev()">
                    <span class="material-icons">
                        keyboard_backspace
                    </span>
                </div>
            </div>
            <h1 class="mobile">{{page.name}}</h1>
            <img class="mg-bottom" :src="page.imageFile.webp" :alt="`${page.name} - основное изображение`">
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
