var main_menu=[{"web-development":{title:"Web Development",sub_menu:["ASP.NET","CMS","HTML5 & CSS","JavaScript","JSP","PHP","Python","Ruby","Rails","XML","Services & APIs","Other"]}},{programming:{title:"Programming",sub_menu:["C & C++","C#","Delphi","Java",".NET","Objective-C","OpenCL","Perl","PowerShell","Scala","Swift","Visual Basic"]}},{datebases:{title:"Databases",sub_menu:["Big Data","Data Analysis","MongoDB","MySQL","NoSQL","PostgreSQL","Oracle","SQL"]}},{"game-programming":{title:"Game Programming",sub_menu:[]}},{"graphics-design":{title:"Graphics & Design",sub_menu:["3D MAX","CAD","Coreldraw","Dreamweaver","Flash","Illustrator","Maya","Photoshop","Premiere"]}},{"operating-systems":{title:"Operating Systems",sub_menu:["Windows","Linux & Unix","Macintosh","Android","iOS","Windows Phone"]}},{"networking-cloud-computing":{title:"Networking & Cloud Computing",sub_menu:["Cloud Computing","Network Administration","Network Security","Networks, Protocols & APIs","Wireless Networks"]}},{administration:{title:"Administration",sub_menu:["Cloud & Virtualization","Infrastructure","Mail Servers","Microsoft Platform","Monitoring","Task Automation","Web Servers","Other"]}},{certification:{title:"Certification",sub_menu:["Computer Science","Certification","Enterprise","Business Applications","Communications","ERP & CRM"]}},{"computers-technology":{title:"Computers & Technology",sub_menu:["Computer Science"]}},{enterprise:{title:"Enterprise",sub_menu:[]}},{hardware:{title:"Hardware & DIY",sub_menu:[]}},{"marketing-seo":{title:"Marketing & SEO",sub_menu:[]}},{security:{title:"Security",sub_menu:[]}},{software:{title:"Software",sub_menu:["Mac","Office","Windows & PC"]}},{Yoga:{title:"Yoga",sub_menu:[]}}];
var s_menu = $(".list-categories");
var m_menu = $(".main_menu");
for (var i in main_menu){
	var menu_i= main_menu[i];
	for (var key in menu_i){
		menu_i = menu_i[key];
		var mr = (menu_i.title=="Yoga")?500:5;
		var sub_menu="",sub_menu_class = '';
		if (menu_i.sub_menu.length>0){
			sub_menu+="<ul class='sub-menu'>";
			for (var k in menu_i.sub_menu)
				sub_menu+="<li><a href='https://videvs.blogspot.com/search/label/"+encodeURIComponent(menu_i.sub_menu[k])+"?max-result="+mr+"'>"+menu_i.sub_menu[k]+"</a></li>";
			sub_menu+="</ul>";
			sub_menu_class ="menu-item-has-children";
		}
		s_menu.append('<li><a href="/search/label/'+key+'?max-results='+mr+'">'+menu_i.title+'</a></li>')
		m_menu.append("<li class='menu-item "+sub_menu_class+"'><a href='/search/label/"+key+"?max-results="+mr+"'>"+menu_i.title+"</a>" +sub_menu);
	}
}