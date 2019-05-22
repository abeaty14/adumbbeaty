//start of page
var stop=false;
$(document).ready(function(){

function getRandomColor(){
	var letters="0123456789abcdef";
	var result ="#";

	for (var i=0; i<6; i++)
	{
		result+=letters.charAt(parseInt(Math.random()*letters.length));
	}
	return result;
}
function addCircle(){

var circle=$('<div class="circle"</div>');
$(circle).data("switchx",Math.random() >= 0.5);
$(circle).data("switchy",Math.random() >= 0.5);
$(circle).data(0,0);
	$("#board").append(circle);
	$(circle).css({
    left : (Math.random() * ($("#board").width() - $(circle).width())),
    top : (Math.random() * ($("#board").height() - $(circle).height())),
    background: getRandomColor()
  });

	

}
var stop=false;
var id;
$("#move").click(function move(){
 
    if (stop==true){
      //for (var i = 1; i < 99999; i++)
     window.clearInterval(id);
   stop=false;
    }
      else {
        stop=true;
      
        id = setInterval(frame, 10);

           function frame() {
            $(".circle").each(function(){
          var circle1 = $(this);
           var x = $(circle1).position();
           if(x.left<3){
            $(circle1).data("switchx",true);
            $(circle1).css({background: getRandomColor()});
           }
           else if(x.left>377){
            $(circle1).data("switchx",false);
            $(circle1).css({background: getRandomColor()});
           }
           if(x.top<3){
            $(circle1).data("switchy",true);
            $(circle1).css({background: getRandomColor()});
           }
           else if(x.top>377){
             $(circle1).data("switchy",false);
             $(circle1).css({background: getRandomColor()});
           }
          if ( $(circle1).data("switchx")==false) {
                 $(circle1).css({
                  left:  x.left-1,
                 });
              }
        
        else if( $(circle1).data("switchx")==true) {
               $(circle1).css({
                  left: x.left+1,
                 });
              }
          
          if ($(circle1).data("switchy")==false) {
                $(circle1).css({
                  top:  x.top-1,
                 });
              
          }
               
              else if($(circle1).data("switchy")==true) {
                $(circle1).css({
                  top: x.top+1,
                 });
              
          }

              
            
          });
       };//each
    }
 });//move



  
$("#add").click(function(e)
{
	addCircle();
});



$("#change").click(function(e)
{
	$(".circle").each(function color(){
		$(this).css({
			background: getRandomColor()
		});
	});
});

$("#reset").click(function(e){
$(".circle").remove();
for (var i=0;i<49;i++)
addCircle();
});

$( "#board" ).on("dblclick", ".circle", function() {
  $( this ).remove();
});

$( "#board" ).on("click", ".circle", function() {
	$(this).css('zIndex', z);
	z++;
});

function remove(){
	var node = document.getElementByClass("circle");
	node.removeChild(node.firstChild);
}
////////////////////////////////////////////////////////////////////// CIRCLE END

$("#startSnake").click(function go(){
    var snake = $('<div class="snake"</div>');
    $(snake).data("bodyNum", 1);
    $(snake).data("left", 1);
    $(snake).data("right", 1);
    $(snake).data("up", 1);
    $(snake).data("down", 1);
    $("#board").append(snake);
    $(snake).css({
      left : (Math.random() * ($("#board").width() - $(circle).width())%5),
      top : (Math.random() * ($("#board").height() - $(circle).height())%5),
  });
    idSnake = setInterval(frame, 100);
    function frame() {
        if ($(snake).data("left")==0)
        {
          $(snake).css({
                  left: x.left-5,
                 });
        }
        else if ($(snake).data("right")==0)
        {
          $(snake).css({
                  left: x.left+5,
                 });
        }
        else if ($(snake).data("up")==0)
        {
          $(snake).css({
                  top: x.left-5,
                 });
        }
        else if ($(snake).data("down")==0)
        {
          $(snake).css({
                  top: x.left+5,
                 });
        }
    }
});

document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        $(snake).data("up")=0;
        $(snake).data("down")=1;
        $(snake).data("left")=1;
        $(snake).data("right")=1;
    }
    else if (e.keyCode == '40') {
        $(snake).data("up")=1;
        $(snake).data("down")=0;
        $(snake).data("left")=1;
        $(snake).data("right")=1;
    }
    else if (e.keyCode == '37') {
        $(snake).data("up")=1;
        $(snake).data("down")=1;
        $(snake).data("left")=0;
        $(snake).data("right")=1;
    }
    else if (e.keyCode == '39') {
        $(snake).data("up")=1;
        $(snake).data("down")=1;
        $(snake).data("left")=1;
        $(snake).data("right")=0;
    }

}


//rest of code
var z=999;
var go=false;
for(var i=0;i<30;i++)
addCircle();
 











});//end


