<template>
    <h1>index.vue</h1>
    <template>
    <StoryblokComponent v-if="story" :blok="story.content" />
</template>

<!-- <Teaser :body="story.body" /> -->
<!--    <template v-for="block in story.body" :key="block._uid">
        <Card v-if="block.component === 'card'" :blok="block" />
        <Teaser v-if="block.component === 'teaser'" :blok="block" />
    </template> -->
    <ol>
    <div v-for="post in posts" :key="post.id">
        <li>
            <NuxtLink :to="`/post/${post.id}`" ><h2 v-html="post.title.rendered"></h2></NuxtLink >
            <p v-html="post.excerpt.rendered"></p>
        </li>
    </div>
</ol>
</template>

<script setup>
    const story = await useAsyncStoryblok('about', { version: 'draft' })
</script>

<!-- <script>
  export default {
      data: function(){
          return{
              story:'',
              posts:''
          }
      },
      created: function() {
          fetch('https://api-us.storyblok.com/v2/cdn/stories/about?version=draft&token=RpdujQKwLln9LBJIKk7M4Qtt&cv=1692024966')
          fetch('https://wptavern.com/wp-json/wp/v2/posts?_fields=author,id,excerpt,title,link')
          .then(resp => resp.json())
          .then(data => this.posts = data.story.content)
      }
  }
</script> -->