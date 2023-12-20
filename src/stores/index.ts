import { store } from 'quasar/wrappers'
import { createPinia } from 'pinia'
import { PiniaPluginContext } from 'pinia'
import { watch } from 'vue'
import { LocalStorage } from 'quasar'
/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */



export default store((/* { ssrContext } */) => {
  const pinia = createPinia()
  
  const serializer = {
    serialize: JSON.stringify,
    deserialize: JSON.parse
  }

  const storage = {
    getItem: (name: string) => {
      return serializer.deserialize(LocalStorage.getItem(name) as string)
    },
    setItem: (value: Object, name: string) => {
      LocalStorage.set(name, serializer.serialize(value))
    }
  }

  const persistedStores: Object = {
    useCart: true
  }

  async function MyPiniaPlugin({ store }: PiniaPluginContext) {
    if (process.env.CLIENT && store.$id in persistedStores) {
      const fromStorage = storage.getItem(store.$id)
      store.$patch(fromStorage)
      let toStore: Object = {}
      watch(
        store.$state,
        (state) => {
            toStore = state
            storage.setItem(toStore, store.$id)
        },
        { deep: true }
      )
    }
  }
  // You can add Pinia plugins here
  pinia.use(MyPiniaPlugin)

  return pinia
})
