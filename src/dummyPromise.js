'use strict';
import Promise                from 'bluebird';

export default {
  getPromise: function(str){
    return Promise.resolve(str);
  }
}
