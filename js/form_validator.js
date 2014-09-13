function validateSalesForm() {

    /*Validate Name Field*/

    var x = document.forms["sales_form"]["name"].value;
    if (x == null || x == "") {
        alert("First name must be filled out");
        return false;
      }
    var pat_name=/^[A-z]+$/;
    if(!pat_name.test(x))
      {         
        alert("name false"); 
        return false;  
      }

  /*Validate Designation Field*/

    var designation = document.forms["sales_form"]["designation"].value;
    if (designation == null || designation == "") {
        alert("Designation must be filled out");
        return false;
      }
    var pat_designation=/^[A-z ]+$/;
    if(!pat_designation.test(designation))
      {         
        alert("designation fasle"); 
        return false;  
      }

    /*Validate Company Field*/

    var company = document.forms["sales_form"]["company"].value;
    if (company == null || company == "") {
        alert("Company must be filled out");
        return false;
      }
    var pat_company=/^[0-9A-z ]+$/;
    if(!pat_company.test(company))
      {         
        alert("Company fasle"); 
        return false;  
      }

    /*Validate Email Field*/

    var email = document.forms["sales_form"]["email"].value;
    if (email == null || email == "") {
        alert("Email must be filled out");
        return false;
      }
    var pat_email=/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    if(!pat_email.test(email))
      {         
        alert("Email fasle"); 
        return false;  
      }
  
    /*Validate Mobile Field*/

    var mobile = document.forms["sales_form"]["mobile"].value;
    if (mobile == null || mobile == "") {
        alert("Mobile must be filled out");
        return false;
      }
    var pat_mobile=/^\d{10}/;
    if(!pat_mobile.test(mobile))
      {         
        alert("Mobile fasle"); 
        return false;  
      }

    /*Validate City Field*/

    var city = document.forms["sales_form"]["city"].value;
    if (city == null || city == "") {
        alert("City must be filled out");
        return false;
      }
    var pat_city=/^[A-z ]+$/;
    if(!pat_city.test(city))
      {         
        alert("City fasle"); 
        return false;  
      }


    /*Validate State Field*/

    var state = document.forms["sales_form"]["state"].value;
    if (state == null || state == "") {
        alert("State must be filled out");
        return false;
      }
    var pat_state=/^[A-z ]+$/;
    if(!pat_state.test(state))
      {         
        alert("State fasle"); 
        return false;  
      }

    /*Validate Country Field*/

    var country = document.forms["sales_form"]["country"].value;
    if (country == null || country == "") {
        alert("Country must be filled out");
        return false;
      }
    var pat_country=/^[A-z ]+$/;
    if(!pat_country.test(country))
      {         
        alert("Country fasle"); 
        return false;  
      }

    /*Validate Postal Code Field*/

    var postal_code = document.forms["sales_form"]["postal_code"].value;
    if (postal_code == null || postal_code == "") {
        alert("Postal Code must be filled out");
        return false;
      }
    var pat_pin=/^\d{6}/;
    if(!pat_pin.test(postal_code))
      {         
        alert("Postal Code fasle"); 
        return false;  
      }


    /*Validate Description Field*/

    //var val = $.trim($("description").val());
    var description = document.forms["sales_form"]["description"].value;
    var val = $.trim(description);
    if (val == null || val == "") {
        alert("Description must be filled out");
        return false;
      }
    
} // End of Validate Function



// Function for validate the Partner Form

