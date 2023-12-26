<template>
  <el-button type="primary">Primary</el-button>
</template>

<script setup>
import { getCategory } from '@/apis/testAPI'
getCategory().then(res => {
  console.log(res);
})
</script>

<style scoped></style>
