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


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
