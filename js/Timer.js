(function(window){
    var Timer = {
        options: {
            timer: null,
            dom: null
        },
        init: function(dom){
            console.log(dom)
            if (dom) {
               this.options.dom = dom;
               console.log(this.options.dom)
               this.startTimer(); 
            }else{
                alert("没有传入DOM对象")
            }
            
        },
        getTimer: function(){
            var _dom = this.options.dom;
            var t = 1,
                h = 0,
                m = 0,
                s = 1;
            return function(){
                console.log(_dom);
                if (s > 0 && s % 60 == 0) {
                    m += 1;
                    s = 0;
                }
                if (m > 0 && m % 60 == 0) {
                    h += 1;
                    m = 0;
                }
                t = (h < 10 ? '0' + h : h) + ":" + (m < 10 ? '0' + m : m) + ":" + (s < 10 ? '0' + s : s);
                _dom.innerHTML = t;
                s += 1;
            }
        },
        startTimer: function(){
            var _getTimer = this.getTimer();
            this.options.timer = setInterval(_getTimer, 1000);
        },
        stopTimer: function(){
            clearInterval(this.options.timer);
            this.options.timer = null;
        }


    }


    window.Timer = Timer;
})(window);


