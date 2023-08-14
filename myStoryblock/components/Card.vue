<template>
    <h2>Card component</h2>
    <div v-if="body" class="card">
        <img src="" alt="">
        <h2>{{ blok.headline }}</h2>
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