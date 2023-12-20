<script setup>

</script>

<template>
  <header class="app-header">
    <div class="container">
      <h1 class="logo">XIW</h1>
<!--      <div class="search">-->
<!--        <i class="iconfont icon-search"></i>-->
<!--        <input type="text" placeholder="搜一搜">-->
<!--      </div>-->
    </div>
  </header>
</template>


<style scoped lang='scss'>
.app-header {
  background-color: #3f51b5 !important;

  .container {
    display: flex;
    justify-content: space-between;
    width: auto;
    align-items: center;
    height: 70px;
  }

  .logo {
    float: left;
    width: 20%;
    color: #0ff;
  }

  .search {
    justify-content: flex-end;
    width: 15%;
    height: 32px;
    position: relative;
    border-bottom: 1px solid #e7e7e7;
    line-height: 32px;

    .icon-search {
      font-size: 18px;
      margin-left: 5px;
    }

    input {
      width: 140px;
      padding-left: 5px;
      color: #666;
    }
  }

}
</style>