function validatePartnerForm(){

  /*Validate Name Field*/

    var x = document.forms["partner_form"]["name"].value;
    if (x == null || x == "") {
        alert("Name must be filled out");
        return false;
      }
    var pat_name=/^[A-z]+$/;
    if(!pat_name.test(x))
      {         
        alert("name false"); 
        return false;  
      }

  /*Validate Designation Field*/

    var designation = document.forms["partner_form"]["designation"].value;
    if (designation == null || designation == "") {
        alert("Designation must be filled out");
        return false;
      }
    var pat_designation=/^[A-z ]+$/;
    if(!pat_designation.test(designation))
      {         
        alert("designation fasle"); 
        return false;  
      }

    /*Validate Company Field*/

    var company = document.forms["partner_form"]["company"].value;
    if (company == null || company == "") {
        alert("Company must be filled out");
        return false;
      }
    var pat_company=/^[0-9A-z ]+$/;
    if(!pat_company.test(company))
      {         
        alert("Company fasle"); 
        return false;  
      }

 /*Validate Mobile Field*/

    var mobile = document.forms["partner_form"]["mobile"].value;
    if (mobile == null || mobile == "") {
        alert("Mobile must be filled out");
        return false;
      }
    var pat_mobile=/^\d{10}/;
    if(!pat_mobile.test(mobile))
      {         
        alert("Mobile fasle"); 
        return false;  
      }

/*Validate Email Field*/

    var email = document.forms["partner_form"]["email"].value;
    if (email == null || email == "") {
        alert("Email must be filled out");
        return false;
      }
    var pat_email=/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    if(!pat_email.test(email))
      {         
        alert("Email fasle"); 
        return false;  
      }

    /*Validate City Field*/

    var city = document.forms["partner_form"]["city"].value;
    if (city == null || city == "") {
        alert("City must be filled out");
        return false;
      }
    var pat_city=/^[A-z ]+$/;
    if(!pat_city.test(city))
      {         
        alert("City fasle"); 
        return false;  
      }


    /*Validate State Field*/

    var state = document.forms["partner_form"]["state"].value;
    if (state == null || state == "") {
        alert("State must be filled out");
        return false;
      }
    var pat_state=/^[A-z ]+$/;
    if(!pat_state.test(state))
      {         
        alert("State fasle"); 
        return false;  
      }

    /*Validate Country Field*/

    var country = document.forms["partner_form"]["country"].value;
    if (country == null || country == "") {
        alert("Country must be filled out");
        return false;
      }
    var pat_country=/^[A-z ]+$/;
    if(!pat_country.test(country))
      {         
        alert("Country fasle"); 
        return false;  
      }

    /*Validate Postal Code Field*/

    var postal_code = document.forms["partner_form"]["postal_code"].value;
    if (postal_code == null || postal_code == "") {
        alert("Postal Code must be filled out");
        return false;
      }
    var pat_pin=/^\d{6}/;
    if(!pat_pin.test(postal_code))
      {         
        alert("Postal Code fasle"); 
        return false;  
      }


    /*Validate Description Field*/

    var reason = document.forms["partner_form"]["reason"].value;
    var val = $.trim(reason);
    if (val == null || val == "") {
        alert("Reason must be filled out");
        return false;
      }

}   // End of Function validatePartnerForm



// Function for validate feedback forms

function validateFeedbackForm(){

/*Validate Name Field*/

    var x = document.forms["feedback_form"]["name"].value;
    if (x == null || x == "") {
        alert("Name must be filled out");
        return false;
      }
    var pat_name=/^[A-z]+$/;
    if(!pat_name.test(x))
      {         
        alert("name false"); 
        return false;  
      }


 /*Validate Company Field*/

    var company = document.forms["feedback_form"]["company"].value;
    if (company == null || company == "") {
        alert("Company must be filled out");
        return false;
      }
    var pat_company=/^[0-9A-z ]+$/;
    if(!pat_company.test(company))
      {         
        alert("Company fasle"); 
        return false;  
      }


 /*Validate Mobile Field*/

    var mobile = document.forms["feedback_form"]["mobile"].value;
    if (mobile == null || mobile == "") {
        alert("Mobile must be filled out");
        return false;
      }
    var pat_mobile=/^\d{10}/;
    if(!pat_mobile.test(mobile))
      {         
        alert("Mobile fasle"); 
        return false;  
      }


    /*Validate Email Field*/

    var email = document.forms["feedback_form"]["email"].value;
    if (email == null || email == "") {
        alert("Email must be filled out");
        return false;
      }
    var pat_email=/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    if(!pat_email.test(email))
      {         
        alert("Email fasle"); 
        return false;  
      }

 /*Validate Description Field*/

    var feedback = document.forms["feedback_form"]["feedback"].value;
    var val = $.trim(feedback);
    if (val == null || val == "") {
        alert("feedback must be filled out");
        return false;
      }

} // End of validateFeedbackForm



