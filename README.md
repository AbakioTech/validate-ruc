# Ruc Validation

Allow validate ruc for peruvian business

### Installation using npm or bower

```
npm install validate-ruc --save

bower install validate-ruc --save

```

### Usage from nodejs or browser
```
var ruc = require('validate-ruc');

<script src="index.js"></script>
```

```
var isValid = ruc.validateRuc('20292005483');

//true

var isValid = ruc.validateRuc('7237722222');

//false
```
