<template>
  <div id="results">
    <ae-title
      class="title"
      :date="apiDate"
    ></ae-title>
    <ae-draw
      :numbers="apiNumbers"
      :euro-numbers="apiEuroNumbers"
    ></ae-draw>
    <ae-odds :ranks="apiOdds"></ae-odds>
  </div>
</template>

<script>
import demoData from "../../dev-documents/sample-response.json";
import AeTitle from "./AeTitle.vue";
import AeDraw from "./AeDraw.vue";
import AeOdds from "./AeOdds.vue";

export default {
  name: "AeResults",
  components: {
    AeTitle,
    AeDraw,
    AeOdds,
  },
  data() {
    return {
      apiDate: null,
      apiNumbers: null,
      apiEuroNumbers: null,
      apiOdds: null,
    };
  },
  mounted() {
    let lastDraw;
    this.$axios
      .get("https://www.lottoland.com/api/drawings/euroJackpot")
      .then((response) => {
        lastDraw = response.data?.last || {};
      })
      .catch((reason) => {
        console.error(reason);
        console.warn("Using DEMO data");
        lastDraw = demoData.last;
      })
      .finally(() => {
        this.apiDate = lastDraw.date;
        this.apiNumbers = lastDraw.numbers;
        this.apiEuroNumbers = lastDraw.euroNumbers;
        this.apiOdds = lastDraw.odds;
      });
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
