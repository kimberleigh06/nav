/**Keyboard functionality. Original version from http://simplyaccessible.com/article/arrow-key-navigation/
Modified by Steve Kerr for the AccessibleMenu**/

$('#accessibleNav')
    .keydown(function(e){
        // Listen for the up, down, left and right arrow keys, otherwise, end here
        if ([37,38,39,40].indexOf(e.keyCode) == -1) {
            return;
        }

        // Store the reference to the target link
        var link = $(e.target);

        switch(e.keyCode) {
            case 37: // left arrow
                // Make sure to stop event bubbling
                e.preventDefault();
                e.stopPropagation();

                // This is the first item in the top level mega menu list
                if(link.parent('li').prevAll('li').filter(':visible').first().length == 0) {
                    // Focus on the last item in the top level
                    link.parent('li').nextAll('li').filter(':visible').last().find('a').first().focus();
                } else {
                    // Focus on the previous item in the top level
                    link.parent('li').prevAll('li').filter(':visible').first().find('a').first().focus();
                }
                break;
            case 38: /// up arrow
                // Find the nested element that acts as the menu
                var dropdown = link.parent('li');

                // If there is a UL available, place focus on the first focusable element within
                if(dropdown.length > 0){
                    e.preventDefault();
                    e.stopPropagation();

                    dropdown.find('ul li a').filter(':visible').first().focus();
                }

                break;
            case 39: // right arrow
                // Make sure to stop event bubbling
                e.preventDefault();
                e.stopPropagation();

                // This is the last item
                if(link.parent('li').nextAll('li').filter(':visible').first().length == 0) {
                    // Focus on the first item in the top level
                    link.parent('li').prevAll('li').filter(':visible').last().find('a').first().focus();
                } else {
                    // Focus on the next item in the top level
                    link.parent('li').nextAll('li').filter(':visible').first().find('a').first().focus();
                }
                break;
            case 40: // down arrow
                // Find the nested element that acts as the menu
                var dropdown = link.parent('li');

                // If there is a UL available, place focus on the first focusable element within
                if(dropdown.length > 0){
                    // Make sure to stop event bubbling
                    e.preventDefault();
                    e.stopPropagation();

                    dropdown.find('ul li a').filter(':visible').first().focus();
                }
                break;
        }
    });