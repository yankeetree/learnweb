function addLoadEvent(func){
    var oldonload=window.onload;
    //把现有的onload事件处理函数的值存入oldonload
    if(typeof  window.onload!='function')
    //如果在这个处理函数上还没有绑定任何函数，就像平时那样把新函数添加给他
    {
        window.onload=func;
    }else{
        window.onload=function()
        //匿名函数function（）
        {
            oldonload();
            func();
        }
    }
}
//如果上面已经绑定了一些函数，则把新函数追加到现有指令的末尾