<template>
  <div>
    <p>ranks: {{ ranks }}</p>
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
      <tr>
        <td>
          Tier
        </td>
        <td>
          Match
        </td>
        <td>
          Winners
        </td>
        <td>
          Amount
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
</style>
