/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
import './bootstrap';


$(".chat-trigger").on('click', function () {
    setTimeout(triggerTab);

});

function triggerTab() {
    const id = window.location.hash;
    $(`a[role="tab"][href="${id}"]`).tab('show');
    if ($(id).length) {
        $("html, body").scrollTop($(".active .block-1").offset().top)
    }
}

triggerTab();

$('a[data-toggle="tooltip"]').tooltip({
    animated: 'fade',
    placement: 'top',
    trigger: 'click'
});

$('a[data-toggle="tooltip"]').click(function (event) {
    event.stopPropagation();
});

$('body').click(function () {
    $('a[data-toggle="tooltip"]').tooltip('hide');
});

