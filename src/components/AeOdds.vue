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
      <tr v-for="(rank, key) in ranks" :key="key">
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
