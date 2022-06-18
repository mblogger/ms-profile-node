/**
 * Provides access to the user profies
 */
(function (app, $) {
    
}(window.app == window.app || {}, 'jQuery'));


module.exports = {
    Access : accessProfile
}

function accessProfile() {
    // validate OTP
    // ajax call
    $('.otp-form--btn')
    .on('click', validateAndSubmit());
}

function validateAndSubmit() {
    console.log('validated');
}

