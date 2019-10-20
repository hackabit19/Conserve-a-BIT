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
                header: _web2.default.utils.fromWei(projectGoal, 'ether'),
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

            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 62
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 67
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 68
                }
            }, 'Project Details'), _react2.default.createElement(_semanticUiReact.Grid, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 69
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 70
                }
            }, this.renderCards()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 74
                }
            }, _react2.default.createElement(_ContributeForm2.default, { address: this.props.address, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 75
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Byb2plY3RzL3Nob3cuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJDYXJkIiwiR3JpZCIsIkxheW91dCIsIlByb2plY3QiLCJ3ZWIzIiwiQ29udHJpYnV0ZUZvcm0iLCJQcm9qZWN0U2hvdyIsInByb3BzIiwiYWRkcmVzcyIsInByb2plY3RHb2FsIiwibW9uZXlSYWlzZWQiLCJjb250cmlidXRvcnNDb3VudCIsIm1hbmFnZXIiLCJpdGVtcyIsImhlYWRlciIsIm1ldGEiLCJkZXNjcmlwdGlvbiIsInN0eWxlIiwib3ZlcmZsb3dXcmFwIiwidXRpbHMiLCJmcm9tV2VpIiwicmVuZGVyQ2FyZHMiLCJwcm9qZWN0IiwicXVlcnkiLCJtZXRob2RzIiwiZ2V0U3VtbWFyeSIsImNhbGwiLCJzdW1tYXJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFROzs7O0FBQ2YsQUFBUSxBQUFNOztBQUNkLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBb0I7Ozs7Ozs7OztJLEFBRXJCOzs7Ozs7Ozs7OztzQ0FlWTt5QkFPTixLQVBNLEFBT0Q7Z0JBUEMsQUFFTixpQkFGTSxBQUVOO2dCQUZNLEFBR04scUJBSE0sQUFHTjtnQkFITSxBQUlOLHFCQUpNLEFBSU47Z0JBSk0sQUFLTiwyQkFMTSxBQUtOO2dCQUxNLEFBTU4saUJBTk0sQUFNTixBQUlKOztnQkFBTTt3QkFDRixBQUNZLEFBQ1I7c0JBRkosQUFFVSxBQUNOOzZCQUhKLEFBSVEsQUFDSjt1QkFBTyxFQUFFLGNBTkgsQUFDVixBQUtXLEFBQWdCO0FBTDNCLEFBQ0ksYUFGTTt3QkFTRSxjQUFBLEFBQUssTUFBTCxBQUFXLFFBQVgsQUFBbUIsYUFEL0IsQUFDWSxBQUFnQyxBQUN4QztzQkFGSixBQUVVLEFBQ047NkJBSEosQUFHaUIsQUFFYjs7dUJBQU8sRUFBQyxjQWJGLEFBUVYsQUFLVyxBQUFlO0FBTDFCLEFBQ0k7d0JBTUosQUFDWSxBQUNSO3NCQUZKLEFBRVUsQUFDTjs2QkFsQk0sQUFlVixBQUdpQjtBQUhqQixBQUNJO3dCQUtRLGNBQUEsQUFBSyxNQUFMLEFBQVcsUUFBWCxBQUFtQixhQUQvQixBQUNZLEFBQWdDLEFBQ3hDO3NCQUZKLEFBRVUsQUFDTjs2QkF2QlIsQUFBYyxBQW9CVixBQUlRLEFBS1o7QUFUSSxBQUNJOztpREFRRCxBQUFDLHNCQUFELEFBQU0sU0FBTSxPQUFaLEFBQXFCOzhCQUFyQjtnQ0FBUCxBQUFPLEFBQ1Y7QUFEVTthQUFBOzs7O2lDQUdGLEFBQ0w7bUNBQ0ksQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSTtBQURKO0FBQUEsYUFBQSxrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBQ0Esb0NBQUEsQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ssY0FBRCxzQkFBQSxBQUFNLFVBQU8sT0FBYixBQUFvQjs4QkFBcEI7Z0NBQUEsQUFDSztBQURMO29CQURKLEFBQ0ksQUFDSyxBQUFLLEFBR1YsZ0NBQUMsY0FBRCxzQkFBQSxBQUFNLFVBQU8sT0FBYixBQUFvQjs4QkFBcEI7Z0NBQUEsQUFDSTtBQURKOytCQUNJLEFBQUMsMENBQWUsU0FBUyxLQUFBLEFBQUssTUFBOUIsQUFBb0M7OEJBQXBDO2dDQVRoQixBQUNJLEFBRUksQUFLSSxBQUNJLEFBS25CO0FBTG1COzs7Ozs7aUhBbEVTLEE7Ozs7O2lDQUNuQjtBLDBDQUFVLHVCQUFRLE1BQUEsQUFBTSxNQUFkLEFBQW9CLEE7O3VDQUVkLFFBQUEsQUFBUSxRQUFSLEFBQWdCLGEsQUFBaEIsQUFBNkI7O2lDQUE3QztBOzs2Q0FHTyxNQUFBLEFBQU0sTUFEWixBQUNrQixBQUNyQjtpREFBYSxRQUZWLEFBRVUsQUFBUSxBQUNyQjtpREFBYSxRQUhWLEFBR1UsQUFBUSxBQUNyQjt1REFBbUIsUUFKaEIsQUFJZ0IsQUFBUSxBQUMzQjs2Q0FBUyxRLEFBTE4sQUFLTSxBQUFRO0FBTGQsQUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVBjLEEsQUEyRTFCOztrQkFBQSxBQUFlIiwiZmlsZSI6InNob3cuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2FkbmFuYXptYXQvRG9jdW1lbnRzL0NPTlNFUlZFIn0=