//Объект проекта/товара
export interface IProject {
  id: number,
  name:string,
  vendor_code: string,
  short_description: string,
  price: number,
  house_kit_price: number,
  build_price: number,
  square: number,
  floors: number,
  category_url: string,
  category_name: string,
  imageFile: {
    url: string,
    webp: string,
    thumb: string
  }
}

//Объект проекта/товара лежащего в корзине
export interface ICartItem {
  id: number,
  imageFile: {
      webp: string
  },
  price: number,
  house_kit_price: number,
  build_price: number,
  category_url: string,
  name: string,
  category_name: string,
  type: number,
  floors: number,
  short_description: string,
  count: number,
  typeName: string,
  vendor_code: string
}

//Объект страницы
export interface IPage {
  id: number,
  image_file: string,
  meta_description: string,
  meta_title: string,
  name: string,
  url: string,
  status: number
  blocks: Array<{
      id: number
      name: string
      settings: {
          id: number
      }
  }>
}