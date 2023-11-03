<template>
  <div class="code" @click="handleClick">这是一个测试用的代码块</div>
</template>

<script setup lang="ts">
const handleClick = () => {
  console.log(123);
};
</script>

<style scoped>
.code {
  color: red;
}
</style>
