<template>
  <NuxtLayout name="main">
    <section>
      <SocialMedia
        class="linkedin"
        socialMediaName="LinkedIn"
        svgPath="_nuxt/assets/images/linkedin.svg"
        socialMediaHref="https://www.linkedin.com/in/luiz-henrique-felix"
      />
      <SocialMedia
        class="github"
        socialMediaName="GitHub"
        svgPath="_nuxt/assets/images/github.svg"
        socialMediaHref="https://github.com/luizhf42"
      />
      <SocialMedia
        class="discord"
        socialMediaName="Discord"
        svgPath="_nuxt/assets/images/discord.svg"
        socialMediaHref="https://discordapp.com/users/368108586972348417"
      />
      <SocialMedia
        class="instagram"
        socialMediaName="Instagram"
        svgPath="_nuxt/assets/images/instagram.svg"
        socialMediaHref="https://www.instagram.com/luizhf42"
      />
    </section>
  </NuxtLayout>
</template>

<style lang="postcss" scoped>
section {
  @apply w-full mx-auto py-3 justify-center grid grid-rows-4 grid-cols-1 gap-y-8 sm:grid-rows-2 sm:grid-cols-2 sm:gap-x-24 sm:gap-y-20;
}
</style>