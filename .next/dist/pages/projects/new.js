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
                                _context.next = 13;
                                break;

                            case 10:
                                _context.prev = 10;
                                _context.t0 = _context['catch'](2);

                                _this.setState({ errormsg: _context.t0.message });

                            case 13:

                                _this.setState({ loading: false });

                            case 14:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[2, 10]]);
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
                    lineNumber: 38
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                }
            }, 'Create a Campaign!'), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: this.state.errormsg, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                }
            }, 'Goal'), _react2.default.createElement(_semanticUiReact.Input, {
                label: 'wei',
                labelPosition: 'right',
                value: this.state.goal,
                onChange: function onChange(event) {
                    return _this3.setState({ goal: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                }
            }, 'Description'), _react2.default.createElement(_semanticUiReact.Input, {
                labelPosition: 'right',
                value: this.state.description,
                onChange: function onChange(event) {
                    return _this3.setState({ description: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 65
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 66
                }
            }, 'Name'), _react2.default.createElement(_semanticUiReact.Input, {
                labelPosition: 'right',
                value: this.state.name,
                onChange: function onChange(event) {
                    return _this3.setState({ name: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 67
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 76
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 77
                }
            }, 'Deadline'), _react2.default.createElement(_semanticUiReact.Input, {
                label: 'days',
                labelPosition: 'right',
                value: this.state.deadline,
                onChange: function onChange(event) {
                    return _this3.setState({ deadline: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 78
                }
            })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Ooops!', content: this.state.errormsg, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 87
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading, primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 88
                }
            }, 'Create!')));
        }
    }]);

    return ProjectNew;
}(_react.Component);

