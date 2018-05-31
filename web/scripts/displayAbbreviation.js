function displayAbbreviations(){
    if(!document.getElementsByTagName||!document.createTextNode||!document.createElement) return false;
    var abbreviations = document.getElementsByTagName("abbr");
    // 返回一个包含所有abbr元素节点的节点集合
    if (abbreviations.length<1) return false;
    //检测abbr元素是否存在
    var defs = new Array();
    for (var i=0;i<abbreviations.length;i++){
        var current_abbr = abbreviations[i];
        var definition = current_abbr.getAttribute("title");
        //将《abbr》标签里的缩略词释义文字的值保存到definition里
        var key = current_abbr.lastChild.nodeValue;
        //将提取出这个文本节点的nodevalue属性并赋值给变量key
        defs[key]=definition;
        //key和definition是想保存进defs数组里的内容。将key作为数组元素的下表保存，definition用作数组元素的值
        //此时defs数组中的第一个元素的下标是“w3c”，取值是“world wide web consortium”
    }
    // 遍历所有abbr元素
    var dlist = document.createElement("dl");
    //创建定义表
    //for/in循环的独特之处是，它可以把某个数组下标（键字）临时地赋值给一个变量
    for(key in defs){
        var definition = defs[key];
        var dtitle=document.createElement("dt");
        var dtitle_text=document.createTextNode(key);
        dtitle.appendChild(dtitle_text);
        var ddesc=document.createElement("dd");
        var ddesc_text=document.createTextNode(definition);
        ddesc.appendChild(ddesc_text);
        dlist.appendChild(dtitle);
        dlist.appendChild(ddesc);
    }

var header=document.createElement("h2");
var header_text=document.createTextNode("Abbreviations");
header.appendChild(header_text);
document.body.appendChild(header);
document.body.appendChild(dlist);
//document.getElementTagName("body")[0].appendChild(dlist);等价
}
addLoadEvent(displayAbbreviations);


