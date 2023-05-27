<template>
  id 페이지 {{route.params.id}}
</template>
<script setup>
const route = useRoute()
console.log(route.params.id)
</script>
