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
            // this.options.dom = document.getElementById("timer");

            this.startTimer();

            this.options = $.extend(this.options, options);

        },
        getSeconds: function(){
            var seconds = this.options.seconds;
            return seconds
        },
        formatTime: function(secs){
            var _dom = Timer.options.dom;
            var time,
                hour = 0,
                min = 0,
                seconds = secs
            console.log(seconds);

            if (seconds > 60) {
                min = parseInt(seconds / 60);
                seconds = parseInt(seconds % 60);

                if(min > 60){
                    hour = parseInt(min / 60);
                    min = parseInt(min % 60);
                }
            }

            hour = hour < 10 ? ('0' + hour) : hour;
            min = min < 10 ? ('0' + min) : min;
            seconds = seconds < 10 ? ('0' + seconds) : seconds;

            time = hour + ':'+ min + ':' + seconds;

            _dom.innerHTML = time;
            _dom.value = Timer.options.seconds;

            Timer.options.seconds += 1;

        },

        startTimer: function(){
            clearInterval(this.options.timer);
            this.options.timer = setInterval(function(){
                Timer.formatTime(Timer.getSeconds())
            }, 1000);
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