exports.default = ProjectNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Byb2plY3RzL25ldy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkZvcm0iLCJCdXR0b24iLCJJbnB1dCIsIk1lc3NhZ2UiLCJMYXlvdXQiLCJnZW5lcmF0b3IiLCJ3ZWIzIiwiUHJvamVjdE5ldyIsInN0YXRlIiwiZ29hbCIsImRlc2NyaXB0aW9uIiwibmFtZSIsImRlYWRsaW5lIiwiZXJyb3Jtc2ciLCJsb2FkaW5nIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic2V0U3RhdGUiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwibWV0aG9kcyIsImNyZWF0ZVByb2plY3QiLCJzZW5kIiwiZnJvbSIsIm1lc3NhZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFRLEFBQU0sQUFBUSxBQUFPOztBQUM3QixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFlOzs7O0FBQ3RCLEFBQU8sQUFBVTs7Ozs7Ozs7O0ksQUFFWDs7Ozs7Ozs7Ozs7Ozs7O3dOLEFBQ0Y7a0JBQVEsQUFDRSxBQUNOO3lCQUZJLEFBRVMsQUFDYjtrQkFISSxBQUdFLEFBQ047c0JBSkksQUFJTSxBQUNWO3NCQUxJLEFBS00sQUFDVjtxQkFOSSxBQU1LLEE7QUFOTCxBQUNKLGlCLEFBUUo7aUdBQVcsaUJBQUEsQUFBTyxPQUFQO29CQUFBOzhFQUFBOzhCQUFBO3lEQUFBO2lDQUNQO3NDQUFBLEFBQU0sQUFDTjtzQ0FBQSxBQUFLLFNBQVMsRUFBQyxTQUFELEFBQVcsTUFBTSxVQUZ4QixBQUVQLEFBQWMsQUFBMkI7Z0RBRmxDO2dEQUFBO3VDQUlvQixjQUFBLEFBQUssSUFKekIsQUFJb0IsQUFBUzs7aUNBQTFCO0FBSkgsb0RBQUE7Z0RBQUE7MkRBTUcsQUFBVSxRQUFWLEFBQWtCLGNBQWMsTUFBQSxBQUFLLE1BQXJDLEFBQTJDLE1BQU0sTUFBQSxBQUFLLE1BQXRELEFBQTRELFVBQVUsTUFBQSxBQUFLLE1BQTNFLEFBQWlGLGFBQWEsTUFBQSxBQUFLLE1BQW5HLEFBQXlHLE1BQXpHLEFBQ0Q7MENBQ1MsU0FSWCxBQU1HLEFBQ0ksQUFDSSxBQUFTO0FBRGIsQUFDRixpQ0FGRjs7aUNBTkg7Z0RBQUE7QUFBQTs7aUNBQUE7Z0RBQUE7Z0VBWUg7O3NDQUFBLEFBQUssU0FBUyxFQUFDLFVBQVUsWUFadEIsQUFZSCxBQUFjLEFBQWU7O2lDQUdqQzs7c0NBQUEsQUFBSyxTQUFTLEVBQUMsU0FmUixBQWVQLEFBQWMsQUFBVTs7aUNBZmpCO2lDQUFBO2dEQUFBOztBQUFBO3lDQUFBO0E7Ozs7Ozs7Ozs7aUNBbUJGO3lCQUNMOzttQ0FDSSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNJO0FBREo7QUFBQSxhQUFBLGtCQUNJLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFDSix1Q0FBQSxBQUFDLHVDQUFLLFVBQVksS0FBbEIsQUFBdUIsVUFBVSxPQUFPLEtBQUEsQUFBSyxNQUE3QyxBQUFtRDs4QkFBbkQ7Z0NBQUEsQUFDSTtBQURKOytCQUNLLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUNBLHlCQUFBLEFBQUM7dUJBQUQsQUFDVSxBQUNOOytCQUZKLEFBRWtCLEFBQ2Q7dUJBQVMsS0FBQSxBQUFLLE1BSGxCLEFBR3dCLEFBQ3BCOzBCQUFVLHlCQUFBOzJCQUNOLE9BQUEsQUFBSyxTQUFTLEVBQUMsTUFBTSxNQUFBLEFBQU0sT0FEckIsQUFDTixBQUFjLEFBQW9CO0FBTDFDOzhCQUFBO2dDQUhSLEFBQ0ksQUFFSSxBQVVKO0FBVkk7QUFDSSxpQ0FTUCxjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFDQSxnQ0FBQSxBQUFDOytCQUFELEFBQ2tCLEFBQ2Q7dUJBQVMsS0FBQSxBQUFLLE1BRmxCLEFBRXdCLEFBQ3BCOzBCQUFVLHlCQUFBOzJCQUNOLE9BQUEsQUFBSyxTQUFTLEVBQUMsYUFBYSxNQUFBLEFBQU0sT0FENUIsQUFDTixBQUFjLEFBQTJCO0FBSmpEOzhCQUFBO2dDQWZSLEFBYUksQUFFSSxBQVVKO0FBVkk7QUFDSSxpQ0FTUCxjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBLEFBQ0E7QUFEQTtBQUFBLCtCQUNBLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURBLEFBQ0EsQUFDQSx5QkFBQSxBQUFDOytCQUFELEFBQ2tCLEFBQ2Q7dUJBQVMsS0FBQSxBQUFLLE1BRmxCLEFBRXdCLEFBQ3BCOzBCQUFVLHlCQUFBOzJCQUNOLE9BQUEsQUFBSyxTQUFTLEVBQUMsTUFBTSxNQUFBLEFBQU0sT0FEckIsQUFDTixBQUFjLEFBQW9CO0FBSjFDOzhCQUFBO2dDQTNCSixBQXlCSSxBQUVBLEFBU0E7QUFUQTtBQUNJLGlDQVFILGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUNBLDZCQUFBLEFBQUM7dUJBQUQsQUFDVSxBQUNOOytCQUZKLEFBRWtCLEFBQ2Q7dUJBQVMsS0FBQSxBQUFLLE1BSGxCLEFBR3dCLEFBQ3BCOzBCQUFVLHlCQUFBOzJCQUNOLE9BQUEsQUFBSyxTQUFTLEVBQUMsVUFBVSxNQUFBLEFBQU0sT0FEekIsQUFDTixBQUFjLEFBQXdCO0FBTDlDOzhCQUFBO2dDQXRDUixBQW9DSSxBQUVJLEFBU0o7QUFUSTtBQUNJLGlDQVFSLEFBQUMsMENBQVEsT0FBVCxNQUFlLFFBQWYsQUFBd0IsVUFBUyxTQUFXLEtBQUEsQUFBSyxNQUFqRCxBQUF1RDs4QkFBdkQ7Z0NBL0NKLEFBK0NJLEFBQ0E7QUFEQTtnQ0FDQSxBQUFDLHlDQUFPLFNBQVcsS0FBQSxBQUFLLE1BQXhCLEFBQThCLFNBQVMsU0FBdkM7OEJBQUE7Z0NBQUE7QUFBQTtlQW5EUixBQUNJLEFBRUEsQUFnREksQUFJWDs7Ozs7QUFyRm9CLEEsQUF3RnpCOztrQkFBQSxBQUFlIiwiZmlsZSI6Im5ldy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYWRuYW5hem1hdC9Eb2N1bWVudHMvQ09OU0VSVkUifQ==