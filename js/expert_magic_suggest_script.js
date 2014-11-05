$(function() {

    $('#tag').magicSuggest({
	required: true,
    data: '../script/expert_get_tags.php',
    placeholder: 'Please Select Tags or Enter Manually !',
    valueField: 'tag_id',
    allowFreeEntries: false,
    displayField: 'tag_name',
    expandOnFocus: true,
    maxSuggestions: 5,
	defaultValues: ['income tax'],
	value: 'income tax'
    });

});
