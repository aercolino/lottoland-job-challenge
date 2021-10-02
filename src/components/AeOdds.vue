<template>
  <div>
    <table width="100%">
      <tr>
        <th width="10%">
          Tier
        </th>
        <th width="30%">
          Match
        </th>
        <th width="30%">
          Winners
        </th>
        <th width="30%">
          Amount
        </th>
      </tr>
      <tr v-for="(rank, key) in myRanks" :key="key">
        <td>
          {{ key }}
        </td>
        <td>
          Match
        </td>
        <td>
          {{ rank.winners }}
        </td>
        <td>
          {{ rank.prize }}
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "AeOdds",
  props: ["ranks"],
  computed: {
    myRanks() {
      const entries = Object.entries(this.ranks);
      const sorted = entries.slice().sort(([key1], [key2]) => {
        const order1 = parseInt(key1.replace('rank', ''), 10);
        const order2 = parseInt(key2.replace('rank', ''), 10);
        return order1 - order2;
      });
      const result = sorted.map(([, rank]) => rank);
      return result;
    },
  }
};
</script>

<style scoped>
table {
  border-collapse: collapse;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}
</style>
