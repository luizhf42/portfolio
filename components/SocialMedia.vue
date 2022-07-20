<template>
  <a
    :href="socialMediaHref"
    target="_blank"
    rel="noopener noreferrer"
    class="social-media"
  >
    <img :src="svgPath" />
    <h3>{{ socialMediaName }}</h3>
  </a>
</template>

<script setup lang="ts">
const props = defineProps({
  socialMediaName: String,
  socialMediaHref: String,
  svgPath: String,
});
</script>

<style lang="postcss" scoped>
.social-media {
  @apply bg-contentWrapper text-white flex items-center justify-center gap-3 h-24 px-6 py-4 rounded-xl transition hover:border hover:scale-105;
}

.discord {
  @apply hover:border-[#5865F2] hover:border;
}
.instagram {
  @apply hover:border-[#9C27B0] hover:border;
}
.linkedin {
  @apply hover:border-[#0A66C2] hover:border;
}
.github {
  @apply hover:border-white hover:border;
}

img {
  @apply h-[85%] md:h-full;
}

h3 {
  @apply text-3xl;
}
</style>