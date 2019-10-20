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

var _project = require('../../ethereum/project');

var _project2 = _interopRequireDefault(_project);

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _ContributeForm = require('../../components/ContributeForm');

var _ContributeForm2 = _interopRequireDefault(_ContributeForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/adnanazmat/Documents/CONSERVE/pages/projects/show.js?entry';


var ProjectShow = function (_Component) {
    (0, _inherits3.default)(ProjectShow, _Component);

    function ProjectShow() {
        (0, _classCallCheck3.default)(this, ProjectShow);

        return (0, _possibleConstructorReturn3.default)(this, (ProjectShow.__proto__ || (0, _getPrototypeOf2.default)(ProjectShow)).apply(this, arguments));
    }

    (0, _createClass3.default)(ProjectShow, [{
        key: 'renderCards',
        value: function renderCards() {
            var _props = this.props,
                address = _props.address,
                projectGoal = _props.projectGoal,
                moneyRaised = _props.moneyRaised,
                contributorsCount = _props.contributorsCount,
                manager = _props.manager;

            var items = [{
                header: manager,
                meta: 'Address of Manager',
                description: 'The manager created this campaign and can create requests to withdraw money',
                style: { overflowWrap: 'break-word' }
            }, {
                header: projectGoal,
                meta: 'Goal of project',
                description: 'TOTAL MONEY TO BE RAISED',

                style: { overflowWrap: 'break-word' }
            }, {
                header: contributorsCount,
                meta: 'Number of Approvers',
                description: 'Number of people who have already donated to this campaign'
            }, {
                header: _web2.default.utils.fromWei(moneyRaised, 'ether'),
                meta: 'Campaign Balance (ether)',
                description: 'The balance is how much money this campaign has left to spend.'
            }];

            console.log(contributorsCount);

            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 63
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 68
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 69
                }
            }, 'Project Show'), _react2.default.createElement(_semanticUiReact.Grid, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 70
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 71
                }
            }, this.renderCards()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 75
                }
            }, _react2.default.createElement(_ContributeForm2.default, { address: this.props.address, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 76
                }
            }))));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
                var project, summary;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                project = (0, _project2.default)(props.query.address);
                                _context.next = 3;
                                return project.methods.getSummary().call();

                            case 3:
                                summary = _context.sent;
                                return _context.abrupt('return', {
                                    address: props.query.address,
                                    projectGoal: summary[0],
                                    moneyRaised: summary[1],
                                    contributorsCount: summary[2],
                                    manager: summary[3]
                                });

                            case 5:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps(_x) {
                return _ref.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return ProjectShow;
}(_react.Component);

