# Just a Basic Calculator


Just a script of a basic calculator that do 4 operations: **plus**, **division**, **times** and **subtraction**.

**How to use:**
- To use plus just call, **plus(_num1, num2_)**
- To use division just call, **divide(_num1, num2_)**
- To use times just call, **times(_num1, num2_)**
- To use subtracion just call, **sub(_num1, num2_)**

**Usage example**

```
var justabasiccalculator = require("justabasiccalculator")

const example = justabasiccalculator.plus(num1, num2); 
```
Or

```
import { plus } from 'justabasiccalculator';

const example = plus(num1, num2);
```
--------------------------------------

For async function, now just call like the example above:

```
const calcs = async () => {
  plus(2, 2);
};
calcs();
```


**_This is a package created for learning purposes!!_**

