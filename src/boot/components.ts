import { boot } from 'quasar/wrappers'
import Slider from 'components/Slider.vue'
import ProjectsTile from 'components/ProjectsTile.vue'
import Categories from 'components/Categories.vue'
import Services from 'components/Services.vue'
import Articles from 'components/Articles.vue'
import ArticlesFull from 'components/ArticlesFull.vue'
import Gallery from 'components/Gallery.vue'
import Accordion from 'components/Accordion.vue'
import SimpleText from 'components/SimpleText.vue'
import ContactInfo from 'components/ContactInfo.vue'
import Features from 'components/Features.vue'
import ImageText from 'components/ImageText.vue'
import About from 'components/About.vue'
import TwoImagesText from 'components/TwoImagesText.vue'
import Banner from 'components/Banner.vue'
import Carousel from 'components/Carousel.vue'
import Contact from 'components/Contact.vue'
import Delimiter from 'components/Delimiter.vue'
import FormFeedback from 'components/FormFeedback.vue'
import lazyPlugin from 'vue3-lazyload'
import vfmPlugin from 'vue-final-modal'
import Team from 'components/Team.vue'

export default boot(async ({ app }) => {
  app.use(vfmPlugin)
  app.use(lazyPlugin)
  app.component('slider', Slider)
  app.component('projects-tile', ProjectsTile)
  app.component('categories', Categories)
  app.component('services', Services)
  app.component('articles', Articles)
  app.component('articles-full', ArticlesFull)
  app.component('accordion', Accordion)
  app.component('gallery', Gallery)
  app.component('simple-text', SimpleText)
  app.component('contact-info', ContactInfo)
  app.component('features', Features)
  app.component('image-text', ImageText)
  app.component('two-images-text', TwoImagesText)
  app.component('about', About)
  app.component('banner', Banner)
  app.component('carousel', Carousel)
  app.component('contact', Contact)
  app.component('delimiter', Delimiter)
  app.component('form-feedback', FormFeedback)
  app.component('team', Team)
})