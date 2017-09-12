"use strict";
/**
 * @class PraiseButton
 */

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PraiseButton = function () {
    function PraiseButton(options) {
        _classCallCheck(this, PraiseButton);

        this.praiseClass = ".praise";
        this.startNum = 0;
        this.limit = options.limit || 10;
        this.numContainerClass = options.numContainer || '.num';

        this.btn = document.querySelector(this.praiseClass);
        this.numContainer = document.querySelector(this.numContainerClass);

        this.tab();
    }

    _createClass(PraiseButton, [{
        key: "tab",
        value: function tab() {
            var _this = this;
            this.btn.addEventListener('click', function () {
                var num = _this.addNum(_this.startNum, _this.limit);
                _this.showNum(num);

                axios.get('/index/updata').then(function (response) {
                    console.log(response);
                    var result = response.data.data;
                    if (result.success) {
                        console.log('点赞成功');
                    } else {
                        console.log('点赞失败');
                    }
                }).catch(function (error) {
                    console.log(error);
                });
            });
        }

        // 计算点赞次数

    }, {
        key: "addNum",
        value: function addNum(startNum, limit) {
            if (startNum < limit) {
                // addOne(val) {
                //     return val += 1;
                // }
                return this.startNum += 1;
            } else {
                alert('不能超过' + this.limit + '次');
                return false;
            }
        }

        // 展示 +1 的动画

    }, {
        key: "showNum",
        value: function showNum(num) {
            var _this = this;

            if (!num) {
                return false;
            }
            this.numContainer.innerHTML = num;
            this.btn.classList.remove('animate-praise');

            /**
             * 另一种分开add与remove的方法;
             */
            // window.setTimeout(function() {
            //     $(_this.praiseClass).addClass('animate-praise');
            // },0);

            window.requestAnimationFrame(function () {
                _this.btn.classList.add('animate-praise');
            });
        }
    }]);

    return PraiseButton;
}();

var Thumb = function (_PraiseButton) {
    _inherits(Thumb, _PraiseButton);

    function Thumb(option) {
        _classCallCheck(this, Thumb);

        return _possibleConstructorReturn(this, (Thumb.__proto__ || Object.getPrototypeOf(Thumb)).call(this, option));
    }

    return Thumb;
}(PraiseButton);

exports.default = {
    Thumb: Thumb
};
