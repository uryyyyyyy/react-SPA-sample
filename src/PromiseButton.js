/** @jsx React.DOM */

'use strict';

import React  from 'react';
import dummyPromise  from './dummyPromise';

export default React.createClass({
  getInitialState: function () {
    return { name: "not clicked"  };
  },
  changeState: function (str) {
    this.setState( {name: str });
  },
  onClick: function () {
    var str = this.preFunc();
    var pp = dummyPromise.getPromise(str);
    pp.then(this.postFunc)
    .then(this.changeState);
  },
  preFunc: function () {
    return "clicked";
  },
  postFunc: function (str) {
    return str + " : done";
  },
  render: function() {
    return <button onClick={ this.onClick } >{this.state.name}</button>;
  }
});
