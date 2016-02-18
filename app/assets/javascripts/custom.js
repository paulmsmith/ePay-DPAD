parsleyOptions = {
  trigger: 'submit', // What listen event shall trigger the validation
  successClass: 'success', // Success class name
  errorClass: 'error', // Error class name that will be applied on the element returned in the classHandler
  classHandler: function (el) {
    return el.$element.closest('.form-group');
  }, // classHandler returns the element where successClass and errorClass are applied
  errorsContainer: function (el) {
    return el.$element.closest('.form-group').find('.error-container');
  }, // This tells the script which element we want to display the error message
  errorsWrapper: '<span class="error-message" aria-hidden="true"></span>', // This will wrap around our errorTemplate
  errorTemplate: '<span></span>', // The error message will be displayed within this HTML element
  excluded: 'input[type=button], input[type=submit], input[type=reset], input[type=hidden], input:hidden'
};

if ($('form').length > 0){
  $('form').parsley(parsleyOptions);
};
