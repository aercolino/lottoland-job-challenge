# job-challenge


## Task

Create a page displaying the current EuroJackpot draw information similar to https://www.lottoland.com/en/eurojackpot/results-winning-numbers

Load the data from https://media.lottoland.com/api/drawings/euroJackpot via AJAX.

The site should work on all WebKit-based devices. Feel free to use native JavaScript or the frameworks of your choice.

Please use ES6 and transpile to ES5 with a task runner like Gulp, Grunt, or just NPM scripts.

Use GIT as version control system and commit preferably in small steps.


## Development notes


### Project creation

I created all the scaffolding of the project using the Vue CLI command `$ vue create job-challenge`.


### All WebKit-based devices

After some research on the subject, I came to the conclusion that it's tricky to define a _browserslist_ query that is so loose. See also https://github.com/browserslist/browserslist/issues/151. In particular, I cannot define an inclusion list of WebKit based browsers, nor an exclusion of non-WebKit based browsers, without incurring in future false negatives or false positives.

So, for the time being, I'm gonna stick with the default definition in the Vue project generator, knowing that that is not solved.


### Localization of draw time

I studied the EuroJackpot results pages across all the locales, the JSON API sample response, the preferred locale of the user, the resulting `Intl.DateTimeFormat`, `Intl.NumberFormat` when applied to the response data, and have come to these conclusions:

1. the sample response data is always in German, thus the `last.date.full` is not what is displayed on the page, not even in the case of the `de-DE` page at https://www.lottoland.com/eurojackpot/zahlen-quoten/24-09-2021
2. the code on the EuroJackpot results page selects a language like this: `document.documentElement.lang || 'de'`, ALWAYS, which is quite strange. For example, `hi` (Hindi):

    ```js
    {
      localePrefix     : '/hi',
      decimalSeparator : '.',
      groupingSeparator: ',',
      locale           : 'hi',
      timezone         : 'Asia/Calcutta',
      currency         : 'INR',
      currencySymbol   : '₹',
      currencyDecimals : '2',
      playerNr         : '',
      requestPrefix    : '/hi',
      language         : document.documentElement.lang || 'de',
      moneyFormat      : '{1}{0}',
      firstName: ''
    }
    ```

3. the locale specific pages are these:

    ```json
    {
      "hi":    "https://www.lottoland.asia/hi/eurojackpot/results-winning-numbers/24-09-2021",
      "en-IE": "https://www.lottoland.ie/eurojackpot/results-winning-numbers/24-09-2021",
      "de-DE": "https://www.lottoland.com/eurojackpot/zahlen-quoten/24-09-2021",
      "hu-HU": "https://www.lottoland.eu/eurojackpot/lottoszamok/24-09-2021",
      "pt-BR": "https://www.lottoland.com/br/eurojackpot/resultados/24-09-2021",
      "en-GI": "https://www.lottoland.gi/eurojackpot/results-winning-numbers/24-09-2021",
      "en-IN": "https://www.lottoland.asia/eurojackpot/results-winning-numbers/24-09-2021",
      "en":    "https://www.lottoland.com/en/eurojackpot/results-winning-numbers/24-09-2021",
      "en-ZA": "https://www.lottoland.co.za/eurojackpot/results-winning-numbers/24-09-2021",
      "en-MT": "https://www.lottoland.com/mt/eurojackpot/results-winning-numbers/24-09-2021",
      "en-NT": "https://www.lottoland.com/global/eurojackpot/results-winning-numbers/24-09-2021",
      "es":    "https://www.lotoland.com/eurojackpot/resultados/24-09-2021",
      "es-MX": "https://www.lotoland.com/mx/eurojackpot/resultados/24-09-2021",
      "de-AT": "https://www.lottoland.at/eurojackpot/zahlen-quoten/24-09-2021",
      "en-NZ": "https://www.lottoland.com/nz/eurojackpot/results-winning-numbers/24-09-2021",
      "sv-SE": "https://www.lottoland.se/eurojackpot/resultat/24-09-2021",
      "ja":    "https://www.lottoland.com/jp/eurojackpot/results-winning-numbers/24-09-2021",
      "sk":    "https://www.lottoland.com/sk/eurojackpot/vysledky/24-09-2021",
      "en-AU": "https://www.lottoland.com.au/eurojackpot/results/24-09-2021",
      "pl":    "https://www.lottoland.com/pl/eurojackpot/wyniki-numery-wygrane/24-09-2021",
      "en-GB": "https://www.lottoland.co.uk/eurojackpot/results-winning-numbers/24-09-2021",
    }
    ```

4. for group 1 locales (`de-DE, de-AT`), the displayed date is `new Intl.DateTimeFormat(locale, { dateStyle: 'full' }).format(date)`, which makes sense
5. for group 2 locales (`hi, en-IE, en-GI, en-IN, en, en-ZA, en-MT, en-NT, en-NZ, en-GB`), the displayed date is ALWAYS the default locale (`en-US`) of `moment(date).format('dddd D MMM YYYY')`, example: _Friday 24 Sep 2021_
6. for group 3 locales (`hu-HU, pt-BR, es, es-MX, sv-SE, ja, sk, pl`), the displayed date has a custom format, also dependent from the locale
7. for `en-AU`, the intended page is not found


#### Luxon

I thought I'd use the same as group 1 with a pure JS solution, but after some troubles at getting the right local date based on the provided german date, I decided to use the _Luxon_ library.

Anyway, here is the incomplete code I wrote. I was going to use `isEST` to create a date by parsing a string containing a numeric UTC offset. But it didn't smell right.

```js
  zeroPad(anything) {
    return `0${anything}`.slice(-2);
  },
  lastSunday(year, month) {
    const lastDay = new Date(year, month, 0);
    const result = new Date(lastDay);
    result.setDate(lastDay.getDate() - lastDay.getDay());
    return result;
  },
  isEST(year, month, day) {
    // European Summer Time
    // begins (clocks go forward)
    // at 01:00 UTC on the last Sunday in March,
    // and ends (clocks go back)
    // at 01:00 UTC on the last Sunday in October.
    const lastSundayOfMarch = this.lastSunday(year, 3).getDate();
    const firstDate = `03-${lastSundayOfMarch}`;
    const lastSundayOfOctober = this.lastSunday(year, 10).getDate();
    const lastDate = `10-${lastSundayOfOctober}`;
    const date = `${this.zeroPad(month)}-${this.zeroPad(day)}`;
    return firstDate <= date && date <= lastDate;
  },
```


### Balls

I searched _lottery balls_ on Google and found this implementation which I liked: https://codepen.io/jimmie/pen/bgQWgQ. I then simplified it to this: https://codepen.io/aercolino/pen/GRELjRR.


### Translation of Match / Numbers, Euronumbers

I've limited implemented locales to "en", "de", and "sv-SE". You can easily test different alternatives from here

./src/App.vue

```js
  mounted() {
    // this.$i18n.locale = 'de';
    // this.$i18n.locale = 'sv-SE';
  }
```


Note that there is an error in the [_en_ page](https://www.lottoland.com/en/eurojackpot/results-winning-numbers/24-09-2021): _X_ is right but _VI_ is wrong

|Tier|Match|Winners|Amount|
|---|---|---|---|
|VI|4 Numbers + 0 Euronumber|1,885x|€86.00|
|X|3 Numbers + 0 Euronumbers|77,147x|€12.90|

---


## Project setup

```sh
npm install
```

### Compiles and hot-reloads for development

```sh
npm run serve
```

### Compiles and minifies for production

```sh
npm run build
```

### Lints and fixes files

```sh
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
