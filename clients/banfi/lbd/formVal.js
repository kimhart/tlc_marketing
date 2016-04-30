
jQuery.validator.unobtrusive.adapters.add("brequired", function (options) {
    //b-required for checkboxes
    if (options.element.tagName.toUpperCase() == "INPUT" && options.element.type.toUpperCase() == "CHECKBOX" && options.element.id == "Terms") {
        //setValidationValues(options, "required", true);
        options.rules["required"] = true;
        if (options.message) {
            options.messages["required"] = options.message;
        }
    }
});


$(document).ready(function () {
    if ($('span').hasClass('field-validation-error')) {
        $('html, body').animate({ scrollTop: $('.field-validation-error').offset().top - 120 }, 'fast')
    }
    $('#ageGate').submit(function () {
        if ($(this).valid()) {
            $('input[type="submit"], input[type="image"]').attr('disabled', 'disabled');

        }
    });


});

function successUpdate(result, updateCopyId) {
    $(updateCopyId).html(result);
    if ($('div').hasClass('validation-summary-errors')) {
        $('html, body').animate({ scrollTop: $('.validation-summary-errors').offset().top - 50 }, 'fast')
    }
    if (result.redirect) {
        //redirect to Specified Url
        window.location = result.redirectUrl;
    }
}
function disableSubmitButton() {
    $('input[type="submit"], input[type="image"]').attr('disabled', 'disabled');
}

function enableSubmitButton() {
    $('input[type="submit"], input[type="image"]').removeAttr('disabled');
}
function error() {
    window.location = $('#hdn').val() + 'Error/Unknown';
}