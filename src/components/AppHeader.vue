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

<style scoped>
header {
  display: grid;
  place-items: center;
  height: 200px;
}
.lesson-1 {
  font-weight: bold;
  font-size: 2rem;
  text-align: center;
}
.lesson-1__text {
  margin-top: 10px;
  text-align: center;
}
</style>