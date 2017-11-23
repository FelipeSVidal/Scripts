var bandodenoob = "";
var nremover = ["10573"];
TWMap.resize(20,365*99);
$.each(TWMap.players,function(index,value){
var noob = String(value.newbie);
if(noob.indexOf("hoje") != -1){
	$.each(TWMap.villages,function(index2,value2){
		var aux = String(value2.owner);
		if(index === aux){
        	bandodenoob += String(value2.xy)+"      "+noob+"<br/>";
			nremover.push(String(value2.id));
		}
	});
}
});

setInterval(function(){
	$("#map_container div img").each(function(i,v){
       var teste = false;
		var div = $(this).attr("id");
		if(div === undefined){return true}
		div = div.split("_");
		$.each(nremover,function(ind,va){
			console.log(div+" - "+va);
			if(div[2] === va){
				teste = true;
            }

        });
	if(teste == false){
    	$(this).remove();
	}
    });

},10000);

                var w = window.open("", "popupWindow", "width=600, height=400, scrollbars=yes");
                var $w = $(w.document.body);
                $w.html(bandodenoob);
