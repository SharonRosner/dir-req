# DynaReq
Bulk require from a specified directory.
The provided path should be relative to project root and not to node_modules.

# How to use?
```js
var dynaReq = require('dynareq');

dynaReq.bulkRequire('bulkPathForTest',(newModule)=>{
    //do stuff with the new required module
});
```
