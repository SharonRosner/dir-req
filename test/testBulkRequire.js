var assert = require('assert');

describe('Loading module: dir-req', function() {
    before(function() {
        const fs = require('fs');
        const dirReqModuleDir = 'node_modules/dir-req';
        if (!fs.existsSync(dirReqModuleDir)){
          fs.mkdirSync(dirReqModuleDir);
        }
        fs.copyFileSync('index.js',`${dirReqModuleDir}/index.js`);
        fs.copyFileSync('package.json',`${dirReqModuleDir}/package.json`);
        dirReq = require('dir-req');
        
      });
    describe('Testing module dir-req', function() {
        it('Should be loaded', function() {
            
            assert.notEqual(dirReq, undefined);
        });

        it('Can bulk require', function() {
            assert.notEqual(dirReq.bulkRequire, undefined);
          });

        it('Bulk require should load 3 modules', function() {
            let numOfLoadedmModules=0;
            dirReq.bulkRequire('bulkPathForTest', (loadedModule)=>{
                console.log(loadedModule);
                numOfLoadedmModules++;

            })
            assert.equal(numOfLoadedmModules, 3);
        });
      });
  
});