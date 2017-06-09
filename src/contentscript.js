$(document).ready(function() {
    var filterBox = generateFilterBox();
    $("div.indexContainer").prev().append(filterBox);

    $("#filterBox").keyup(function(event) {
    	if ( event.which == 13 ) {
    		filter($(this).val());
    	}
    });
    
    $("#filterButton").click(function() {
    	filter($("#filterBox").val());
    });

});

function generateFilterBox() {
    var filterBox = '<div>';
    filterBox += '<input type="text" id="filterBox" placeholder="press Enter" />';
    filterBox += '<input type="button" id="filterButton" value="Go" /><br/>';
    filterBox += '<input type="radio" id="exactWord" name="exactWord" value="contains" checked="checked" />Contains &nbsp; ';
    filterBox += '<input type="radio" id="exactWord" name="exactWord" value="exact" />Prefix';
    filterBox += '</div>';
    return filterBox;
}

function filter(value) {
	var radio = $('#exactWord:checked').val();
    $("div.indexContainer ul li").each(function(idx) {
        var link = $(this).children("a").text();
        if (radio == "contains") {
            if(link.toUpperCase().includes(value.toUpperCase())) {
                // console.log("link: " + link);
                $(this).show();
                // $(this).css("background", "yellow");
            } else {
                $(this).hide();
                // $(this).css("color", "white");
            }
        } else {
            if(link.toUpperCase().startsWith(value.toUpperCase())) {
                $(this).show();
            } else {
                $(this).hide();
            }
        }
    });
}

