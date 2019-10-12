var assert = require('assert');

describe('Loading module: dynareq', function() {
    before(function() {
        const fs = require('fs');
        const dirReqModuleDir = 'node_modules/dynareq';
        if (!fs.existsSync(dirReqModuleDir)){
          fs.mkdirSync(dirReqModuleDir);
        }
        fs.copyFileSync('index.js',`${dirReqModuleDir}/index.js`);
        fs.copyFileSync('package.json',`${dirReqModuleDir}/package.json`);
        dynaReq = require('dynareq');
        
      });
    describe('Testing module dynareq', function() {
        it('Should be loaded', function() {
            
            assert.notEqual(dynaReq, undefined);
        });

        it('Can bulk require', function() {
            assert.notEqual(dynaReq.bulkRequire, undefined);
          });

        it('Bulk require should load 3 modules', function() {
            let numOfLoadedmModules=0;
            dynaReq.bulkRequire('bulkPathForTest', (loadedModule)=>{
                console.log(loadedModule);
                numOfLoadedmModules++;

            })
            assert.equal(numOfLoadedmModules, 3);
        });
      });
  
});