/*!
 * dir-req
 * Copyright(c) 2019 Sharon Rosner
 * ISC Licensed
 */

'use strict'

const fs = require('fs');

function requireFromFileName(fileName, path, callback) {
  if (isJsFile(fileName)) {
    const fileNameNoExt = fileName.replace('.js', '');
    /* 
    ../ - one exits the current module directory 
    ../ - another one to exit node_modules directory
    */
    const requestExportedModule = require(`../../${path}/${fileNameNoExt}`);
    if(callback!==undefined) callback(requestExportedModule);
  }
}

function isJsFile(fileName){
  return fileName.endsWith('.js');
}
  
  module.exports = {
      bulkRequire(path, callback){
                  
        var filesInPath = fs.readdirSync(path);
        filesInPath.forEach(fileName => {
          requireFromFileName(fileName, path, callback);
        });
      }
  };