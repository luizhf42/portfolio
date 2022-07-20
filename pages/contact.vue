<template>
  <NuxtLayout name="main">
    <section>
      <SocialMedia
        class="linkedin"
        name="LinkedIn"
        svgPath="/linkedin.svg"
        href="https://www.linkedin.com/in/luiz-henrique-felix"
      />
      <SocialMedia
        class="github"
        name="GitHub"
        svgPath="/github.svg"
        href="https://github.com/luizhf42"
      />
      <SocialMedia
        class="discord"
        name="Discord"
        svgPath="/discord.svg"
        href="https://discordapp.com/users/368108586972348417"
      />
      <SocialMedia
        class="instagram"
        name="Instagram"
        svgPath="/instagram.svg"
        href="https://www.instagram.com/luizhf42"
      />
    </section>
  </NuxtLayout>
</template>

<style lang="postcss" scoped>
section {
  @apply w-full mx-auto py-3 justify-center grid grid-rows-4 grid-cols-1 gap-y-8 sm:grid-rows-2 sm:grid-cols-2 sm:gap-x-24 sm:gap-y-20;
}
</style>