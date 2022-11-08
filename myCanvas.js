    const canvas = document.getElementById('myCanvas');//1.获取画布
    const ctx = canvas.getContext('2d');//2.获取上下文
    const strokeStyleSelect = document.getElementById('strokeColorSelect');//改变颜色控件
    const strokeLineWidth = document.getElementById('strokeLineWidth');//改变线条宽度控件
 
    //按下标记
    let isOnOff = false;
    let oldX = null;
    let oldY = null;

    //设置画笔颜色
    let lineColor = '#000';  //默认线条颜色为黑色

    //设置画笔线宽
    let lineWidth = 5;
    strokeLineWidth.value = lineWidth; //初始化输入框的值,显示初始线条宽度

    //添加鼠标移动事件
    canvas.addEventListener('mousemove', draw, false);
    //添加鼠标按下事件
    canvas.addEventListener('mousedown', down, true);
    //添加鼠标按下事件
    canvas.addEventListener('mouseup', up, false);

    function down(event) {
        isOnOff = true;
        oldX = event.clientX;
        oldY = event.clientY;
    }

    function up() {
        isOnOff = false;
    }

    function draw(event) {
        if (isOnOff === true) {
            let newX = event.clientX;
            let newY = event.clientY;

            ctx.beginPath();
            ctx.moveTo(oldX, oldY);
            ctx.lineTo(newX, newY);
            ctx.strokeStyle = lineColor;
            ctx.lineWidth = lineWidth;
            ctx.lineCap = 'round';
            ctx.stroke();

            oldX = newX;
            oldY = newY;
        }
    }
    
    strokeStyleSelect.onchange = function () {
        lineColor = strokeStyleSelect.value;
    };

    strokeLineWidth.oninput = function () {
        lineWidth = strokeLineWidth.value;
    };
