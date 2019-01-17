(function($){var blog=(function(){return{init:function(){}}})();var content_single=(function(){return{init:function(){$('a').tooltip();$('#main-content').delegate('#comment','focus',function(){$('#commentform').addClass('active');$('.comment-form-comment textarea').autosize();});$('#main-content').delegate('.wpcf7-textarea','focus',function(){$('.wpcf7-textarea').autosize();});$('#main-content a.read-mod').on('click',function(){var isin=$(this).hasClass('active');if(isin){$('.site-content').removeClass('site-read-mod');$('i',this).attr("class","fa fa-eye");$(this).removeClass("active");$(this).attr("title","Read Mod");$(this).tooltip('hide').attr('data-original-title',"Read Mod").tooltip('fixTitle').tooltip('show');}else{$('.site-content').addClass('site-read-mod');$('i',this).attr("class","fa fa-eye-slash");$(this).addClass("active");$(this).attr("title","Close Read Mod");$(this).tooltip('hide').attr('data-original-title',"Close Read Mod").tooltip('fixTitle').tooltip('show');}
event.preventDefault();});$('#main-content').delegate('.font-size-minus','click',function(event){event.preventDefault();var entry=$('.entry-content'),fontSize=parseInt(entry.css('font-size').replace('px',''));if(fontSize<=14){return false;}else{entry.css('font-size',fontSize-2).css('line-height','1.5');}});$('#main-content').delegate('.font-size-plus','click',function(event){event.preventDefault();var entry=$('.entry-content'),fontSize=parseInt(entry.css('font-size').replace('px',''));if(fontSize>=22){return false;}else{entry.css('font-size',fontSize+2).css('line-height','1.5');}});}}})();var common=(function(){return{init:function(){jQuery('.site-nav').superfish({delay:100,animation:{opacity:'show',height:'show'},speed:'fast'});}}})();var init={blog:function(){blog.init();},content_single:function(){content_single.init();},common:function(){common.init();}};var $page=jQuery('.site-content').attr('id');if(init[$page]){init[$page]();init['common']();}else{init['common']();}})(jQuery); 


jQuery(document).ready(function($){

var main_menu =[
		{"web-development": {title:"Web Development",sub_menu:["ASP.NET","CMS","HTML5 & CSS","JavaScript","JSP","PHP","Python","Ruby","Rails","XML","Services & APIs","Other"]}},
		{"programming":{title:"Programming",sub_menu:["C & C++","C#","Delphi","Java",".NET","Objective-C","OpenCL","Perl","PowerShell","Scala","Swift","Visual Basic"]}},
		{"datebases":{title:"Datebases",sub_menu:["Big Data","Data Analysis","MongoDB","MySQL","NoSQL","PostgreSQL","Oracle","SQL"]}},
		{"game-programming":{title:"Game Programming",sub_menu:[]}},
		{"graphics-design":{title:"Graphics & Design",sub_menu:["3D MAX","CAD","Coreldraw","Dreamweaver","Flash","Illustrator","Maya","Photoshop","Premiere"]}},
		{"operating-systems":{title:"Operating Systems",sub_menu:["Windows","Linux & Unix","Macintosh","Android","iOS","Windows Phone"]}},
		{"networking-cloud-computing":{title:"Networking & Cloud Computing",sub_menu:["Cloud Computing","Network Administration","Network Security","Networks, Protocols & APIs","Wireless Networks"]}},
		{"administration":{title:"Administration",sub_menu:["Cloud & Virtualization","Infrastructure","Mail Servers","Microsoft Platform","Monitoring","Task Automation","Web Servers","Other"]}},
		{"certification":{title:"Certification",sub_menu:["Computer Science","Certification","Enterprise","Business Applications","Communications","ERP & CRM"]}},
		{"computers-technology":{title:"Computers & Technology",sub_menu:["Computer Science"]}},
		{"enterprise":{title:"Enterprise",sub_menu:[]}},
		{"hardware":{title:"Hardware & DIY",sub_menu:[]}},
		{"marketing-seo":{title:"Marketing & SEO",sub_menu:[]}},
		{"security":{title:"Security",sub_menu:[]}},
		{"software":{title:"Software",sub_menu:["Mac","Office","Windows & PC"]}},
		{"Yoga":{title:"Yoga",sub_menu:[]}},
	];
	var s_menu = $(".list-categories");
	var m_menu = $(".main_menu");
	for (var i in main_menu){
		var menu_i= main_menu[i];
		for (var key in menu_i){
			menu_i = menu_i[key];
			var sub_menu="";
			var sub_menu_class = '';
			if (menu_i.sub_menu.length>0){
				sub_menu+="<ul class='sub-menu'>";
				for (var k in menu_i.sub_menu)
					sub_menu+="<li><a href='https://videvs.blogspot.com/search/label/"+encodeURIComponent(menu_i.sub_menu[k])+"?max-result=5'>"+menu_i.sub_menu[k]+"</a></li>";
				sub_menu+="</ul>";
				sub_menu_class ="menu-item-has-children";
			}
			s_menu.append('<li><a href="/search/label/'+key+'?max-results=5">'+menu_i.title+'</a></li>')
			m_menu.append("<li class='menu-item "+sub_menu_class+"'><a href='/search/label/"+key+"?max-results=5'>"+menu_i.title+"</a>" +sub_menu);
		}
	}
});
