<template>
  <div>
    <span class="logotype">EuroJackpot</span> | {{ myDate }}
  </div>
</template>

<script>
import { DateTime } from "luxon";

export default {
  name: "AeTitle",
  props: ["date"],
  computed: {
    myDate() {
      // I installed "luxon" to get the germanDate right (taking into account DST)
      const germanParts = {
        year: this.date.year,
        month: this.date.month,
        day: this.date.day,
        hour: this.date.hour,
        minute: this.date.minute,
      };
      const germanDate = DateTime.fromObject(germanParts, { zone: 'Europe/Berlin' });
      const locale = document.documentElement.lang || 'en-GB';
      const localDate = germanDate.toLocal().setLocale(locale);
      const result = localDate.toLocaleString(DateTime.DATE_HUGE);
      return result;
    },
  },
};
</script>

<style scoped>
.logotype {
  font-weight: bold;
}
</style>
