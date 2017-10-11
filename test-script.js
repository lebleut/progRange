$(document).ready(function(){
	$progRange = progRange();

	$(window).scroll(function (event) {
	    var scroll = $(window).scrollTop();
	    
	    $progRange.val(scroll);
	});

	$( window ).resize(function(){
		var maxScrollTop = $("body").prop("scrollHeight") - document.body.clientHeight;
		$progRange.attr("max",maxScrollTop );
	});
});
