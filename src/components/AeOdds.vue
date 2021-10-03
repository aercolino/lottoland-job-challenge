<template>
  <div id="odds">
    <table width="100%">
      <tr>
        <th width="10%">
          {{ $t('Tier') }}
        </th>
        <th width="30%">
          {{ $t('Match') }}
        </th>
        <th width="30%">
          {{ $t('Winners') }}
        </th>
        <th width="30%">
          {{ $t('Amount') }}
        </th>
      </tr>
      <tr v-for="rank in myRanks" :key="rank.position">
        <td>
          {{ romanNumbers[rank.position] }}
        </td>
        <td>
          {{ combinations[rank.position] }}
        </td>
        <td>
          {{ rank.winners }}
        </td>
        <td>
          {{ prize(rank) }}
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
const tiersToMatches = {
 '': [], // FIXME what is rank0 used for?
 'I': [5, 2],
 'II': [5, 1],
 'III': [5, 0],
 'IV': [4, 2],
 'V': [4, 1],
 'VI': [4, 0],
 'VII': [3, 2],
 'VIII': [2, 2],
 'IX': [3, 1],
 'X': [3, 0],
 'XI': [1, 2],
 'XII': [2, 1],
};


export default {
  name: "AeOdds",
  props: ["ranks"],
  computed: {
    myRanks() {
      const entries = Object.entries(this.ranks);
      const sorted = entries.slice()
        .map(([key, rank]) => ({
          position: parseInt(key.replace('rank', ''), 10),
          ...rank,
        }))
        .sort(({position: position1}, {position: position2}) => {
          return position1 - position2;
        });
      // TODO verify that the guess to filter lines with no prize is right
      const result = sorted.filter(({prize}) => prize > 0);
      return result;
    },
    romanNumbers() {
      return Object.keys(tiersToMatches);
    },
    combinations() {
      return Object.values(tiersToMatches)
        .map(([numbers, euroNumbers]) => this.$t('X Numbers + Y Euronumbers', { X: numbers, Y: euroNumbers }));
    },
  },
  methods: {
    prize(rank) {
      const currency = this.$t('currency');
      const rate = this.$oneEuroTo[currency] || 0;
      return this.$n(rank.prize / 100 * rate, 'currency');
    }
  }
};
</script>

<style scoped>
#odds {
  font-size: 14px;
}

table {
  border-collapse: collapse;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 14px 21px;
}
</style>
