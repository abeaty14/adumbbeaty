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
$(circle).data("switchx",true);
$(circle).data("switchy",true);
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
      for (var i = 1; i < 99999; i++)
     window.clearInterval(i);
   stop=false;
    }
      else {
        stop=true;
      $(".circle").each(function(){
        var circle1 = $(this)
        id = setInterval(frame, 10);
           function frame() {
           var x = $(circle1).position();
           if(x.left<0){
            $(circle1).data("switchx",true);
            $(circle1).css({background: getRandomColor()});
           }
           else if(x.left>380){
            $(circle1).data("switchx",false);
            $(circle1).css({background: getRandomColor()});
           }
           if(x.top<0){
            $(circle1).data("switchy",true);
            $(circle1).css({background: getRandomColor()});
           }
           else if(x.top>380){
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

              
            
          }
       });//each
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
//rest of code
var z=999;
var go=false;
for(var i=0;i<30;i++)
addCircle();
 
});//end


