<template>
  <div>
  </div>
</template>

<script>
import responseData from '../../dev-documents/sample-response.json'
const lastDraw = responseData.last;

export default {
  name: "AeResults",
  data() {
    return {
      apiDate: lastDraw.date,
      apiNumbers: lastDraw.numbers,
      apiEuroNumbers: lastDraw.euroNumbers,
      apiOdds: lastDraw.odds,
    };
  },
};
</script>

<style scoped>
</style>
