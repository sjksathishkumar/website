$(function() {

    $('#tag').magicSuggest({
	required: true,
        data: '../script/expert_get_tags.php',
        valueField: 'tag_id',
        displayField: 'tag_name',
	defaultValues: ['income tax'],
	value: 'income tax'
    });

});
