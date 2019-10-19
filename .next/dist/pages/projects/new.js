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

var _semanticUiReact = require('semantic-ui-react');

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _generator = require('../../ethereum/generator');

var _generator2 = _interopRequireDefault(_generator);

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/adnanazmat/Documents/CONSERVE/pages/projects/new.js?entry';


var ProjectNew = function (_Component) {
    (0, _inherits3.default)(ProjectNew, _Component);

    function ProjectNew() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, ProjectNew);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ProjectNew.__proto__ || (0, _getPrototypeOf2.default)(ProjectNew)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            goal: '',
            description: '',
            name: '',
            deadline: '',
            errormsg: '',
            loading: false
        }, _this.onSubmit = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
                var accounts;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                event.preventDefault();
                                _this.setState({ loading: true, errormsg: '' });
                                _context.prev = 2;
                                _context.next = 5;
                                return _web2.default.eth.getAccounts();

                            case 5:
                                accounts = _context.sent;
                                _context.next = 8;
                                return _generator2.default.methods.createProject(_this.state.name, _this.state.deadline, _this.state.description, _this.state.goal).send({
                                    from: accounts[0]
                                });

                            case 8:

                                _routes.Router.pushRoute('/');
                                _context.next = 14;
                                break;

                            case 11:
                                _context.prev = 11;
                                _context.t0 = _context['catch'](2);

                                _this.setState({ errormsg: _context.t0.message });

                            case 14:

                                _this.setState({ loading: false });

                            case 15:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[2, 11]]);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(ProjectNew, [{
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                }
            }, 'Create a Project!'), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: this.state.errormsg, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                }
            }, 'Goal'), _react2.default.createElement(_semanticUiReact.Input, {
                label: 'wei',
                labelPosition: 'right',
                value: this.state.goal,
                onChange: function onChange(event) {
                    return _this3.setState({ goal: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                }
            }, 'Description'), _react2.default.createElement(_semanticUiReact.Input, {
                labelPosition: 'right',
                value: this.state.description,
                onChange: function onChange(event) {
                    return _this3.setState({ description: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 68
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 69
                }
            }, 'Name'), _react2.default.createElement(_semanticUiReact.Input, {
                labelPosition: 'right',
                value: this.state.name,
                onChange: function onChange(event) {
                    return _this3.setState({ name: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 70
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 79
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 80
                }
            }, 'Deadline'), _react2.default.createElement(_semanticUiReact.Input, {
                label: 'days',
                labelPosition: 'right',
                value: this.state.deadline,
                onChange: function onChange(event) {
                    return _this3.setState({ deadline: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 81
                }
            })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Ooops!', content: this.state.errormsg, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 90
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading, primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 91
                }
            }, 'Create!')));
        }
    }]);

    return ProjectNew;
}(_react.Component);

