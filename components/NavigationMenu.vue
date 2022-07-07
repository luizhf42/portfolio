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
  @apply w-full;
}
.outer-menu ul {
  @apply flex sm:hidden items-center gap-6;
}

a {
  @apply relative text-xl text-accent text-opacity-80;
}

a::before {
  content: "";
  @apply absolute w-full h-[3px] rounded-[4px] bg-accent bottom-0 left-0 origin-right scale-x-0 duration-300 ease-in-out;
}

a:not(.router-link-active):hover::before {
  @apply origin-left scale-100;
}

.router-link-active {
  @apply font-bold text-opacity-100;
}
</style>