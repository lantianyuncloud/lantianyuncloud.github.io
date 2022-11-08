var $board = $(".board")[0]; //jquery对象与dom对象转换
var ctx = $board.getContext("2d"); //创建画布对象
var bool = false;
var left = $(".board").offset().left; //获取画布的left值
var top = $(".board").offset().top; //获取画布的top值
var canvasW = $(".board").width(); //获取画布的宽度
var canvasH = $(".board").height(); //获取画布的高度
var img = []; //用于存放画布图片截图的数组
 
 
window.onload = function() {
    // draw();
    ctx.lineCap = "round"; //设置线条的结束端点样式
    ctx.lineJion = "round"; //设置两条线相交时，所创建的拐角类型
    $(".board").mousedown(function(e) {
        bool = true;
        ctx.beginPath(); //起始/重置一条路径
        ctx.moveTo(e.clientX - left, e.clientY - top); //把路径移动到画布中的指定点，不创建线条
        var pic = ctx.getImageData(0, 0, canvasW, canvasH); //获取当前画布的图像
        img.push(pic); //将当前图像存入数组
        // ctx.moveTo(e.clientX, e.clientY);
    })
    $(".board").mousemove(function(e) {
        console.log(bool);
        if (bool) {
            // ctx.lineTo(e.clientX, e.clientY);
            ctx.lineTo(e.clientX - 10, e.clientY - 10); //添加一个新点，在画布中创建从该点到最后指定点的线条
            ctx.stroke();
        }
    });
    $(".board").mouseout(function(e) {
        ctx.closePath(); //当鼠标移出画布区域时,创建从当前点回到起始点的路径
        bool = false;
    })
    $(".board").mouseup(function(e) {
 
        ctx.closePath(); //当鼠标抬起时,创建从当前点回到起始点的路径
        bool = false;
    })
    $(".clear").click(function() {
        ctx.clearRect(0, 0, canvasW, canvasH); //创建一个等大画布覆盖
    });
    $(".reset").click(function() {
        if (img.length > -1) {
            ctx.putImageData(img.pop(), 0, 0); //删除图像数组最后一位
        }
    })
    $(".eraser").click(function() {
        ctx.strokeStyle = "#fff";
    });
    $(".color").change(function() {
        ctx.strokeStyle = this.value; //改变颜色
    });
    $(".range").change(function() {
        ctx.lineWidth = this.value; //改变线条粗细
    })
}
