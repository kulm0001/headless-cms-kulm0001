<template>
    <h2>Teaser component</h2>
    <div v-if="body" class="card">
        <h2>{{ blok.title }}</h2>
        <p>{{ blok.description }}</p>
    </div>

</template>

<script>
    export default {
        props:['blok']
    }
</script>

<style>
    .card{
        margin-left: 2rem;
    }
</style>