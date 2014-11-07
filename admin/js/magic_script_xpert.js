$(function() {

    $('#tags').magicSuggest({
        data: 'script/xpert_get_tags.php',
        required: true,
        toggleOnClick: true,
    	allowFreeEntries: false,
        matchCase: true,
        valueField: 'tag_id',
        displayField: 'tag_name'
    });

});