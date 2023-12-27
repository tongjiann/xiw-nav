<script setup lang="ts">
import {onMounted} from "vue";
import {getTodayUrl} from "./apis/wallpaper.ts";

onMounted(async () => {
  await getTodayUrl().then((res) => {
    console.log(res)
    document.body.style.background = `#CCCCCC url(${res}) no-repeat fixed center center`;
    document.body.style.backgroundSize = `cover`;
  })
})
</script>

<template>
  <RouterView/>
</template>
<style>

</style>
