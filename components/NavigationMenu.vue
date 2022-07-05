<template>
  <nav>
    <ul>
      <li><NuxtLink to="/techs">Techs</NuxtLink></li>
      <li><NuxtLink to="/projects">Projects</NuxtLink></li>
      <li><NuxtLink to="/contact">Contact</NuxtLink></li>
    </ul>
  </nav>
</template>

<style lang="postcss" scoped>
.inner-menu ul {
  @apply hidden sm:flex gap-8 items-center;
}

.outer-menu {
  @apply w-3/5;
}
.outer-menu ul {
  @apply flex sm:hidden items-center gap-6 w-full;
}

a {
  @apply text-xl text-accent text-opacity-80;
}

.router-link-active {
  @apply font-bold text-opacity-100;
}
</style>