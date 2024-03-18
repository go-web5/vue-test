<template>
  <div>
    <h1 class="top-title" v-html="title"></h1>
    <Nav/>
    <ButtonArea/>
  </div>
</template>

<script setup>
  import ButtonArea from './ButtonArea.vue'
  import Nav from './Nav.vue'
  const title = "Home"
</script> 

<style scoped>
.top-title {
  background-color: black;
  color: #fff;
  font-weight: bold;
  font-size: 2rem;
  display: grid;
  place-items: center;
  height: 200px;
}
</style>