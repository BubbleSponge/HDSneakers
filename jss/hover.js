
var bannerLeft = document.getElementsByClassName("bannerLeft");
var bannerRight = document.getElementsByClassName("bannerRight");
//将以上代码放入window.onload或者把js文件在body底部引用，不然会获取不到元素
function mouseOver(i){
        for(let j = 0; j < 3; j ++){
            if(j == i){
                getHover(j);
            }else{
                loseHover(j);
            }
        }
}

function hover(){
    // 事件监听要用匿名函数传参数
    bannerRight[0].addEventListener("mouseover",function(){mouseOver(0);clearInterval(auto_timer);});
    bannerRight[1].addEventListener("mouseover",function(){mouseOver(1);clearInterval(auto_timer);});
    bannerRight[2].addEventListener("mouseover",function(){mouseOver(2);clearInterval(auto_timer);});

    bannerRight[0].addEventListener("mouseout",function(){flag = 1;auto();});
    bannerRight[1].addEventListener("mouseout",function(){flag = 2;auto();});
    bannerRight[2].addEventListener("mouseout",function(){flag = 0;auto();});
}
function getHover(i){
    bannerLeft[i].style.zIndex = "1";
    opacity(1,i);
    flag = i;
}
function loseHover(i){
    bannerLeft[i].style.zIndex = "-2";
    bannerLeft[i].style.opacity = 0;
}

//实现透明渐变
var opacity_alpha = [1,0,0];
var opacity_speed = 0;
var opacity_timer = null;
function opacity(target,i){
	 for(let j = 0; j < 3; j ++){//改变除了i的其他图片opacity赋值=0
	        if(j != i){
	            opacity_alpha[j] = 0;
	    }
    clearInterval(opacity_timer);
    opacity_timer = setInterval(function(){
        if(target > opacity_alpha[i]){
            opacity_speed = 0.1;
        }
        else if(target = opacity_alpha[i]){
            opacity_speed = 0;
            clearInterval(opacity_timer);
        }
        opacity_alpha[i] += opacity_speed;
        bannerLeft[i].style.opacity = opacity_alpha[i];
    },50);
   }
}


var flag = 1;
var auto_timer = null;

function auto(){
    clearInterval(auto_timer);
    auto_timer = setInterval(function(){
        mouseOver(flag);
        flag ++;
        if(flag == 3){
            flag = 0;
        }
    },5000);
}


hover();
auto();