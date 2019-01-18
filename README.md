Highcharts is a JavaScript charting library based on SVG, with fallbacks to VML and canvas for old browsers. This package also contains Highstock, the financial charting package, and Highmaps for geo maps.

_For NPM users, please note that this module replaces the previous [Highcharts Server](https://www.npmjs.com/package/highcharts-server) module._

* Official website: [www.highcharts.com](http://www.highcharts.com)
* Download page: [www.highcharts.com/download](http://www.highcharts.com/download)
* Licensing: [www.highcharts.com/license](http://www.highcharts.com/license)
* Support: [www.highcharts.com/support](http://www.highcharts.com/support)
* Issues: [Working repo](https://github.com/highcharts/highcharts/issues)

## Download and install Highcharts
Please note that there are several ways to use Highcharts. For general installation instructions, see [the docs](http://www.highcharts.com/docs/getting-started/installation).
### Use our CDN
Instead of downloading, you can use our CDN to access files directly. See [code.highcharts.com](https://code.highcharts.com) for details.
```
<script src="https://code.highcharts.com/highcharts.src.js"></script>
```
### Install from npm
See [npm documentation](https://docs.npmjs.com/) on how to get started with npm.
```
npm install --save highcharts
```

### Install from Bower
See [Bower documentation](https://bower.io/) on how to get started with Bower.
```
bower install highcharts
```

## Load Highcharts as a CommonJS module
Highcharts is using an UMD module pattern, as a result it has support for CommonJS.
*The following examples presumes you are using npm to install Highcharts, see [Download and install Highcharts](#download-and-install-highcharts) for more details.*
```js
// Load Highcharts
var Highcharts = require('highcharts');
// Alternatively, this is how to load Highstock. Highmaps is similar.
// var Highcharts = require('highcharts/highstock');

// Load the exporting module, and initialize it.
require('highcharts/modules/exporting')(Highcharts);

// Generate the chart
Highcharts.chart('container', {
  // options - see https://api.highcharts.com/highcharts
});
```

## Load Highcharts as an ES6 module
Since Highcharts supports CommonJS, it can be loaded as an ES6 module with the use of transpilers. Two common transpilers are [Babel](https://babeljs.io/) and [TypeScript](https://www.typescriptlang.org/). These have different interpretations of a CommonJS module, which affects your syntax.
*The following examples presumes you are using npm to install Highcharts, see [Download and install Highcharts](#download-and-install-highcharts) for more details.*
### Babel
```js
import Highcharts from 'highcharts';
// Alternatively, this is how to load Highstock. Highmaps is similar.
// import Highcharts from 'highcharts/highstock';

// Load the exporting module.
import Exporting from 'highcharts/modules/exporting';
// Initialize exporting module.
Exporting(Highcharts);

// Generate the chart
Highcharts.chart('container', {
  // options - see https://api.highcharts.com/highcharts
});
```
### TypeScript
```js
import * as Highcharts from 'highcharts';
// Alternatively, this is how to load Highstock. Highmaps is similar.
// import Highcharts from 'highcharts/highstock';

// Load the exporting module.
import * as Exporting from 'highcharts/modules/exporting';
// Initialize exporting module.
Exporting(Highcharts);

// Generate the chart
Highcharts.chart('container', {
  // options - see https://api.highcharts.com/highcharts
});
```

