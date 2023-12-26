<template>
  <RouterView></RouterView>
</template>

<script setup>
import { getCategory } from '@/apis/testAPI'
getCategory().then(res => {
  console.log(res);
})
</script>

<style scoped></style>
