<template>
  <div class="flex flex-col min-h-screen bg-black min-w-container w-full">
    <LayoutHeader
      main-class="bg-white flex-0-auto"
      main-tag="header"
      dark-theme
    />
    <main class="relative flex flex-row flex-auto break-all phone:break-normal phone:break-words w-full container mx-auto">
      <nuxt />
    </main>
    <LayoutFooter
      main-class="mt-auto bg-white flex-0-auto"
      main-tag="footer"
    />
  </div>
</template>

<script>
export default {
  head: {},
  mounted () {
    const gdprCookie = this.$cookies.get('gdpr')
    if (!gdprCookie) {
      this.$toast.global.gdpr()
    }
  }
}
</script>
