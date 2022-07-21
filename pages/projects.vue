<template>
  <NuxtLayout name="main">
    <section class="projects">
      <p>
        To see even more of my work, check my
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/luizhf42"
          >GitHub</a
        >!
      </p>
      <ul>
        <Project
          v-for="project in projects"
          :key="project.name"
          :name="project.name"
          :emoji="project.emoji"
          :description="project.description"
          :repositoryName="project.repositoryName"
        />
      </ul>
    </section>
  </NuxtLayout>
</template>

<script setup lang="ts">
import projects from "public/projects.json";
</script>

<style lang="postcss" scoped>
p {
  @apply text-white text-center text-xl font-semibold mb-6;
}
p > a {
  @apply main-content-a;
}
</style>