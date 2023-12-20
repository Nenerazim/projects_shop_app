import { defineStore } from 'pinia';
import { api } from 'boot/axios'
import { IPage } from 'components/models'

export const usePage = defineStore('usePage', {
  state: () => ({
    pages: {} as any,
  }),

  actions: {
    async setPage(url: string): Promise<IPage | never> {
      if (!(url in this.pages)) {
        await api.get(url)
        .then((response) => {
          this.pages[url] = response.data as IPage
        })
        .catch((error) => {
          console.log(error)
          return Promise.reject({ code: 404, url: '/' })
        })
      }
      return this.pages[url]
    }
  },
});
