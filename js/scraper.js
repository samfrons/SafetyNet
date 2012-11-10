var jsdom  = require('jsdom');
var fs     = require('fs');
var jquery = fs.readFileSync("./jquery-1.6.2.min.js").toString();

jsdom.env({
  html: 'http://www.nyintergroup.org/meetinglist/meetinglist.cfm?zone=01&borough=BX',
  src: [
    jquery
  ],
  done: function(errors, window) {
    var $ = window.$;
    console.log('HN Links');
    $('tbody:last tr').each(function() {
      console.log(' -', $(this).text());
    });
  }
});