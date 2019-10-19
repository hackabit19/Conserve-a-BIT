'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _ProjectGenerator = require('./build/ProjectGenerator.json');

var _ProjectGenerator2 = _interopRequireDefault(_ProjectGenerator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var instance = new _web2.default.eth.Contract(JSON.parse(_ProjectGenerator2.default.interface), '0xCf3aD0afBaBa5cE378724d9A09cAC62c6f2E08E7');

exports.default = instance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL2dlbmVyYXRvci5qcyJdLCJuYW1lcyI6WyJ3ZWIzIiwiUHJvamVjdEdlbmVyYXRvciIsImluc3RhbmNlIiwiZXRoIiwiQ29udHJhY3QiLCJKU09OIiwicGFyc2UiLCJpbnRlcmZhY2UiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU8sQUFBUCxBQUFpQixBQUFqQjs7OztBQUNBLEFBQU8sQUFBUCxBQUE2QixBQUE3Qjs7Ozs7O0FBRUEsSUFBTSxXQUFXLElBQUksY0FBSyxBQUFMLElBQVMsQUFBYixTQUNiLEtBQUssQUFBTCxNQUFXLDJCQUFpQixBQUE1QixBQURhLFlBRWIsQUFGYSxBQUFqQixBQUtBOztrQkFBZSxBQUFmIiwiZmlsZSI6ImdlbmVyYXRvci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYWRuYW5hem1hdC9Eb2N1bWVudHMvQ09OU0VSVkUifQ==