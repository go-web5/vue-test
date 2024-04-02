<template>
  <header :style="{ 'background-color': backgroundColor }">
    <div>
      <h1 class="lesson-1">Vue Lesson</h1>
      <p class="lesson-1__text">Vue Lesson 1 : ヘッダーのコンポーネントを作成して、それを画面A,B,Cに実装する</p>
    </div>
  </header>
</template>

<script setup>
defineProps([ "backgroundColor" ])
</script>

<style src="../assets/AppHeader.css" scoped></style>