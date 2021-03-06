var EditableTable = function () {

    return {

        //main function to initiate the module
        init: function () {
         
		 

          // jQuery('#editable-sample_wrapper .dataTables_filter input').addClass("form-control medium"); // modify table search input
          // jQuery('#editable-sample_wrapper .dataTables_length select').addClass("form-control xsmall"); // modify table per page dropdown

		   
		 



			var nCloneTh = document.createElement( 'th' );
          var nCloneTd = document.createElement( 'td' );
          nCloneTd.innerHTML = '<img src="assets/advanced-datatable/examples/examples_support/details_open.png">';
          nCloneTd.className = "center";

          $('#tag_table thead tr').each( function () {
              this.insertBefore( nCloneTh, this.childNodes[0] );
          } );

          $('#tag_table tbody tr').each( function () {
              this.insertBefore(  nCloneTd.cloneNode( true ), this.childNodes[0] );
          } );

          /*
           * Initialse DataTables, with no sorting on the 'details' column
           */
          var oTable = $('#tag_table').dataTable( {
              "aoColumnDefs": [
                  { "bSortable": false, "aTargets": [ 0 ] }
              ],
              "aaSorting": [[1, 'asc']],
			  "aLengthMenu": [
                    [5, 15, 20, -1],
                    [5, 15, 20, "All"] // change per page values here
                ],
				
                // set the initial value
                "iDisplayLength": 5,
                "sDom": "<'row'<'col-lg-6'l><'col-lg-6'f>r>t<'row'<'col-lg-6'i><'col-lg-12'T><'col-lg-6'p>>",
				
				"bProcessing": true,
		"bServerSide": true,
		"sAjaxSource": "script/tag_view.php",
		"sServerMethod": "POST",
	  
         "sPaginationType": "bootstrap",
         "oLanguage": {
         "sLengthMenu": "_MENU_ records per page",
          "oPaginate": {
          "sPrevious": "Prev",
          "sNext": "Next"
                    }
                },
				"oColReorder": {
                        "iFixedColumns": 1
                    },
				"aoColumns": [                           //Row control
                        { "sName": "button", "bSortable": false, "sWidth": "3%"},
                        { "sName": "tag_id", "sWidth": "25%"},
                        { "sName": "tag_name", "sWidth": "50%"}						
                    ],
					"oColVis": {
			"aiExclude": [ 0 ]
		},
					"oTableTools": {
            "aButtons": [
                
             ]
		
		}
          });

          /* Add event listener for opening and closing details
           * Note that the indicator for showing which row is open is not controlled by DataTables,
           * rather it is done here
           */
          $('#tag_table tbody td img').live('click', function () {
              var nTr = $(this).parents('tr')[0];
              if ( oTable.fnIsOpen(nTr) )
              {
                  /* This row is already open - close it */
                  this.src = "assets/advanced-datatable/examples/examples_support/details_open.png";
                  oTable.fnClose( nTr );
              }
              else
              {
                  /* Open this row */
                  this.src = "assets/advanced-datatable/examples/examples_support/details_close.png";
                  oTable.fnOpen( nTr, fnFormatDetails(oTable, nTr), 'details' );
              }
          } );
		  
		  
		  
		  function fnFormatDetails ( oTable, nTr )
      {
          var aData = oTable.fnGetData( nTr );
          var sOut = '<table width="100%" height="17%" border="0" cellspacing="0" cellpadding="5">';
          sOut += '<tr valign="top"><td width="10%"></td><td width="30%"><b>Tag ID : </b>'+aData[1]+'</td><td width="20%"><b>Tag Name: </b>'+aData[2]+'</td></tr>';
          sOut += '<tr valign="top"><td></td><td><a href="#edit_tag" class="edit" data-toggle="modal"><button type="button" class="btn btn-success btn-sm"><i class="fa fa-pencil"></i> Edit</button></a></td><td><a href="" class="delete" data-toggle="modal"><button type="button" class="btn btn-success btn-sm"><i class="fa fa-pencil"></i> Delete</button></a></td></tr>';
          sOut += '</table>';

          return sOut;
      }
    
   		
		$('#tag_table a.edit').live('click', function (e) {
                e.preventDefault();
				var nTr = $(this).parents('tr')[1];
        //var nRow = $(this).parents('tr')[0];
        //var row_id =nTr.id;
        //var aData = oTable.fnGetData( nTr );
				//var aData = oTable.fnGetData( nTr );
                /* Get the row as a parent of the link that was clicked on */
               var jqTds = $('>td', nTr);
          //     alert(aData[2]);
               //console.log(jqTds[1]);
               //alert(jqTds[0].innerText);
               var value = jqTds[0].innerText;
               var final_data = value.substring(8, 11);
               //alert(final_data);
			   jQuery.ajax( {
                    dataType: 'json',
                    type: "POST",
                    url: "script/tag_view_fill.php",
                    cache: false,
                    data: 'tag_id=' + final_data,
					success: function(data) {
						$('#tag_detail').loadJSON(data);
						}
                    
                } );
			   
				});

    $('#tag_table a.delete').live('click', function (e) {
        e.preventDefault();
        if (confirm("Are you sure to delete this row ?") == false) {
                    return;
                }
        	var nTr = $(this).parents('tr')[1];
               var jqTds = $('>td', nTr);
               var value = jqTds[0].innerText;
               var final_data = value.substring(8, 11);
               //alert(final_data);
         	jQuery.ajax( {
                    type: "POST",
                    url: "script/tag_delete.php",
                    cache: false,
                    data: 'tag_id=' + final_data,
			  success: function(msg) {
			    if(msg != 'success')
			    {
			    //oTable.fnDeleteRow( nTr );  
			    alert(msg);
			    //alert("Can't Delete Tag. It mounted with Questions !");
			    oTable.fnDraw();
			    //location.reload(true);
			    }
			    else  
			    {
			    alert(msg);
			    //alert("Deleted Successfully !");
				oTable.fnDraw();
			      //location.reload(true);
			    //alert("Error on query");
			    }
             		}       
                } );  
         
        });

// Add new tag

		$('#new_tag_detail').on('submit',function(e) {
		e.preventDefault();
		jQuery.ajax( {
		            type: "POST",
		            url: $(this).attr("action"),
		            cache: false,
		            data: $(this).serialize(),
		  	    	success: function(msg) {
				    if(msg == "success")
				    {$('.close').click()
					    alert("Created Successfully!");
					    oTable.fnDraw();
				    }
				    else if(msg == 'available')
				    {
				    	alert("Tag Already Available. Please try another Tag Name !")
				    }
				    else  
				    	alert("Failed to Create!");
			    }
		            
		    } );  	
		
			
		});




// Update tag details
				
		$('#tag_detail').on('submit',function(e) {
		e.preventDefault();
		jQuery.ajax( {
		            type: "POST",
		            url: $(this).attr("action"),
		            cache: false,
		            data: $(this).serialize(),
		  	    	success: function(msg) {
				    if(msg == "success")
				    {$('.close').click()
					    alert("Updated Successfully!");
					    oTable.fnDraw();
				    }
				    else if(msg == 'available')
				    {
				    	alert("Tag Already Available. Please try another Tag Name !")
				    }
				    else  
				    	alert("Failed to Update!");
			    }
		            
		    } );  	
		
			
		});

  
			
 }

    };

}();
