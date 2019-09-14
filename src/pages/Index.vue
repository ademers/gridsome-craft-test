<template>
  <Layout>
    
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image alt="Example image" src="~/favicon.png" width="135" />
    
    <h1>Hello, world!</h1>
   
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur excepturi labore tempore expedita, et iste tenetur suscipit explicabo! Dolores, aperiam non officia eos quod asperiores
    </p>

    <p class="home-links">
      <a href="https://gridsome.org/docs" target="_blank" rel="noopener">Gridsome Docs</a>
      <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
    </p>

    <h2>Latest blog posts from Craft 3.3.x GraphQL API</h2>
    <ul>
      <li v-for="entry in $page.craft.entries" :key="entry.id">
        <b>{{ entry.title }} </b> <i>on</i> {{ entry.dateCreated }} <i>by</i> {{ entry.author.firstName }} {{ entry.author.lastName }}
      </li>
    </ul>
  </Layout>
</template>

<page-query>
query {
  craft {
    entries {
      title
      dateCreated
      author {
        firstName
        lastName
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
