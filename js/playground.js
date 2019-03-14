//start of page
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
	$("#board").append(circle);
	$(circle).css({
    left : (Math.random() * ($("#board").width() - $(circle).width())),
    top : (Math.random() * ($("#board").height() - $(circle).height())),
    background: getRandomColor()
  });

	

}


  $("#move").click(function move(){

	var stop;
    if (stop==true){
    	clearInterval(id);
    }
    	else {
    		stop=true;
    	$(".circle").each(function(){
    		var switchx=true;
    		var switchy=true;
    		var id = setInterval(frame, 10);
			function frame() {
    	var circle1 = this;
    	var x = $(circle1).position();

        if (switchx=false) {
        	if(x.left<=0){
        		switchx=true;
        		$(circle1).css({
           	background: getRandomColor(),
           	border-color: getRandomColor()
           });
            }
            else { $(circle1).css({
           	left:  x.left-1,
           });
        }
    }
         
        else if(switchx=true) {
        	if(x.left>=750){
        		switchx=false;
        		$(circle1).css({
           	background: getRandomColor(),
           	border-color: getRandomColor()
           });
        	}
        	else {$(circle1).css({
           	left: x.left+1,
           });
        }
    }
    if (switchy=false) {
        	if(x.top<=0){
        		switchy=true;
        		$(circle1).css({
           background: getRandomColor(),
           border-color: getRandomColor()
           });
            }
            else { $(circle1).css({
           	top:  x.top+1,
           });
        }
    }
         
        else if(switchy=true) {
        	if(x.top>=750){
        		switchy=false;
        		$(circle1).css({
           background: getRandomColor(),
           border-color: getRandomColor()
           });
        	}
        	else {$(circle1).css({
           	top: x.top-1,
           });
        }
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
for(var i=0;i<49;i++)
addCircle();


});//end