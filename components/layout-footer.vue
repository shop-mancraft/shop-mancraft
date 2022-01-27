<template>
  <component
    :is="mainTag"
    :class="mainClass"
  >
    <section class="relative py-8 px-4 text-center desktop:mx-16 bg-gray-100 rounded-b">
      <div class="container mx-auto flex flex-wrap justify-around">
        Link section
      </div>
    </section>

    <div class="container mx-auto px-4">
      <div class="flex flex-wrap items-between justify-between p-4">
        <div class="text-xs w-auto lg:w-auto lg:mr-6 text-center">
          {{ '%s - MANCRAFT All rights reserved' | insertActualDate }}
        </div>
        <div class="flex text-xs">
          <nuxt-link
            class="uppercase"
            to="/privacy-policy"
          >
            Privacy Policy
          </nuxt-link>
        </div>
      </div>
    </div>
  </component>
</template>
<script>
export default {
  name: 'LayoutFooter',
  filters: {
    insertActualDate (value) {
      if (!value) { return '' }
      return value.replace(/%s/g, new Date().getFullYear() < 2022 ? '2021' : '2021 ~ ' + new Date().getFullYear())
    }
  },
  props: {
    mainTag: {
      type: String,
      default: 'footer',
      required: false
    },
    mainClass: {
      type: String,
      default: '',
      required: false
    }
  },
  computed: {
  }
}
</script>

<style>

</style>
