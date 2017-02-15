const YAML = require('yamljs');
const nativeObject = YAML.load('./misc/client_support.yaml');
const yamlString = YAML.stringify(nativeObject, 4);
console.log(nativeObject);
