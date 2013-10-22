/*
*
* Autor: Gabriel Mauricio
* version: 1.0
* Aplicacion para Guia Turistica
* 
*/

//start Aplication
// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();


//
// create base UI tab and root window
//
var win1 = Titanium.UI.createWindow({  
    title:'HOME',
    backgroundColor:'#fff'
});
var tab1 = Titanium.UI.createTab({  
    icon:'home1.png',
    title:'HOME',
    window:win1
});

var cabecera = Ti.UI.createImageView({
	top:'0',
	image:'Logo de la Aplicacion Movils.png',
	backgroundColor:'#272822',
	width:'100%',
	height:'15%'
});



var image = Ti.UI.createImageView({
	image:'catedral.jpg',
	fullScreen:true,
	width:'100%',
	height:'100%'
});


var label1 = Titanium.UI.createLabel({
	color:'#999',
	font:{fontSize:25, fontWeight:'bold',fontFamily:'Helvetica Neue'},
	text:'BIENVENIDO A ATRACTIVE PLACES UNA GUIA DONDE PUEDE ENCONTAR DE TODO',
	backgroundColor:'#FFF',
	opacity:'0.8',
	textAlign:'center',
	width:'auto'
});



win1.add(image);
win1.add(cabecera);
win1.add(label1);

//
// create controls tab and root window
//

var win2 = Titanium.UI.createWindow({  
    title:'PLACES',
    backgroundColor:'#fff'
});



var tab2 = Titanium.UI.createTab({  
    icon:'places.ico',
    title:'PLACES',
    window:win2
});

var cabecera = Ti.UI.createImageView({
	top:'0',
	image:'Logo de la Aplicacion Movils.png',
	backgroundColor:'#272822',
	width:'100%',
	height:'15%'
});



var image = Ti.UI.createImageView({
	image:'Warivillka.jpg',
	fullScreen:true,
	width:'100%',
	height:'100%'
});




var sectionValle = Ti.UI.createTableViewSection({ headerTitle: 'Valle del Mantaro',font:{fontWeight:'bold', fontSize:'16'}});
sectionValle.add(Ti.UI.createTableViewRow({ title: 'Huancayo',color:'#FFFFFF',backgroundColor:'#272822', opacity:'0.90',font:{fontWeight:'bold', fontSize:'16'}, height:130, leftImage:'hyo.jpg'}));
sectionValle.add(Ti.UI.createTableViewRow({ title: 'Concepción',color:'#FFFFFF',backgroundColor:'#272822', opacity:'0.90',font:{fontWeight:'bold', fontSize:'16'}, height:130, leftImage:'hyo.jpg'}));
sectionValle.add(Ti.UI.createTableViewRow({ title: 'Jauja',color:'#FFFFFF',backgroundColor:'#272822', opacity:'0.90',font:{fontWeight:'bold', fontSize:'16'}, height:130, leftImage:'hyo.jpg'}));
sectionValle.add(Ti.UI.createTableViewRow({ title: 'Chupaca',color:'#FFFFFF', backgroundColor:'#272822', opacity:'0.90',font:{fontWeight:'bold', fontSize:'16'}, height:130, leftImage:'hyo.jpg'}));

var sectionAlto = Ti.UI.createTableViewSection({ headerTitle: 'Alto Andino' ,font:{fontWeight:'bold', fontSize:'16'}});
sectionAlto.add(Ti.UI.createTableViewRow({ title: 'Tarma' ,color:'#FFFFFF',backgroundColor:'#272822', opacity:'0.90',font:{fontWeight:'bold', fontSize:'16'}, height:130, leftImage:'hyo.jpg'}));
sectionAlto.add(Ti.UI.createTableViewRow({ title: 'Junin' ,color:'#FFFFFF', backgroundColor:'#272822', opacity:'0.90',font:{fontWeight:'bold', fontSize:'16'}, height:130, leftImage:'hyo.jpg'}));
sectionAlto.add(Ti.UI.createTableViewRow({ title: 'Yauli' ,color:'#FFFFFF',backgroundColor:'#272822', opacity:'0.90',font:{fontWeight:'bold', fontSize:'16'}, height:130, leftImage:'hyo.jpg'}));

