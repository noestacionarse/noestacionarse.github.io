$(document).foundation();
$(document).ready(function(){
	$(document).on("scroll", function(){
		$("a.menuLink > span").addClass("hide");
		$("a.menuLink.is-active > span").removeClass("hide");
	});
	
	$("#zonaDeDerrumbe").on("click", function(){
		$("#divAntes").toggleClass("hide");
		$("#divDespues").toggleClass("hide");
	});
});