var juice = require('juice');
var result = juice("<style>div{color:red;}</style><div>123</div>");
console.log(result);