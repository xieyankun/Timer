(function(window){
    var Timer = {
        options: {
            seconds: 1,     // 秒数
            timer: null,    // 计时器
            dom: null,      // 存入dom节点
            status: 1       // 计时状态 1: 计时中  0: 暂停中
        },

        init: function(options){
            var _this = this;
            this.options.dom = document.getElementById("timer");
            this.startTimer();

            this.options = $.extend(this.options, options);

        },
        getSeconds: function(){
            var seconds = Timer.options.seconds;
            return seconds
        },
        formatTime: function(s){
            var _dom = Timer.options.dom;
            var _status = this.options.status
            var seconds = this.getSeconds();
            var time,
                h = 0,
                m = 0,
                s = seconds
            // _status == 1 ? s = 1 : s = seconds;
                
            return function(){
                if (s > 0 && s % 60 == 0) {
                    m += 1;
                    s = 0;
                }
                if (m > 0 && m % 60 == 0) {
                    h += 1;
                    m = 0;
                }
                time = (h < 10 ? '0' + h : h) + ":" + (m < 10 ? '0' + m : m) + ":" + (s < 10 ? '0' + s : s);
                console.log(_dom)

                _dom.innerHTML = time;
                _dom.value = Timer.options.seconds;

                s += 1;
                Timer.options.seconds += 1;
            }
        },

        startTimer: function(){
            console.log('++++++++++')
            var _formatTime = this.formatTime();
            clearInterval(this.options.timer);
            this.options.timer = setInterval(_formatTime, 1000);
        },

        pauseTimer: function(){
            var _status = this.options.status
            if (_status) {
                clearInterval(this.options.timer);
                this.options.timer = null;
                this.options.status = 0;
            }else{
                this.startTimer();
                this.options.status = 1;
            }
        },

        stopTimer: function(){
            clearInterval(this.options.timer);
            this.options.timer = null;
            Timer.options.seconds = 1;
        }
    }

    window.Timer = window.Hourglass = Timer;

})(window);















