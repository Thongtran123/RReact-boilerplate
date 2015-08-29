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
      <div className="about">
        <p>About me</p>
        <img src="assets/images/lee.jpg" />
        <p>Thong tran</p>
        <p>Age : 21 year old</p>
        <p><a href="daa.uit.edu.vn">University information technology </a></p>
      </div>
    );
  }
});

module.exports = Aboutme;
