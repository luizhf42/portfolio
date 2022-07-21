<template>
  <li class="project">
    <div class="emoji">{{ emoji }}</div>
    <div class="text">
      <h3>
        <a
          target="_blank"
          rel="noopener noreferrer"
          :href="`https://github.com/luizhf42/${repositoryName}`"
          >{{ name }}</a
        >
      </h3>
      <p>{{ description }}</p>
    </div>
  </li>
</template>

<script setup lang="ts">
const projectProps = defineProps({
  name: String,
  emoji: String,
  description: String,
  repositoryName: String,
});
</script>

<style lang="postcss" scoped>
.project {
  @apply w-full bg-contentWrapper flex items-center mb-4 h-16 sm:h-24 rounded-xl overflow-hidden text-white pr-3;
}

.text,
h3,
a {
  @apply ellipsis;
}

.emoji {
  @apply h-full aspect-square flex items-center justify-center xs:text-3xl text-4xl sm:text-5xl;
}

h3 a {
  @apply text-[1.7rem] font-bold xs:text-2xl sm:text-2xl hover:text-accent transition;
}

p {
  @apply hidden text-sm sm:block;
}
</style>