// Validate Function for New Comment in Blog

function validateCommentForm(){

  /*Validate Name Field*/

    var x = document.forms["comment_form"]["name"].value;
    if (x == null || x == "") {
        alert('Name must be filled out!');
        return false;
      }
    var pat_name=/^[A-z]+$/;
    if(!pat_name.test(x))
      {    
        alert('Name Field have invalid Characters!');
        return false;  
      }

   /*Validate Email Field*/

    var email = document.forms["comment_form"]["email"].value;
    if (email == null || email == "") {
        alert('Email must be filled out!');
        return false;
      }
    var pat_email=/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    if(!pat_email.test(email))
      {         
        alert('Email have invalid Characters!');
        return false;  
      }


  /*Validate Feedback Field*/

    var feedback = document.forms["comment_form"]["comment"].value;
    var val = $.trim(feedback);
    if (val == null || val == "") {
        alert('Comment must be filled out!');
        return false;
      }


}  // End of validateCommentForm


/*Validate function for Ask Expert Form*/

function validateAskForm(){

/*Validate Name Field*/

    var x = document.forms["ask_form"]["name"].value;
    if (x == null || x == "") {
        alert('Name must be filled out!');
        return false;
      }
    var pat_name=/^[A-z]+$/;
    if(!pat_name.test(x))
      {    
        alert('Name Field have invalid Characters!');
        return false;  
      }


  /*Validate Mobile Field*/

    var mobile = document.forms["ask_form"]["mobile"].value;
    if (mobile == null || mobile == "") {
        alert("Mobile must be filled out");
        return false;
      }
    var pat_mobile=/^\d{10}/;
    if(!pat_mobile.test(mobile))
      {         
        alert("Mobile fasle"); 
        return false;  
      }    

/*Validate Email Field*/

    var email = document.forms["ask_form"]["email"].value;
    if (email == null || email == "") {
        alert('Email must be filled out!');
        return false;
      }
    var pat_email=/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    if(!pat_email.test(email))
      {         
        alert('Email have invalid Characters!');
        return false;  
      }

/*Validate Question Field*/

    var question = document.forms["ask_form"]["question"].value;
    var val = $.trim(question);
    if (val == null || val == "") {
        alert('Question must be filled out!');
        return false;
      }




} // End of Ask Expert Form


// Validate Add Value Form
//function validateValueForm(){
  $('#add_value').on('submit',function(e) {
     e.preventDefault();

  /*Validate Name Field*/

    var x = document.forms["add_value"]["name"].value;
    if (x == null || x == "") {
        alert('Name must be filled out!');
        return false;
      }
    var pat_name=/^[A-z]+$/;
    if(!pat_name.test(x))
      {    
        alert('Name Field have invalid Characters!');
        return false;  
      }


  /*Validate Mobile Field*/

    var mobile = document.forms["add_value"]["mobile"].value;
    if (mobile == null || mobile == "") {
        alert("Mobile must be filled out");
        return false;
      }
    var pat_mobile=/^\d{10}/;
    if(!pat_mobile.test(mobile))
      {         
        alert("Mobile fasle"); 
        return false;  
      }    

/*Validate Email Field*/

    var email = document.forms["add_value"]["email"].value;
    if (email == null || email == "") {
        alert('Email must be filled out!');
        return false;
      }
    var pat_email=/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    if(!pat_email.test(email))
      {         
        alert('Email have invalid Characters!');
        return false;  
      }

      /*Validate Question Field*/

    var suggestion = document.forms["add_value"]["suggestion"].value;
    var val = $.trim(suggestion);
    if (val == null || val == "") {
        alert('Suggestion must be filled out!');
        return false;
      }

      //$('#add_value').on('submit',function(e) {
       // e.preventDefault();
        jQuery.ajax( {
                      type: "POST",
                      url: $(this).attr("action"),
                      cache: false,
                      data: $(this).serialize(),
            success: function(data) {
              if(data == "success")
              {
              alert("Post Published!");
              }
              else  
              alert("Publish Failed!");
              }
                      
              } );  
        
      });

} // End of Add Value Form

