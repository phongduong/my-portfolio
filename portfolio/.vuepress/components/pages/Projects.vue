<template>
  <div class="project-list">
    <h1 class="text-3xl">My projects</h1>
    <div
      class="project-item my-4"
      v-for="(project, i) in $frontmatter.projects"
      :key="i"
    >
      <h3 class="text-xl">
        <a :href="project.url" target="_blank" rel="noopener noreferrer">{{
          project.name
        }}</a>
      </h3>
      <p>{{ project.description }}</p>
    </div>
  </div>
</template>
