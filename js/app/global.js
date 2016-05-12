//define breakpoints. breakpoint value should be 'desktop', 'tablet' or 'mobile'.
//mobile will be <= 640px
//tablet will be > 640 && < 1028px
//desktop will be 1028+
var breakpoint;
$(".parent > a").append("<span class='plus' aria-label='plus'>&#43;</span>");

$(".parent").on('focusin', function(e) {
	var $this = $(this);
	$this.parent('.parent').addClass('expand');
});

$(".parent").on('focusout', function(e) {
	var $this = $(this);
	$this.parent('.parent').removeClass('expand');
});

//alter the menu functionality based on breakpoint using enquire.js for javascript breakpoints
enquire.register("screen and (min-width: 768px)", {
    match : function() {
        breakpoint = 'desktop';
        resetNav();
    },  
    unmatch : function() {

        // Hide the sidebar
    }
});

function resetNav() {
	//TODO: Collapse all expanded nav items. 
}