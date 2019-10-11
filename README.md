# dir-req
Bulk require from a specified directory.
The provided path should be relative to project root and not to node_modules.

# How to use?
```js
var dirReq = require('dir-req');

dirReq.bulkRequire('bulkPathForTest',(newModule)=>{
    //do stuff with the new reuired module
});
```
