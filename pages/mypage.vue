<template>
  <div>
      The rest of the page
      {{data}}
    <pre>pending: {{ pending }}</pre>
    <button @click="loadPost">Refresh data</button>
  </div>
</template>

<script setup>
const config = useRuntimeConfig()

const { data, pending, error, refresh } = await useFetch('/post/', { baseURL: config.public.baseUrl})
// const { data, pending, error, refresh } = await useFetch(config.public.baseUrl + '/post/')
// const { data, pending, error, refresh } = await useFetch('/post/')
console.log(config.public.baseUrl)
console.log(data)
console.log(refresh)

const loadPost = () => {
  refresh()
}
// const users = await $fetch('/post', { baseUrl: config.public.baseUrl})
//     .catch((error) => error.data)
</script>
