# Ruc Validation

Allow validate ruc for peruvian business

### Installation

```
npm install validate-ruc --save
```

### Usage (NodeJs)
```
var ruc = require('validate-ruc');
```

### Usage (Browser)
```
<script src="index.js"></script>
```

```
ruc.validateRuc('20292005483');

//true

var isValid = ruc.validateRuc('7237722222');

//false
```
