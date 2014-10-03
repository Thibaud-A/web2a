
$("#formInscription input").focusout(function(e){

    var element = $("#"+$(e.target).attr("id"));

    switch (element.attr("id"))
    {
        case "email2":
            if($("#email").val().trim() != $("#email2").val().trim())
            	$("#email2").popover('show',"bottom");
			else
				$("#email2").popover('destroy');
            break;
        case "pwd2":
            if($("#pwd").val().trim() != $("#pwd2").val().trim())
            	$("#pwd2").popover('show',"bottom");
			else
				$("#pwd2").popover('destroy');
            break;
        default :
            break;
    }
});

