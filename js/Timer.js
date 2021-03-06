(function(window){
    var Timer = {
        options: {
            timer: null,
            dom: null,
            seconds: 1,
            status: 1
        },
        init: function(){
            console.log();
            this.options.dom = document.getElementById("timer");
            this.startTimer();
            // if (dom) {
            //    this.options.dom = dom;
            //    this.startTimer(); 
            // }else{
            //     alert("没有传入DOM对象")
            // }
        },
        getSeconds: function(){
            var seconds = Timer.options.seconds;
            console.log(seconds);
        },
        getTimer: function(){
            var _dom = this.options.dom;
            var _status = this.options.status
            var t = 1,
                h = 0,
                m = 0,
                s
            _status == 1 ? s = 1 : s = Timer.options.seconds;
                
            return function(){
                if (s > 0 && s % 60 == 0) {
                    m += 1;
                    s = 0;
                }
                if (m > 0 && m % 60 == 0) {
                    h += 1;
                    m = 0;
                }
                t = (h < 10 ? '0' + h : h) + ":" + (m < 10 ? '0' + m : m) + ":" + (s < 10 ? '0' + s : s);
                console.log(t)
                _dom.innerHTML = t;
                _dom.value = Timer.options.seconds;
                s += 1;
                Timer.options.seconds += 1;
            }
        },
        startTimer: function(){
            var _getTimer = this.getTimer();
            clearInterval(this.options.timer);
            this.options.timer = setInterval(_getTimer, 1000);
        },
        getMilliSeconds: function(){
            console.log(Timer.options.seconds);
            var _status = this.options.status
            if (_status) {
                this.stopTimer();
                this.options.status = 0;
            }else{
                this.startTimer();
                this.options.status = 1;
            }
        },
        stopTimer: function(){
            clearInterval(this.options.timer);
            this.options.timer = null;
        }
    }

    window.Timer = Timer;

})(window);


