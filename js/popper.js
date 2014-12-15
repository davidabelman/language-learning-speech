function popperInit () {

$(function() {
		    var moveLeft = 0;
		    var moveDown = 0;
		    $('p.popper').hover(function(e) {
		   
		   		console.log("p.popper hover activated")

		        var target = '#' + ($(this).attr('data-popbox'));
		         
		        $(target).show();
		        moveLeft = $(this).outerWidth()/100;
		        moveDown = ($(target).outerHeight()*1.2);
		    }, function() {
		        var target = '#' + ($(this).attr('data-popbox'));
		        $(target).hide();
		    });
		 
		    $('p.popper').mousemove(function(e) {

		    	console.log("p.popper mousemove activated")

		        var target = '#' + ($(this).attr('data-popbox'));
		         
		        leftD = e.pageX + parseInt(moveLeft);
		        maxRight = leftD + $(target).outerWidth();
		        windowLeft = $(window).width() - 40;
		        windowRight = 0;
		        maxLeft = e.pageX - (parseInt(moveLeft) + $(target).outerWidth() + 20);
		         
		        if(maxRight > windowLeft && maxLeft > windowRight)
		        {
		            leftD = maxLeft;
		        }
		     
		        topD = e.pageY - parseInt(moveDown);
		        maxBottom = parseInt(e.pageY + parseInt(moveDown) + 20);
		        windowBottom = parseInt(parseInt($(document).scrollTop()) + parseInt($(window).height()));
		        maxTop = topD;
		        windowTop = parseInt($(document).scrollTop());
		        if(maxBottom > windowBottom)
		        {
		            topD = windowBottom - $(target).outerHeight() - 20;
		        } else if(maxTop < windowTop){
		            topD = windowTop + 20;
		        }
		     
		        $(target).css('top', topD).css('left', leftD);
		     
		     
		    });
		 
		});

}

popperInit()