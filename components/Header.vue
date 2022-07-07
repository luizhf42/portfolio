<template>
  <header>
    <div class="media">
      <img
        src="~/assets/images/turtle.png"
        alt="My signature, a turtle emoji"
      />
      <div class="text">
        <h2 class="heading" v-if="userIsOnIndexPage">Luiz Henrique</h2>
        <NuxtLink class="heading" to="/" v-else>Go home 🏡</NuxtLink>
        <div class="row"></div>
        <NavigationMenu class="inner-menu" />
      </div>
    </div>
    <NavigationMenu class="outer-menu" />
  </header>
</template>

<script setup lang="ts">
const userIsOnIndexPage = ref<boolean>(true);

if (process.client)
  userIsOnIndexPage.value = window.location.pathname == "/" ? true : false;
</script>

<style lang="postcss" scoped>
header {
  @apply w-full max-w-[1000px] mx-auto mb-10 sm:mb-4 h-28 sm:h-40 max-h-[160px] flex flex-col items-start justify-center text-white;
}
.media {
  @apply h-full flex items-center gap-3;
}

img {
  @apply min-h-[80px] h-[65%] mr-2;
}

.text {
  @apply h-[100%] flex flex-col justify-center gap-[3px];
}

.heading {
  @apply text-2xl font-bold;
}
a.heading {
  @apply font-normal;
}
.row {
  @apply h-1 w-[100px] bg-white rounded-md;
}
</style>