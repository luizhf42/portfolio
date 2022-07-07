<template>
  <section>
    <h1>Hello, World! I'm Luiz Henrique 🐢</h1>
    <p>
      I'm a brazilian front-end developer, actually working with Vue.js, Nuxt.js, TailwindCSS,
      TypeScript and other technologies and developing projects since 2021. I enjoy
      football, gaming, listening to rock and reading.
    </p>
    <p>
      You can find me on
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/luizhf42"
        >GitHub</a
      >,
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/luiz-henrique-felix"
        >LinkedIn</a
      >
      and
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.instagram.com/luizhf42"
        >Instagram</a
      >.
    </p>
  </section>
</template>

<style lang="postcss" scoped>
section {
  @apply bg-aboutMe text-white py-8 px-6 w-full sm:text-justify rounded-2xl;
  box-shadow: #10141059 0px 5px 15px;
}

h1 {
  @apply text-3xl font-bold text-center text-accent mb-10;
}

p {
  @apply text-xl mt-8;
}

a {
  @apply text-xl text-linkAccent duration-300;
}

a:hover {
  @apply text-accent underline;
}
</style>