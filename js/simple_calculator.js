
  	// Function to allow only Number in income textbox

  	function isNumber(evt) {
  	    evt = (evt) ? evt : window.event;
  	    var charCode = (evt.which) ? evt.which : evt.keyCode;
  	    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
  		return false;
  	    }
  	    return true;
  	}

  	// Function for perform income tax calculations

	function calculate(){ 
	 	var y= document.getElementById("year");
        var year= y.options[y.selectedIndex].value;
        
         if(year=='14_15')
         {
			var e = document.getElementById("taxpayer");
			var payer = e.options[e.selectedIndex].value;
			if(payer=="individual")
				{
					var f = document.getElementById("person");
					var type = f.options[f.selectedIndex].value;
					if(type=="male")
					{
						if(isNaN(parseInt(document.calculator.income.value)))
						{
							document.calculator.income.value = (0);		// Set default value to zero when leave income as empty
						}
						
						var income = parseInt(document.calculator.income.value);

						if(isNaN(document.calculator.income.value) || income<= 200000)	// Calculations for under 2L slab
						{
							var output = 0; 
							document.calculator.tax.value = (output); 
							document.calculator.surcharge.value = (output);
						 	document.calculator.edu.value = (output); 
							document.calculator.hedu.value = (output); 
							document.calculator.total.value = (output); 
						}
						else if(income > 200000 && income <= 500000)	// Calculations for 2L to 5L slab 
						{
							
							var taxable_income = Math.round(income - 220000);	// If income is less than 5L, 20000 extra amount will be reduced from income

							var devided_income = Math.round(taxable_income/100); 	

							var tax = Math.round(devided_income*10); 

							var edu_tax = Math.round((tax/100)*2);

							var higher_edu_tax = Math.round((tax/100)*1); 

							var total = Math.round(tax + edu_tax + higher_edu_tax);

							document.calculator.tax.value = (tax); 
							document.calculator.surcharge.value = (0);							
							document.calculator.edu.value = (edu_tax); 
							document.calculator.hedu.value = (higher_edu_tax); 
							document.calculator.total.value = (total); 

						}
						else if (income > 500000 && income < 1000000) 	// Calcuations for 5L to 10L slab
						{

							var taxable_income = Math.round(income - 500000);  // Reduct 2L for Non-Taxable + 3L for 2nd slab( 2nd slab tax 30000 will be added manually)

							var tax = Math.round((taxable_income/100)*20);

							var total_tax = Math.round(tax + 30000); // Tax for 5L< slab + 2 to 5L tax( 30000)

							var edu_tax = Math.round((total_tax/100)*2);

							var higher_edu_tax = Math.round((total_tax/100)*1);

							var total = Math.round(total_tax + edu_tax + higher_edu_tax);

							document.calculator.tax.value = (total_tax); 
							document.calculator.surcharge.value = (0);
							document.calculator.edu.value = (edu_tax); 
							document.calculator.hedu.value = (higher_edu_tax); 
							document.calculator.total.value = (total); 
						}
						else if (income > 10000000) 
						{
							var taxable_income = Math.round(income - 1000000);  // Reduct 2L for Non-Taxable + 3L for 2nd slab + 5L for 3rd slab ( 2nd & 3rd slab tax 30000 + 100000 will be added manually)

							var tax = Math.round((taxable_income/100)*30);

							var total_tax = Math.round(tax + 130000); // Tax for 10L< slab + 2nd and 3rd slab tax

			                var surcharge_amount_one = total_tax * 0.1;

			                var after_crore = income - 10000000;    // For find out the extra amount after one crore

			                var surcharge_amount = after_crore * 0.7;   // For find out the surcharge amount

			                if(surcharge_amount > surcharge_amount_one)   // For find out smaller surcharge amount
			                {
			                   var surcharge_small = surcharge_amount_one;
			                }
			                else
			                {
			                   var surcharge_small = surcharge_amount;
			                }

			                total_tax = total_tax + surcharge_small;

							var edu_tax = Math.round((total_tax/100)*2);

							var higher_edu_tax = Math.round((total_tax/100)*1);

							var total = Math.round(total_tax + edu_tax + higher_edu_tax);

							document.calculator.tax.value = (total_tax-surcharge_small);
							document.calculator.surcharge.value = (surcharge_small); 
							document.calculator.edu.value = (edu_tax); 
							document.calculator.hedu.value = (higher_edu_tax); 
							document.calculator.total.value = (total); 

						}
						else 
						{
							var taxable_income = Math.round(income - 1000000);  // Reduct 2L for Non-Taxable + 3L for 2nd slab + 5L for 3rd slab ( 2nd & 3rd slab tax 30000 + 100000 will be added manually)

							var tax = Math.round((taxable_income/100)*30);

							var total_tax = Math.round(tax + 130000); // Tax for 10L< slab + 2nd and 3rd slab tax

							var edu_tax = Math.round((total_tax/100)*2);

							var higher_edu_tax = Math.round((total_tax/100)*1);

							var total = Math.round(total_tax + edu_tax + higher_edu_tax);

							document.calculator.tax.value = (total_tax);
							document.calculator.surcharge.value = (0); 
							document.calculator.edu.value = (edu_tax); 
							document.calculator.hedu.value = (higher_edu_tax); 
							document.calculator.total.value = (total); 

						}
						 
					}
					if(type=="female")
					{
						if(isNaN(parseInt(document.calculator.income.value)))
						{
							document.calculator.income.value = (0);		// Set default value to zero when leave income as empty
						}
						
						var income = parseInt(document.calculator.income.value);

						if(isNaN(document.calculator.income.value) || income<= 200000)	// Calculations for under 2L slab
						{
							var output = 0; 
							document.calculator.tax.value = (output); 
							document.calculator.surcharge.value = (output);
						 	document.calculator.edu.value = (output); 
							document.calculator.hedu.value = (output); 
							document.calculator.total.value = (output); 
						}
						else if(income > 200000 && income <= 500000)	// Calculations for 2L to 5L slab 
						{
							
							var taxable_income = Math.round(income - 220000);	// If income is less than 5L, 20000 extra amount will be reduced from income

							var devided_income = Math.round(taxable_income/100); 	

							var tax = Math.round(devided_income*10); 

							var edu_tax = Math.round((tax/100)*2);

							var higher_edu_tax = Math.round((tax/100)*1); 

							var total = Math.round(tax + edu_tax + higher_edu_tax);

							document.calculator.tax.value = (tax); 
							document.calculator.surcharge.value = (0);							
							document.calculator.edu.value = (edu_tax); 
							document.calculator.hedu.value = (higher_edu_tax); 
							document.calculator.total.value = (total); 

						}
						else if (income > 500000 && income < 1000000) 	// Calcuations for 5L to 10L slab
						{

							var taxable_income = Math.round(income - 500000);  // Reduct 2L for Non-Taxable + 3L for 2nd slab( 2nd slab tax 30000 will be added manually)

							var tax = Math.round((taxable_income/100)*20);

							var total_tax = Math.round(tax + 30000); // Tax for 5L< slab + 2 to 5L tax( 30000)

							var edu_tax = Math.round((total_tax/100)*2);

							var higher_edu_tax = Math.round((total_tax/100)*1);

							var total = Math.round(total_tax + edu_tax + higher_edu_tax);

							document.calculator.tax.value = (total_tax); 
							document.calculator.surcharge.value = (0);
							document.calculator.edu.value = (edu_tax); 
							document.calculator.hedu.value = (higher_edu_tax); 
							document.calculator.total.value = (total); 
						}
						else if (income > 10000000) 
						{
							var taxable_income = Math.round(income - 1000000);  // Reduct 2L for Non-Taxable + 3L for 2nd slab + 5L for 3rd slab ( 2nd & 3rd slab tax 30000 + 100000 will be added manually)

							var tax = Math.round((taxable_income/100)*30);

							var total_tax = Math.round(tax + 130000); // Tax for 10L< slab + 2nd and 3rd slab tax

			                var surcharge_amount_one = total_tax * 0.1;

			                var after_crore = income - 10000000;    // For find out the extra amount after one crore

			                var surcharge_amount = after_crore * 0.7;   // For find out the surcharge amount

			                if(surcharge_amount > surcharge_amount_one)   // For find out smaller surcharge amount
			                {
			                   var surcharge_small = surcharge_amount_one;
			                }
			                else
			                {
			                   var surcharge_small = surcharge_amount;
			                }

			                total_tax = total_tax + surcharge_small;

							var edu_tax = Math.round((total_tax/100)*2);

							var higher_edu_tax = Math.round((total_tax/100)*1);

							var total = Math.round(total_tax + edu_tax + higher_edu_tax);

							document.calculator.tax.value = (total_tax-surcharge_small);
							document.calculator.surcharge.value = (surcharge_small); 
							document.calculator.edu.value = (edu_tax); 
							document.calculator.hedu.value = (higher_edu_tax); 
							document.calculator.total.value = (total); 

						}
						else 
						{
							var taxable_income = Math.round(income - 1000000);  // Reduct 2L for Non-Taxable + 3L for 2nd slab + 5L for 3rd slab ( 2nd & 3rd slab tax 30000 + 100000 will be added manually)

							var tax = Math.round((taxable_income/100)*30);

							var total_tax = Math.round(tax + 130000); // Tax for 10L< slab + 2nd and 3rd slab tax

							var edu_tax = Math.round((total_tax/100)*2);

							var higher_edu_tax = Math.round((total_tax/100)*1);

							var total = Math.round(total_tax + edu_tax + higher_edu_tax);

							document.calculator.tax.value = (total_tax);
							document.calculator.surcharge.value = (0); 
							document.calculator.edu.value = (edu_tax); 
							document.calculator.hedu.value = (higher_edu_tax); 
							document.calculator.total.value = (total); 

						}
						 
					}
					if(type=="citizen")
					{
						if(isNaN(parseInt(document.calculator.income.value)))
						{
							document.calculator.income.value = (0);			// Set default value to zero when leave income as empty
						}

						var income = parseInt(document.calculator.income.value);

						if(isNaN(document.calculator.income.value) || income<= 250000)
						{
							var output = 0; 
							document.calculator.tax.value = (output); 
							document.calculator.surcharge.value = (output);
							document.calculator.edu.value = (output); 
							document.calculator.hedu.value = (output); 
							document.calculator.total.value = (output); 
						}
						else if(income > 250000 && income <= 500000)	// Calculations for 2.5L to 5L slab
						{
							
							var taxable_income = Math.round(income - 270000);	// If income is less than 5L, 20000 extra amount will be reduced from income

							var devided_income = Math.round(taxable_income/100); 	

							var tax = Math.round(devided_income*10); 

							var edu_tax = Math.round((tax/100)*2);

							var higher_edu_tax = Math.round((tax/100)*1); 

							var total = Math.round(tax + edu_tax + higher_edu_tax);

							document.calculator.tax.value = (tax); 
							document.calculator.surcharge.value = (0);
							document.calculator.edu.value = (edu_tax); 
							document.calculator.hedu.value = (higher_edu_tax); 
							document.calculator.total.value = (total); 
						}
						else if (income > 500000 && income < 1000000) 
						{

							var taxable_income = Math.round(income - 500000);  // Reduct 2.5L for Non-Taxable + 2.5L for 2nd slab( 2nd slab tax 30000 will be added manually)

							var tax = Math.round((taxable_income/100)*20);

							var total_tax = Math.round(tax + 25000); // Tax for 5L< slab + 2 to 5L tax( 25000)

							var edu_tax = Math.round((total_tax/100)*2);

							var higher_edu_tax = Math.round((total_tax/100)*1);

							var total = Math.round(total_tax + edu_tax + higher_edu_tax);

							document.calculator.tax.value = (total_tax); 
							document.calculator.surcharge.value = (0);
							document.calculator.edu.value = (edu_tax); 
							document.calculator.hedu.value = (higher_edu_tax); 
							document.calculator.total.value = (total); 
						}
						else if (income > 10000000) 
						{
							var taxable_income = Math.round(income - 1000000);  // Reduct 2.5L for Non-Taxable + 3L for 2nd slab + 5L for 3rd slab ( 2nd & 3rd slab tax 30000 + 100000 will be added manually)

							var tax = Math.round((taxable_income/100)*30);

							var total_tax = Math.round(tax + 125000); // Tax for 10L< slab + 2nd and 3rd slab tax

			                var surcharge_amount_one = total_tax * 0.1;

			                var after_crore = income - 10000000;    // For find out the extra amount after one crore

			                var surcharge_amount = after_crore * 0.7;   // For find out the surcharge amount

			                if(surcharge_amount > surcharge_amount_one)   // For find out smaller surcharge amount
			                {
			                   var surcharge_small = surcharge_amount_one;
			                }
			                else
			                {
			                   var surcharge_small = surcharge_amount;
			                }

			                total_tax = total_tax + surcharge_small;

							var edu_tax = Math.round((total_tax/100)*2);

							var higher_edu_tax = Math.round((total_tax/100)*1);

							var total = Math.round(total_tax + edu_tax + higher_edu_tax);

							document.calculator.tax.value = (total_tax-surcharge_small);
							document.calculator.surcharge.value = (surcharge_small); 
							document.calculator.edu.value = (edu_tax); 
							document.calculator.hedu.value = (higher_edu_tax); 
							document.calculator.total.value = (total); 

						}						
						else 
						{
							var taxable_income = Math.round(income - 1000000);  // Reduct 2.5L for Non-Taxable + 2.5L for 2nd slab + 5L for 3rd slab ( 2nd & 3rd slab tax 30000 + 100000 will be added manually)

							var tax = Math.round((taxable_income/100)*30);

							var total_tax = Math.round(tax + 125000); // Tax for 10L< slab + 2nd and 3rd slab tax

							var edu_tax = Math.round((total_tax/100)*2);

							var higher_edu_tax = Math.round((total_tax/100)*1);

							var total = Math.round(total_tax + edu_tax + higher_edu_tax);

							document.calculator.tax.value = (total_tax);
							document.calculator.surcharge.value = (0); 
							document.calculator.edu.value = (edu_tax); 
							document.calculator.hedu.value = (higher_edu_tax); 
							document.calculator.total.value = (total); 
						}
					}
					if(type=="s_citizen")
					{
						if(isNaN(parseInt(document.calculator.income.value)))
						{
							document.calculator.income.value = (0);		// Set default value to zero when leave income as empty
						}					
						var income = parseInt(document.calculator.income.value);

						if(isNaN(document.calculator.income.value) || income<= "500000")	// Calculations for less than 5L slab
						{
							var output = 0; 
							document.calculator.tax.value = (output); 
							document.calculator.surcharge.value = (output);
							document.calculator.edu.value = (output); 
							document.calculator.hedu.value = (output); 
							document.calculator.total.value = (output); 
						}
						else if (income > "500000" && income < "1000000") 	// Calculations for 5L to 10 L slab
						{

							var taxable_income = Math.round(income - 500000);  // Reduct 5L for Non-Taxable 

							var tax = Math.round((taxable_income/100)*20);

							var total_tax = tax; // Tax for 5L< slab 

							var edu_tax = Math.round((total_tax/100)*2);

							var higher_edu_tax = Math.round((total_tax/100)*1);

							var total = Math.round(total_tax + edu_tax + higher_edu_tax);

							document.calculator.tax.value = (total_tax); 
							document.calculator.surcharge.value = (0);
							document.calculator.edu.value = (edu_tax); 
							document.calculator.hedu.value = (higher_edu_tax); 
							document.calculator.total.value = (total); 

						}
						else if(income > 10000000)
						{
							var taxable_income = Math.round(income - 1000000);  // Reduct 5L for Non-Taxable + 5L for 2nd slab ( 2nd slab tax 100000 will be added manually)

							var tax = Math.round((taxable_income/100)*30);

							var total_tax = Math.round(tax + 100000); // Tax for 10L< slab + 2nd and 3rd slab tax

			                var surcharge_amount_one = total_tax * 0.1;

			                var after_crore = income - 10000000;    // For find out the extra amount after one crore

			                var surcharge_amount = after_crore * 0.7;   // For find out the surcharge amount

			                if(surcharge_amount > surcharge_amount_one)   // For find out smaller surcharge amount
			                {
			                   var surcharge_small = surcharge_amount_one;
			                }
			                else
			                {
			                   var surcharge_small = surcharge_amount;
			                }

			                total_tax = total_tax + surcharge_small;

							var edu_tax = Math.round((total_tax/100)*2);

							var higher_edu_tax = Math.round((total_tax/100)*1);

							var total = Math.round(total_tax + edu_tax + higher_edu_tax);

							document.calculator.tax.value = (total_tax-surcharge_small);
							document.calculator.surcharge.value = (surcharge_small); 
							document.calculator.edu.value = (edu_tax); 
							document.calculator.hedu.value = (higher_edu_tax); 
							document.calculator.total.value = (total); 

						}
						else 
						{
							var taxable_income = Math.round(income - 1000000);  // Reduct 2L for Non-Taxable + 3L for 2nd slab + 5L for 3rd slab ( 2nd & 3rd slab tax 30000 + 100000 will be added manually)

							var tax = Math.round((taxable_income/100)*30);

							var total_tax = Math.round(tax + 100000); // Tax for 10L< slab + 2nd slab tax

							var edu_tax = Math.round((total_tax/100)*2);

							var higher_edu_tax = Math.round((total_tax/100)*1);

							var total = Math.round(total_tax + edu_tax + higher_edu_tax);

							document.calculator.tax.value = (total_tax); 
							document.calculator.surcharge.value = (0);
							document.calculator.edu.value = (edu_tax); 
							document.calculator.hedu.value = (higher_edu_tax); 
							document.calculator.total.value = (total); 

						}
					}
				}

	  		else if(payer=="apo")
	            {
				  if(isNaN(parseInt(document.calculator.income.value)))
				  {
					document.calculator.income.value = (0);		// Set default value to zero when leave income as empty
				  }

	              var income = parseInt(document.calculator.income.value);
	              
	              if(isNaN(document.calculator.income.value) || income<= "200000")	// Calculations for less than 2L 
	              {
	                var output = 0; 
	                document.calculator.tax.value = (output); 
	                document.calculator.surcharge.value = (output);
	                document.calculator.edu.value = (output); 
	                document.calculator.hedu.value = (output); 
	                document.calculator.total.value = (output); 
	              }
	              else if(income > "200000" && income <= "500000")	// Calculations for 2L to 5L slab
	              {
	            
	                var taxable_income = Math.round(income - 200000);	// Reduct 2L for Non-Taxable income

	                var devided_income = Math.round(taxable_income/100);  

	                var tax = Math.round(devided_income*10); 

	                var edu_tax = Math.round((tax/100)*2);

	                var higher_edu_tax = Math.round((tax/100)*1); 

	                var total = Math.round(tax + edu_tax + higher_edu_tax);

	                document.calculator.tax.value = (tax); 
	                document.calculator.surcharge.value = (0);
	                document.calculator.edu.value = (edu_tax); 
	                document.calculator.hedu.value = (higher_edu_tax); 
	                document.calculator.total.value = (total); 

	              }
	              else if (income > "500000" && income < "1000000") 	// Calculations for 5L to 10L slab
	              {

	                var taxable_income = Math.round(income - 500000);  // Reduct 2L for Non-Taxable + 3L for 2nd slab( 2nd slab tax 30000 will be added manually)

	                var tax = Math.round((taxable_income/100)*20);

	                var total_tax = Math.round(tax + 30000); // Tax for 5L< slab + 2 to 5L tax( 30000)

	                var edu_tax = Math.round((total_tax/100)*2);

	                var higher_edu_tax = Math.round((total_tax/100)*1);

	                var total = Math.round(total_tax + edu_tax + higher_edu_tax);

	                document.calculator.tax.value = (total_tax); 
	                document.calculator.edu.value = (edu_tax); 
	                document.calculator.hedu.value = (higher_edu_tax); 
	                document.calculator.total.value = (total); 

	              }
				  else if(income > 10000000)
						{
							var taxable_income = Math.round(income - 1000000);  // Reduct 5L for Non-Taxable + 5L for 2nd slab ( 2nd slab tax 100000 will be added manually)

							var tax = Math.round((taxable_income/100)*30);

							var total_tax = Math.round(tax + 130000); // Tax for 10L< slab + 2nd and 3rd slab tax

			                var surcharge_amount_one = total_tax * 0.1;

			                var after_crore = income - 10000000;    // For find out the extra amount after one crore

			                var surcharge_amount = after_crore * 0.7;   // For find out the surcharge amount

			                if(surcharge_amount > surcharge_amount_one)   // For find out smaller surcharge amount
			                {
			                   var surcharge_small = surcharge_amount_one;
			                }
			                else
			                {
			                   var surcharge_small = surcharge_amount;
			                }

			                total_tax = total_tax + surcharge_small;

							var edu_tax = Math.round((total_tax/100)*2);

							var higher_edu_tax = Math.round((total_tax/100)*1);

							var total = Math.round(total_tax + edu_tax + higher_edu_tax);

							document.calculator.tax.value = (total_tax-surcharge_small);
							document.calculator.surcharge.value = (surcharge_small); 
							document.calculator.edu.value = (edu_tax); 
							document.calculator.hedu.value = (higher_edu_tax); 
							document.calculator.total.value = (total); 

						}	              
				  else 
	              {
	                var taxable_income = Math.round(income - 1000000);  // Reduct 2L for Non-Taxable + 3L for 2nd slab + 5L for 3rd slab ( 2nd & 3rd slab tax 30000 + 100000 will be added manually)

	                var tax = Math.round((taxable_income/100)*30);

	                var total_tax = Math.round(tax + 130000); // Tax for 10L< slab + 2nd and 3rd slab tax

	                var edu_tax = Math.round((total_tax/100)*2);

	                var higher_edu_tax = Math.round((total_tax/100)*1);

	                var total = Math.round(total_tax + edu_tax + higher_edu_tax);

	                document.calculator.tax.value = (total_tax); 
	                document.calculator.surcharge.value = (0);
	                document.calculator.edu.value = (edu_tax); 
	                document.calculator.hedu.value = (higher_edu_tax); 
	                document.calculator.total.value = (total); 

	              }
	            }     // end of apo
	              
	            else if(payer=="huf")
	            {

				if(isNaN(parseInt(document.calculator.income.value)))
				{
					document.calculator.income.value = (0);		// Set default value to zero when leave income as empty
				}              

				var income = parseInt(document.calculator.income.value);
	              
	              if(isNaN(document.calculator.income.value) || income<= "200000")	// calculations for less than 2L
	              {
	                var output = 0; 
	                document.calculator.tax.value = (output); 
	                document.calculator.surcharge.value = (output);
	                document.calculator.edu.value = (output); 
	                document.calculator.hedu.value = (output); 
	                document.calculator.total.value = (output); 
	              }
	              else if(income > "200000" && income <= "500000")		// Calculations for 2L to 5L slab
	              {
	            
	                var taxable_income = Math.round(income - 200000);

	                var devided_income = Math.round(taxable_income/100);  

	                var tax = Math.round(devided_income*10); 

	                var edu_tax = Math.round((tax/100)*2);

	                var higher_edu_tax = Math.round((tax/100)*1); 

	                var total = Math.round(tax + edu_tax + higher_edu_tax);

	                document.calculator.tax.value = (tax); 
	                document.calculator.surcharge.value = (0);
	                document.calculator.edu.value = (edu_tax); 
	                document.calculator.hedu.value = (higher_edu_tax); 
	                document.calculator.total.value = (total); 

	              }
	              else if (income > "500000" && income < "1000000")		// Calculations for 5L to 10L slab 
	              {

	                var taxable_income = Math.round(income - 500000);  // Reduct 2L for Non-Taxable + 3L for 2nd slab( 2nd slab tax 30000 will be added manually)

	                var tax = Math.round((taxable_income/100)*20);

	                var total_tax = Math.round(tax + 30000); // Tax for 5L< slab + 2 to 5L tax( 30000)

	                var edu_tax = Math.round((total_tax/100)*2);

	                var higher_edu_tax = Math.round((total_tax/100)*1);

	                var total = Math.round(total_tax + edu_tax + higher_edu_tax);

	                document.calculator.tax.value = (total_tax); 
	                document.calculator.surcharge.value = (0);
	                document.calculator.edu.value = (edu_tax); 
	                document.calculator.hedu.value = (higher_edu_tax); 
	                document.calculator.total.value = (total); 

	              }
				  else if(income > 10000000)
				  {
					var taxable_income = Math.round(income - 1000000);  // Reduct 5L for Non-Taxable + 5L for 2nd slab ( 2nd slab tax 100000 will be added manually)

					var tax = Math.round((taxable_income/100)*30);

					var total_tax = Math.round(tax + 130000); // Tax for 10L< slab + 2nd and 3rd slab tax

	                var surcharge_amount_one = total_tax * 0.1;

	                var after_crore = income - 10000000;    // For find out the extra amount after one crore

	                var surcharge_amount = after_crore * 0.7;   // For find out the surcharge amount

	                if(surcharge_amount > surcharge_amount_one)   // For find out smaller surcharge amount
	                {
	                   var surcharge_small = surcharge_amount_one;
	                }
	                else
	                {
	                   var surcharge_small = surcharge_amount;
	                }

	                total_tax = total_tax + surcharge_small;

					var edu_tax = Math.round((total_tax/100)*2);

					var higher_edu_tax = Math.round((total_tax/100)*1);

					var total = Math.round(total_tax + edu_tax + higher_edu_tax);

					document.calculator.tax.value = (total_tax-surcharge_small);
					document.calculator.surcharge.value = (surcharge_small); 
					document.calculator.edu.value = (edu_tax); 
					document.calculator.hedu.value = (higher_edu_tax); 
					document.calculator.total.value = (total); 

				  }	
				  else 
	              {
	                var taxable_income = Math.round(income - 1000000);  // Reduct 2L for Non-Taxable + 3L for 2nd slab + 5L for 3rd slab ( 2nd & 3rd slab tax 30000 + 100000 will be added manually)

	                var tax = Math.round((taxable_income/100)*30);

	                var total_tax = Math.round(tax + 130000); // Tax for 10L< slab + 2nd and 3rd slab tax

	                var edu_tax = Math.round((total_tax/100)*2);

	                var higher_edu_tax = Math.round((total_tax/100)*1);

	                var total = Math.round(total_tax + edu_tax + higher_edu_tax);

	                document.calculator.tax.value = (total_tax); 
	                document.calculator.surcharge.value = (0);
	                document.calculator.edu.value = (edu_tax); 
	                document.calculator.hedu.value = (higher_edu_tax); 
	                document.calculator.total.value = (total); 

	              }
	            }     // end of huf calculations
		 
			else if(payer=="society")
			{
				if(isNaN(parseInt(document.calculator.income.value)))
				{
					document.calculator.income.value = (0);		// Set default value to zero when leave income as empty
				}

				var income = parseInt(document.calculator.income.value);

				if(income < 10000)
					{
						var tax = Math.round((income/100)*10);

						var edu_tax = Math.round((tax/100)*2);

						var higher_edu_tax = Math.round((tax/100)*1);

						var total = Math.round(tax + edu_tax + higher_edu_tax);
						
						document.calculator.tax.value = (tax);
						document.calculator.surcharge.value = (0); 
						document.calculator.edu.value = (edu_tax); 
						document.calculator.hedu.value = (higher_edu_tax); 
						document.calculator.total.value = (total); 


					} // end of 10000 slab

				else if(income > '10000' && income < '20000')
					{
						
						var taxable_income = Math.round(income - 10000);  // Reduct 10K from 1st slab

						var tax = Math.round((taxable_income/100)*20);

						var total_tax = Math.round(tax + 1000); // Tax for 10L< slab + 1st slab tax (1000)

						var edu_tax = Math.round((total_tax/100)*2);

						var higher_edu_tax = Math.round((total_tax/100)*1);

						var total = Math.round(total_tax + edu_tax + higher_edu_tax);

						document.calculator.tax.value = (total_tax); 
						document.calculator.surcharge.value = (0);
						document.calculator.edu.value = (edu_tax); 
						document.calculator.hedu.value = (higher_edu_tax); 
						document.calculator.total.value = (total); 

					} // end of 20000 slab

				else if(income > 10000000)
				  	{
						var taxable_income = Math.round(income - 20000);  // Reduct 20K from 1st and 2nd slab

						var tax = Math.round((taxable_income/100)*30);

						var total_tax = Math.round(tax + 3000); // Tax for 20L< slab + 1st and 2nd slab tax (1000 + 2000)

		                var surcharge_amount_one = total_tax * 0.1;

		                var after_crore = income - 10000000;    // For find out the extra amount after one crore

		                var surcharge_amount = after_crore * 0.7;   // For find out the surcharge amount

		                if(surcharge_amount > surcharge_amount_one)   // For find out smaller surcharge amount
		                {
		                   var surcharge_small = surcharge_amount_one;
		                }
		                else
		                {
		                   var surcharge_small = surcharge_amount;
		                }

		                total_tax = total_tax + surcharge_small;

						var edu_tax = Math.round((total_tax/100)*2);

						var higher_edu_tax = Math.round((total_tax/100)*1);

						var total = Math.round(total_tax + edu_tax + higher_edu_tax);

						document.calculator.tax.value = (total_tax-surcharge_small);
						document.calculator.surcharge.value = (surcharge_small); 
						document.calculator.edu.value = (edu_tax); 
						document.calculator.hedu.value = (higher_edu_tax); 
						document.calculator.total.value = (total); 

				  	}	// End of more than one Crore

				else
					{
						var taxable_income = income - 20000;  // Reduct 20K from 1st and 2nd slab

						var tax = Math.round((taxable_income/100)*30);

						var total_tax = Math.round(tax + 3000); // Tax for 20L< slab + 1st and 2nd slab tax (1000 + 2000)

						var edu_tax = Math.round((total_tax/100)*2);

						var higher_edu_tax = Math.round((total_tax/100)*1);

						var total = Math.round(total_tax + edu_tax + higher_edu_tax);

						document.calculator.tax.value = (total_tax); 
						document.calculator.surcharge.value = (0);
						document.calculator.edu.value = (edu_tax); 
						document.calculator.hedu.value = (higher_edu_tax); 
						document.calculator.total.value = (total); 

					} // end of 20K plus slab
				
			}
			else if(payer=="foreign_company")
			{
				if(isNaN(parseInt(document.calculator.income.value)))
				{
					document.calculator.income.value = (0);
				}

				var income = parseInt(document.calculator.income.value);

				if(income > 10000000 && income < 100000000)
                {
                  var total_tax = Math.round((income/100)*40);

                  var surcharge_amount_one = total_tax * 0.02;

                  var after_crore = income - 10000000;    // For find out the extra amount after one crore

                  var surcharge_amount = after_crore * 0.7;   // For find out the surcharge amount

                  if(surcharge_amount > surcharge_amount_one)   // For find out smaller surcharge amount
                  {
                    var surcharge_small = surcharge_amount_one;
                  }
                  else
                  {
                    var surcharge_small = surcharge_amount;
                  }

                  total_tax = total_tax + surcharge_small;

                  var edu_tax = Math.round((total_tax/100)*2);

                  var higher_edu_tax = Math.round((total_tax/100)*1);

                  var total = Math.round(total_tax + edu_tax + higher_edu_tax);

                  document.calculator.tax.value = (total_tax-surcharge_small); 
                  document.calculator.surcharge.value = (surcharge_small);
                  document.calculator.edu.value = (edu_tax); 
                  document.calculator.hedu.value = (higher_edu_tax); 
                  document.calculator.total.value = (total); 
                }
                else if(income > 100000000)
                {
                  var total_tax = Math.round((income/100)*40);

                  var surcharge_amount_one = total_tax * 0.05;

                  var after_crore = income - 100000000;    // For find out the extra amount after ten crore

                  var surcharge_amount = after_crore * 0.7;   // For find out the surcharge amount

                  if(surcharge_amount > surcharge_amount_one)   // For find out smaller surcharge amount
                  {
                    var surcharge_small = surcharge_amount_one;
                  }
                  else
                  {
                    var surcharge_small = surcharge_amount;
                  }

                  total_tax = total_tax + surcharge_small;

                  var edu_tax = Math.round((total_tax/100)*2);

                  var higher_edu_tax = Math.round((total_tax/100)*1);

                  var total = Math.round(total_tax + edu_tax + higher_edu_tax);

                  document.calculator.tax.value = (total_tax-surcharge_small); 
                  document.calculator.surcharge.value = (surcharge_small);
                  document.calculator.edu.value = (edu_tax); 
                  document.calculator.hedu.value = (higher_edu_tax); 
                  document.calculator.total.value = (total); 
                } 
                else
                {

                  var total_tax = Math.round((income/100)*40);

                  var edu_tax = Math.round((total_tax/100)*2);

                  var higher_edu_tax = Math.round((total_tax/100)*1);

                  var total = Math.round(total_tax + edu_tax + higher_edu_tax);

                  document.calculator.tax.value = (total_tax); 
                  document.calculator.surcharge.value = ('0');
                  document.calculator.edu.value = (edu_tax); 
                  document.calculator.hedu.value = (higher_edu_tax); 
                  document.calculator.total.value = (total); 
                }
			} // end of foreign company calculations

            else if(payer=="company")
              {

				if(isNaN(parseInt(document.calculator.income.value)))
				{
					document.calculator.income.value = (0);
				}

                var income = parseInt(document.calculator.income.value);

                if(income > 10000000 && income < 100000000)
                {
                  var total_tax = Math.round((income/100)*30);

                  var surcharge_amount_one = total_tax * 0.05;

                  var after_crore = income - 10000000;    // For find out the extra amount after one crore

                  var surcharge_amount = after_crore * 0.7;   // For find out the surcharge amount

                  if(surcharge_amount > surcharge_amount_one)   // For find out smaller surcharge amount
                  {
                    var surcharge_small = surcharge_amount_one;
                  }
                  else
                  {
                    var surcharge_small = surcharge_amount;
                  }

                  total_tax = total_tax + surcharge_small;

                  var edu_tax = Math.round((total_tax/100)*2);

                  var higher_edu_tax = Math.round((total_tax/100)*1);

                  var total = Math.round(total_tax + edu_tax + higher_edu_tax);

                  document.calculator.tax.value = (total_tax-surcharge_small); 
                  document.calculator.surcharge.value = (surcharge_small);
                  document.calculator.edu.value = (edu_tax); 
                  document.calculator.hedu.value = (higher_edu_tax); 
                  document.calculator.total.value = (total); 
                }
                else if(income > 100000000)
                {
                  var total_tax = Math.round((income/100)*30);

                  var surcharge_amount_one = total_tax * 0.1;

                  var after_crore = income - 100000000;    // For find out the extra amount after ten crore

                  var surcharge_amount = after_crore * 0.7;   // For find out the surcharge amount

                  if(surcharge_amount > surcharge_amount_one)   // For find out smaller surcharge amount
                  {
                    var surcharge_small = surcharge_amount_one;
                  }
                  else
                  {
                    var surcharge_small = surcharge_amount;
                  }

                  total_tax = total_tax + surcharge_small;

                  var edu_tax = Math.round((total_tax/100)*2);

                  var higher_edu_tax = Math.round((total_tax/100)*1);

                  var total = Math.round(total_tax + edu_tax + higher_edu_tax);

                  document.calculator.tax.value = (total_tax-surcharge_small); 
                  document.calculator.surcharge.value = (surcharge_small);
                  document.calculator.edu.value = (edu_tax); 
                  document.calculator.hedu.value = (higher_edu_tax); 
                  document.calculator.total.value = (total); 
                }
                else
                {

                  var total_tax = Math.round((income/100)*30);

                  var edu_tax = Math.round((total_tax/100)*2);

                  var higher_edu_tax = Math.round((total_tax/100)*1);

                  var total = Math.round(total_tax + edu_tax + higher_edu_tax);

                  document.calculator.tax.value = (total_tax); 
                  document.calculator.surcharge.value = ('0');
                  document.calculator.edu.value = (edu_tax); 
                  document.calculator.hedu.value = (higher_edu_tax); 
                  document.calculator.total.value = (total); 
                }
                
            }   // end of domestic company calculations

            else	// Calculations for other concern 
			{
				if(isNaN(parseInt(document.calculator.income.value)))
				{
					document.calculator.income.value = (0);
				}

                if(income > 10000000)
                    {
                      var total_tax = Math.round((income/100)*30);

                      var surcharge_amount_one = total_tax * 0.1;

                      var after_crore = income - 10000000;    // For find out the extra amount after one crore

                      var surcharge_amount = after_crore * 0.7;   // For find out the surcharge amount

                      if(surcharge_amount > surcharge_amount_one)   // For find out smaller surcharge amount
                      {
                        var surcharge_small = surcharge_amount_one;
                      }
                      else
                      {
                        var surcharge_small = surcharge_amount;
                      }

                      total_tax = total_tax + surcharge_small;

                      var edu_tax = Math.round((total_tax/100)*2);

                      var higher_edu_tax = Math.round((total_tax/100)*1);

                      var total = Math.round(total_tax + edu_tax + higher_edu_tax);

                      document.calculator.tax.value = (total_tax-surcharge_small); 
                      document.calculator.surcharge.value = (surcharge_small);
                      document.calculator.edu.value = (edu_tax); 
                      document.calculator.hedu.value = (higher_edu_tax); 
                      document.calculator.total.value = (total); 
                    }
                    else
                    {

                      var total_tax = Math.round((income/100)*30);

                      var edu_tax = Math.round((total_tax/100)*2);

                      var higher_edu_tax = Math.round((total_tax/100)*1);

                      var total = Math.round(total_tax + edu_tax + higher_edu_tax);

                      document.calculator.tax.value = (total_tax); 
                      document.calculator.surcharge.value = ('0');
                      document.calculator.edu.value = (edu_tax); 
                      document.calculator.hedu.value = (higher_edu_tax); 
                      document.calculator.total.value = (total); 
                    }

			}	// end of other concern calculations
		}	// End of Assesment year 14_15
		else
		{
			var e = document.getElementById("taxpayer");
			var payer = e.options[e.selectedIndex].value;
			//alert(payer);
			if(payer=="individual")
				{
					var f = document.getElementById("person");
					var type = f.options[f.selectedIndex].value;
					if(type=="male")
					{
						if(isNaN(parseInt(document.calculator.income.value)))
						{
							document.calculator.income.value = (0);		// set zero to income when income is empty
						}
						
						var income = parseInt(document.calculator.income.value);

						if(isNaN(document.calculator.income.value) || income<= "250000")	// Calculations for under 2.5L slab
						{
							var output = 0; 
							document.calculator.tax.value = (output);
							document.calculator.surcharge.value = (output); 
							document.calculator.edu.value = (output); 
							document.calculator.hedu.value = (output); 
							document.calculator.total.value = (output); 
						}
						else if(income > "250000" && income <= "500000")	// Calculations for 2.5L to 5L slab
						{
							
							var taxable_income = Math.round(income - 270000);	// If income is less than 5L, 20000 extra amount will be reduced from income 

							var devided_income = Math.round(taxable_income/100); 	

							var tax = Math.round(devided_income*10); 

							var edu_tax = Math.round((tax/100)*2);

							var higher_edu_tax = Math.round((tax/100)*1); 

							var total = Math.round(tax + edu_tax + higher_edu_tax);

							document.calculator.tax.value = (tax); 
							document.calculator.surcharge.value = (0);
							document.calculator.edu.value = (edu_tax); 
							document.calculator.hedu.value = (higher_edu_tax); 
							document.calculator.total.value = (total); 
						}
						else if (income > "500000" && income < "1000000") 
						{
							var taxable_income = Math.round(income - 500000);  // Reduct 2L for Non-Taxable + 3L for 2nd slab( 2nd slab tax 30000 will be added manually)

							var tax = Math.round((taxable_income/100)*20);

							var total_tax = Math.round(tax + 25000); // Tax for 5L< slab + 2 to 5L tax( 30000)

							var edu_tax = Math.round((total_tax/100)*2);

							var higher_edu_tax = Math.round((total_tax/100)*1);

							var total = Math.round(total_tax + edu_tax + higher_edu_tax);

							document.calculator.tax.value = (total_tax); 
							document.calculator.surcharge.value = (0);
							document.calculator.edu.value = (edu_tax); 
							document.calculator.hedu.value = (higher_edu_tax); 
							document.calculator.total.value = (total); 

						}
						else if (income > 10000000) 
						{
							var taxable_income = Math.round(income - 1000000);  // Reduct 2.5L for Non-Taxable + 3L for 2nd slab + 5L for 3rd slab ( 2nd & 3rd slab tax 30000 + 100000 will be added manually)

							var tax = Math.round((taxable_income/100)*30);

							var total_tax = Math.round(tax + 125000); // Tax for 10L< slab + 2nd and 3rd slab tax

			                var surcharge_amount_one = total_tax * 0.1;

			                var after_crore = income - 10000000;    // For find out the extra amount after one crore

			                var surcharge_amount = after_crore * 0.7;   // For find out the surcharge amount

			                if(surcharge_amount > surcharge_amount_one)   // For find out smaller surcharge amount
			                {
			                   var surcharge_small = surcharge_amount_one;
			                }
			                else
			                {
			                   var surcharge_small = surcharge_amount;
			                }

			                total_tax = total_tax + surcharge_small;

							var edu_tax = Math.round((total_tax/100)*2);

							var higher_edu_tax = Math.round((total_tax/100)*1);

							var total = Math.round(total_tax + edu_tax + higher_edu_tax);

							document.calculator.tax.value = (total_tax-surcharge_small);
							document.calculator.surcharge.value = (surcharge_small); 
							document.calculator.edu.value = (edu_tax); 
							document.calculator.hedu.value = (higher_edu_tax); 
							document.calculator.total.value = (total); 

						}
						else 
						{
							var taxable_income = Math.round(income - 1000000);  // Reduct 2L for Non-Taxable + 3L for 2nd slab + 5L for 3rd slab ( 2nd & 3rd slab tax 30000 + 100000 will be added manually)

							var tax = Math.round((taxable_income/100)*30);

							var total_tax = Math.round(tax + 125000); // Tax for 10L< slab + 2nd and 3rd slab tax

							var edu_tax = Math.round((total_tax/100)*2);

							var higher_edu_tax = Math.round((total_tax/100)*1);

							var total = Math.round(total_tax + edu_tax + higher_edu_tax);

							document.calculator.tax.value = (total_tax); 
							document.calculator.surcharge.value = (0);
							document.calculator.edu.value = (edu_tax); 
							document.calculator.hedu.value = (higher_edu_tax); 
							document.calculator.total.value = (total); 
						}
						 
					}
					if(type=="female")
					{
						if(isNaN(parseInt(document.calculator.income.value)))
						{
							document.calculator.income.value = (0);		// set zero to income when income is empty
						}
						
						var income = parseInt(document.calculator.income.value);

						if(isNaN(document.calculator.income.value) || income<= "250000")	// Calculations for under 2.5L slab
						{
							var output = 0; 
							document.calculator.tax.value = (output);
							document.calculator.surcharge.value = (output); 
							document.calculator.edu.value = (output); 
							document.calculator.hedu.value = (output); 
							document.calculator.total.value = (output); 
						}
						else if(income > "250000" && income <= "500000")	// Calculations for 2.5L to 5L slab
						{
							
							var taxable_income = Math.round(income - 270000);	// If income is less than 5L, 20000 extra amount will be reduced from income 

							var devided_income = Math.round(taxable_income/100); 	

							var tax = Math.round(devided_income*10); 

							var edu_tax = Math.round((tax/100)*2);

							var higher_edu_tax = Math.round((tax/100)*1); 

							var total = Math.round(tax + edu_tax + higher_edu_tax);

							document.calculator.tax.value = (tax); 
							document.calculator.surcharge.value = (0);
							document.calculator.edu.value = (edu_tax); 
							document.calculator.hedu.value = (higher_edu_tax); 
							document.calculator.total.value = (total); 
						}
						else if (income > "500000" && income < "1000000") 
						{
							var taxable_income = Math.round(income - 500000);  // Reduct 2L for Non-Taxable + 3L for 2nd slab( 2nd slab tax 30000 will be added manually)

							var tax = Math.round((taxable_income/100)*20);

							var total_tax = Math.round(tax + 25000); // Tax for 5L< slab + 2 to 5L tax( 30000)

							var edu_tax = Math.round((total_tax/100)*2);

							var higher_edu_tax = Math.round((total_tax/100)*1);

							var total = Math.round(total_tax + edu_tax + higher_edu_tax);

							document.calculator.tax.value = (total_tax); 
							document.calculator.surcharge.value = (0);
							document.calculator.edu.value = (edu_tax); 
							document.calculator.hedu.value = (higher_edu_tax); 
							document.calculator.total.value = (total); 

						}
						else if (income > 10000000) 
						{
							var taxable_income = Math.round(income - 1000000);  // Reduct 2.5L for Non-Taxable + 3L for 2nd slab + 5L for 3rd slab ( 2nd & 3rd slab tax 30000 + 100000 will be added manually)

							var tax = Math.round((taxable_income/100)*30);

							var total_tax = Math.round(tax + 125000); // Tax for 10L< slab + 2nd and 3rd slab tax

			                var surcharge_amount_one = total_tax * 0.1;

			                var after_crore = income - 10000000;    // For find out the extra amount after one crore

			                var surcharge_amount = after_crore * 0.7;   // For find out the surcharge amount

			                if(surcharge_amount > surcharge_amount_one)   // For find out smaller surcharge amount
			                {
			                   var surcharge_small = surcharge_amount_one;
			                }
			                else
			                {
			                   var surcharge_small = surcharge_amount;
			                }

			                total_tax = total_tax + surcharge_small;

							var edu_tax = Math.round((total_tax/100)*2);

							var higher_edu_tax = Math.round((total_tax/100)*1);

							var total = Math.round(total_tax + edu_tax + higher_edu_tax);

							document.calculator.tax.value = (total_tax-surcharge_small);
							document.calculator.surcharge.value = (surcharge_small); 
							document.calculator.edu.value = (edu_tax); 
							document.calculator.hedu.value = (higher_edu_tax); 
							document.calculator.total.value = (total); 

						}
						else 
						{
							var taxable_income = Math.round(income - 1000000);  // Reduct 2L for Non-Taxable + 3L for 2nd slab + 5L for 3rd slab ( 2nd & 3rd slab tax 30000 + 100000 will be added manually)

							var tax = Math.round((taxable_income/100)*30);

							var total_tax = Math.round(tax + 125000); // Tax for 10L< slab + 2nd and 3rd slab tax

							var edu_tax = Math.round((total_tax/100)*2);

							var higher_edu_tax = Math.round((total_tax/100)*1);

							var total = Math.round(total_tax + edu_tax + higher_edu_tax);

							document.calculator.tax.value = (total_tax); 
							document.calculator.surcharge.value = (0);
							document.calculator.edu.value = (edu_tax); 
							document.calculator.hedu.value = (higher_edu_tax); 
							document.calculator.total.value = (total); 
						}
						 
					}
					if(type=="citizen")
					{
						if(isNaN(parseInt(document.calculator.income.value)))
						{
							document.calculator.income.value = (0);
						}

						var income = parseInt(document.calculator.income.value);

						if(isNaN(document.calculator.income.value) || income<= "300000")	// Calcultions for under 3L slab
						{
							var output = 0; 
							document.calculator.tax.value = (output); 
							document.calculator.surcharge.value = (output);
							document.calculator.edu.value = (output); 
							document.calculator.hedu.value = (output); 
							document.calculator.total.value = (output); 
						}
						else if(income > "300000" && income <= "500000")	// calculations for 3L to 5L slab
						{
							
							var taxable_income = Math.round(income - 320000);	// If income is less than 5L, 20000 extra amount will be reduced from income 

							var devided_income = Math.round(taxable_income/100); 	

							var tax = Math.round(devided_income*10); 

							var edu_tax = Math.round((tax/100)*2);

							var higher_edu_tax = Math.round((tax/100)*1); 

							var total = Math.round(tax + edu_tax + higher_edu_tax);

							document.calculator.tax.value = (tax); 
							document.calculator.surcharge.value = (0);
							document.calculator.edu.value = (edu_tax); 
							document.calculator.hedu.value = (higher_edu_tax); 
							document.calculator.total.value = (total); 


						}
						else if (income > "500000" && income < "1000000") 
						{

							var taxable_income = Math.round(income - 500000);  // Reduct 2L for Non-Taxable + 3L for 2nd slab( 2nd slab tax 30000 will be added manually)

							var tax = Math.round((taxable_income/100)*20);

							var total_tax = Math.round(tax + 20000); // Tax for 5L< slab + 2 to 5L tax( 25000)

							var edu_tax = Math.round((total_tax/100)*2);

							var higher_edu_tax = Math.round((total_tax/100)*1);

							var total = Math.round(total_tax + edu_tax + higher_edu_tax);

							document.calculator.tax.value = (total_tax); 
							document.calculator.surcharge.value = (0);
							document.calculator.edu.value = (edu_tax); 
							document.calculator.hedu.value = (higher_edu_tax); 
							document.calculator.total.value = (total); 

						}
						else if (income > 10000000) 
						{
							var taxable_income = Math.round(income - 1000000);  // Reduct 3L for Non-Taxable + 2L for 2nd slab + 5L for 3rd slab ( 2nd & 3rd slab tax 20000 + 100000 will be added manually)

							var tax = Math.round((taxable_income/100)*30);

							var total_tax = Math.round(tax + 120000); // Tax for 10L< slab + 2nd and 3rd slab tax

			                var surcharge_amount_one = total_tax * 0.1;

			                var after_crore = income - 10000000;    // For find out the extra amount after one crore

			                var surcharge_amount = after_crore * 0.7;   // For find out the surcharge amount

			                if(surcharge_amount > surcharge_amount_one)   // For find out smaller surcharge amount
			                {
			                   var surcharge_small = surcharge_amount_one;
			                }
			                else
			                {
			                   var surcharge_small = surcharge_amount;
			                }

			                total_tax = total_tax + surcharge_small;

							var edu_tax = Math.round((total_tax/100)*2);

							var higher_edu_tax = Math.round((total_tax/100)*1);

							var total = Math.round(total_tax + edu_tax + higher_edu_tax);

							document.calculator.tax.value = (total_tax-surcharge_small);
							document.calculator.surcharge.value = (surcharge_small); 
							document.calculator.edu.value = (edu_tax); 
							document.calculator.hedu.value = (higher_edu_tax); 
							document.calculator.total.value = (total); 

						}
						else 
						{

							var taxable_income = Math.round(income - 1000000);  // Reduct 3L for Non-Taxable + 2L for 2nd slab + 5L for 3rd slab ( 2nd & 3rd slab tax 20000 + 100000 will be added manually)

							var tax = Math.round((taxable_income/100)*30);

							var total_tax = Math.round(tax + 120000); // Tax for 10L< slab + 2nd and 3rd slab tax

							var edu_tax = Math.round((total_tax/100)*2);

							var higher_edu_tax = Math.round((total_tax/100)*1);

							var total = Math.round(total_tax + edu_tax + higher_edu_tax);

							document.calculator.tax.value = (total_tax);
							document.calculator.surcharge.value = (0); 
							document.calculator.edu.value = (edu_tax); 
							document.calculator.hedu.value = (higher_edu_tax); 
							document.calculator.total.value = (total); 

						}
					}
					if(type=="s_citizen")
					{
						if(isNaN(parseInt(document.calculator.income.value)))
						{
							document.calculator.income.value = (0);		// Set default value to zero when leave income as empty
						}					
						var income = parseInt(document.calculator.income.value);

						if(isNaN(document.calculator.income.value) || income<= "500000")	// Calculations for less than 5L slab
						{
							var output = 0; 
							document.calculator.tax.value = (output); 
							document.calculator.surcharge.value = (output);
							document.calculator.edu.value = (output); 
							document.calculator.hedu.value = (output); 
							document.calculator.total.value = (output); 
						}
						else if (income > "500000" && income < "1000000") 	// Calculations for 5L to 10 L slab
						{

							var taxable_income = Math.round(income - 500000);  // Reduct 5L for Non-Taxable 

							var tax = Math.round((taxable_income/100)*20);

							var total_tax = tax; // Tax for 5L< slab 

							var edu_tax = Math.round((total_tax/100)*2);

							var higher_edu_tax = Math.round((total_tax/100)*1);

							var total = Math.round(total_tax + edu_tax + higher_edu_tax);

							document.calculator.tax.value = (total_tax); 
							document.calculator.surcharge.value = (0);
							document.calculator.edu.value = (edu_tax); 
							document.calculator.hedu.value = (higher_edu_tax); 
							document.calculator.total.value = (total); 

						}
						else if(income > 10000000)
						{
							var taxable_income = Math.round(income - 1000000);  // Reduct 5L for Non-Taxable + 5L for 2nd slab ( 2nd slab tax 100000 will be added manually)

							var tax = Math.round((taxable_income/100)*30);

							var total_tax = Math.round(tax + 100000); // Tax for 10L< slab + 2nd and 3rd slab tax

			                var surcharge_amount_one = total_tax * 0.1;

			                var after_crore = income - 10000000;    // For find out the extra amount after one crore

			                var surcharge_amount = after_crore * 0.7;   // For find out the surcharge amount

			                if(surcharge_amount > surcharge_amount_one)   // For find out smaller surcharge amount
			                {
			                   var surcharge_small = surcharge_amount_one;
			                }
			                else
			                {
			                   var surcharge_small = surcharge_amount;
			                }

			                total_tax = total_tax + surcharge_small;

							var edu_tax = Math.round((total_tax/100)*2);

							var higher_edu_tax = Math.round((total_tax/100)*1);

							var total = Math.round(total_tax + edu_tax + higher_edu_tax);

							document.calculator.tax.value = (total_tax-surcharge_small);
							document.calculator.surcharge.value = (surcharge_small); 
							document.calculator.edu.value = (edu_tax); 
							document.calculator.hedu.value = (higher_edu_tax); 
							document.calculator.total.value = (total); 

						}
						else 
						{
							var taxable_income = Math.round(income - 1000000);  // Reduct 2L for Non-Taxable + 3L for 2nd slab + 5L for 3rd slab ( 2nd & 3rd slab tax 30000 + 100000 will be added manually)

							var tax = Math.round((taxable_income/100)*30);

							var total_tax = Math.round(tax + 100000); // Tax for 10L< slab + 2nd slab tax

							var edu_tax = Math.round((total_tax/100)*2);

							var higher_edu_tax = Math.round((total_tax/100)*1);

							var total = Math.round(total_tax + edu_tax + higher_edu_tax);

							document.calculator.tax.value = (total_tax); 
							document.calculator.surcharge.value = (0);
							document.calculator.edu.value = (edu_tax); 
							document.calculator.hedu.value = (higher_edu_tax); 
							document.calculator.total.value = (total); 

						}
					}	// end of senior citizen
				}

	  		else if(payer=="apo")
	            {
				  if(isNaN(parseInt(document.calculator.income.value)))
				  {
					document.calculator.income.value = (0);		// Set default value to zero when leave income as empty
				  }

	              var income = parseInt(document.calculator.income.value);
	              
	              if(isNaN(document.calculator.income.value) || income<= "200000")	// Calculations for less than 2L 
	              {
	                var output = 0; 
	                document.calculator.tax.value = (output); 
	                document.calculator.surcharge.value = (output);
	                document.calculator.edu.value = (output); 
	                document.calculator.hedu.value = (output); 
	                document.calculator.total.value = (output); 
	              }
	              else if(income > "200000" && income <= "500000")	// Calculations for 2L to 5L slab
	              {
	            
	                var taxable_income = Math.round(income - 200000);	// Reduct 2L for Non-Taxable income

	                var devided_income = Math.round(taxable_income/100);  

	                var tax = Math.round(devided_income*10); 

	                var edu_tax = Math.round((tax/100)*2);

	                var higher_edu_tax = Math.round((tax/100)*1); 

	                var total = Math.round(tax + edu_tax + higher_edu_tax);

	                document.calculator.tax.value = (tax); 
	                document.calculator.surcharge.value = (0);
	                document.calculator.edu.value = (edu_tax); 
	                document.calculator.hedu.value = (higher_edu_tax); 
	                document.calculator.total.value = (total); 

	              }
	              else if (income > "500000" && income < "1000000") 	// Calculations for 5L to 10L slab
	              {

	                var taxable_income = Math.round(income - 500000);  // Reduct 2L for Non-Taxable + 3L for 2nd slab( 2nd slab tax 30000 will be added manually)

	                var tax = Math.round((taxable_income/100)*20);

	                var total_tax = Math.round(tax + 30000); // Tax for 5L< slab + 2 to 5L tax( 30000)

	                var edu_tax = Math.round((total_tax/100)*2);

	                var higher_edu_tax = Math.round((total_tax/100)*1);

	                var total = Math.round(total_tax + edu_tax + higher_edu_tax);

	                document.calculator.tax.value = (total_tax); 
	                document.calculator.edu.value = (edu_tax); 
	                document.calculator.hedu.value = (higher_edu_tax); 
	                document.calculator.total.value = (total); 

	              }
				  else if(income > 10000000)
						{
							var taxable_income = Math.round(income - 1000000);  // Reduct 5L for Non-Taxable + 5L for 2nd slab ( 2nd slab tax 100000 will be added manually)

							var tax = Math.round((taxable_income/100)*30);

							var total_tax = Math.round(tax + 130000); // Tax for 10L< slab + 2nd and 3rd slab tax

			                var surcharge_amount_one = total_tax * 0.1;

			                var after_crore = income - 10000000;    // For find out the extra amount after one crore

			                var surcharge_amount = after_crore * 0.7;   // For find out the surcharge amount

			                if(surcharge_amount > surcharge_amount_one)   // For find out smaller surcharge amount
			                {
			                   var surcharge_small = surcharge_amount_one;
			                }
			                else
			                {
			                   var surcharge_small = surcharge_amount;
			                }

			                total_tax = total_tax + surcharge_small;

							var edu_tax = Math.round((total_tax/100)*2);

							var higher_edu_tax = Math.round((total_tax/100)*1);

							var total = Math.round(total_tax + edu_tax + higher_edu_tax);

							document.calculator.tax.value = (total_tax-surcharge_small);
							document.calculator.surcharge.value = (surcharge_small); 
							document.calculator.edu.value = (edu_tax); 
							document.calculator.hedu.value = (higher_edu_tax); 
							document.calculator.total.value = (total); 

						}	              
				  else 
	              {
	                var taxable_income = Math.round(income - 1000000);  // Reduct 2L for Non-Taxable + 3L for 2nd slab + 5L for 3rd slab ( 2nd & 3rd slab tax 30000 + 100000 will be added manually)

	                var tax = Math.round((taxable_income/100)*30);

	                var total_tax = Math.round(tax + 130000); // Tax for 10L< slab + 2nd and 3rd slab tax

	                var edu_tax = Math.round((total_tax/100)*2);

	                var higher_edu_tax = Math.round((total_tax/100)*1);

	                var total = Math.round(total_tax + edu_tax + higher_edu_tax);

	                document.calculator.tax.value = (total_tax); 
	                document.calculator.surcharge.value = (0);
	                document.calculator.edu.value = (edu_tax); 
	                document.calculator.hedu.value = (higher_edu_tax); 
	                document.calculator.total.value = (total); 

	              }
	            }     // end of apo
	              
	            else if(payer=="huf")
	            {

				if(isNaN(parseInt(document.calculator.income.value)))
				{
					document.calculator.income.value = (0);		// Set default value to zero when leave income as empty
				}              

				var income = parseInt(document.calculator.income.value);
	              
	              if(isNaN(document.calculator.income.value) || income<= "200000")	// calculations for less than 2L
	              {
	                var output = 0; 
	                document.calculator.tax.value = (output); 
	                document.calculator.surcharge.value = (output);
	                document.calculator.edu.value = (output); 
	                document.calculator.hedu.value = (output); 
	                document.calculator.total.value = (output); 
	              }
	              else if(income > "200000" && income <= "500000")		// Calculations for 2L to 5L slab
	              {
	            
	                var taxable_income = Math.round(income - 200000);

	                var devided_income = Math.round(taxable_income/100);  

	                var tax = Math.round(devided_income*10); 

	                var edu_tax = Math.round((tax/100)*2);

	                var higher_edu_tax = Math.round((tax/100)*1); 

	                var total = Math.round(tax + edu_tax + higher_edu_tax);

	                document.calculator.tax.value = (tax); 
	                document.calculator.surcharge.value = (0);
	                document.calculator.edu.value = (edu_tax); 
	                document.calculator.hedu.value = (higher_edu_tax); 
	                document.calculator.total.value = (total); 

	              }
	              else if (income > "500000" && income < "1000000")		// Calculations for 5L to 10L slab 
	              {

	                var taxable_income = Math.round(income - 500000);  // Reduct 2L for Non-Taxable + 3L for 2nd slab( 2nd slab tax 30000 will be added manually)

	                var tax = Math.round((taxable_income/100)*20);

	                var total_tax = Math.round(tax + 30000); // Tax for 5L< slab + 2 to 5L tax( 30000)

	                var edu_tax = Math.round((total_tax/100)*2);

	                var higher_edu_tax = Math.round((total_tax/100)*1);

	                var total = Math.round(total_tax + edu_tax + higher_edu_tax);

	                document.calculator.tax.value = (total_tax); 
	                document.calculator.surcharge.value = (0);
	                document.calculator.edu.value = (edu_tax); 
	                document.calculator.hedu.value = (higher_edu_tax); 
	                document.calculator.total.value = (total); 

	              }
				  else if(income > 10000000)
				  {
					var taxable_income = Math.round(income - 1000000);  // Reduct 5L for Non-Taxable + 5L for 2nd slab ( 2nd slab tax 100000 will be added manually)

					var tax = Math.round((taxable_income/100)*30);

					var total_tax = Math.round(tax + 130000); // Tax for 10L< slab + 2nd and 3rd slab tax

	                var surcharge_amount_one = total_tax * 0.1;

	                var after_crore = income - 10000000;    // For find out the extra amount after one crore

	                var surcharge_amount = after_crore * 0.7;   // For find out the surcharge amount

	                if(surcharge_amount > surcharge_amount_one)   // For find out smaller surcharge amount
	                {
	                   var surcharge_small = surcharge_amount_one;
	                }
	                else
	                {
	                   var surcharge_small = surcharge_amount;
	                }

	                total_tax = total_tax + surcharge_small;

					var edu_tax = Math.round((total_tax/100)*2);

					var higher_edu_tax = Math.round((total_tax/100)*1);

					var total = Math.round(total_tax + edu_tax + higher_edu_tax);

					document.calculator.tax.value = (total_tax-surcharge_small);
					document.calculator.surcharge.value = (surcharge_small); 
					document.calculator.edu.value = (edu_tax); 
					document.calculator.hedu.value = (higher_edu_tax); 
					document.calculator.total.value = (total); 

				  }	
				  else 
	              {
	                var taxable_income = Math.round(income - 1000000);  // Reduct 2L for Non-Taxable + 3L for 2nd slab + 5L for 3rd slab ( 2nd & 3rd slab tax 30000 + 100000 will be added manually)

	                var tax = Math.round((taxable_income/100)*30);

	                var total_tax = Math.round(tax + 130000); // Tax for 10L< slab + 2nd and 3rd slab tax

	                var edu_tax = Math.round((total_tax/100)*2);

	                var higher_edu_tax = Math.round((total_tax/100)*1);

	                var total = Math.round(total_tax + edu_tax + higher_edu_tax);

	                document.calculator.tax.value = (total_tax); 
	                document.calculator.surcharge.value = (0);
	                document.calculator.edu.value = (edu_tax); 
	                document.calculator.hedu.value = (higher_edu_tax); 
	                document.calculator.total.value = (total); 

	              }
	            }     // end of huf calculations
		 
			else if(payer=="society")
			{
				if(isNaN(parseInt(document.calculator.income.value)))
				{
					document.calculator.income.value = (0);		// Set default value to zero when leave income as empty
				}

				var income = parseInt(document.calculator.income.value);

				if(income < 10000)
					{
						var tax = Math.round((income/100)*10);

						var edu_tax = Math.round((tax/100)*2);

						var higher_edu_tax = Math.round((tax/100)*1);

						var total = Math.round(tax + edu_tax + higher_edu_tax);
						
						document.calculator.tax.value = (tax);
						document.calculator.surcharge.value = (0); 
						document.calculator.edu.value = (edu_tax); 
						document.calculator.hedu.value = (higher_edu_tax); 
						document.calculator.total.value = (total); 


					} // end of 10000 slab

				else if(income > '10000' && income < '20000')
					{
						
						var taxable_income = Math.round(income - 10000);  // Reduct 10K from 1st slab

						var tax = Math.round((taxable_income/100)*20);

						var total_tax = Math.round(tax + 1000); // Tax for 10L< slab + 1st slab tax (1000)

						var edu_tax = Math.round((total_tax/100)*2);

						var higher_edu_tax = Math.round((total_tax/100)*1);

						var total = Math.round(total_tax + edu_tax + higher_edu_tax);

						document.calculator.tax.value = (total_tax); 
						document.calculator.surcharge.value = (0);
						document.calculator.edu.value = (edu_tax); 
						document.calculator.hedu.value = (higher_edu_tax); 
						document.calculator.total.value = (total); 

					} // end of 20000 slab

				else if(income > 10000000)
				  	{
						var taxable_income = Math.round(income - 20000);  // Reduct 20K from 1st and 2nd slab

						var tax = Math.round((taxable_income/100)*30);

						var total_tax = Math.round(tax + 3000); // Tax for 20L< slab + 1st and 2nd slab tax (1000 + 2000)

		                var surcharge_amount_one = total_tax * 0.1;

		                var after_crore = income - 10000000;    // For find out the extra amount after one crore

		                var surcharge_amount = after_crore * 0.7;   // For find out the surcharge amount

		                if(surcharge_amount > surcharge_amount_one)   // For find out smaller surcharge amount
		                {
		                   var surcharge_small = surcharge_amount_one;
		                }
		                else
		                {
		                   var surcharge_small = surcharge_amount;
		                }

		                total_tax = total_tax + surcharge_small;

						var edu_tax = Math.round((total_tax/100)*2);

						var higher_edu_tax = Math.round((total_tax/100)*1);

						var total = Math.round(total_tax + edu_tax + higher_edu_tax);

						document.calculator.tax.value = (total_tax-surcharge_small);
						document.calculator.surcharge.value = (surcharge_small); 
						document.calculator.edu.value = (edu_tax); 
						document.calculator.hedu.value = (higher_edu_tax); 
						document.calculator.total.value = (total); 

				  	}	// End of more than one Crore

				else
					{
						var taxable_income = income - 20000;  // Reduct 20K from 1st and 2nd slab

						var tax = Math.round((taxable_income/100)*30);

						var total_tax = Math.round(tax + 3000); // Tax for 20L< slab + 1st and 2nd slab tax (1000 + 2000)

						var edu_tax = Math.round((total_tax/100)*2);

						var higher_edu_tax = Math.round((total_tax/100)*1);

						var total = Math.round(total_tax + edu_tax + higher_edu_tax);

						document.calculator.tax.value = (total_tax); 
						document.calculator.surcharge.value = (0);
						document.calculator.edu.value = (edu_tax); 
						document.calculator.hedu.value = (higher_edu_tax); 
						document.calculator.total.value = (total); 

					} // end of 20K plus slab
				
			}
			else if(payer=="foreign_company")
			{
				if(isNaN(parseInt(document.calculator.income.value)))
				{
					document.calculator.income.value = (0);
				}

				var income = parseInt(document.calculator.income.value);

				if(income > 10000000 && income < 100000000)
                {
                  var total_tax = Math.round((income/100)*40);

                  var surcharge_amount_one = total_tax * 0.02;

                  var after_crore = income - 10000000;    // For find out the extra amount after one crore

                  var surcharge_amount = after_crore * 0.7;   // For find out the surcharge amount

                  if(surcharge_amount > surcharge_amount_one)   // For find out smaller surcharge amount
                  {
                    var surcharge_small = surcharge_amount_one;
                  }
                  else
                  {
                    var surcharge_small = surcharge_amount;
                  }

                  total_tax = total_tax + surcharge_small;

                  var edu_tax = Math.round((total_tax/100)*2);

                  var higher_edu_tax = Math.round((total_tax/100)*1);

                  var total = Math.round(total_tax + edu_tax + higher_edu_tax);

                  document.calculator.tax.value = (total_tax-surcharge_small); 
                  document.calculator.surcharge.value = (surcharge_small);
                  document.calculator.edu.value = (edu_tax); 
                  document.calculator.hedu.value = (higher_edu_tax); 
                  document.calculator.total.value = (total); 
                }
                else if(income > 100000000)
                {
                  var total_tax = Math.round((income/100)*40);

                  var surcharge_amount_one = total_tax * 0.05;

                  var after_crore = income - 100000000;    // For find out the extra amount after ten crore

                  var surcharge_amount = after_crore * 0.7;   // For find out the surcharge amount

                  if(surcharge_amount > surcharge_amount_one)   // For find out smaller surcharge amount
                  {
                    var surcharge_small = surcharge_amount_one;
                  }
                  else
                  {
                    var surcharge_small = surcharge_amount;
                  }

                  total_tax = total_tax + surcharge_small;

                  var edu_tax = Math.round((total_tax/100)*2);

                  var higher_edu_tax = Math.round((total_tax/100)*1);

                  var total = Math.round(total_tax + edu_tax + higher_edu_tax);

                  document.calculator.tax.value = (total_tax-surcharge_small); 
                  document.calculator.surcharge.value = (surcharge_small);
                  document.calculator.edu.value = (edu_tax); 
                  document.calculator.hedu.value = (higher_edu_tax); 
                  document.calculator.total.value = (total); 
                } 
                else
                {

                  var total_tax = Math.round((income/100)*40);

                  var edu_tax = Math.round((total_tax/100)*2);

                  var higher_edu_tax = Math.round((total_tax/100)*1);

                  var total = Math.round(total_tax + edu_tax + higher_edu_tax);

                  document.calculator.tax.value = (total_tax); 
                  document.calculator.surcharge.value = ('0');
                  document.calculator.edu.value = (edu_tax); 
                  document.calculator.hedu.value = (higher_edu_tax); 
                  document.calculator.total.value = (total); 
                }
			} // end of foreign company calculations

            else if(payer=="company")
              {

				if(isNaN(parseInt(document.calculator.income.value)))
				{
					document.calculator.income.value = (0);
				}

                var income = parseInt(document.calculator.income.value);

                if(income > 10000000 && income < 100000000)
                {
                  var total_tax = Math.round((income/100)*30);

                  var surcharge_amount_one = total_tax * 0.05;

                  var after_crore = income - 10000000;    // For find out the extra amount after one crore

                  var surcharge_amount = after_crore * 0.7;   // For find out the surcharge amount

                  if(surcharge_amount > surcharge_amount_one)   // For find out smaller surcharge amount
                  {
                    var surcharge_small = surcharge_amount_one;
                  }
                  else
                  {
                    var surcharge_small = surcharge_amount;
                  }

                  total_tax = total_tax + surcharge_small;

                  var edu_tax = Math.round((total_tax/100)*2);

                  var higher_edu_tax = Math.round((total_tax/100)*1);

                  var total = Math.round(total_tax + edu_tax + higher_edu_tax);

                  document.calculator.tax.value = (total_tax-surcharge_small); 
                  document.calculator.surcharge.value = (surcharge_small);
                  document.calculator.edu.value = (edu_tax); 
                  document.calculator.hedu.value = (higher_edu_tax); 
                  document.calculator.total.value = (total); 
                }
                else if(income > 100000000)
                {
                  var total_tax = Math.round((income/100)*30);

                  var surcharge_amount_one = total_tax * 0.1;

                  var after_crore = income - 100000000;    // For find out the extra amount after ten crore

                  var surcharge_amount = after_crore * 0.7;   // For find out the surcharge amount

                  if(surcharge_amount > surcharge_amount_one)   // For find out smaller surcharge amount
                  {
                    var surcharge_small = surcharge_amount_one;
                  }
                  else
                  {
                    var surcharge_small = surcharge_amount;
                  }

                  total_tax = total_tax + surcharge_small;

                  var edu_tax = Math.round((total_tax/100)*2);

                  var higher_edu_tax = Math.round((total_tax/100)*1);

                  var total = Math.round(total_tax + edu_tax + higher_edu_tax);

                  document.calculator.tax.value = (total_tax-surcharge_small); 
                  document.calculator.surcharge.value = (surcharge_small);
                  document.calculator.edu.value = (edu_tax); 
                  document.calculator.hedu.value = (higher_edu_tax); 
                  document.calculator.total.value = (total); 
                }
                else
                {

                  var total_tax = Math.round((income/100)*30);

                  var edu_tax = Math.round((total_tax/100)*2);

                  var higher_edu_tax = Math.round((total_tax/100)*1);

                  var total = Math.round(total_tax + edu_tax + higher_edu_tax);

                  document.calculator.tax.value = (total_tax); 
                  document.calculator.surcharge.value = ('0');
                  document.calculator.edu.value = (edu_tax); 
                  document.calculator.hedu.value = (higher_edu_tax); 
                  document.calculator.total.value = (total); 
                }
                
            }   // end of domestic company calculations

            else	// Calculations for other concern 
			{
				if(isNaN(parseInt(document.calculator.income.value)))
				{
					document.calculator.income.value = (0);
				}

                if(income > 10000000)
                    {
                      var total_tax = Math.round((income/100)*30);

                      var surcharge_amount_one = total_tax * 0.1;

                      var after_crore = income - 10000000;    // For find out the extra amount after one crore

                      var surcharge_amount = after_crore * 0.7;   // For find out the surcharge amount

                      if(surcharge_amount > surcharge_amount_one)   // For find out smaller surcharge amount
                      {
                        var surcharge_small = surcharge_amount_one;
                      }
                      else
                      {
                        var surcharge_small = surcharge_amount;
                      }

                      total_tax = total_tax + surcharge_small;

                      var edu_tax = Math.round((total_tax/100)*2);

                      var higher_edu_tax = Math.round((total_tax/100)*1);

                      var total = Math.round(total_tax + edu_tax + higher_edu_tax);

                      document.calculator.tax.value = (total_tax-surcharge_small); 
                      document.calculator.surcharge.value = (surcharge_small);
                      document.calculator.edu.value = (edu_tax); 
                      document.calculator.hedu.value = (higher_edu_tax); 
                      document.calculator.total.value = (total); 
                    }
                    else
                    {

                      var total_tax = Math.round((income/100)*30);

                      var edu_tax = Math.round((total_tax/100)*2);

                      var higher_edu_tax = Math.round((total_tax/100)*1);

                      var total = Math.round(total_tax + edu_tax + higher_edu_tax);

                      document.calculator.tax.value = (total_tax); 
                      document.calculator.surcharge.value = ('0');
                      document.calculator.edu.value = (edu_tax); 
                      document.calculator.hedu.value = (higher_edu_tax); 
                      document.calculator.total.value = (total); 
                    }

			}	// end of other concern calculations
		} // End of Assesment year 15_16
	} 
 