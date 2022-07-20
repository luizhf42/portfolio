<template>
  <NuxtLayout name="main">
    <p class="text-white mb-8">Not finished yet! Come back later.</p>
    <section class="projects">
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
</style>