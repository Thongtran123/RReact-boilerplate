/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react');
var DefaultLayout = React.createFactory(require('../layouts/Default'));

var Aboutme = React.createClass({
  displayName: 'Tran van thong',

  getDefaultProps: function() {
    return {
      layout: DefaultLayout
    };
  },

  render: function() {
    return (
      <div>
        <p>About me</p>
        <button>gi</button>
      </div>
    );
  }
});

module.exports = Aboutme;
