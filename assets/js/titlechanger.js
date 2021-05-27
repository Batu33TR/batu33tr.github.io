var isOldTitle = true;
var oldTitle = document.title;
var newTitle = "Batu33TR - StayAtHome";
var interval = null;
function changeTitle() {
    document.title = isOldTitle ? oldTitle : newTitle;
    isOldTitle = !isOldTitle;
}
interval = setInterval(changeTitle, 3000 + 2000);

$(window).focus(function () {
    clearInterval(interval);
    $("title").text(oldTitle);
});