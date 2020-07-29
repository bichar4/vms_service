'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv2.default.config();
var PORT = process.env.PORT || 8000;
var app = (0, _express2.default)();

app.use(_express2.default.urlencoded({
  extended: true
}));
app.use(_express2.default.json());
app.use((0, _cors2.default)());
app.use((0, _morgan2.default)('tiny'));

app.listen(PORT, function (err, succ) {
  if (!err) {
    console.log('server is up and running at ' + PORT);
  } else {
    console.log('server could not be started');
  }
});