exports.default = ProjectNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Byb2plY3RzL25ldy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkZvcm0iLCJCdXR0b24iLCJJbnB1dCIsIk1lc3NhZ2UiLCJMYXlvdXQiLCJnZW5lcmF0b3IiLCJ3ZWIzIiwiUm91dGVyIiwiUHJvamVjdE5ldyIsInN0YXRlIiwiZ29hbCIsImRlc2NyaXB0aW9uIiwibmFtZSIsImRlYWRsaW5lIiwiZXJyb3Jtc2ciLCJsb2FkaW5nIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic2V0U3RhdGUiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwibWV0aG9kcyIsImNyZWF0ZVByb2plY3QiLCJzZW5kIiwiZnJvbSIsInB1c2hSb3V0ZSIsIm1lc3NhZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFRLEFBQU0sQUFBUSxBQUFPOztBQUM3QixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFlOzs7O0FBQ3RCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFTLEFBQWM7Ozs7Ozs7SSxBQUVqQjs7Ozs7Ozs7Ozs7Ozs7O3dOQUNGLEE7a0JBQVEsQUFDRSxBQUNOO3lCQUZJLEFBRVMsQUFDYjtrQkFISSxBQUdFLEFBQ047c0JBSkksQUFJTSxBQUNWO3NCQUxJLEFBS00sQUFDVjtxQkFOSSxBQU1LLEE7QUFOTCxBQUNKLGlCQVFKLEE7aUdBQVcsaUJBQUEsQUFBTyxPQUFQO29CQUFBOzhFQUFBOzhCQUFBO3lEQUFBO2lDQUNQO3NDQUFBLEFBQU0sQUFDTjtzQ0FBQSxBQUFLLFNBQVMsRUFBQyxTQUFELEFBQVcsTUFBTSxVQUZ4QixBQUVQLEFBQWMsQUFBMkI7Z0RBRmxDO2dEQUFBO3VDQUlvQixjQUFBLEFBQUssSUFKekIsQUFJb0IsQUFBUzs7aUNBQTFCO0FBSkgsb0RBQUE7Z0RBQUE7MkRBTUcsQUFBVSxRQUFWLEFBQWtCLGNBQWMsTUFBQSxBQUFLLE1BQXJDLEFBQTJDLE1BQU0sTUFBQSxBQUFLLE1BQXRELEFBQTRELFVBQVUsTUFBQSxBQUFLLE1BQTNFLEFBQWlGLGFBQWEsTUFBQSxBQUFLLE1BQW5HLEFBQXlHLE1BQXpHLEFBQ0Q7MENBQ1MsU0FSWCxBQU1HLEFBQ0ksQUFDSSxBQUFTO0FBRGIsQUFDRixpQ0FGRjs7aUNBS047OytDQUFBLEFBQU8sVUFYSixBQVdILEFBQWlCO2dEQVhkO0FBQUE7O2lDQUFBO2dEQUFBO2dFQWNIOztzQ0FBQSxBQUFLLFNBQVMsRUFBQyxVQUFVLFlBZHRCLEFBY0gsQUFBYyxBQUFlOztpQ0FHakM7O3NDQUFBLEFBQUssU0FBUyxFQUFDLFNBakJSLEFBaUJQLEFBQWMsQUFBVTs7aUNBakJqQjtpQ0FBQTtnREFBQTs7QUFBQTt5Q0FBQTtBOzs7Ozs7Ozs7O2lDQXFCRjt5QkFDTDs7bUNBQ0ksQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSTtBQURKO0FBQUEsYUFBQSxrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBQ0osc0NBQUEsQUFBQyx1Q0FBSyxVQUFZLEtBQWxCLEFBQXVCLFVBQVUsT0FBTyxLQUFBLEFBQUssTUFBN0MsQUFBbUQ7OEJBQW5EO2dDQUFBLEFBQ0k7QUFESjsrQkFDSyxjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFDQSx5QkFBQSxBQUFDO3VCQUFELEFBQ1UsQUFDTjsrQkFGSixBQUVrQixBQUNkO3VCQUFTLEtBQUEsQUFBSyxNQUhsQixBQUd3QixBQUNwQjswQkFBVSx5QkFBQTsyQkFDTixPQUFBLEFBQUssU0FBUyxFQUFDLE1BQU0sTUFBQSxBQUFNLE9BRHJCLEFBQ04sQUFBYyxBQUFvQjtBQUwxQzs4QkFBQTtnQ0FIUixBQUNJLEFBRUksQUFVSjtBQVZJO0FBQ0ksaUNBU1AsY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBQ0EsZ0NBQUEsQUFBQzsrQkFBRCxBQUNrQixBQUNkO3VCQUFTLEtBQUEsQUFBSyxNQUZsQixBQUV3QixBQUNwQjswQkFBVSx5QkFBQTsyQkFDTixPQUFBLEFBQUssU0FBUyxFQUFDLGFBQWEsTUFBQSxBQUFNLE9BRDVCLEFBQ04sQUFBYyxBQUEyQjtBQUpqRDs4QkFBQTtnQ0FmUixBQWFJLEFBRUksQUFVSjtBQVZJO0FBQ0ksaUNBU1AsY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQSxBQUNBO0FBREE7QUFBQSwrQkFDQSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFEQSxBQUNBLEFBQ0EseUJBQUEsQUFBQzsrQkFBRCxBQUNrQixBQUNkO3VCQUFTLEtBQUEsQUFBSyxNQUZsQixBQUV3QixBQUNwQjswQkFBVSx5QkFBQTsyQkFDTixPQUFBLEFBQUssU0FBUyxFQUFDLE1BQU0sTUFBQSxBQUFNLE9BRHJCLEFBQ04sQUFBYyxBQUFvQjtBQUoxQzs4QkFBQTtnQ0EzQkosQUF5QkksQUFFQSxBQVNBO0FBVEE7QUFDSSxpQ0FRSCxjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFDQSw2QkFBQSxBQUFDO3VCQUFELEFBQ1UsQUFDTjsrQkFGSixBQUVrQixBQUNkO3VCQUFTLEtBQUEsQUFBSyxNQUhsQixBQUd3QixBQUNwQjswQkFBVSx5QkFBQTsyQkFDTixPQUFBLEFBQUssU0FBUyxFQUFDLFVBQVUsTUFBQSxBQUFNLE9BRHpCLEFBQ04sQUFBYyxBQUF3QjtBQUw5Qzs4QkFBQTtnQ0F0Q1IsQUFvQ0ksQUFFSSxBQVNKO0FBVEk7QUFDSSxpQ0FRUixBQUFDLDBDQUFRLE9BQVQsTUFBZSxRQUFmLEFBQXdCLFVBQVMsU0FBVyxLQUFBLEFBQUssTUFBakQsQUFBdUQ7OEJBQXZEO2dDQS9DSixBQStDSSxBQUNBO0FBREE7Z0NBQ0EsQUFBQyx5Q0FBTyxTQUFXLEtBQUEsQUFBSyxNQUF4QixBQUE4QixTQUFTLFNBQXZDOzhCQUFBO2dDQUFBO0FBQUE7ZUFuRFIsQUFDSSxBQUVBLEFBZ0RJLEFBSVg7Ozs7O0FBdkZvQixBLEFBMEZ6Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJuZXcuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2FkbmFuYXptYXQvRG9jdW1lbnRzL0NPTlNFUlZFIn0=