exports.default = ProjectShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Byb2plY3RzL3Nob3cuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJDYXJkIiwiR3JpZCIsIkxheW91dCIsIlByb2plY3QiLCJ3ZWIzIiwiQ29udHJpYnV0ZUZvcm0iLCJQcm9qZWN0U2hvdyIsInByb3BzIiwiYWRkcmVzcyIsInByb2plY3RHb2FsIiwibW9uZXlSYWlzZWQiLCJjb250cmlidXRvcnNDb3VudCIsIm1hbmFnZXIiLCJpdGVtcyIsImhlYWRlciIsIm1ldGEiLCJkZXNjcmlwdGlvbiIsInN0eWxlIiwib3ZlcmZsb3dXcmFwIiwidXRpbHMiLCJmcm9tV2VpIiwiY29uc29sZSIsImxvZyIsInJlbmRlckNhcmRzIiwicHJvamVjdCIsInF1ZXJ5IiwibWV0aG9kcyIsImdldFN1bW1hcnkiLCJjYWxsIiwic3VtbWFyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUTs7OztBQUNmLEFBQVEsQUFBTTs7QUFDZCxBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFhOzs7O0FBQ3BCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQW9COzs7Ozs7Ozs7SSxBQUVyQjs7Ozs7Ozs7Ozs7c0NBZVk7eUJBT04sS0FQTSxBQU9EO2dCQVBDLEFBRU4saUJBRk0sQUFFTjtnQkFGTSxBQUdOLHFCQUhNLEFBR047Z0JBSE0sQUFJTixxQkFKTSxBQUlOO2dCQUpNLEFBS04sMkJBTE0sQUFLTjtnQkFMTSxBQU1OLGlCQU5NLEFBTU4sQUFJSjs7Z0JBQU07d0JBQ0YsQUFDWSxBQUNSO3NCQUZKLEFBRVUsQUFDTjs2QkFISixBQUlRLEFBQ0o7dUJBQU8sRUFBRSxjQU5ILEFBQ1YsQUFLVyxBQUFnQjtBQUwzQixBQUNJLGFBRk07d0JBUVYsQUFDWSxBQUNSO3NCQUZKLEFBRVUsQUFDTjs2QkFISixBQUdpQixBQUViOzt1QkFBTyxFQUFDLGNBYkYsQUFRVixBQUtXLEFBQWU7QUFMMUIsQUFDSTt3QkFNSixBQUNZLEFBQ1I7c0JBRkosQUFFVSxBQUNOOzZCQWxCTSxBQWVWLEFBR2lCO0FBSGpCLEFBQ0k7d0JBS1EsY0FBQSxBQUFLLE1BQUwsQUFBVyxRQUFYLEFBQW1CLGFBRC9CLEFBQ1ksQUFBZ0MsQUFDeEM7c0JBRkosQUFFVSxBQUNOOzZCQXZCUixBQUFjLEFBb0JWLEFBSVEsQUFJWjtBQVJJLEFBQ0k7O29CQU9SLEFBQVEsSUFBUixBQUFZLEFBRVo7O2lEQUFPLEFBQUMsc0JBQUQsQUFBTSxTQUFNLE9BQVosQUFBcUI7OEJBQXJCO2dDQUFQLEFBQU8sQUFDVjtBQURVO2FBQUE7Ozs7aUNBR0YsQUFDTDttQ0FDSSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNJO0FBREo7QUFBQSxhQUFBLGtCQUNJLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFDQSxpQ0FBQSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSyxjQUFELHNCQUFBLEFBQU0sVUFBTyxPQUFiLEFBQW9COzhCQUFwQjtnQ0FBQSxBQUNLO0FBREw7b0JBREosQUFDSSxBQUNLLEFBQUssQUFHVixnQ0FBQyxjQUFELHNCQUFBLEFBQU0sVUFBTyxPQUFiLEFBQW9COzhCQUFwQjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksQUFBQywwQ0FBZSxTQUFTLEtBQUEsQUFBSyxNQUE5QixBQUFvQzs4QkFBcEM7Z0NBVGhCLEFBQ0ksQUFFSSxBQUtJLEFBQ0ksQUFLbkI7QUFMbUI7Ozs7OztpSEFuRVMsQTs7Ozs7aUNBQ25CO0EsMENBQVUsdUJBQVEsTUFBQSxBQUFNLE1BQWQsQSxBQUFvQjs7dUNBRWQsUUFBQSxBQUFRLFFBQVIsQUFBZ0IsYUFBaEIsQUFBNkIsQTs7aUNBQTdDO0E7OzZDQUdPLE1BQUEsQUFBTSxNQURaLEFBQ2tCLEFBQ3JCO2lEQUFhLFFBRlYsQUFFVSxBQUFRLEFBQ3JCO2lEQUFhLFFBSFYsQUFHVSxBQUFRLEFBQ3JCO3VEQUFtQixRQUpoQixBQUlnQixBQUFRLEFBQzNCOzZDQUFTLFFBTE4sQUFLTSxBQUFRLEE7QUFMZCxBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUGMsQSxBQTRFMUI7O2tCQUFBLEFBQWUiLCJmaWxlIjoic2hvdy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYWRuYW5hem1hdC9Eb2N1bWVudHMvQ09OU0VSVkUifQ==