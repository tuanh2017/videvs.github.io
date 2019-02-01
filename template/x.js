  function aj_dsp_post(feed_url){
            $(".mypost").html('');
            $.ajax({
            url: feed_url,
            contenType: 'application/json',
            })
            .done(function(data) {
              if (data.feed.entry)
            for (var i in data.feed.entry){
            var e =  data.feed.entry[i];
            $(".mypost").append(
            '<div class="col-lg-2 col-sm-4 article mt-2  mb-2 ">'
              +'<img class="thumb mb-2"  src="'+$(e.content.$t).find(".wp-post-image").attr("src").replace(".jpg","m.jpg")+'" />'
              +'<p class="title "><a href="'+e.link[4].href+'">'+e.title.$t+'</a></p>'
            +'</div>'
            )
            }
            });
            }
            var relObj=[],uniq_href=[],ri=0;function related_results_labels_thumbs(e){for(var r=0;r<e.feed.entry.length;r++)for(var l=e.feed.entry[r],t=0;t<l.link.length;t++)"alternate"==l.link[t].rel&&-1==uniq_href.indexOf(l.link[t].href)&&l.link[t].href!=currentposturl&&(uniq_href.push(l.link[t].href),relObj.push({t:l.link[t].title,h:l.link[t].href,i:/<img.+?src="(.+?)"/.exec(l.content.$t)[1]}));for(;ri<maxresults&&relObj.length>0;){var n=Math.floor((relObj.length-1)*Math.random());jQuery(".related_post").append('<li><a class="wp_rp_thumbnail" href="'+relObj[n].h+'"><img  src="'+relObj[n].i.replace(".jpg","m.jpg")+'"/><a/><a href="'+relObj[n].h+'">'+relObj[n].t+"</a></li>"),relObj.splice(n,1),ri++}}
            $(document).ready(function() {
            if (!is_item_page){
            var feed_url = '/feeds/posts/default/?max-results=12&v=2&alt=json'
            var curl = window.location.href;
        
            pattern = /search\?updated-max=(.+?)&max-results=12#PageNo=(\d+)$/i
            result = pattern.exec(curl);
            if (result){
                feed_url = '/feeds/posts/default/?start-index='+(12*parseInt(result[2]))+'&max-results=12&v=2&alt=json';
        
            }

              pattern = /search\/label\/(.+?)\?max-results=(\d+)$/i
             result = pattern.exec(curl);
            if (result){
              feed_url =  '/feeds/posts/default/-/'+result[1]+'/?max-results=12&v=2&alt=json';
            }
            pattern = /search\/label\/(.+?)\?max-results=(\d+)#PageNo=(\d+)$/i
             result = pattern.exec(curl);
            if (result){
              console.log("xxx");
              var s_idex = (result[3]-1)*12;
              console.log(s_idex);
              feed_url =  '/feeds/posts/default/-/'+result[1]+'/?start-index='+s_idex+'&max-results=12&v=2&alt=json';
            }
             aj_dsp_post(feed_url);
            setTimeout(function(){
              
              
              var e = urlactivepage; - 1 != e.indexOf("/search/label/") && (lblname1 = (lblname1 = lblname1 = -1 != e.indexOf("?updated-max") ? e.substring(e.indexOf("/search/label/") + 14, e.indexOf("?updated-max")) : /search\/label\/(.+)?/.exec(e)[1]).replace("?max-results=12", "")), -1 == e.indexOf("?q=") && -1 == e.indexOf(".html") && (-1 == e.indexOf("/search/label/") ? (jenis = "page", nomerhal = -1 != urlactivepage.indexOf("#PageNo=") ? urlactivepage.substring(urlactivepage.indexOf("#PageNo=") + 8, urlactivepage.length) : 1, jQuery.ajax({
              type: "GET",
              url: home_page + "feeds/posts/summary?max-results=1&alt=json-in-script&callback=hitungtotaldata"
              })) : (jenis = "label", -1 == e.indexOf("&max-results=") && (postperpage = 12), nomerhal = -1 != urlactivepage.indexOf("#PageNo=") ? urlactivepage.substring(urlactivepage.indexOf("#PageNo=") + 8, urlactivepage.length) : 1, jQuery.ajax({
              type: "GET",
              url: home_page + "feeds/posts/summary/-/" + lblname1 + "?alt=json-in-script&callback=hitungtotaldata&max-results=1"
              })))
              }
              ,100);
            }
            else{
              rmidx = all_labels.indexOf("IT Ebooks");
              if (rmidx >=0) all_labels.splice(rmidx,1);
              for (var i in all_labels)
              $.ajax({type: "GET",
              url: "/feeds/posts/default/-/"+all_labels[i]+"?alt=json&v=2&max-results=10",
              contenType: 'application/json'})
              .done(function(data) {
              if (data.feed.entry)
              related_results_labels_thumbs(data);
              
              });
              
            }
            });