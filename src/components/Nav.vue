<template>
  <!-- ナビゲーションエリア -->
  <nav>
    <ul class="nav-list">
      <li class="nav-item">
        <router-link to="/" class="nav-link home">
          Home
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/page-a" class="nav-link page-a">
          Page A
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/page-b" class="nav-link page-b">
          Page B
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/page-c" class="nav-link page-c">
          Page C
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<style src="../assets/Nav.css" scoped></style>