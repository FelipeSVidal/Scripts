// ==UserScript==
// @name         farmday
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://*/*
// @grant        none
// ==/UserScript==


//https://br78.tribalwars.com.br/game.php?screen=ranking&mode=in_a_day&type=loot_res&name=setrume

var original = [];
var pordenar = [];
var tabelaoriginal = "";
$("#content_value .vis tr:eq(0)").append("<th class='farm'>Farm</th>");
var novatable = "<tbody><tr>"+$("#content_value .vis tr:eq(0)").html()+"</tr> \n";
var bool = true;
var bool2 = true;
$(document).ready(function(){
    var i = 0;
    var name = "";
    var inte = "";
    $("#content_value .vis tr:gt(0)").each(function(){
        $(this).append("<td class='m"+i+"'></td>");
        $(this).addClass("tr"+i);
        name = $(this).find("td").eq(0).find("a").text();
        var split = name.split(" ");
		
        if($(this).hasClass("selected")){
                $(this).find(".m"+i).load("/game.php?screen=ranking&mode=in_a_day&type=loot_res&name="+split[0]+"+"+split[1]+" #in_a_day_ranking_table td:eq(3)");
		}else{
        if(split.length == 1){
            $(this).find(".m"+i).load("/game.php?screen=ranking&mode=in_a_day&type=loot_res&name="+name+" #in_a_day_ranking_table td:eq(3)");
        }else{
                $(this).find(".m"+i).load("/game.php?screen=ranking&mode=in_a_day&type=loot_res&name="+split[0]+"+"+split[1]+" #in_a_day_ranking_table td:eq(3)");
            }
        }
        i = i+1;
        alert(name);
    });
});
function sort(){
    pordenar.sort(function(a,b) {return b-a;});
    for(var i=0;i<pordenar.length;i++){
        for(var j=0;j<original.length;j++){
            //alert("I=:"+pordenar[i] +"J=:"+original[j]);
            if(pordenar[i] == original[j]){
                novatable = novatable +"<tr class='"+$(".tr"+j).attr('class')+"'>"+ $(".tr"+j).html()+"</tr>";
                break;
            }
        }
    }
    novatable = novatable + "</tbody>";
}
function outra(){
    i = 0;
    $("#content_value .vis tr:gt(0)").each(function(){
        $(".m"+i).html($(".m"+i+" .lit-item").html());
        $(".m"+i+" .lit-item").remove();
        inte = $(".m"+i).text();
        var sp = inte.split(".");
        if(sp.length == 1){
            original.push(parseInt(inte));
            pordenar.push(parseInt(inte));
        }else if(sp.length == 2){
            original.push(parseInt(sp[0]+sp[1]));
            pordenar.push(parseInt(sp[0]+sp[1]));
        }else{
            original.push(parseInt(sp[0]+sp[1]+sp[2]));
            pordenar.push(parseInt(sp[0]+sp[1]+sp[2]));
        }
        i = i+1;
    });

}
$(document).on("click",'.farm',function(){
    if(bool === true){
        outra();
        tabelaoriginal = $('.membros').html();
        sort();
        bool = false;
        alert(novatable);
        $('.membros').html(novatable);
    }else{
        if(bool2 === true){
            $('.membros').html(tabelaoriginal);
            bool2 = false;
        }else{
            $('.membros').html(novatable);
            bool2 = true;
        }
    }
    return false;

});
/*
$(".farm").click(function(){
    if(bool === true){
        outra();
        tabelaoriginal = $('.membros').html();
        sort();
        bool = false;
        alert(novatable);
        $('.membros').html(novatable);
    }else{
        alert("1");
        if(bool2 === true){
            $('.membros').html(tabelaoriginal);
            bool2 = false;
        }else{
            $('.membros').html(novatable);
            bool2 = true;
        }
    }
    return false;
});
*/
$("#content_value .vis").addClass("membros");



