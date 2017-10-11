function progRange(){

	if( $("#prog-range").length ){
		return $("#prog-range");
	}

	var $progressBar = $("<input />").attr("type","range");

	var maxScrollTop = $("body").prop("scrollHeight") - document.body.clientHeight;

	$progressBar
		.attr("min","0" )
		.attr("max",maxScrollTop )
		.attr("id","prog-range")
		.val(0);

	$("body").prepend( $progressBar );

	return $progressBar;
}