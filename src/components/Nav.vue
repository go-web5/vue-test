<template>
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

<style scoped>
  .nav-list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
  .nav-link {
    display: block;
    padding: 40px;
    font-weight: bold;
    font-size: 1.6rem;
    text-align: center;
  }
  .nav-item .home {
    background-color: black;
    color: #fff;
  }
  .nav-item .page-a {
    background-color: red;
  }
  .nav-item .page-b {
    background-color: yellow;
  }
  .nav-item .page-c {
    background-color: green;
  }
</style>