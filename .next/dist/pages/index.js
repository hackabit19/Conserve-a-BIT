'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _generator = require('../ethereum/generator');

var _generator2 = _interopRequireDefault(_generator);

var _semanticUiReact = require('semantic-ui-react');

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/adnanazmat/Documents/CONSERVE/pages/index.js?entry';


var ProjectIndex = function (_Component) {
    (0, _inherits3.default)(ProjectIndex, _Component);

    function ProjectIndex() {
        (0, _classCallCheck3.default)(this, ProjectIndex);

        return (0, _possibleConstructorReturn3.default)(this, (ProjectIndex.__proto__ || (0, _getPrototypeOf2.default)(ProjectIndex)).apply(this, arguments));
    }

    (0, _createClass3.default)(ProjectIndex, [{
        key: 'renderProjects',
        value: function renderProjects() {
            var items = this.props.projects.map(function (address) {
                return {
                    header: address,
                    description: _react2.default.createElement('a', {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 17
                        }
                    }, 'View Campaign'),
                    fluid: true
                };
            });
            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 21
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 28
                }
            }, _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                }
            }, _react2.default.createElement('link', { rel: 'stylesheet', href: '//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30
                }
            }), _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                }
            }, 'Open Projects'), _react2.default.createElement(_semanticUiReact.Button, {
                floated: 'right',
                content: 'Create Project',
                icon: 'add circle',
                primary: true,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                }
            }), this.renderProjects()));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                var projects;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _generator2.default.methods.AllProjects().call();

                            case 2:
                                projects = _context.sent;
                                return _context.abrupt('return', { projects: projects });

                            case 4:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps() {
                return _ref.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return ProjectIndex;
}(_react.Component);

exports.default = ProjectIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiZ2VuZXJhdG9yIiwiQ2FyZCIsIkJ1dHRvbiIsIkxheW91dCIsIlByb2plY3RJbmRleCIsIml0ZW1zIiwicHJvcHMiLCJwcm9qZWN0cyIsIm1hcCIsImhlYWRlciIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiIsImZsdWlkIiwicmVuZGVyUHJvamVjdHMiLCJtZXRob2RzIiwiQWxsUHJvamVjdHMiLCJjYWxsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFROzs7O0FBQ2YsQUFBTyxBQUFlOzs7O0FBQ3RCLEFBQVEsQUFBTTs7QUFDZCxBQUFPLEFBQVk7Ozs7Ozs7OztJLEFBRWI7Ozs7Ozs7Ozs7O3lDQU9lLEFBQ2I7Z0JBQU0sYUFBUSxBQUFLLE1BQUwsQUFBVyxTQUFYLEFBQW9CLElBQUksbUJBQVcsQUFDN0M7OzRCQUFPLEFBQ0ssQUFDUjtpREFBYSxjQUFBOztzQ0FBQTt3Q0FBQTtBQUFBO0FBQUEscUJBQUEsRUFGVixBQUVVLEFBQ2I7MkJBSEosQUFBTyxBQUdJLEFBRWQ7QUFMVSxBQUNIO0FBRlIsQUFBYyxBQU9kLGFBUGM7aURBT1AsQUFBQyxzQkFBRCxBQUFNLFNBQU0sT0FBWixBQUFtQjs4QkFBbkI7Z0NBQVAsQUFBTyxBQUNWO0FBRFU7YUFBQTs7OztpQ0FLRCxBQUNOO21DQUNJLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0E7QUFEQTtBQUFBLGFBQUEsa0JBQ0EsY0FBQTs7OEJBQUE7Z0NBQUEsQUFDQTtBQURBO0FBQUEsdURBQ00sS0FBTixBQUFVLGNBQWEsTUFBdkIsQUFBNEI7OEJBQTVCO2dDQURBLEFBQ0EsQUFDQTtBQURBO2dDQUNBLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQUZBLEFBRUEsQUFFQSxrQ0FBQSxBQUFDO3lCQUFELEFBQ2MsQUFDVjt5QkFGSixBQUVjLEFBQ1Y7c0JBSEosQUFHVyxBQUNQO3lCQUpKLEFBSWU7OzhCQUpmO2dDQUpBLEFBSUEsQUFNRTtBQU5GO0FBQ0kscUJBUFIsQUFDSSxBQUNBLEFBVUUsQUFBSyxBQUlkOzs7Ozs7Ozs7Ozs7dUNBbEMwQixvQkFBQSxBQUFVLFFBQVYsQUFBa0IsY0FBbEIsQUFBZ0MsQTs7aUNBQWpEO0E7aUVBQ0MsRUFBRSxVQUFGLEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFKWSxBLEFBd0MzQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYWRuYW5hem1hdC9Eb2N1bWVudHMvQ09OU0VSVkUifQ==