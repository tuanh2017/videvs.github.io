function stripTags(a){var t=a.indexOf(":");return t>0&&(a=a.substr(t+":".length)),a.split(/\s+/).slice(0,49).join(" ")}

function createSummary(a,t,r){
    var e=stripTags(document.queryselector("#"+a+" .entry-content").innerText);
    var s =document.queryselector("#"+a+" img").src;
    var all_authors = document.queryselector("#"+a+" .p_author");
    var n = '';
    for (var i in all_authors){
        if (n!='') n+=',&nbsp;';
        n+=all_authors[i].outerHTML;
    }
    var i='<div class="entry-thumbnail hover-thumb"><a href="'+r+'">'
        +='<img alt="'+t+'" height="493" src="'+s+'" width="400"></a></div>'
        +='<div class="entry-body"><header class="entry-header">'
        +='<h2 class="entry-title"><a href="'+r+'">'+t+'</a></h2>'
        +='<div class="entry-meta"><span><span class="entry-author">By: '+n+'</span></span>'
        +='</div></header><div class="entry-summary">'+e+"...</div></div>";
   
    jQuery("#"+a).html(i)


}
