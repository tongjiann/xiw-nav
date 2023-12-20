<script setup lang="ts">
</script>

<template>
  <div id="building">
    <div class="app-config-provider">
      <RouterView/>
    </div>
  </div>
</template>
<style>
.app-config-provider {
  padding: 0;
  border: 0;
  width: 100%;
}

#building {
  left: 0;
  top: 0;
  background: url("https://www.bing.com/th?id=OHR.ValGardenaItaly_ZH-CN2405437494_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp");
  width: 100%;
  position: fixed;
  background-size: 100% 100%;
}
</style>
