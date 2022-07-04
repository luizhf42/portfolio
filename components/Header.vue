<template>
  <header>
    <div class="main">
      <img
        src="~/assets/images/turtle.png"
        alt="My signature, a turtle emoji"
      />
      <div class="text">
        <h2>Luiz Henrique</h2>
        <div class="row"></div>
        <h3>Front-end Developer</h3>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
</script>

<style lang="postcss" scoped>
header {
  @apply w-full max-w-[1000px] mx-auto h-40 max-h-[180px] flex items-center justify-between text-white;
}
.main {
  @apply h-full flex items-center gap-3;
}

img {
  @apply h-[65%];
}

.text {
  @apply h-[100%] flex flex-col justify-center gap-[5px];
}

h2 {
  @apply text-2xl font-bold;
}

h3 {
  @apply text-[1.1rem];
}

.row {
  @apply h-1 w-[100px] bg-white rounded-md;
}
/* .router-link-active {
  @apply font-semibold;
} */
</style>