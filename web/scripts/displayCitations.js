
function displayCitations(){
    //if(document.getElementsByTagName||!document.createElement||!documnet.createTextNode) return false;
    //get all the blockquotes
    var quotes=document.getElementsByTagName("blockquote");
    //loop through all the blockquotes
    for (var i=0;i<quotes.length;i++){
        //if there is no cite attribute,continue the loop
        if (!quotes[i].getAttribute("cite"))continue;
        //store the site attribute
        var url = quotes[i].getAttribute("cite");
        //get all the element nodes in the blockquotes
        var quoteChirdren=quotes[i].getElementsByTagName('*');
        //if there are no element node,continue the loop
        if (quoteChirdren.length<1) continue;
        //get the last element node in the blockquote
        var elem=quoteChirdren[quoteChirdren.length-1];
        //create the markup
        var link =document.createElement("a");
        var link_text=document.createTextNode("source");
        link.appendChild(link_text);
        link.setAttribute("href",url);
        var superscript=document.createElement("sup");
        superscript.appendChild(link);
        elem.appendChild(superscript);
    }
}

addLoadEvent(displayCitations);