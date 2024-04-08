<template>
  <!-- トップページ -->
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

<style src="../assets/Home.css" scoped></style>