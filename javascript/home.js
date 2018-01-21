// ----------------------------------------------
/* FastSpring API Calls */

function addCheckoutItem(elmnt, item, color) {
    // User wants to remove item
    if (elmnt.style.borderColor == color) {
        fastspring.builder.remove(item);
        elmnt.style.borderColor = 'white';
        elmnt.style.borderStyle = 'solid';
        elmnt.style.borderWidth = '0px';
    }
    // User wants to add item
    else {
        fastspring.builder.add(item);
        elmnt.style.borderColor = color;
        elmnt.style.borderStyle = 'solid';
        elmnt.style.borderWidth = '5px';
    }
}

function checkout() {
    fastspring.builder.checkout();
}