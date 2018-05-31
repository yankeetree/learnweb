// function styleHeaderSiblings(){
//     if(!document.getElementsByTagName) return false;
//     var headers=document.getElementsByTagName("h1");
//     for(var i=0;i<headers.length;i++){
//         var elem=getNextElement(headers[i].nextSibling);
//         addClass(elem,"intro");
//     }
// }
function styleHeaderSibling(tag,theclass){
    if(!document.getElementsByTagName) return false;
    var elems=document.getElementsByTagName("tag");
    for(var i=0;i<elem.length;i++){
        var elem=getNextElement(elems[i].nextSibling);
        addClass(elem,theclass);
    }
}


function addClass(element,value){
    if(!element.className){
        element.className=value;
    }else{
        newClassName=element.className;
        newClassName+=" ";
        newClassName+=value;
        element.className=newClassName;
    }
}