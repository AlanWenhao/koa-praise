"use strict";
/**
 * @class PraiseButton
 */
class PraiseButton {
    constructor(options) {
        this.praiseClass = ".praise";
        this.startNum = 0;
        this.limit = options.limit || 10;
        this.numContainerClass = options.numContainer || '.num';

        this.btn = document.querySelector(this.praiseClass);
        this.numContainer = document.querySelector(this.numContainerClass);

        this.tab();
    }

    tab() {
        const _this = this;
        this.btn.addEventListener('click', function () {
            const num = _this.addNum(_this.startNum, _this.limit);
            _this.showNum(num);

            axios.get('/index/updata')
                .then(function (response) {
                    console.log(response);
                    var result = response.data.data;
                    if (result.success) {
                        console.log('点赞成功')
                    } else {
                        console.log('点赞失败')
                    }
                }).catch(function (error) {
                    console.log(error);
                });
        })
    }

    // 计算点赞次数
    addNum(startNum, limit) {
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
    showNum(num) {
        const _this = this;

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
}

class Thumb extends PraiseButton {
    constructor(option) {
        super(option);
    }
}

export default {
    Thumb
};