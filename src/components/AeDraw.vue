<template>
  <div>
    <p>numbers: {{ numbers }}</p>
    <p>euroNumbers: {{ euroNumbers }}</p>
  </div>
</template>

<script>
export default {
  name: 'AeDraw',
  props: ['numbers', 'euroNumbers']
}
</script>

<style scoped>

</style>
