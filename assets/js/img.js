    //<!CDATA[
        var bodyBgs = [];
        bodyBgs[0] = "./assets/img/1.jpg";
        bodyBgs[1] = "./assets/img/2.jpg";
        bodyBgs[2] = "./assets/img/3.jpg";
        bodyBgs[3] = "./assets/img/4.jpg";
        bodyBgs[4] = "./assets/img/5.jpg";
        //bodyBgs[5] = "/assets/img/6.jpg";
        //bodyBgs[6] = "/assets/img/7.jpg";
        //bodyBgs[7] = "/assets/img/8.jpg";
        //bodyBgs[8] = "/assets/img/9.jpg";
        //bodyBgs[9] = "/assets/img/10.jpg";
        //bodyBgs[10] = "/assets/img/11.jpg";
        //bodyBgs[11] = "/assets/img/12.jpg";
        //bodyBgs[12] = "/assets/img/13.jpg";
        //bodyBgs[13] = "/assets/img/14.jpg";

        var randomBgIndex = Math.round( Math.random() * 5 );

    //输出随机的背景图
        document.write('<style>body{background:url(' + bodyBgs[randomBgIndex] + ')no-repeat; background-size:cover;-webkit-background-attachment: fixed;background-attachment: fixed;}</style>');
    //]]>
