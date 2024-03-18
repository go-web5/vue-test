<template>
  <div>
    <h1 class="top-title" v-html="title"></h1>
    <ButtonArea/>
  </div>
</template>

<script setup>
  import ButtonArea from './ButtonArea.vue'
  const title = "Vue Lessonへようこそ"
</script> 