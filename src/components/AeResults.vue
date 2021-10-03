<template>
  <div id="results">
    <ae-title class="title" :date="apiDate"></ae-title>
    <ae-draw
      :numbers="apiNumbers"
      :euro-numbers="apiEuroNumbers"
    ></ae-draw>
    <ae-odds :ranks="apiOdds"></ae-odds>
  </div>
</template>

<script>
import responseData from "../../dev-documents/sample-response.json";
import AeTitle from "./AeTitle.vue";
import AeDraw from "./AeDraw.vue";
import AeOdds from "./AeOdds.vue";

const lastDraw = responseData.last;

export default {
  name: "AeResults",
  components: {
    AeTitle,
    AeDraw,
    AeOdds,
  },
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
#results {
  text-align: left;
  width: 960px;
  margin: 0 auto;
}

.title {
  margin: 20px 0;
}
</style>
