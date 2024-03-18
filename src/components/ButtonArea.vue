<template>
  <div class="lesson-2">
    <section class="lesson-2__sction">
      <h2 class="lesson-2__title">Vue Lesson 2-1</h2>
      <p>ボタンを押すと、"v-if", "v-show"で表示や非表示の制御をする</p>
      <button @click="toggleDisplay()" class="button-a">表示/非表示ボタン</button>
      <div v-if="boolDisplay">
        現在表示中
      </div>
    </section>

    <section class="lesson-2__sction">
      <h2 class="lesson-2__title">Vue Lesson 2-2</h2>
      <p>ボタンを押したら、"v-for"で要素を連続して表示する</p>
      <button @click="onlyDisplay()" class="button-b">連続して表示する</button>
      <ul v-if="repeatDisplay">
        <li v-for="(fruit, i) in fruits" :key="i">
          {{ i + 1 }}: {{ fruit }}
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue"

const boolDisplay = ref(false);
const toggleDisplay = () => {
  boolDisplay.value = !boolDisplay.value;
};

const fruits = ref(['Apple', 'Banana', 'Cherry'])
const repeatDisplay = ref(false);
const onlyDisplay = () => {
  repeatDisplay.value = true;
};
</script>


<style scoped>
  .lesson-2 {
    margin-top: 40px;
  }
  section + section {
    margin-top: 40px;
  }
  .lesson-2__title {
    font-weight: bold;
    font-size: 1.6rem;
  }
  button {
    cursor: pointer;
  }
</style>