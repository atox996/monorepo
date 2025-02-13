<script lang="ts" setup>
import { greet } from "@my/js-utils";

console.log(greet("Web App"));
</script>

<template>
  <div id="app">
    <h1>Hello, Web App!</h1>
  </div>
</template>

<style>
#app {
  margin-top: 60px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
