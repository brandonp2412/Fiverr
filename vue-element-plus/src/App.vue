<script setup lang="ts">
import Left from "./components/Left.vue";
import Right from "./components/Right.vue";
</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo-vue"
      src="./assets/logo.svg"
      width="125"
      height="125"
    />

    <div class="wrapper">
      <Left msg="Vue + Element Plus" />
    </div>
    <img
      alt="Element Plus logo"
      class="logo-element"
      src="./assets/element-plus-logo.svg"
      width="125"
      height="125"
    />
  </header>

  <main>
    <Right />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo-element {
  margin-left: 2rem;
}

.logo-vue {
  margin-right: 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
