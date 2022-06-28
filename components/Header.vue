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
    <nav>
      <ul>
        <li><NuxtLink to="/techs">Techs</NuxtLink></li>
        <li><NuxtLink to="/projects">Projects</NuxtLink></li>
        <li><NuxtLink to="/social">Social</NuxtLink></li>
      </ul>
    </nav>
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

ul {
  @apply gap-4 px-3 py-5 bg-[#5bff3a99] rounded-xl hidden md:flex;
}

a {
  @apply drop-shadow-sm text-lg;
}

/* .router-link-active {
  @apply font-semibold;
} */
</style>