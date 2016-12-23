# Timer
封装一个计时器

#### 使用说明
创建一个 dom 节点
```
<h1 id="hourglass">00:00:00</h1>
```

使用方式
```
var hourglass = document.getElementById("hourglass");

$('#startTimer').click(function(){
    Timer.init({
        dom: hourglass
    });
})
```
