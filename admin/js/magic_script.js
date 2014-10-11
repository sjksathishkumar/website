$(function() {

    $('#tag').magicSuggest({
        data: 'script/get_tags.php',
        required: true,
        toggleOnClick: true,
        matchCase: true,
        valueField: 'tag_id',
        displayField: 'tag_name'
    });


    $('#tags').magicSuggest({
        data: 'script/get_tags.php',
        required: true,
        toggleOnClick: true,
        matchCase: true,
        valueField: 'tag_id',
        displayField: 'tag_name'
    });
	
});
