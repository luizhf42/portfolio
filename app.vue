<template>
  <NuxtPage />
</template>

<script lang="ts" setup>
// @ts-ignore
useHead({
  title: "LH's Portfolio",
  link: [
    { rel: "icon", type: "image/png", href: "./app-favicon.png" },
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossorigin: true,
    },
    {
      href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap",
      rel: "stylesheet",
    },
  ],
});
</script>