var sectionSelva = Ti.UI.createTableViewSection({ headerTitle: 'Selva Central' ,font:{fontWeight:'bold', fontSize:'16'}});
sectionSelva.add(Ti.UI.createTableViewRow({ title: 'Chanchamayo' ,color:'#FFFFFF',backgroundColor:'#272822', opacity:'0.90',font:{fontWeight:'bold', fontSize:'16'}, height:130, leftImage:'hyo.jpg' }));
sectionSelva.add(Ti.UI.createTableViewRow({ title: 'Satipo' ,color:'#FFFFFF',backgroundColor:'#272822', opacity:'0.90',font:{fontWeight:'bold', fontSize:'16'}, height:130, leftImage:'hyo.jpg'}));

var table = Ti.UI.createTableView({
  
  top:'150',
  
  data: [sectionValle, sectionAlto, sectionSelva]
});




table.addEventListener('click',function(e){
       if(e.rowData){
           Ti.API.info(e.rowData.title);    

           var winEvent = Titanium.UI.createWindow({
               backgroundColor:'#fff',
               name:e.rowData.title  
               
           });
           var webpage = Ti.UI.createWebView({
          	 
           	url:"places.html",
           	visible:true,
           	name:e.rowData.title
           });
           
           winEvent.open();
           winEvent.add(webpage);
         
           

       }    
   });





var label2 = Titanium.UI.createLabel({
	color:'#999',
	//text:'I am Window 2',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});




win2.add(image);
win2.add(cabecera);
win2.add(label2);


var win3 = Titanium.UI.createWindow({  
    title:'PLACES',
    backgroundColor:'#fff'
});



var tab3 = Titanium.UI.createTab({  
    icon:'recommended.png',
    title:'RECOMENDED',
    window:win3
});

var cabecera = Ti.UI.createImageView({
	top:'0',
	image:'Logo de la Aplicacion Movils.png',
	backgroundColor:'#272822',
	width:'100%',
	height:'15%'
});



var image = Ti.UI.createImageView({
	image:'cerrito_de_la_libertad.jpg',
	fullScreen:true,
	width:'100%',
	height:'100%'
});

var tableData = [ {title: 'Huancayo -  ciudad Incontrastable', color:'#FFFFFF', height:130, leftImage:'hyo.jpg',bordeRadius:30,backgroundColor:'#272822', opacity:'0.90',hasCheck:true}, 
				  {title: 'Satipo',color:'#FFFFFF', height:130, leftImage:'hyo.jpg',bordeRadius:30,backgroundColor:'#272822', opacity:'0.90',hasCheck:true}, 
				  {title: 'Chanchamayo',color:'#FFFFFF', height:130, leftImage:'hyo.jpg',bordeRadius:30,backgroundColor:'#272822', opacity:'0.90',hasCheck:true}, 
				  {title: 'Satipo - Rio Negro',color:'#FFFFFF',height:130, leftImage:'hyo.jpg',bordeRadius:30,backgroundColor:'#272822', opacity:'0.90',hasCheck:true},
				  {title: 'Tarma',color:'#FFFFFF',height:130, leftImage:'hyo.jpg',bordeRadius:30,backgroundColor:'#272822', opacity:'0.90',hasCheck:true},
				  {title: 'Concepción - Plaza de Armas',color:'#FFFFFF',height:130, leftImage:'hyo.jpg',bordeRadius:30,backgroundColor:'#272822', opacity:'0.90',hasCheck:true},
				  {title: 'Jauja - Chanchayllo',color:'#FFFFFF',height:130, leftImage:'hyo.jpg',bordeRadius:30,backgroundColor:'#272822', opacity:'0.90',hasCheck:true},
				  {title: 'Yauli - Baños Termo-minero',color:'#FFFFFF',height:130, leftImage:'hyo.jpg',bordeRadius:30,backgroundColor:'#272822', opacity:'0.90',hasCheck:true},
				  {title: 'Selva Central - Catarata El Triol',color:'#FFFFFF',height:130, leftImage:'hyo.jpg',bordeRadius:30,backgroundColor:'#272822', opacity:'0.90',hasCheck:true},
				  {title: 'Selva Central - Pampa Hermosa',color:'#FFFFFF',height:130, leftImage:'hyo.jpg',bordeRadius:30,backgroundColor:'#272822', opacity:'0.90',hasCheck:true}
				  ];
var table2 = Ti.UI.createTableView({
  headerTitle:'Recommended Places',
  font:{fontWeight:'bold'},
  fontSize:'16',
  data: tableData,
  top:'150'
});


var label3 = Titanium.UI.createLabel({
	color:'#999',
	//text:'I am Window 2',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});




win3.add(image);
win3.add(cabecera);
win3.add(label3);




//
//  add tabs
//

tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);  
tabGroup.addTab(tab3); 


// open tab group
tabGroup.open();
win2.add(table);
win3.add(table2);

