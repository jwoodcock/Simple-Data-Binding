/**
 * Simple Data Binding in Vanilla JavaScript for demostration purposes.
 * Please do not use this code in Production as it has not been tested well
 * beyond illustrating the points in the talk. 
 *
 *
 * This setup script creates some elements and attaches them to binder data store.
 *
 */

function setup() {

    var binder = new dataBinder(); // Our binder object
    var title, description, flag; // store for new values
    var old_title, old_description, old_flag; // store old values

    // add binding to html elements
    binder.on('title:change', function(evt, attr_name, new_val, initiator) {
        old_title = title;
        title = new_val;
        updateOutput();
    });

    binder.on('description:change', function(evt, attr_name, new_val, initiator) {
        old_description = description;
        description = new_val;
        updateOutput();
    });

    binder.on('flag:change', function(evt, attr_name, new_val, initiator) {
        old_flag = flag;
        flag = 'false';
        if (document.getElementById(attr_name).checked) {
            flag = 'true';
        }
        updateOutput();
    });

    // method that handles updating the model display
    var updateOutput = function() {
        var output = '<b>Title</b><br />'
        + '&nbsp;&nbsp;OLD: ' + old_title + '<br />'
        + '&nbsp;&nbsp;NEW: ' + title + '<br />'
        + '<b>Flag</b><br />'
        + '&nbsp;&nbsp;OLD: ' + old_flag + '<br />'
        + '&nbsp;&nbsp;NEW: ' + flag + '<br />'
        + '<b>Descripton</b><br />'
        + '&nbsp;&nbsp;OLD: ' + old_description + '<br />'
        + '&nbsp;&nbsp;NEW: ' + description;
        document.getElementById('model_output').innerHTML = output;
    };

    document.getElementById('title').focus(); 
}

setup();
