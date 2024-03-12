<script>
export default {
  data() {
    return {
      count: 0
    }
  }
}
</script>

<template>
    <h1>Test Button is here!</h1>
  <button @click="count++">You clicked me {{ count }} times.</button>
</template>