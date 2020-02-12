<template>
  <div class="contact-list">
    <h1 class="text-3xl">Keep in touch with me</h1>
    <h3
      class="contact-item my-4 text-xl"
      v-for="(contact, i) in $page.frontmatter.contact"
      :key="i"
    >
      <a :href="`mailto:${contact.url}`" v-if="contact.name === 'Email'">
        {{ contact.name }}
      </a>
      <a :href="contact.url" target="_blank" rel="noopener noreferrer" v-else>
        {{ contact.name }}
      </a>
    </h3>
  </div>
</template>
