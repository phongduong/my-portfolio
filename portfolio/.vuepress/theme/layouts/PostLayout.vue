<template>
  <section class="post-layout">
    <div class="post-title mb-6">
      <h1 class="text-5xl">{{ $page.frontmatter.title }}</h1>
      <h3 class="text-lg text-gray-700">
        Created at: {{ $page.frontmatter.date }}
      </h3>
    </div>
    <Content />
  </section>
</template>
