(function() {
  var itemModel, mongoose, request;
  request = require('request');
  mongoose = require('mongoose');
  itemModel = mongoose.model('ItemModel', new mongoose.Schema({
    title: String,
    description: String,
    latitude: Number,
    longitude: Number
  }));
  exports.migrate = function(req, res) {
    request({
      url: 'http://www.nyintergroup.org/meetinglist/meetinglist.cfm?zone=01&borough=BX',
      'http://www.nyintergroup.org/meetinglist/meetinglist.cfm?zone=02&borough=BX', 'http://www.nyintergroup.org/meetinglist/meetinglist.cfm?zone=02&borough=BX',
      'http://www.nyintergroup.org/meetinglist/meetinglist.cfm?zone=03&borough=BX', 'http://www.nyintergroup.org/meetinglist/meetinglist.cfm?zone=03&borough=BX',
      'http://www.nyintergroup.org/meetinglist/meetinglist.cfm?zone=04&borough=BX', 'http://www.nyintergroup.org/meetinglist/meetinglist.cfm?zone=04&borough=BX',
      'http://www.nyintergroup.org/meetinglist/meetinglist.cfm?zone=05&borough=BX', 'http://www.nyintergroup.org/meetinglist/meetinglist.cfm?zone=05&borough=BX',
      'http://www.nyintergroup.org/meetinglist/meetinglist.cfm?zone=06&borough=BX', 'http://www.nyintergroup.org/meetinglist/meetinglist.cfm?zone=06&borough=BX',
      'http://www.nyintergroup.org/meetinglist/meetinglist.cfm?zone=07&borough=BX', 'http://www.nyintergroup.org/meetinglist/meetinglist.cfm?zone=07&borough=BX',
      'http://www.nyintergroup.org/meetinglist/meetinglist.cfm?zone=08&borough=BX', 'http://www.nyintergroup.org/meetinglist/meetinglist.cfm?zone=08&borough=BX',
      'http://www.nyintergroup.org/meetinglist/meetinglist.cfm?zone=09&borough=BX', 'http://www.nyintergroup.org/meetinglist/meetinglist.cfm?zone=09&borough=BX',
      'http://www.nyintergroup.org/meetinglist/meetinglist.cfm?zone=01&borough=BK', 'http://www.nyintergroup.org/meetinglist/meetinglist.cfm?zone=01&borough=BK',
      'http://www.nyintergroup.org/meetinglist/meetinglist.cfm?zone=01&borough=BK', 'http://www.nyintergroup.org/meetinglist/meetinglist.cfm?zone=01&borough=BK',
      'http://www.nyintergroup.org/meetinglist/meetinglist.cfm?zone=02&borough=BK', 'http://www.nyintergroup.org/meetinglist/meetinglist.cfm?zone=02&borough=BK',
      'http://www.nyintergroup.org/meetinglist/meetinglist.cfm?zone=03&borough=BK', 'http://www.nyintergroup.org/meetinglist/meetinglist.cfm?zone=03&borough=BK',
      'http://www.nyintergroup.org/meetinglist/meetinglist.cfm?zone=04&borough=BK', 'http://www.nyintergroup.org/meetinglist/meetinglist.cfm?zone=04&borough=BK',
      'http://www.nyintergroup.org/meetinglist/meetinglist.cfm?zone=05&borough=BK', 'http://www.nyintergroup.org/meetinglist/meetinglist.cfm?zone=05&borough=BK',
      'http://www.nyintergroup.org/meetinglist/meetinglist.cfm?zone=06&borough=BK', 'http://www.nyintergroup.org/meetinglist/meetinglist.cfm?zone=06&borough=BK',
      'http://www.nyintergroup.org/meetinglist/meetinglist.cfm?zone=07&borough=BK', 'http://www.nyintergroup.org/meetinglist/meetinglist.cfm?zone=07&borough=BK',
      'http://www.nyintergroup.org/meetinglist/meetinglist.cfm?zone=08&borough=BK', 'http://www.nyintergroup.org/meetinglist/meetinglist.cfm?zone=08&borough=BK',
      'http://www.nyintergroup.org/meetinglist/meetinglist.cfm?zone=01&borough=M', 'http://www.nyintergroup.org/meetinglist/meetinglist.cfm?zone=01&borough=M',
      'http://www.nyintergroup.org/meetinglist/meetinglist.cfm?zone=02&borough=M', 'http://www.nyintergroup.org/meetinglist/meetinglist.cfm?zone=02&borough=M',
      'http://www.nyintergroup.org/meetinglist/meetinglist.cfm?zone=03&borough=M', 'http://www.nyintergroup.org/meetinglist/meetinglist.cfm?zone=03&borough=M',
      'http://www.nyintergroup.org/meetinglist/meetinglist.cfm?zone=04&borough=M', 'http://www.nyintergroup.org/meetinglist/meetinglist.cfm?zone=04&borough=M',
      'http://www.nyintergroup.org/meetinglist/meetinglist.cfm?zone=05&borough=M', 'http://www.nyintergroup.org/meetinglist/meetinglist.cfm?zone=05&borough=M',
      'http://www.nyintergroup.org/meetinglist/meetinglist.cfm?zone=06&borough=M', 'http://www.nyintergroup.org/meetinglist/meetinglist.cfm?zone=06&borough=M',
      'http://www.nyintergroup.org/meetinglist/meetinglist.cfm?zone=07&borough=M', 'http://www.nyintergroup.org/meetinglist/meetinglist.cfm?zone=07&borough=M',
      'http://www.nyintergroup.org/meetinglist/meetinglist.cfm?zone=08&borough=M', 'http://www.nyintergroup.org/meetinglist/meetinglist.cfm?zone=08&borough=M',
      'http://www.nyintergroup.org/meetinglist/meetinglist.cfm?zone=09&borough=M', 'http://www.nyintergroup.org/meetinglist/meetinglist.cfm?zone=09&borough=M',
      'http://www.nyintergroup.org/meetinglist/meetinglist.cfm?zone=10&borough=M', 'http://www.nyintergroup.org/meetinglist/meetinglist.cfm?zone=10&borough=M',
      'http://www.nyintergroup.org/meetinglist/meetinglist.cfm?zone=01&borough=Q', 'http://www.nyintergroup.org/meetinglist/meetinglist.cfm?zone=01&borough=Q',
      'http://www.nyintergroup.org/meetinglist/meetinglist.cfm?zone=02&borough=Q', 'http://www.nyintergroup.org/meetinglist/meetinglist.cfm?zone=02&borough=Q',
      'http://www.nyintergroup.org/meetinglist/meetinglist.cfm?zone=03&borough=Q', 'http://www.nyintergroup.org/meetinglist/meetinglist.cfm?zone=03&borough=Q',
      'http://www.nyintergroup.org/meetinglist/meetinglist.cfm?zone=04&borough=Q', 'http://www.nyintergroup.org/meetinglist/meetinglist.cfm?zone=04&borough=Q',
      'http://www.nyintergroup.org/meetinglist/meetinglist.cfm?zone=05&borough=Q', 'http://www.nyintergroup.org/meetinglist/meetinglist.cfm?zone=05&borough=Q',
      'http://www.nyintergroup.org/meetinglist/meetinglist.cfm?zone=06&borough=Q', 'http://www.nyintergroup.org/meetinglist/meetinglist.cfm?zone=06&borough=Q',
      'http://www.nyintergroup.org/meetinglist/meetinglist.cfm?zone=07&borough=Q', 'http://www.nyintergroup.org/meetinglist/meetinglist.cfm?zone=07&borough=Q',
      'http://www.nyintergroup.org/meetinglist/meetinglist.cfm?zone=08&borough=Q', 'http://www.nyintergroup.org/meetinglist/meetinglist.cfm?zone=08&borough=Q',
      'http://www.nyintergroup.org/meetinglist/meetinglist.cfm?zone=09&borough=Q', 'http://www.nyintergroup.org/meetinglist/meetinglist.cfm?zone=09&borough=Q',
      'http://www.nyintergroup.org/meetinglist/meetinglist.cfm?zone=10&borough=Q', 'http://www.nyintergroup.org/meetinglist/meetinglist.cfm?zone=10&borough=Q',
      'http://www.nyintergroup.org/meetinglist/meetinglist.cfm?zone=11&borough=Q', 'http://www.nyintergroup.org/meetinglist/meetinglist.cfm?zone=11&borough=Q',
      'http://www.nyintergroup.org/meetinglist/meetinglist.cfm?zone=01&borough=SI', 'http://www.nyintergroup.org/meetinglist/meetinglist.cfm?zone=01&borough=SI',
      'http://www.nyintergroup.org/meetinglist/meetinglist.cfm?zone=02&borough=SI', 'http://www.nyintergroup.org/meetinglist/meetinglist.cfm?zone=02&borough=SI',
      'http://www.nyintergroup.org/meetinglist/meetinglist.cfm?zone=03&borough=SI', 'http://www.nyintergroup.org/meetinglist/meetinglist.cfm?zone=03&borough=SI',
      'http://www.nyintergroup.org/meetinglist/meetinglist.cfm?zone=04&borough=SI', 'http://www.nyintergroup.org/meetinglist/meetinglist.cfm?zone=04&borough=SI',
      'http://www.nyintergroup.org/meetinglist/meetinglist.cfm?borough=N', 'http://www.nyintergroup.org/meetinglist/meetinglist.cfm?borough=N',
      'http://www.nyintergroup.org/meetinglist/meetinglist.cfm?borough=SF', 'http://www.nyintergroup.org/meetinglist/meetinglist.cfm?borough=SF',
      'http://www.nyintergroup.org/meetinglist/meetinglist.cfm?borough=W', 'http://www.nyintergroup.org/meetinglist/meetinglist.cfm?borough=W',
      'http://www.nyintergroup.org/meetinglist/meetinglist.cfm?borough=R', 'http://www.nyintergroup.org/meetinglist/meetinglist.cfm?borough=R',
      'http://www.nyintergroup.org/meetinglist/meetinglist.cfm?borough=O', 'http://www.nyintergroup.org/meetinglist/meetinglist.cfm?borough=O',
      'http://www.nyintergroup.org/meetinglist/meetinglist.cfm?borough=PD', 'http://www.nyintergroup.org/meetinglist/meetinglist.cfm?borough=PD',
      'http://www.nyintergroup.org/meetinglist/meetinglist.cfm?borough=SF', 'http://www.nyintergroup.org/meetinglist/meetinglist.cfm?borough=SF',
      'http://www.nyintergroup.org/meetinglist/meetinglist.cfm?borough=SGU', 'http://www.nyintergroup.org/meetinglist/meetinglist.cfm?borough=SGU',
      'http://www.nyintergroup.org/meetinglist/meetinglist.cfm?borough=SF', 'http://www.nyintergroup.org/meetinglist/meetinglist.cfm?borough=SF',
      'http://www.nyintergroup.org/meetinglist/meetinglist.cfm?borough=N', 'http://www.nyintergroup.org/meetinglist/meetinglist.cfm?borough=N',
      'http://www.nyintergroup.org/meetinglist/meetinglist.cfm?borough=C', 'http://www.nyintergroup.org/meetinglist/meetinglist.cfm?borough=C',
      json: true
    }, function(err, data) {
      var item, model, _i, _len, _ref, _results;
      if (err) {
        console.log(err);
      }
      if (data) {
        _ref = data.body.data;
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          item = _ref[_i];
          model = {};
          model.title = item[8];
          model.description = item[13];
          model.latitude = item[16];
          model.longitude = item[17];
          itemModel = new ItemModel(model);
          _results.push(itemModel.save(function(err, result) {
            if (err) {
              return console.log("error = ", err);
            } else {
              return console.log("result = ", result);
            }
          }));
        }
        return _results;
      }
    });
    return false;
  };
}).call(this);
