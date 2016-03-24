'use strict';

let db = require('../../models/db');

exports.resetDB = function() {
  db.default.clear();
  db.default.init();
}
