function progRange(){

	if( $("#prog-range").length ){
		return $("#prog-range");
	}

	var $progressBar = $("<input />").attr("type","range");

	var maxScrollTop = $(document).height() - $(window).height();;

	$progressBar
		.attr("min","0" )
		.attr("max",maxScrollTop )
		.attr("id","prog-range")
		.val(0);

	$("body").prepend( $progressBar );


	$(window).scroll(function (event) {
	    var scroll = $(window).scrollTop();
	    
	    $progRange.val(scroll);
	});

	$( window ).resize(function(){
		var maxScrollTop = $(document).height() - $(window).height();
		$progRange.attr("max",maxScrollTop );
	});
	
	return $progressBar;
}