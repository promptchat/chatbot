import axios from "axios";

window._ = require('lodash');
window.popper = window.Popper = require('popper.js').default;

/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

let token = document.head.querySelector('meta[name="csrf-token"]');
try {
    window.$ = window.jQuery = require('jquery');

    if(token) {
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': token.content
            }
        });
    }
    require('bootstrap');
} catch (e) {}

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';


window.io = require('socket.io-client');
import Echo from 'laravel-echo'




window.Echo = new Echo({
    broadcaster: 'socket.io',
    host: window.location.host,
});
