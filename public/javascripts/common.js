$(document).ready(function() {
    (function() {
    	/* Create new URL form validations */
        $("#new-wpt-entry-form").validate();
        $("#submit-new-url").click(function() {
            $("#new-wpt-entry-form").valid();
        });

        /* Edit URL data form validations */
        $("#edit-url-data-form").validate();
        $("#edit-url-data-submit").click(function() {
            $("#edit-url-data-form").valid();
        });
    })();
});
