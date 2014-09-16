    function isNumber(evt) {
          evt = (evt) ? evt : window.event;
          var charCode = (evt.which) ? evt.which : evt.keyCode;
          if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
          }
          return true;
    }


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
                  
                  // Calculations for salary

                  var salary_box_value = parseInt(document.calculator.salary.value);
                  document.calculator.salary_box.value = (Math.round(salary_box_value));

                  //Calculations for income from House Property
                  
                  var let_out_rent = parseInt(document.calculator.let_out_rent.value);
                  var let_out_tax = parseInt(document.calculator.let_out_tax.value);
                  var unreal_rent = parseInt(document.calculator.unreal_rent.value);

                  document.calculator.net_rent.value = (Math.round(let_out_rent-(let_out_tax+unreal_rent)));

                  var net_rent = parseInt(document.calculator.net_rent.value);

                  if(net_rent > 0)
                  {
                    document.calculator.house_standard_deduction.value = (Math.round(net_rent*0.3));
                  }
                  else
                  {
                    document.calculator.house_standard_deduction.value = ('0');                    
                  }

                  var house_standard_deduction =  parseInt(document.calculator.house_standard_deduction.value);

                  var let_out_interest_house_loan = parseInt(document.calculator.let_out_interest_house_loan.value);

                  document.calculator.income_let_out.value = (Math.round(net_rent-(house_standard_deduction+let_out_interest_house_loan)));

                  var income_let_out = parseInt(document.calculator.income_let_out.value);

                  var house = parseInt(document.calculator.interest_house_loan.value);
                  var house_under_2l = parseInt(document.calculator.interest_house_loan.value);

                  if(house > 150000)        // if self house rent goes > 1.5L it will be reseted to 1.5L
                  {
                    house = 150000;
                    house = -house;           // Convert positive value to negative value
                    house_under_2l = -house_under_2l;
                    document.calculator.house_box.value = (Math.round(house+income_let_out));
                    document.calculator.self_occupied_house.value = (Math.round(house_under_2l));
                  }
                  else
                  {
                    house = -house;
                    document.calculator.house_box.value = (Math.round(house+income_let_out));
                    document.calculator.self_occupied_house.value = (Math.round(house));
                  }

                  // Calculations for capital gains

                  var short_capital = parseInt(document.calculator.short_capital.value);

                  var short_capital_111A = parseInt(document.calculator.short_capital_111A.value);
                  
                  var long_capital_20 = parseInt(document.calculator.long_capital_20.value);

                  var long_capital_10 = parseInt(document.calculator.long_capital_10.value);

                  document.calculator.capital_box.value = (Math.round(short_capital+short_capital_111A+long_capital_20+long_capital_10));

                  // Calculations for other income

                  var other_interest = parseInt(document.calculator.other_interest.value);

                  var other_commission = parseInt(document.calculator.other_commission.value);

                  var other_lottery = parseInt(document.calculator.other_lottery.value);

                  document.calculator.other_box.value = (Math.round(other_interest+other_commission+other_lottery));

                  // Calculations for profit

                  var profit = parseInt(document.calculator.profit.value);

                  document.calculator.profit_box.value = (Math.round(profit));

                  // Calculations for Agriculture

                  var agri = parseInt(document.calculator.agri.value);

                  document.calculator.agri_box.value = (Math.round(agri));

                  // Tax calculations

                  document.calculator.total_short_capital_111A.value = Math.round((short_capital_111A*0.15));

                  document.calculator.long_capital_20_final.value = Math.round((long_capital_20*0.2));

                  document.calculator.long_capital_gain_10.value = Math.round((long_capital_10*0.1));

                  document.calculator.crossword.value = Math.round((other_lottery*0.3));

                  var total_short_capital_111A = parseInt(document.calculator.total_short_capital_111A.value);

                  var long_capital_20_final = parseInt(document.calculator.long_capital_20_final.value);

                  var long_capital_gain_10 = parseInt(document.calculator.long_capital_gain_10.value);

                  var crossword = parseInt(document.calculator.crossword.value);

                  var house_box_value = parseInt(document.calculator.house_box.value);

                  var capital_box_value = parseInt(document.calculator.capital_box.value);

                  var other_box_value = parseInt(document.calculator.other_box.value);

                  var profit_box_value= parseInt(document.calculator.profit_box.value);

                  var agri_box_value = parseInt(document.calculator.agri_box.value);

                  var income = Math.round(salary_box_value+house_box_value+profit_box_value+short_capital+other_interest+other_commission+agri_box_value);

                  var deduction_box = parseInt(document.calculator.deduction_box.value);

                  var income_temp = income;

                  if(income <= 500000 && income > 0)
                  {
                    income = income - 20000;
                  }


                  document.calculator.income.value = Math.round(income-deduction_box);

                  // Calculations for Detections

                  var life_insurance_premium = parseInt(document.calculator.life_insurance_premium.value);

                  var annuity = parseInt(document.calculator.annuity.value);

                  var pf = parseInt(document.calculator.pf.value);

                  var nsc = parseInt(document.calculator.nsc.value);

                  var ulip = parseInt(document.calculator.ulip.value);

                  var mf = parseInt(document.calculator.mf.value);

                  var repayment_house_loan = parseInt(document.calculator.repayment_house_loan.value);

                  var tuition_fee = parseInt(document.calculator.tuition_fee.value);

                  var fixed_deposit = parseInt(document.calculator.fixed_deposit.value);

                  var npf = parseInt(document.calculator.npf.value);

                  var employee_nps = parseInt(document.calculator.employee_nps.value);

                  if(employee_nps > 100000)     // If employee nps value is more than 1L it will reseted to 1L
                  {
                    employee_nps = 100000;
                  }

                  var employer_nps = parseInt(document.calculator.employer_nps.value);

                  var equity_data = Math.round(salary_box_value+house_box_value+capital_box_value+profit_box_value+other_box_value+agri_box_value);

                  var equity = parseInt(document.calculator.equity.value);

                    if(equity >= 50000)
                    {
                      if(equity_data > 1000000)
                      {
                        equity = 25000;
                      }
                      else
                      {
                        equity = 0;
                      }
                    }
                    else
                    {
                      if(equity_data < 1000000)
                      {
                        equity = Math.round((equity/2));
                      }
                      else
                      {
                        equity = 0;
                      }
                    }


                  var other_deduction = parseInt(document.calculator.other_deduction.value);

                  var total_deduction = (Math.round(life_insurance_premium+annuity+pf+nsc+ulip+mf+repayment_house_loan+tuition_fee+fixed_deposit+npf+employee_nps+other_deduction));

                  document.calculator.total_deduction.value = (total_deduction);

                  if(total_deduction > 100000)
                  {
                    total_deduction = 100000;
                    total_deduction = Math.round(total_deduction + employer_nps + equity);   // add employer nsp & equity to total detection after calculations
                    document.calculator.total_deduction.value = (total_deduction);
                  }
                  else
                  {
                    total_deduction = Math.round(total_deduction + employer_nps + equity);   // add employer nsp & equity to total detection after calculations

                    document.calculator.total_deduction.value = (total_deduction);
                  }

                  var medi_claim = parseInt(document.calculator.medi_claim.value);

                  var medi_claim_parent = parseInt(document.calculator.medi_claim_parent.value);

                  if(medi_claim > 15000)    // Maximum medical calim for male  is 15000
                  {
                    medi_claim = 15000;
                  }

                  if(medi_claim_parent > 20000)      // Maximum medical calim for parent is 20000
                  {
                    medi_claim_parent = 20000;
                  }
                
                  var donation = parseInt(document.calculator.donation.value);

                  var political_donation = parseInt(document.calculator.political_donation.value);

                  var rent_paid = parseInt(document.calculator.rent_paid.value);

                  if(rent_paid > 24000)         // Other than who has claimed HRA(Maximum 240000)
                  {
                    rent_paid = 24000;
                  }

                  if(document.getElementById('80dd').checked)
                  {
                    if(document.getElementById('80dd_severe').checked)
                    {
                      var medical_treatment = 100000;
                      document.calculator.medical_treatment.value = (medical_treatment);
                    }
                    else
                    {
                      medical_treatment = 50000;
                      document.calculator.medical_treatment.value = (medical_treatment);  
                    }

                  }
                  else
                  {
                    medical_treatment = 0;
                    document.calculator.medical_treatment.value = (medical_treatment);
                  }

                  var interest_first_home_loan = parseInt(document.calculator.interest_first_home_loan.value);

                  if(interest_first_home_loan > 100000)
                  {
                    interest_first_home_loan = 100000;
                  }

                  var interest_education_loan = parseInt(document.calculator.interest_education_loan.value);

                  if(document.getElementById('80U').checked)
                  {
                    if(document.getElementById('80U_severe').checked)
                    {
                      var disability = 100000;
                      document.calculator.disability.value = (disability);
                    }
                    else
                    {
                      disability = 50000;   
                      document.calculator.disability.value = (disability);  
                    }

                  }
                  else
                  {
                    disability = 0;
                    document.calculator.disability.value = (disability);
                  }

                  var interest_saving_acc = parseInt(document.calculator.interest_saving_acc.value);

                  if(interest_saving_acc > 10000)     // if interest on savings acc more than 10000 it will reseted with 10000
                  {
                    interest_saving_acc = 10000;
                  }

                  var other_deduction_2 = parseInt(document.calculator.other_deduction_2.value);

                  var detection_down = Math.round(medi_claim+medi_claim_parent+donation+political_donation+rent_paid+medical_treatment+interest_first_home_loan+interest_education_loan+disability+interest_saving_acc+other_deduction_2);

                  document.calculator.deduction_box.value = Math.round(total_deduction+detection_down);

                  var income = parseInt(document.calculator.income.value);

                  document.calculator.total_income.value = Math.round((salary_box_value+house_box_value+capital_box_value+profit_box_value+other_box_value+agri_box_value)-deduction_box);

                  if(agri_box_value == 0)
                  {

                    // Normal slab tax calculations

                     if(isNaN(document.calculator.income.value) || income<= "200000")
                    {
                      document.calculator.tax.value = ('0'); 
                      document.calculator.edu.value = ('0'); 
                      document.calculator.hedu.value = ('0'); 
                      document.calculator.total.value = ('0');
                    }
                    else if(income > "200000" && income <= "500000")
                    {
                      
                      var taxable_income = Math.round(income - 200000);

                      var devided_income = Math.round(taxable_income/100);  

                      var tax = Math.round((devided_income*10)+total_short_capital_111A+long_capital_20_final+long_capital_gain_10+crossword); 

                      var edu_tax = Math.round((tax/100)*2);

                      var higher_edu_tax = Math.round((tax/100)*1); 

                      var total = Math.round(tax + edu_tax + higher_edu_tax);

                      document.calculator.tax.value = (tax); 
                      document.calculator.edu.value = (edu_tax); 
                      document.calculator.hedu.value = (higher_edu_tax); 
                      document.calculator.total.value = (total); 

                    }
                    else if (income > "500000" && income < "1000000") 
                    {
                      //echo "You are come under 5 to 10 Laks Slab<br>";

                      var taxable_income = Math.round(income - 500000);  // Reduct 2L for Non-Taxable + 3L for 2nd slab( 2nd slab tax 30000 will be added manually)

                      var tax = Math.round(((taxable_income/100)*20)+total_short_capital_111A+long_capital_20_final+long_capital_gain_10+crossword);

                      var total_tax = Math.round(tax + 30000); // Tax for 5L< slab + 2 to 5L tax( 30000)

                      var edu_tax = Math.round((total_tax/100)*2);

                      var higher_edu_tax = Math.round((total_tax/100)*1);

                      var total = Math.round(total_tax + edu_tax + higher_edu_tax);

                      document.calculator.tax.value = (total_tax); 
                      document.calculator.edu.value = (edu_tax); 
                      document.calculator.hedu.value = (higher_edu_tax); 
                      document.calculator.total.value = (total); 

                    }
                    else 
                    {
                      if(income > 10000000)
                      {
                        var taxable_income = Math.round(income - 1000000);  // Reduct 2L for Non-Taxable + 3L for 2nd slab + 5L for 3rd slab ( 2nd & 3rd slab tax 30000 + 100000 will be added manually)

                        var tax = Math.round(((taxable_income/100)*30)+total_short_capital_111A+long_capital_20_final+long_capital_gain_10+crossword);

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

                        var tax = Math.round(((taxable_income/100)*30)+total_short_capital_111A+long_capital_20_final+long_capital_gain_10+crossword);

                        var total_tax = Math.round(tax + 130000); // Tax for 10L< slab + 2nd and 3rd slab tax

                        var edu_tax = Math.round((total_tax/100)*2);

                        var higher_edu_tax = Math.round((total_tax/100)*1);

                        var total = Math.round(total_tax + edu_tax + higher_edu_tax);

                        document.calculator.tax.value = (total_tax); 
                        document.calculator.surcharge.value = ('0');
                        document.calculator.edu.value = (edu_tax); 
                        document.calculator.hedu.value = (higher_edu_tax); 
                        document.calculator.total.value = (total); 
                      }

                    }  // end of tax slab calculations

                  }   // end of agri_box_value = 0
                  
                else   // calculations for agricultural tax
                  {
                      var income_validate_agri = income - agri_box_value;       // For reseting agriculture value to 0 if income lessthan slab value

                         // Normal slab tax calculations

                        if(income_validate_agri > 200000)
                        {
                          if(income_validate_agri > 10000000)
                          {
                            if(isNaN(document.calculator.income.value) || income<= "200000")
                            {
                              document.calculator.tax.value = ('0'); 
                              document.calculator.surcharge.value = ('0');
                              document.calculator.edu.value = ('0'); 
                              document.calculator.hedu.value = ('0'); 
                              document.calculator.total.value = ('0');
                            }
                            else if(income > "200000" && income <= "500000")
                            {
                              
                              var taxable_income = Math.round(income - 200000);

                              var devided_income = Math.round(taxable_income/100);  

                              var tax = Math.round((devided_income*10)+total_short_capital_111A+long_capital_20_final+long_capital_gain_10+crossword); 

                            }
                            else if (income > "500000" && income < "1000000") 
                            {

                              var taxable_income = Math.round(income - 500000);  // Reduct 2L for Non-Taxable + 3L for 2nd slab( 2nd slab tax 30000 will be added manually)

                              var tax = Math.round(((taxable_income/100)*20)+total_short_capital_111A+long_capital_20_final+long_capital_gain_10+crossword);

                              var tax = Math.round(tax + 30000); // Tax for 5L< slab + 2 to 5L tax( 30000)

                            }
                            else 
                            {
                              //echo "You are come under 10+ Laks Slab";

                              var taxable_income = Math.round(income - 1000000);  // Reduct 2L for Non-Taxable + 3L for 2nd slab + 5L for 3rd slab ( 2nd & 3rd slab tax 30000 + 100000 will be added manually)

                              var tax = Math.round(((taxable_income/100)*30)+total_short_capital_111A+long_capital_20_final+long_capital_gain_10+crossword);

                              var tax = Math.round(tax + 130000); // Tax for 10L< slab + 2nd and 3rd slab tax

                            }  // end of tax slab calculations

                            /* Reduce minimum exceptional amount as per Tax Act. For example if user enter agriculture income as 300000 for the 

                               assessment year 2014-2015. For this assessment year exemption will starting from 2L, so reduce the 2L from Agriculture 

                               income and calculate normal tax calculation for agri income. The final output will be in the difference between 

                               Normal tax calcution amount with agriculture and calcutaion for agricultural tax.

                             */

                            var agri_tax_input = agri_box_value + 200000;   // Exemption on 2L as per slab 

                            if(agri_tax_input <= "200000")
                            {
                              document.calculator.tax.value = ('0');
                              document.calculator.surcharge.value = ('0');
                              document.calculator.edu.value = ('0'); 
                              document.calculator.hedu.value = ('0'); 
                              document.calculator.total.value = ('0');
                            }
                            else if(agri_tax_input > "200000" && agri_tax_input <= "500000")
                            {
                              
                              var agri_taxable_income = Math.round(agri_tax_input - 200000);

                              var agri_devided_income = Math.round(agri_taxable_income/100);  

                              var agri_tax = Math.round((agri_devided_income*10)+total_short_capital_111A+long_capital_20_final+long_capital_gain_10+crossword); 

                              agri_tax = tax - agri_tax ;

                              var surcharge_amount_one = agri_tax * 0.1;

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

                              agri_tax = agri_tax + surcharge_small;

                              var agri_edu_tax = Math.round((agri_tax/100)*2);

                              var agri_higher_edu_tax = Math.round((agri_tax/100)*1); 

                              var agri_total = Math.round(agri_tax + agri_edu_tax + agri_higher_edu_tax);

                              document.calculator.tax.value = (agri_tax-surcharge_small); 
                              document.calculator.surcharge.value = (surcharge_small);
                              document.calculator.edu.value = (agri_edu_tax); 
                              document.calculator.hedu.value = (agri_higher_edu_tax); 
                              document.calculator.total.value = (agri_total); 

                            }
                            else if (agri_tax_input > "500000" && agri_tax_input < "1000000") 
                            {

                              var agri_taxable_income = Math.round(agri_tax_input - 500000);  // Reduct 2L for Non-Taxable + 3L for 2nd slab( 2nd slab tax 30000 will be added manually)

                              var agri_tax = Math.round(((agri_taxable_income/100)*20)+total_short_capital_111A+long_capital_20_final+long_capital_gain_10+crossword);

                              agri_tax = agri_tax + 30000 ;

                              agri_tax = tax - agri_tax ;

                              var agri_total_tax = Math.round(agri_tax); // Tax for 5L< slab + 2 to 5L tax( 30000)

                              var surcharge_amount_one = agri_total_tax * 0.1;

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

                              agri_total_tax = agri_total_tax + surcharge_small;

                              var agri_edu_tax = Math.round((agri_total_tax/100)*2);

                              var agri_higher_edu_tax = Math.round((agri_total_tax/100)*1);

                              var agri_total = Math.round(agri_total_tax + agri_edu_tax + agri_higher_edu_tax);

                              document.calculator.tax.value = (agri_total_tax-surcharge_small); 
                              document.calculator.surcharge.value = (surcharge_small);
                              document.calculator.edu.value = (agri_edu_tax); 
                              document.calculator.hedu.value = (agri_higher_edu_tax); 
                              document.calculator.total.value = (agri_total); 

                            }
                            else 
                            {

                              var agri_taxable_income = Math.round(agri_tax_input - 1000000);  // Reduct 2L for Non-Taxable + 3L for 2nd slab + 5L for 3rd slab ( 2nd & 3rd slab tax 30000 + 100000 will be added manually)

                              var agri_tax = Math.round(((agri_taxable_income/100)*30)+total_short_capital_111A+long_capital_20_final+long_capital_gain_10+crossword);

                              agri_tax = agri_tax + 130000 ;

                              agri_tax = tax - agri_tax ;

                              var agri_total_tax = Math.round(agri_tax); // Tax for 10L< slab + 2nd and 3rd slab tax

                              var surcharge_amount_one = agri_total_tax * 0.1;

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

                              agri_total_tax = agri_total_tax + surcharge_small;

                              var agri_edu_tax = Math.round((agri_total_tax/100)*2);

                              var agri_higher_edu_tax = Math.round((agri_total_tax/100)*1);

                              var agri_total = Math.round(agri_total_tax + agri_edu_tax + agri_higher_edu_tax);

                              document.calculator.tax.value = (agri_total_tax); 
                              document.calculator.surcharge.value = (surcharge_small);
                              document.calculator.edu.value = (agri_edu_tax); 
                              document.calculator.hedu.value = (agri_higher_edu_tax); 
                              document.calculator.total.value = (agri_total); 

                            }  // end of tax slab calculations
                          }     // End of Income more than one crore

                          else
                          {  
                            if(isNaN(document.calculator.income.value) || income<= "200000")
                            {
                              document.calculator.tax.value = ('0'); 
                              document.calculator.surcharge.value = ('0');
                              document.calculator.edu.value = ('0'); 
                              document.calculator.hedu.value = ('0'); 
                              document.calculator.total.value = ('0');
                            }
                            else if(income > "200000" && income <= "500000")
                            {
                              
                              var taxable_income = Math.round(income - 200000);

                              var devided_income = Math.round(taxable_income/100);  

                              var tax = Math.round((devided_income*10)+total_short_capital_111A+long_capital_20_final+long_capital_gain_10+crossword); 

                            }
                            else if (income > "500000" && income < "1000000") 
                            {

                              var taxable_income = Math.round(income - 500000);  // Reduct 2L for Non-Taxable + 3L for 2nd slab( 2nd slab tax 30000 will be added manually)

                              var tax = Math.round(((taxable_income/100)*20)+total_short_capital_111A+long_capital_20_final+long_capital_gain_10+crossword);

                              var tax = Math.round(tax + 30000); // Tax for 5L< slab + 2 to 5L tax( 30000)

                            }
                            else 
                            {
                              //echo "You are come under 10+ Laks Slab";

                              var taxable_income = Math.round(income - 1000000);  // Reduct 2L for Non-Taxable + 3L for 2nd slab + 5L for 3rd slab ( 2nd & 3rd slab tax 30000 + 100000 will be added manually)

                              var tax = Math.round(((taxable_income/100)*30)+total_short_capital_111A+long_capital_20_final+long_capital_gain_10+crossword);

                              var tax = Math.round(tax + 130000); // Tax for 10L< slab + 2nd and 3rd slab tax

                            }  // end of tax slab calculations

                            /* Reduce minimum exceptional amount as per Tax Act. For example if user enter agriculture income as 300000 for the 

                               assessment year 2014-2015. For this assessment year exemption will starting from 2L, so reduce the 2L from Agriculture 

                               income and calculate normal tax calculation for agri income. The final output will be in the difference between 

                               Normal tax calcution amount with agriculture and calcutaion for agricultural tax.

                             */

                            var agri_tax_input = agri_box_value + 200000;   // Exemption on 2L as per slab 

                            if(agri_tax_input <= "200000")
                            {
                              document.calculator.tax.value = ('0'); 
                              document.calculator.edu.value = ('0'); 
                              document.calculator.hedu.value = ('0'); 
                              document.calculator.total.value = ('0');
                            }
                            else if(agri_tax_input > "200000" && agri_tax_input <= "500000")
                            {
                              
                              var agri_taxable_income = Math.round(agri_tax_input - 200000);

                              var agri_devided_income = Math.round(agri_taxable_income/100);  

                              var agri_tax = Math.round((agri_devided_income*10)+total_short_capital_111A+long_capital_20_final+long_capital_gain_10+crossword); 

                              agri_tax = tax - agri_tax ;

                              var agri_edu_tax = Math.round((agri_tax/100)*2);

                              var agri_higher_edu_tax = Math.round((agri_tax/100)*1); 

                              var agri_total = Math.round(agri_tax + agri_edu_tax + agri_higher_edu_tax);

                              document.calculator.tax.value = (agri_tax); 
                              document.calculator.edu.value = (agri_edu_tax); 
                              document.calculator.hedu.value = (agri_higher_edu_tax); 
                              document.calculator.total.value = (agri_total); 

                            }
                            else if (agri_tax_input > "500000" && agri_tax_input < "1000000") 
                            {

                              var agri_taxable_income = Math.round(agri_tax_input - 500000);  // Reduct 2L for Non-Taxable + 3L for 2nd slab( 2nd slab tax 30000 will be added manually)

                              var agri_tax = Math.round(((agri_taxable_income/100)*20)+total_short_capital_111A+long_capital_20_final+long_capital_gain_10+crossword);

                              agri_tax = agri_tax + 30000 ;

                              agri_tax = tax - agri_tax ;

                              var agri_total_tax = Math.round(agri_tax); // Tax for 5L< slab + 2 to 5L tax( 30000)

                              var agri_edu_tax = Math.round((agri_total_tax/100)*2);

                              var agri_higher_edu_tax = Math.round((agri_total_tax/100)*1);

                              var agri_total = Math.round(agri_total_tax + agri_edu_tax + agri_higher_edu_tax);

                              document.calculator.tax.value = (agri_total_tax); 
                              document.calculator.edu.value = (agri_edu_tax); 
                              document.calculator.hedu.value = (agri_higher_edu_tax); 
                              document.calculator.total.value = (agri_total); 

                            }
                            else 
                            {

                              var agri_taxable_income = Math.round(agri_tax_input - 1000000);  // Reduct 2L for Non-Taxable + 3L for 2nd slab + 5L for 3rd slab ( 2nd & 3rd slab tax 30000 + 100000 will be added manually)

                              var agri_tax = Math.round(((agri_taxable_income/100)*30)+total_short_capital_111A+long_capital_20_final+long_capital_gain_10+crossword);

                              agri_tax = agri_tax + 130000 ;

                              agri_tax = tax - agri_tax ;

                              var agri_total_tax = Math.round(agri_tax); // Tax for 10L< slab + 2nd and 3rd slab tax

                              var agri_edu_tax = Math.round((agri_total_tax/100)*2);

                              var agri_higher_edu_tax = Math.round((agri_total_tax/100)*1);

                              var agri_total = Math.round(agri_total_tax + agri_edu_tax + agri_higher_edu_tax);

                              document.calculator.tax.value = (agri_total_tax); 
                              document.calculator.edu.value = (agri_edu_tax); 
                              document.calculator.hedu.value = (agri_higher_edu_tax); 
                              document.calculator.total.value = (agri_total); 

                            }  // end of tax slab calculations
                          }

                        }
                        else
                        {
                          document.calculator.tax.value = ('0'); 
                          document.calculator.surcharge.value = ('0');
                          document.calculator.edu.value = ('0'); 
                          document.calculator.hedu.value = ('0'); 
                          document.calculator.total.value = ('0');
                        }

                  } // end of agri_box_value is given 

                   
                }
                if(type=="female")
                {
                  
                  
                  // Calculations for salary

                  var salary_box_value = parseInt(document.calculator.salary.value);
                  document.calculator.salary_box.value = (Math.round(salary_box_value));

                  //Calculations for income from House Property
                  
                  var let_out_rent = parseInt(document.calculator.let_out_rent.value);
                  var let_out_tax = parseInt(document.calculator.let_out_tax.value);
                  var unreal_rent = parseInt(document.calculator.unreal_rent.value);

                  document.calculator.net_rent.value = (Math.round(let_out_rent-(let_out_tax+unreal_rent)));

                  var net_rent = parseInt(document.calculator.net_rent.value);

                  if(net_rent > 0)
                  {
                    document.calculator.house_standard_deduction.value = (Math.round(net_rent*0.3));
                  }
                  else
                  {
                    document.calculator.house_standard_deduction.value = ('0');                    
                  }

                  var house_standard_deduction =  parseInt(document.calculator.house_standard_deduction.value);

                  var let_out_interest_house_loan = parseInt(document.calculator.let_out_interest_house_loan.value);

                  document.calculator.income_let_out.value = (Math.round(net_rent-(house_standard_deduction+let_out_interest_house_loan)));

                  var income_let_out = parseInt(document.calculator.income_let_out.value);

                  var house = parseInt(document.calculator.interest_house_loan.value);
                  var house_under_2l = parseInt(document.calculator.interest_house_loan.value);

                  if(house > 200000)        // if self house rent goes > 1.5L it will be reseted to 1.5L
                  {
                    house = 200000;
                    house = -house;           // Convert positive value to negative value
                    house_under_2l = -house_under_2l;
                    document.calculator.house_box.value = (Math.round(house+income_let_out));
                    document.calculator.self_occupied_house.value = (Math.round(house_under_2l));
                  }
                  else
                  {
                    house = -house;
                    document.calculator.house_box.value = (Math.round(house+income_let_out));
                    document.calculator.self_occupied_house.value = (Math.round(house));
                  }

                  // Calculations for capital gains

                  var short_capital = parseInt(document.calculator.short_capital.value);

                  var short_capital_111A = parseInt(document.calculator.short_capital_111A.value);
                  
                  var long_capital_20 = parseInt(document.calculator.long_capital_20.value);

                  var long_capital_10 = parseInt(document.calculator.long_capital_10.value);

                  document.calculator.capital_box.value = (Math.round(short_capital+short_capital_111A+long_capital_20+long_capital_10));

                  // Calculations for other income

                  var other_interest = parseInt(document.calculator.other_interest.value);

                  var other_commission = parseInt(document.calculator.other_commission.value);

                  var other_lottery = parseInt(document.calculator.other_lottery.value);

                  document.calculator.other_box.value = (Math.round(other_interest+other_commission+other_lottery));

                  // Calculations for profit

                  var profit = parseInt(document.calculator.profit.value);

                  document.calculator.profit_box.value = (Math.round(profit));

                  // Calculations for Agriculture

                  var agri = parseInt(document.calculator.agri.value);

                  document.calculator.agri_box.value = (Math.round(agri));

                  // Tax calculations

                  document.calculator.total_short_capital_111A.value = Math.round((short_capital_111A*0.15));

                  document.calculator.long_capital_20_final.value = Math.round((long_capital_20*0.2));

                  document.calculator.long_capital_gain_10.value = Math.round((long_capital_10*0.1));

                  document.calculator.crossword.value = Math.round((other_lottery*0.3));

                  var total_short_capital_111A = parseInt(document.calculator.total_short_capital_111A.value);

                  var long_capital_20_final = parseInt(document.calculator.long_capital_20_final.value);

                  var long_capital_gain_10 = parseInt(document.calculator.long_capital_gain_10.value);

                  var crossword = parseInt(document.calculator.crossword.value);

                  var house_box_value = parseInt(document.calculator.house_box.value);

                  var capital_box_value = parseInt(document.calculator.capital_box.value);

                  var other_box_value = parseInt(document.calculator.other_box.value);

                  var profit_box_value= parseInt(document.calculator.profit_box.value);

                  var agri_box_value = parseInt(document.calculator.agri_box.value);

                  var income = Math.round(salary_box_value+house_box_value+profit_box_value+short_capital+other_interest+other_commission+agri_box_value);

                  var deduction_box = parseInt(document.calculator.deduction_box.value);

                  var income_temp = income;

                  if(income <= 500000 && income > 0)
                  {
                    income = income - 20000;
                  }


                  document.calculator.income.value = Math.round(income-deduction_box);

                  // Calculations for Detections

                  var life_insurance_premium = parseInt(document.calculator.life_insurance_premium.value);

                  var annuity = parseInt(document.calculator.annuity.value);

                  var pf = parseInt(document.calculator.pf.value);

                  var nsc = parseInt(document.calculator.nsc.value);

                  var ulip = parseInt(document.calculator.ulip.value);

                  var mf = parseInt(document.calculator.mf.value);

                  var repayment_house_loan = parseInt(document.calculator.repayment_house_loan.value);

                  var tuition_fee = parseInt(document.calculator.tuition_fee.value);

                  var fixed_deposit = parseInt(document.calculator.fixed_deposit.value);

                  var npf = parseInt(document.calculator.npf.value);

                  var employee_nps = parseInt(document.calculator.employee_nps.value);

                  if(employee_nps > 100000)     // If employee nps value is more than 1L it will reseted to 1L
                  {
                    employee_nps = 100000;
                  }

                  var employer_nps = parseInt(document.calculator.employer_nps.value);

                  var equity_data = Math.round(salary_box_value+house_box_value+capital_box_value+profit_box_value+other_box_value+agri_box_value);

                  var equity = parseInt(document.calculator.equity.value);

                    if(equity >= 50000)
                    {
                      if(equity_data > 1000000)
                      {
                        equity = 25000;
                      }
                      else
                      {
                        equity = 0;
                      }
                    }
                    else
                    {
                      if(equity_data < 1000000)
                      {
                        equity = Math.round((equity/2));
                      }
                      else
                      {
                        equity = 0;
                      }
                    }


                  var other_deduction = parseInt(document.calculator.other_deduction.value);

                  var total_deduction = (Math.round(life_insurance_premium+annuity+pf+nsc+ulip+mf+repayment_house_loan+tuition_fee+fixed_deposit+npf+employee_nps+other_deduction));

                  document.calculator.total_deduction.value = (total_deduction);

                  if(total_deduction > 150000)
                  {
                    total_deduction = 150000;
                    total_deduction = Math.round(total_deduction + employer_nps + equity);   // add employer nsp & equity to total detection after calculations
                    document.calculator.total_deduction.value = (total_deduction);
                  }
                  else
                  {
                    total_deduction = Math.round(total_deduction + employer_nps + equity);   // add employer nsp & equity to total detection after calculations

                    document.calculator.total_deduction.value = (total_deduction);
                  }

                  var medi_claim = parseInt(document.calculator.medi_claim.value);

                  var medi_claim_parent = parseInt(document.calculator.medi_claim_parent.value);

                  if(medi_claim > 15000)    // Maximum medical calim for male  is 15000
                  {
                    medi_claim = 15000;
                  }

                  if(medi_claim_parent > 20000)      // Maximum medical calim for parent is 20000
                  {
                    medi_claim_parent = 20000;
                  }
                
                  var donation = parseInt(document.calculator.donation.value);

                  var political_donation = parseInt(document.calculator.political_donation.value);

                  var rent_paid = parseInt(document.calculator.rent_paid.value);

                  if(rent_paid > 24000)         // Other than who has claimed HRA(Maximum 240000)
                  {
                    rent_paid = 24000;
                  }

                  if(document.getElementById('80dd').checked)
                  {
                    if(document.getElementById('80dd_severe').checked)
                    {
                      var medical_treatment = 100000;
                      document.calculator.medical_treatment.value = (medical_treatment);
                    }
                    else
                    {
                      medical_treatment = 50000;
                      document.calculator.medical_treatment.value = (medical_treatment);  
                    }

                  }
                  else
                  {
                    medical_treatment = 0;
                    document.calculator.medical_treatment.value = (medical_treatment);
                  }

                  var interest_first_home_loan = parseInt(document.calculator.interest_first_home_loan.value);

                  if(interest_first_home_loan > 100000)
                  {
                    interest_first_home_loan = 100000;
                  }

                  var interest_education_loan = parseInt(document.calculator.interest_education_loan.value);

                  if(document.getElementById('80U').checked)
                  {
                    if(document.getElementById('80U_severe').checked)
                    {
                      var disability = 100000;
                      document.calculator.disability.value = (disability);
                    }
                    else
                    {
                      disability = 50000;   
                      document.calculator.disability.value = (disability);  
                    }

                  }
                  else
                  {
                    disability = 0;
                    document.calculator.disability.value = (disability);
                  }

                  var interest_saving_acc = parseInt(document.calculator.interest_saving_acc.value);

                  if(interest_saving_acc > 10000)     // if interest on savings acc more than 10000 it will reseted with 10000
                  {
                    interest_saving_acc = 10000;
                  }

                  var other_deduction_2 = parseInt(document.calculator.other_deduction_2.value);

                  var detection_down = Math.round(medi_claim+medi_claim_parent+donation+political_donation+rent_paid+medical_treatment+interest_first_home_loan+interest_education_loan+disability+interest_saving_acc+other_deduction_2);

                  document.calculator.deduction_box.value = Math.round(total_deduction+detection_down);

                  var income = parseInt(document.calculator.income.value);

                  document.calculator.total_income.value = Math.round((salary_box_value+house_box_value+capital_box_value+profit_box_value+other_box_value+agri_box_value)-deduction_box);

                  if(agri_box_value == 0)
                  {

                    // Normal slab tax calculations

                    if(isNaN(document.calculator.income.value) || income<= "250000")
                    {
                      document.calculator.tax.value = ('0');
                      document.calculator.surcharge.value = ('0');
                      document.calculator.edu.value = ('0'); 
                      document.calculator.hedu.value = ('0'); 
                      document.calculator.total.value = ('0');
                    }
                    else if(income > "250000" && income <= "500000")
                    {
                      
                      var taxable_income = Math.round(income - 250000);

                      var devided_income = Math.round(taxable_income/100);  

                      var tax = Math.round((devided_income*10)+total_short_capital_111A+long_capital_20_final+long_capital_gain_10+crossword); 

                      var edu_tax = Math.round((tax/100)*2);

                      var higher_edu_tax = Math.round((tax/100)*1); 

                      var total = Math.round(tax + edu_tax + higher_edu_tax);

                      document.calculator.tax.value = (tax);
                      document.calculator.surcharge.value = ('0');
                      document.calculator.edu.value = (edu_tax); 
                      document.calculator.hedu.value = (higher_edu_tax); 
                      document.calculator.total.value = (total); 

                    }
                    else if (income > "500000" && income < "1000000") 
                    {
                      //echo "You are come under 5 to 10 Laks Slab<br>";

                      var taxable_income = Math.round(income - 500000);  // Reduct 2L for Non-Taxable + 3L for 2nd slab( 2nd slab tax 30000 will be added manually)

                      var tax = Math.round(((taxable_income/100)*20)+total_short_capital_111A+long_capital_20_final+long_capital_gain_10+crossword);

                      var total_tax = Math.round(tax + 25000); // Tax for 5L< slab + 2.5L to 5L tax( 25000)

                      var edu_tax = Math.round((total_tax/100)*2);

                      var higher_edu_tax = Math.round((total_tax/100)*1);

                      var total = Math.round(total_tax + edu_tax + higher_edu_tax);

                      document.calculator.tax.value = (total_tax); 
                      document.calculator.surcharge.value = ('0');
                      document.calculator.edu.value = (edu_tax); 
                      document.calculator.hedu.value = (higher_edu_tax); 
                      document.calculator.total.value = (total); 

                    }
                    else 
                    {

                      if(income > 10000000)
                      {
                        var taxable_income = Math.round(income - 1000000);  // Reduct 2L for Non-Taxable + 3L for 2nd slab + 5L for 3rd slab ( 2nd & 3rd slab tax 30000 + 100000 will be added manually)

                        var tax = Math.round(((taxable_income/100)*30)+total_short_capital_111A+long_capital_20_final+long_capital_gain_10+crossword);

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
                      else    // Calculations for value between 10L to 1 crore
                      {

                        var taxable_income = Math.round(income - 1000000);  // Reduct 2L for Non-Taxable + 3L for 2nd slab + 5L for 3rd slab ( 2nd & 3rd slab tax 30000 + 100000 will be added manually)

                        var tax = Math.round(((taxable_income/100)*30)+total_short_capital_111A+long_capital_20_final+long_capital_gain_10+crossword);

                        var total_tax = Math.round(tax + 125000); // Tax for 10L< slab + 2nd and 3rd slab tax

                        var edu_tax = Math.round((total_tax/100)*2);

                        var higher_edu_tax = Math.round((total_tax/100)*1);

                        var total = Math.round(total_tax + edu_tax + higher_edu_tax);

                        document.calculator.tax.value = (total_tax); 
                        document.calculator.surcharge.value = ('0');
                        document.calculator.edu.value = (edu_tax); 
                        document.calculator.hedu.value = (higher_edu_tax); 
                        document.calculator.total.value = (total); 
                      }

                    }  // end of tax slab calculations

                  }   // end of agri_box_value = 0
                  
                else   // calculations for agricultural tax
                  {
                      var income_validate_agri = income - agri_box_value;       // For reseting agriculture value to 0 if income lessthan slab value

                      if(income_validate_agri > 250000)
                      {
                          
                        if(income_validate_agri > 10000000)
                          {

                              // Normal slab tax calculations

                              if(isNaN(document.calculator.income.value) || income<= "250000")
                              {
                                document.calculator.tax.value = ('0'); 
                                document.calculator.surcharge.value = ('0');
                                document.calculator.edu.value = ('0'); 
                                document.calculator.hedu.value = ('0'); 
                                document.calculator.total.value = ('0');
                              }
                              else if(income > "250000" && income <= "500000")
                              {
                                
                                var taxable_income = Math.round(income - 250000);

                                var devided_income = Math.round(taxable_income/100);  

                                var tax = Math.round((devided_income*10)+total_short_capital_111A+long_capital_20_final+long_capital_gain_10+crossword); 

                              }
                              else if (income > "500000" && income < "1000000") 
                              {
                                //echo "You are come under 5 to 10 Laks Slab<br>";

                                var taxable_income = Math.round(income - 500000);  // Reduct 2L for Non-Taxable + 3L for 2nd slab( 2nd slab tax 30000 will be added manually)

                                var tax = Math.round(((taxable_income/100)*20)+total_short_capital_111A+long_capital_20_final+long_capital_gain_10+crossword);

                                var tax = Math.round(tax + 25000); // Tax for 5L< slab + 2.5 to 5L tax( 25000)

                              }
                              else 
                              {
                                //echo "You are come under 10+ Laks Slab";

                                var taxable_income = Math.round(income - 1000000);  // Reduct 2L for Non-Taxable + 3L for 2nd slab + 5L for 3rd slab ( 2nd & 3rd slab tax 30000 + 100000 will be added manually)

                                var tax = Math.round(((taxable_income/100)*30)+total_short_capital_111A+long_capital_20_final+long_capital_gain_10+crossword);

                                var tax = Math.round(tax + 125000); // Tax for 10L< slab + 2nd and 3rd slab tax

                              }  // end of tax slab calculations

                              /* Reduce minimum exceptional amount as per Tax Act. For example if user enter agriculture income as 300000 for the 

                                 assessment year 2014-2015. For this assessment year exemption will starting from 2L, so reduce the 2L from Agriculture 

                                 income and calculate normal tax calculation for agri income. The final output will be in the difference between 

                                 Normal tax calcution amount with agriculture and calcutaion for agricultural tax.

                               */

                              var agri_tax_input = agri_box_value + 250000;   // Exemption on 2.5L as per slab 

                              if(agri_tax_input <= "250000")
                              {
                                document.calculator.tax.value = ('0'); 
                                document.calculator.surcharge.value = ('0');
                                document.calculator.edu.value = ('0'); 
                                document.calculator.hedu.value = ('0'); 
                                document.calculator.total.value = ('0');
                              }
                              else if(agri_tax_input > "250000" && agri_tax_input <= "500000")
                              {
                                
                                var agri_taxable_income = Math.round(agri_tax_input - 250000);

                                var agri_devided_income = Math.round(agri_taxable_income/100);  

                                var agri_tax = Math.round(agri_devided_income*10); 

                                agri_tax = tax - agri_tax ;

                                var surcharge_amount_one = agri_tax * 0.1;

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

                                agri_tax = agri_tax + surcharge_small;

                                var agri_edu_tax = Math.round((agri_tax/100)*2);

                                var agri_higher_edu_tax = Math.round((agri_tax/100)*1); 

                                var agri_total = Math.round(agri_tax + agri_edu_tax + agri_higher_edu_tax);

                                document.calculator.tax.value = (agri_tax-surcharge_small); 
                                document.calculator.surcharge.value = (surcharge_small);
                                document.calculator.edu.value = (agri_edu_tax); 
                                document.calculator.hedu.value = (agri_higher_edu_tax); 
                                document.calculator.total.value = (agri_total); 

                              }
                              else if (agri_tax_input > "500000" && agri_tax_input < "1000000") 
                              {

                                var agri_taxable_income = Math.round(agri_tax_input - 500000);  // Reduct 2L for Non-Taxable + 3L for 2nd slab( 2nd slab tax 30000 will be added manually)

                                var agri_tax = Math.round((agri_taxable_income/100)*20);

                                agri_tax = agri_tax + 25000;

                                agri_tax = tax - agri_tax ;

                                var agri_total_tax = Math.round(agri_tax); // Tax for 5L< slab + 2.5 to 5L tax( 30000)

                                var surcharge_amount_one = agri_total_tax * 0.1;

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

                                agri_total_tax = agri_total_tax + surcharge_small;

                                var agri_edu_tax = Math.round((agri_total_tax/100)*2);

                                var agri_higher_edu_tax = Math.round((agri_total_tax/100)*1);

                                var agri_total = Math.round(agri_total_tax + agri_edu_tax + agri_higher_edu_tax);

                                document.calculator.tax.value = (agri_total_tax); 
                                document.calculator.surcharge.value = (surcharge_small);
                                document.calculator.edu.value = (agri_edu_tax); 
                                document.calculator.hedu.value = (agri_higher_edu_tax); 
                                document.calculator.total.value = (agri_total); 

                              }
                              else 
                              {

                                var agri_taxable_income = Math.round(agri_tax_input - 1000000);  // Reduct 2L for Non-Taxable + 3L for 2nd slab + 5L for 3rd slab ( 2nd & 3rd slab tax 30000 + 100000 will be added manually)

                                var agri_tax = Math.round((agri_taxable_income/100)*30);

                                agri_tax = agri_tax + 125000 ;

                                agri_tax = tax - agri_tax ;

                                var agri_total_tax = Math.round(agri_tax); // Tax for 10L< slab + 2nd and 3rd slab tax

                                var surcharge_amount_one = agri_total_tax * 0.1;

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

                                agri_total_tax = agri_total_tax + surcharge_small;

                                var agri_edu_tax = Math.round((agri_total_tax/100)*2);

                                var agri_higher_edu_tax = Math.round((agri_total_tax/100)*1);

                                var agri_total = Math.round(agri_total_tax + agri_edu_tax + agri_higher_edu_tax);

                                document.calculator.tax.value = (agri_total_tax-surcharge_small); 
                                document.calculator.surcharge.value = (surcharge_small);
                                document.calculator.edu.value = (agri_edu_tax); 
                                document.calculator.hedu.value = (agri_higher_edu_tax); 
                                document.calculator.total.value = (agri_total); 

                              }  // end of tax slab calculations
                        }   // End of Income more than one crore
                        else
                        {
                            if(isNaN(document.calculator.income.value) || income<= "250000")
                            {
                              document.calculator.tax.value = ('0'); 
                              document.calculator.surcharge.value = ('0');
                              document.calculator.edu.value = ('0'); 
                              document.calculator.hedu.value = ('0'); 
                              document.calculator.total.value = ('0');
                            }
                            else if(income > "250000" && income <= "500000")
                            {
                              
                              var taxable_income = Math.round(income - 250000);

                              var devided_income = Math.round(taxable_income/100);  

                              var tax = Math.round((devided_income*10)+total_short_capital_111A+long_capital_20_final+long_capital_gain_10+crossword); 

                            }
                            else if (income > "500000" && income < "1000000") 
                            {

                              var taxable_income = Math.round(income - 500000);  // Reduct 2.5L for Non-Taxable + 2.5L for 2nd slab( 2nd slab tax 30000 will be added manually)

                              var tax = Math.round(((taxable_income/100)*20)+total_short_capital_111A+long_capital_20_final+long_capital_gain_10+crossword);

                              var tax = Math.round(tax + 25000); // Tax for 5L< slab + 2.5 to 5L tax( 25000)

                            }
                            else 
                            {
                              //echo "You are come under 10+ Laks Slab";

                              var taxable_income = Math.round(income - 1000000);  // Reduct 2.5L for Non-Taxable + 2.5L for 2nd slab + 5L for 3rd slab ( 2nd & 3rd slab tax 30000 + 100000 will be added manually)

                              var tax = Math.round(((taxable_income/100)*30)+total_short_capital_111A+long_capital_20_final+long_capital_gain_10+crossword);

                              var tax = Math.round(tax + 125000); // Tax for 10L< slab + 2nd and 3rd slab tax

                            }  // end of tax slab calculations

                            /* Reduce minimum exceptional amount as per Tax Act. For example if user enter agriculture income as 300000 for the 

                               assessment year 2014-2015. For this assessment year exemption will starting from 2L, so reduce the 2L from Agriculture 

                               income and calculate normal tax calculation for agri income. The final output will be in the difference between 

                               Normal tax calcution amount with agriculture and calcutaion for agricultural tax.

                             */

                            var agri_tax_input = agri_box_value + 250000;   // Exemption on 2.5L as per slab 

                            if(agri_tax_input <= "250000")
                            {
                              document.calculator.tax.value = ('0'); 
                              document.calculator.surcharge.value = ('0');
                              document.calculator.edu.value = ('0'); 
                              document.calculator.hedu.value = ('0'); 
                              document.calculator.total.value = ('0');
                            }
                            else if(agri_tax_input > "250000" && agri_tax_input <= "500000")
                            {
                              
                              var agri_taxable_income = Math.round(agri_tax_input - 250000);

                              var agri_devided_income = Math.round(agri_taxable_income/100);  

                              var agri_tax = Math.round(agri_devided_income*10); 

                              agri_tax = tax - agri_tax ;

                              var agri_edu_tax = Math.round((agri_tax/100)*2);

                              var agri_higher_edu_tax = Math.round((agri_tax/100)*1); 

                              var agri_total = Math.round(agri_tax + agri_edu_tax + agri_higher_edu_tax);

                              document.calculator.tax.value = (agri_tax); 
                              document.calculator.surcharge.value = ('0');
                              document.calculator.edu.value = (agri_edu_tax); 
                              document.calculator.hedu.value = (agri_higher_edu_tax); 
                              document.calculator.total.value = (agri_total); 

                            }
                            else if (agri_tax_input > "500000" && agri_tax_input < "1000000") 
                            {

                              var agri_taxable_income = Math.round(agri_tax_input - 500000);  // Reduct 2L for Non-Taxable + 3L for 2nd slab( 2nd slab tax 30000 will be added manually)

                              var agri_tax = Math.round((agri_taxable_income/100)*20);

                              agri_tax = agri_tax + 25000 ;

                              agri_tax = tax - agri_tax ;

                              var agri_total_tax = Math.round(agri_tax); // Tax for 5L< slab + 2 to 5L tax( 30000)

                              var agri_edu_tax = Math.round((agri_total_tax/100)*2);

                              var agri_higher_edu_tax = Math.round((agri_total_tax/100)*1);

                              var agri_total = Math.round(agri_total_tax + agri_edu_tax + agri_higher_edu_tax);

                              document.calculator.tax.value = (agri_total_tax); 
                              document.calculator.surcharge.value = ('0');
                              document.calculator.edu.value = (agri_edu_tax); 
                              document.calculator.hedu.value = (agri_higher_edu_tax); 
                              document.calculator.total.value = (agri_total); 

                            }
                            else 
                            {

                              var agri_taxable_income = Math.round(agri_tax_input - 1000000);  // Reduct 2.5L for Non-Taxable + 3L for 2nd slab + 5L for 3rd slab ( 2nd & 3rd slab tax 30000 + 100000 will be added manually)

                              var agri_tax = Math.round((agri_taxable_income/100)*30);

                              agri_tax = agri_tax + 125000 ;

                              agri_tax = tax - agri_tax ;

                              var agri_total_tax = Math.round(agri_tax); // Tax for 10L< slab + 2nd and 3rd slab tax

                              var agri_edu_tax = Math.round((agri_total_tax/100)*2);

                              var agri_higher_edu_tax = Math.round((agri_total_tax/100)*1);

                              var agri_total = Math.round(agri_total_tax + agri_edu_tax + agri_higher_edu_tax);

                              document.calculator.tax.value = (agri_total_tax);
                              document.calculator.surcharge.value = ('0');
                              document.calculator.edu.value = (agri_edu_tax); 
                              document.calculator.hedu.value = (agri_higher_edu_tax); 
                              document.calculator.total.value = (agri_total); 

                            }  // end of tax slab calculations

                        }
                    }
                    else
                    {
                      document.calculator.tax.value = ('0'); 
                      document.calculator.surcharge.value = ('0');
                      document.calculator.edu.value = ('0'); 
                      document.calculator.hedu.value = ('0'); 
                      document.calculator.total.value = ('0');
                    }
                  

                  } // end of agri_box_value is given 
                }      
                if(type=="citizen")
                {
                  
                  
                  // Calculations for salary

                  var salary_box_value = parseInt(document.calculator.salary.value);
                  document.calculator.salary_box.value = (Math.round(salary_box_value));

                  //Calculations for income from House Property
                  
                  var let_out_rent = parseInt(document.calculator.let_out_rent.value);
                  var let_out_tax = parseInt(document.calculator.let_out_tax.value);
                  var unreal_rent = parseInt(document.calculator.unreal_rent.value);

                  document.calculator.net_rent.value = (Math.round(let_out_rent-(let_out_tax+unreal_rent)));

                  var net_rent = parseInt(document.calculator.net_rent.value);

                  if(net_rent > 0)
                  {
                    document.calculator.house_standard_deduction.value = (Math.round(net_rent*0.3));
                  }
                  else
                  {
                    document.calculator.house_standard_deduction.value = ('0');                    
                  }

                  var house_standard_deduction =  parseInt(document.calculator.house_standard_deduction.value);

                  var let_out_interest_house_loan = parseInt(document.calculator.let_out_interest_house_loan.value);

                  document.calculator.income_let_out.value = (Math.round(net_rent-(house_standard_deduction+let_out_interest_house_loan)));

                  var income_let_out = parseInt(document.calculator.income_let_out.value);

                  var house = parseInt(document.calculator.interest_house_loan.value);
                  var house_under_2l = parseInt(document.calculator.interest_house_loan.value);

                  if(house > 200000)        // if self house rent goes > 2L it will be reseted to 1.5L
                  {
                    house = 200000;
                    house = -house;           // Convert positive value to negative value
                    house_under_2l = -house_under_2l;
                    document.calculator.house_box.value = (Math.round(house+income_let_out));
                    document.calculator.self_occupied_house.value = (Math.round(house_under_2l));
                  }
                  else
                  {
                    house = -house;
                    document.calculator.house_box.value = (Math.round(house+income_let_out));
                    document.calculator.self_occupied_house.value = (Math.round(house));
                  }

                  // Calculations for capital gains

                  var short_capital = parseInt(document.calculator.short_capital.value);

                  var short_capital_111A = parseInt(document.calculator.short_capital_111A.value);
                  
                  var long_capital_20 = parseInt(document.calculator.long_capital_20.value);

                  var long_capital_10 = parseInt(document.calculator.long_capital_10.value);

                  document.calculator.capital_box.value = (Math.round(short_capital+short_capital_111A+long_capital_20+long_capital_10));

                  // Calculations for other income

                  var other_interest = parseInt(document.calculator.other_interest.value);

                  var other_commission = parseInt(document.calculator.other_commission.value);

                  var other_lottery = parseInt(document.calculator.other_lottery.value);

                  document.calculator.other_box.value = (Math.round(other_interest+other_commission+other_lottery));

                  // Calculations for profit

                  var profit = parseInt(document.calculator.profit.value);

                  document.calculator.profit_box.value = (Math.round(profit));

                  // Calculations for Agriculture

                  var agri = parseInt(document.calculator.agri.value);

                  document.calculator.agri_box.value = (Math.round(agri));

                  // Tax calculations

                  document.calculator.total_short_capital_111A.value = Math.round((short_capital_111A*0.15));

                  document.calculator.long_capital_20_final.value = Math.round((long_capital_20*0.2));

                  document.calculator.long_capital_gain_10.value = Math.round((long_capital_10*0.1));

                  document.calculator.crossword.value = Math.round((other_lottery*0.3));

                  var total_short_capital_111A = parseInt(document.calculator.total_short_capital_111A.value);

                  var long_capital_20_final = parseInt(document.calculator.long_capital_20_final.value);

                  var long_capital_gain_10 = parseInt(document.calculator.long_capital_gain_10.value);

                  var crossword = parseInt(document.calculator.crossword.value);

                  var house_box_value = parseInt(document.calculator.house_box.value);

                  var capital_box_value = parseInt(document.calculator.capital_box.value);

                  var other_box_value = parseInt(document.calculator.other_box.value);

                  var profit_box_value= parseInt(document.calculator.profit_box.value);

                  var agri_box_value = parseInt(document.calculator.agri_box.value);

                  var income = Math.round(salary_box_value+house_box_value+profit_box_value+short_capital+other_interest+other_commission+agri_box_value);

                  var deduction_box = parseInt(document.calculator.deduction_box.value);

                  var income_temp = income;

                  if(income <= 500000 && income > 0)
                  {
                    income = income - 20000;
                  }


                  document.calculator.income.value = Math.round(income-deduction_box);

                  // Calculations for Detections

                  var life_insurance_premium = parseInt(document.calculator.life_insurance_premium.value);

                  var annuity = parseInt(document.calculator.annuity.value);

                  var pf = parseInt(document.calculator.pf.value);

                  var nsc = parseInt(document.calculator.nsc.value);

                  var ulip = parseInt(document.calculator.ulip.value);

                  var mf = parseInt(document.calculator.mf.value);

                  var repayment_house_loan = parseInt(document.calculator.repayment_house_loan.value);

                  var tuition_fee = parseInt(document.calculator.tuition_fee.value);

                  var fixed_deposit = parseInt(document.calculator.fixed_deposit.value);

                  var npf = parseInt(document.calculator.npf.value);

                  var employee_nps = parseInt(document.calculator.employee_nps.value);

                  if(employee_nps > 100000)     // If employee nps value is more than 1L it will reseted to 1L
                  {
                    employee_nps = 100000;
                  }

                  var employer_nps = parseInt(document.calculator.employer_nps.value);

                  var equity_data = Math.round(salary_box_value+house_box_value+capital_box_value+profit_box_value+other_box_value+agri_box_value);

                  var equity = parseInt(document.calculator.equity.value);

                    if(equity >= 50000)
                    {
                      if(equity_data > 1000000)
                      {
                        equity = 25000;
                      }
                      else
                      {
                        equity = 0;
                      }
                    }
                    else
                    {
                      if(equity_data < 1000000)
                      {
                        equity = Math.round((equity/2));
                      }
                      else
                      {
                        equity = 0;
                      }
                    }


                  var other_deduction = parseInt(document.calculator.other_deduction.value);

                  var total_deduction = (Math.round(life_insurance_premium+annuity+pf+nsc+ulip+mf+repayment_house_loan+tuition_fee+fixed_deposit+npf+employee_nps+other_deduction));

                  document.calculator.total_deduction.value = (total_deduction);

                  if(total_deduction > 150000)
                  {
                    total_deduction = 150000;
                    total_deduction = Math.round(total_deduction + employer_nps + equity);   // add employer nsp & equity to total detection after calculations
                    document.calculator.total_deduction.value = (total_deduction);
                  }
                  else
                  {
                    total_deduction = Math.round(total_deduction + employer_nps + equity);   // add employer nsp & equity to total detection after calculations

                    document.calculator.total_deduction.value = (total_deduction);
                  }

                  var medi_claim = parseInt(document.calculator.medi_claim.value);

                  var medi_claim_parent = parseInt(document.calculator.medi_claim_parent.value);

                  if(medi_claim > 15000)    // Maximum medical calim for male  is 15000
                  {
                    medi_claim = 15000;
                  }

                  if(medi_claim_parent > 20000)      // Maximum medical calim for parent is 20000
                  {
                    medi_claim_parent = 20000;
                  }
                
                  var donation = parseInt(document.calculator.donation.value);

                  var political_donation = parseInt(document.calculator.political_donation.value);

                  var rent_paid = parseInt(document.calculator.rent_paid.value);

                  if(rent_paid > 24000)         // Other than who has claimed HRA(Maximum 240000)
                  {
                    rent_paid = 24000;
                  }

                  if(document.getElementById('80dd').checked)
                  {
                    if(document.getElementById('80dd_severe').checked)
                    {
                      var medical_treatment = 100000;
                      document.calculator.medical_treatment.value = (medical_treatment);
                    }
                    else
                    {
                      medical_treatment = 50000;
                      document.calculator.medical_treatment.value = (medical_treatment);  
                    }

                  }
                  else
                  {
                    medical_treatment = 0;
                    document.calculator.medical_treatment.value = (medical_treatment);
                  }

                  var interest_first_home_loan = parseInt(document.calculator.interest_first_home_loan.value);

                  if(interest_first_home_loan > 100000)
                  {
                    interest_first_home_loan = 100000;
                  }

                  var interest_education_loan = parseInt(document.calculator.interest_education_loan.value);

                  if(document.getElementById('80U').checked)
                  {
                    if(document.getElementById('80U_severe').checked)
                    {
                      var disability = 100000;
                      document.calculator.disability.value = (disability);
                    }
                    else
                    {
                      disability = 50000;   
                      document.calculator.disability.value = (disability);  
                    }

                  }
                  else
                  {
                    disability = 0;
                    document.calculator.disability.value = (disability);
                  }

                  var interest_saving_acc = parseInt(document.calculator.interest_saving_acc.value);

                  if(interest_saving_acc > 10000)     // if interest on savings acc more than 10000 it will reseted with 10000
                  {
                    interest_saving_acc = 10000;
                  }

                  var other_deduction_2 = parseInt(document.calculator.other_deduction_2.value);

                  var detection_down = Math.round(medi_claim+medi_claim_parent+donation+political_donation+rent_paid+medical_treatment+interest_first_home_loan+interest_education_loan+disability+interest_saving_acc+other_deduction_2);

                  document.calculator.deduction_box.value = Math.round(total_deduction+detection_down);

                  var income = parseInt(document.calculator.income.value);

                  document.calculator.total_income.value = Math.round((salary_box_value+house_box_value+capital_box_value+profit_box_value+other_box_value+agri_box_value)-deduction_box);

                  if(agri_box_value == 0)
                  {

                    // Normal slab tax calculations

                    if(isNaN(document.calculator.income.value) || income<= "300000")
                    {
                      document.calculator.tax.value = ('0');
                      document.calculator.surcharge.value = ('0');
                      document.calculator.edu.value = ('0'); 
                      document.calculator.hedu.value = ('0'); 
                      document.calculator.total.value = ('0');
                    }
                    else if(income > "300000" && income <= "500000")
                    {
                      
                      var taxable_income = Math.round(income - 300000);

                      var devided_income = Math.round(taxable_income/100);  

                      var tax = Math.round((devided_income*10)+total_short_capital_111A+long_capital_20_final+long_capital_gain_10+crossword); 

                      var edu_tax = Math.round((tax/100)*2);

                      var higher_edu_tax = Math.round((tax/100)*1); 

                      var total = Math.round(tax + edu_tax + higher_edu_tax);

                      document.calculator.tax.value = (tax);
                      document.calculator.surcharge.value = ('0');
                      document.calculator.edu.value = (edu_tax); 
                      document.calculator.hedu.value = (higher_edu_tax); 
                      document.calculator.total.value = (total); 

                    }
                    else if (income > "500000" && income < "1000000") 
                    {
                      //echo "You are come under 5 to 10 Laks Slab<br>";

                      var taxable_income = Math.round(income - 500000);  // Reduct 2L for Non-Taxable + 3L for 2nd slab( 2nd slab tax 30000 will be added manually)

                      var tax = Math.round(((taxable_income/100)*20)+total_short_capital_111A+long_capital_20_final+long_capital_gain_10+crossword);

                      var total_tax = Math.round(tax + 20000); // Tax for 5L< slab + 3L to 5L tax( 20000)

                      var edu_tax = Math.round((total_tax/100)*2);

                      var higher_edu_tax = Math.round((total_tax/100)*1);

                      var total = Math.round(total_tax + edu_tax + higher_edu_tax);

                      document.calculator.tax.value = (total_tax); 
                      document.calculator.surcharge.value = ('0');
                      document.calculator.edu.value = (edu_tax); 
                      document.calculator.hedu.value = (higher_edu_tax); 
                      document.calculator.total.value = (total); 

                    }
                    else 
                    {

                      if(income > 10000000)
                      {
                        var taxable_income = Math.round(income - 1000000);  // Reduct 3L for Non-Taxable + 3L for 2nd slab + 5L for 3rd slab ( 2nd & 3rd slab tax 30000 + 100000 will be added manually)

                        var tax = Math.round(((taxable_income/100)*30)+total_short_capital_111A+long_capital_20_final+long_capital_gain_10+crossword);

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
                      else    // Calculations for value between 10L to 1 crore
                      {

                        var taxable_income = Math.round(income - 1000000);  // Reduct 3L for Non-Taxable + 2L for 2nd slab + 5L for 3rd slab ( 2nd & 3rd slab tax 30000 + 100000 will be added manually)

                        var tax = Math.round(((taxable_income/100)*30)+total_short_capital_111A+long_capital_20_final+long_capital_gain_10+crossword);

                        var total_tax = Math.round(tax + 120000); // Tax for 10L< slab + 2nd and 3rd slab tax

                        var edu_tax = Math.round((total_tax/100)*2);

                        var higher_edu_tax = Math.round((total_tax/100)*1);

                        var total = Math.round(total_tax + edu_tax + higher_edu_tax);

                        document.calculator.tax.value = (total_tax); 
                        document.calculator.surcharge.value = ('0');
                        document.calculator.edu.value = (edu_tax); 
                        document.calculator.hedu.value = (higher_edu_tax); 
                        document.calculator.total.value = (total); 
                      }

                    }  // end of tax slab calculations

                  }   // end of agri_box_value = 0
                  
                else   // calculations for agricultural tax
                  {
                      var income_validate_agri = income - agri_box_value;       // For reseting agriculture value to 0 if income lessthan slab value

                      if(income_validate_agri > 300000)
                      {
                         // Normal slab tax calculations

                         if(isNaN(document.calculator.income.value) || income<= "300000")
                        {
                          document.calculator.tax.value = ('0'); 
                          document.calculator.surcharge.value = ('0');
                          document.calculator.edu.value = ('0'); 
                          document.calculator.hedu.value = ('0'); 
                          document.calculator.total.value = ('0');
                        }
                        else if(income > "300000" && income <= "500000")
                        {
                          
                          var taxable_income = Math.round(income - 300000);

                          var devided_income = Math.round(taxable_income/100);  

                          var tax = Math.round((devided_income*10)+total_short_capital_111A+long_capital_20_final+long_capital_gain_10+crossword); 

                        }
                        else if (income > "500000" && income < "1000000") 
                        {
                          //echo "You are come under 5 to 10 Laks Slab<br>";

                          var taxable_income = Math.round(income - 500000);  // Reduct 3L for Non-Taxable + 2L for 2nd slab( 2nd slab tax 20000 will be added manually)

                          var tax = Math.round(((taxable_income/100)*20)+total_short_capital_111A+long_capital_20_final+long_capital_gain_10+crossword);

                          var tax = Math.round(tax + 20000); // Tax for 5L< slab + 3 to 5L tax( 20000)

                        }
                        else 
                        {
                          //echo "You are come under 10+ Laks Slab";

                          var taxable_income = Math.round(income - 1000000);  // Reduct 3L for Non-Taxable + 2L for 2nd slab + 5L for 3rd slab ( 2nd & 3rd slab tax 20000 + 100000 will be added manually)

                          var tax = Math.round(((taxable_income/100)*30)+total_short_capital_111A+long_capital_20_final+long_capital_gain_10+crossword);

                          var tax = Math.round(tax + 120000); // Tax for 10L< slab + 2nd and 3rd slab tax

                        }  // end of tax slab calculations

                        /* Reduce minimum exceptional amount as per Tax Act. For example if user enter agriculture income as 300000 for the 

                           assessment year 2014-2015. For this assessment year exemption will starting from 2L, so reduce the 2L from Agriculture 

                           income and calculate normal tax calculation for agri income. The final output will be in the difference between 

                           Normal tax calcution amount with agriculture and calcutaion for agricultural tax.

                         */

                        var agri_tax_input = agri_box_value + 300000;   // Exemption on 3L as per slab 

                        if(agri_tax_input <= "300000")
                        {
                          document.calculator.tax.value = ('0'); 
                          document.calculator.surcharge.value = ('0');
                          document.calculator.edu.value = ('0'); 
                          document.calculator.hedu.value = ('0'); 
                          document.calculator.total.value = ('0');
                        }
                        else if(agri_tax_input > "300000" && agri_tax_input <= "500000")
                        {
                          
                          var agri_taxable_income = Math.round(agri_tax_input - 300000);

                          var agri_devided_income = Math.round(agri_taxable_income/100);  

                          var agri_tax = Math.round((agri_devided_income*10)+total_short_capital_111A+long_capital_20_final+long_capital_gain_10+crossword); 

                          agri_tax = tax - agri_tax ;

                          var agri_edu_tax = Math.round((agri_tax/100)*2);

                          var agri_higher_edu_tax = Math.round((agri_tax/100)*1); 

                          var agri_total = Math.round(agri_tax + agri_edu_tax + agri_higher_edu_tax);

                          document.calculator.tax.value = (agri_tax); 
                          document.calculator.surcharge.value = ('0');
                          document.calculator.edu.value = (agri_edu_tax); 
                          document.calculator.hedu.value = (agri_higher_edu_tax); 
                          document.calculator.total.value = (agri_total); 

                        }
                        else if (agri_tax_input > "500000" && agri_tax_input < "1000000") 
                        {

                          var agri_taxable_income = Math.round(agri_tax_input - 500000);  // Reduct 3L for Non-Taxable + 2L for 2nd slab( 2nd slab tax 20000 will be added manually)

                          var agri_tax = Math.round(((agri_taxable_income/100)*20)+total_short_capital_111A+long_capital_20_final+long_capital_gain_10+crossword);

                          agri_tax = agri_tax + 20000;

                          agri_tax = tax - agri_tax ;

                          var agri_total_tax = Math.round(agri_tax); // Tax for 5L< slab + 3 to 5L tax( 20000)

                          var agri_edu_tax = Math.round((agri_total_tax/100)*2);

                          var agri_higher_edu_tax = Math.round((agri_total_tax/100)*1);

                          var agri_total = Math.round(agri_total_tax + agri_edu_tax + agri_higher_edu_tax);

                          document.calculator.tax.value = (agri_total_tax); 
                          document.calculator.surcharge.value = ('0');
                          document.calculator.edu.value = (agri_edu_tax); 
                          document.calculator.hedu.value = (agri_higher_edu_tax); 
                          document.calculator.total.value = (agri_total); 

                        }
                        else 
                        {

                          var agri_taxable_income = Math.round(agri_tax_input - 1000000);  // Reduct 3L for Non-Taxable + 2L for 2nd slab + 5L for 3rd slab ( 2nd & 3rd slab tax 20000 + 100000 will be added manually)

                          var agri_tax = Math.round(((agri_taxable_income/100)*30)+total_short_capital_111A+long_capital_20_final+long_capital_gain_10+crossword);

                          agri_tax = agri_tax + 120000 ;

                          agri_tax = tax - agri_tax ;

                          var agri_total_tax = Math.round(agri_tax); // Tax for 10L< slab + 2nd and 3rd slab tax

                          var agri_edu_tax = Math.round((agri_total_tax/100)*2);

                          var agri_higher_edu_tax = Math.round((agri_total_tax/100)*1);

                          var agri_total = Math.round(agri_total_tax + agri_edu_tax + agri_higher_edu_tax);

                          document.calculator.tax.value = (agri_total_tax); 
                          document.calculator.surcharge.value = ('0');
                          document.calculator.edu.value = (agri_edu_tax); 
                          document.calculator.hedu.value = (agri_higher_edu_tax); 
                          document.calculator.total.value = (agri_total); 

                        }  // end of tax slab calculations

                    }
                    else
                    {
                      document.calculator.tax.value = ('0'); 
                      document.calculator.surcharge.value = ('0');
                      document.calculator.edu.value = ('0'); 
                      document.calculator.hedu.value = ('0'); 
                      document.calculator.total.value = ('0');
                    }
                  

                  } // end of agri_box_value is given 

                }
                if(type=="s_citizen")
                {
                  
                  // Calculations for salary

                  var salary_box_value = parseInt(document.calculator.salary.value);
                  document.calculator.salary_box.value = (Math.round(salary_box_value));

                  //Calculations for income from House Property
                  
                  var let_out_rent = parseInt(document.calculator.let_out_rent.value);
                  var let_out_tax = parseInt(document.calculator.let_out_tax.value);
                  var unreal_rent = parseInt(document.calculator.unreal_rent.value);

                  document.calculator.net_rent.value = (Math.round(let_out_rent-(let_out_tax+unreal_rent)));

                  var net_rent = parseInt(document.calculator.net_rent.value);

                  if(net_rent > 0)
                  {
                    document.calculator.house_standard_deduction.value = (Math.round(net_rent*0.3));
                  }
                  else
                  {
                    document.calculator.house_standard_deduction.value = ('0');                    
                  }

                  var house_standard_deduction =  parseInt(document.calculator.house_standard_deduction.value);

                  var let_out_interest_house_loan = parseInt(document.calculator.let_out_interest_house_loan.value);

                  document.calculator.income_let_out.value = (Math.round(net_rent-(house_standard_deduction+let_out_interest_house_loan)));

                  var income_let_out = parseInt(document.calculator.income_let_out.value);

                  var house = parseInt(document.calculator.interest_house_loan.value);
                  var house_under_2l = parseInt(document.calculator.interest_house_loan.value);

                  if(house > 200000)        // if self house rent goes > 2L it will be reseted to 1.5L
                  {
                    house = 200000;
                    house = -house;           // Convert positive value to negative value
                    house_under_2l = -house_under_2l;
                    document.calculator.house_box.value = (Math.round(house+income_let_out));
                    document.calculator.self_occupied_house.value = (Math.round(house_under_2l));
                  }
                  else
                  {
                    house = -house;
                    document.calculator.house_box.value = (Math.round(house+income_let_out));
                    document.calculator.self_occupied_house.value = (Math.round(house));
                  }

                  // Calculations for capital gains

                  var short_capital = parseInt(document.calculator.short_capital.value);

                  var short_capital_111A = parseInt(document.calculator.short_capital_111A.value);
                  
                  var long_capital_20 = parseInt(document.calculator.long_capital_20.value);

                  var long_capital_10 = parseInt(document.calculator.long_capital_10.value);

                  document.calculator.capital_box.value = (Math.round(short_capital+short_capital_111A+long_capital_20+long_capital_10));

                  // Calculations for other income

                  var other_interest = parseInt(document.calculator.other_interest.value);

                  var other_commission = parseInt(document.calculator.other_commission.value);

                  var other_lottery = parseInt(document.calculator.other_lottery.value);

                  document.calculator.other_box.value = (Math.round(other_interest+other_commission+other_lottery));

                  // Calculations for profit

                  var profit = parseInt(document.calculator.profit.value);

                  document.calculator.profit_box.value = (Math.round(profit));

                  // Calculations for Agriculture

                  var agri = parseInt(document.calculator.agri.value);

                  document.calculator.agri_box.value = (Math.round(agri));

                  // Tax calculations

                  document.calculator.total_short_capital_111A.value = Math.round((short_capital_111A*0.15));

                  document.calculator.long_capital_20_final.value = Math.round((long_capital_20*0.2));

                  document.calculator.long_capital_gain_10.value = Math.round((long_capital_10*0.1));

                  document.calculator.crossword.value = Math.round((other_lottery*0.3));

                  var total_short_capital_111A = parseInt(document.calculator.total_short_capital_111A.value);

                  var long_capital_20_final = parseInt(document.calculator.long_capital_20_final.value);

                  var long_capital_gain_10 = parseInt(document.calculator.long_capital_gain_10.value);

                  var crossword = parseInt(document.calculator.crossword.value);

                  var house_box_value = parseInt(document.calculator.house_box.value);

                  var capital_box_value = parseInt(document.calculator.capital_box.value);

                  var other_box_value = parseInt(document.calculator.other_box.value);

                  var profit_box_value= parseInt(document.calculator.profit_box.value);

                  var agri_box_value = parseInt(document.calculator.agri_box.value);

                  var income = Math.round(salary_box_value+house_box_value+profit_box_value+short_capital+other_interest+other_commission+agri_box_value);

                  var deduction_box = parseInt(document.calculator.deduction_box.value);

                  var income_temp = income;

                  if(income <= 500000 && income > 0)
                  {
                    income = income - 20000;
                  }


                  document.calculator.income.value = Math.round(income-deduction_box);

                  // Calculations for Detections

                  var life_insurance_premium = parseInt(document.calculator.life_insurance_premium.value);

                  var annuity = parseInt(document.calculator.annuity.value);

                  var pf = parseInt(document.calculator.pf.value);

                  var nsc = parseInt(document.calculator.nsc.value);

                  var ulip = parseInt(document.calculator.ulip.value);

                  var mf = parseInt(document.calculator.mf.value);

                  var repayment_house_loan = parseInt(document.calculator.repayment_house_loan.value);

                  var tuition_fee = parseInt(document.calculator.tuition_fee.value);

                  var fixed_deposit = parseInt(document.calculator.fixed_deposit.value);

                  var npf = parseInt(document.calculator.npf.value);

                  var employee_nps = parseInt(document.calculator.employee_nps.value);

                  if(employee_nps > 100000)     // If employee nps value is more than 1L it will reseted to 1L
                  {
                    employee_nps = 100000;
                  }

                  var employer_nps = parseInt(document.calculator.employer_nps.value);

                  var equity_data = Math.round(salary_box_value+house_box_value+capital_box_value+profit_box_value+other_box_value+agri_box_value);

                  var equity = parseInt(document.calculator.equity.value);

                    if(equity >= 50000)
                    {
                      if(equity_data > 1000000)
                      {
                        equity = 25000;
                      }
                      else
                      {
                        equity = 0;
                      }
                    }
                    else
                    {
                      if(equity_data < 1000000)
                      {
                        equity = Math.round((equity/2));
                      }
                      else
                      {
                        equity = 0;
                      }
                    }


                  var other_deduction = parseInt(document.calculator.other_deduction.value);

                  var total_deduction = (Math.round(life_insurance_premium+annuity+pf+nsc+ulip+mf+repayment_house_loan+tuition_fee+fixed_deposit+npf+employee_nps+other_deduction));

                  document.calculator.total_deduction.value = (total_deduction);

                  if(total_deduction > 150000)
                  {
                    total_deduction = 150000;
                    total_deduction = Math.round(total_deduction + employer_nps + equity);   // add employer nsp & equity to total detection after calculations
                    document.calculator.total_deduction.value = (total_deduction);
                  }
                  else
                  {
                    total_deduction = Math.round(total_deduction + employer_nps + equity);   // add employer nsp & equity to total detection after calculations

                    document.calculator.total_deduction.value = (total_deduction);
                  }

                  var medi_claim = parseInt(document.calculator.medi_claim.value);

                  var medi_claim_parent = parseInt(document.calculator.medi_claim_parent.value);

                  if(medi_claim > 15000)    // Maximum medical calim for male  is 15000
                  {
                    medi_claim = 15000;
                  }

                  if(medi_claim_parent > 20000)      // Maximum medical calim for parent is 20000
                  {
                    medi_claim_parent = 20000;
                  }
                
                  var donation = parseInt(document.calculator.donation.value);

                  var political_donation = parseInt(document.calculator.political_donation.value);

                  var rent_paid = parseInt(document.calculator.rent_paid.value);

                  if(rent_paid > 24000)         // Other than who has claimed HRA(Maximum 240000)
                  {
                    rent_paid = 24000;
                  }

                  if(document.getElementById('80dd').checked)
                  {
                    if(document.getElementById('80dd_severe').checked)
                    {
                      var medical_treatment = 100000;
                      document.calculator.medical_treatment.value = (medical_treatment);
                    }
                    else
                    {
                      medical_treatment = 50000;
                      document.calculator.medical_treatment.value = (medical_treatment);  
                    }

                  }
                  else
                  {
                    medical_treatment = 0;
                    document.calculator.medical_treatment.value = (medical_treatment);
                  }

                  var interest_first_home_loan = parseInt(document.calculator.interest_first_home_loan.value);

                  if(interest_first_home_loan > 100000)
                  {
                    interest_first_home_loan = 100000;
                  }

                  var interest_education_loan = parseInt(document.calculator.interest_education_loan.value);

                  if(document.getElementById('80U').checked)
                  {
                    if(document.getElementById('80U_severe').checked)
                    {
                      var disability = 100000;
                      document.calculator.disability.value = (disability);
                    }
                    else
                    {
                      disability = 50000;   
                      document.calculator.disability.value = (disability);  
                    }

                  }
                  else
                  {
                    disability = 0;
                    document.calculator.disability.value = (disability);
                  }

                  var interest_saving_acc = parseInt(document.calculator.interest_saving_acc.value);

                  if(interest_saving_acc > 10000)     // if interest on savings acc more than 10000 it will reseted with 10000
                  {
                    interest_saving_acc = 10000;
                  }

                  var other_deduction_2 = parseInt(document.calculator.other_deduction_2.value);

                  var detection_down = Math.round(medi_claim+medi_claim_parent+donation+political_donation+rent_paid+medical_treatment+interest_first_home_loan+interest_education_loan+disability+interest_saving_acc+other_deduction_2);

                  document.calculator.deduction_box.value = Math.round(total_deduction+detection_down);

                  var income = parseInt(document.calculator.income.value);

                  document.calculator.total_income.value = Math.round((salary_box_value+house_box_value+capital_box_value+profit_box_value+other_box_value+agri_box_value)-deduction_box);

                  if(agri_box_value == 0)
                  {

                    // Normal slab tax calculations

                    if(isNaN(document.calculator.income.value) || income<= "500000")
                    {
                      document.calculator.tax.value = ('0');
                      document.calculator.surcharge.value = ('0');
                      document.calculator.edu.value = ('0'); 
                      document.calculator.hedu.value = ('0'); 
                      document.calculator.total.value = ('0');
                    }
                    else if (income > "500000" && income < "1000000") 
                    {
                      //echo "You are come under 5 to 10 Laks Slab<br>";

                      var taxable_income = Math.round(income - 500000);  // Reduct 2L for Non-Taxable + 3L for 2nd slab( 2nd slab tax 30000 will be added manually)

                      var tax = Math.round(((taxable_income/100)*20)+total_short_capital_111A+long_capital_20_final+long_capital_gain_10+crossword);

                      var total_tax = Math.round(tax); // Tax for 5L< slab + 3L to 5L tax( 20000)

                      var edu_tax = Math.round((total_tax/100)*2);

                      var higher_edu_tax = Math.round((total_tax/100)*1);

                      var total = Math.round(total_tax + edu_tax + higher_edu_tax);

                      document.calculator.tax.value = (total_tax); 
                      document.calculator.surcharge.value = ('0');
                      document.calculator.edu.value = (edu_tax); 
                      document.calculator.hedu.value = (higher_edu_tax); 
                      document.calculator.total.value = (total); 

                    }
                    else 
                    {

                      if(income > 10000000)
                      {
                        var taxable_income = Math.round(income - 1000000);  // Reduct 3L for Non-Taxable + 3L for 2nd slab + 5L for 3rd slab ( 2nd & 3rd slab tax 30000 + 100000 will be added manually)

                        var tax = Math.round(((taxable_income/100)*30)+total_short_capital_111A+long_capital_20_final+long_capital_gain_10+crossword);

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
                      else    // Calculations for value between 10L to 1 crore
                      {

                        var taxable_income = Math.round(income - 1000000);  // Reduct 3L for Non-Taxable + 2L for 2nd slab + 5L for 3rd slab ( 2nd & 3rd slab tax 30000 + 100000 will be added manually)

                        var tax = Math.round(((taxable_income/100)*30)+total_short_capital_111A+long_capital_20_final+long_capital_gain_10+crossword);

                        var total_tax = Math.round(tax + 100000); // Tax for 10L< slab + 2nd and 3rd slab tax

                        var edu_tax = Math.round((total_tax/100)*2);

                        var higher_edu_tax = Math.round((total_tax/100)*1);

                        var total = Math.round(total_tax + edu_tax + higher_edu_tax);

                        document.calculator.tax.value = (total_tax); 
                        document.calculator.surcharge.value = ('0');
                        document.calculator.edu.value = (edu_tax); 
                        document.calculator.hedu.value = (higher_edu_tax); 
                        document.calculator.total.value = (total); 
                      }

                    }  // end of tax slab calculations

                  }   // end of agri_box_value = 0
                  
                else   // calculations for agricultural tax
                  {
                      var income_validate_agri = income - agri_box_value;       // For reseting agriculture value to 0 if income lessthan slab value

                      if(income_validate_agri > 500000)
                      {
                         // Normal slab tax calculations

                         if(isNaN(document.calculator.income.value) || income<= "500000")
                        {
                          document.calculator.tax.value = ('0'); 
                          document.calculator.surcharge.value = ('0');
                          document.calculator.edu.value = ('0'); 
                          document.calculator.hedu.value = ('0'); 
                          document.calculator.total.value = ('0');
                        }
                        else if (income > "500000" && income < "1000000") 
                        {
                          //echo "You are come under 5 to 10 Laks Slab<br>";

                          var taxable_income = Math.round(income - 500000);  // Reduct 3L for Non-Taxable + 2L for 2nd slab( 2nd slab tax 20000 will be added manually)

                          var tax = Math.round(((taxable_income/100)*20)+total_short_capital_111A+long_capital_20_final+long_capital_gain_10+crossword);

                          var tax = Math.round(tax); // Tax for 5L< slab + 3 to 5L tax( 20000)

                        }
                        else 
                        {
                          //echo "You are come under 10+ Laks Slab";

                          var taxable_income = Math.round(income - 1000000);  // Reduct 3L for Non-Taxable + 2L for 2nd slab + 5L for 3rd slab ( 2nd & 3rd slab tax 20000 + 100000 will be added manually)

                          var tax = Math.round(((taxable_income/100)*30)+total_short_capital_111A+long_capital_20_final+long_capital_gain_10+crossword);

                          var tax = Math.round(tax + 100000); // Tax for 10L< slab + 2nd and 3rd slab tax

                        }  // end of tax slab calculations

                        /* Reduce minimum exceptional amount as per Tax Act. For example if user enter agriculture income as 300000 for the 

                           assessment year 2014-2015. For this assessment year exemption will starting from 2L, so reduce the 2L from Agriculture 

                           income and calculate normal tax calculation for agri income. The final output will be in the difference between 

                           Normal tax calcution amount with agriculture and calcutaion for agricultural tax.

                         */

                        var agri_tax_input = agri_box_value + 500000;   // Exemption on 3L as per slab 

                        if(agri_tax_input <= "500000")
                        {
                          document.calculator.tax.value = ('0'); 
                          document.calculator.surcharge.value = ('0');
                          document.calculator.edu.value = ('0'); 
                          document.calculator.hedu.value = ('0'); 
                          document.calculator.total.value = ('0');
                        }
                        else if (agri_tax_input > "500000" && agri_tax_input < "1000000") 
                        {

                          var agri_taxable_income = Math.round(agri_tax_input - 500000);  // Reduct 3L for Non-Taxable + 2L for 2nd slab( 2nd slab tax 20000 will be added manually)

                          var agri_tax = Math.round(((agri_taxable_income/100)*20)+total_short_capital_111A+long_capital_20_final+long_capital_gain_10+crossword);

                          agri_tax = agri_tax;

                          agri_tax = tax - agri_tax ;

                          var agri_total_tax = Math.round(agri_tax); // Tax for 5L< slab + 3 to 5L tax( 20000)

                          var agri_edu_tax = Math.round((agri_total_tax/100)*2);

                          var agri_higher_edu_tax = Math.round((agri_total_tax/100)*1);

                          var agri_total = Math.round(agri_total_tax + agri_edu_tax + agri_higher_edu_tax);

                          document.calculator.tax.value = (agri_total_tax); 
                          document.calculator.surcharge.value = ('0');
                          document.calculator.edu.value = (agri_edu_tax); 
                          document.calculator.hedu.value = (agri_higher_edu_tax); 
                          document.calculator.total.value = (agri_total); 

                        }
                        else 
                        {

                          var agri_taxable_income = Math.round(agri_tax_input - 1000000);  // Reduct 3L for Non-Taxable + 2L for 2nd slab + 5L for 3rd slab ( 2nd & 3rd slab tax 20000 + 100000 will be added manually)

                          var agri_tax = Math.round(((agri_taxable_income/100)*30)+total_short_capital_111A+long_capital_20_final+long_capital_gain_10+crossword);

                          agri_tax = agri_tax + 100000 ;

                          agri_tax = tax - agri_tax ;

                          var agri_total_tax = Math.round(agri_tax); // Tax for 10L< slab + 2nd and 3rd slab tax

                          var agri_edu_tax = Math.round((agri_total_tax/100)*2);

                          var agri_higher_edu_tax = Math.round((agri_total_tax/100)*1);

                          var agri_total = Math.round(agri_total_tax + agri_edu_tax + agri_higher_edu_tax);

                          document.calculator.tax.value = (agri_total_tax); 
                          document.calculator.surcharge.value = ('0');
                          document.calculator.edu.value = (agri_edu_tax); 
                          document.calculator.hedu.value = (agri_higher_edu_tax); 
                          document.calculator.total.value = (agri_total); 

                        }  // end of tax slab calculations

                    }
                    else
                    {
                      document.calculator.tax.value = ('0'); 
                      document.calculator.surcharge.value = ('0');
                      document.calculator.edu.value = ('0'); 
                      document.calculator.hedu.value = ('0'); 
                      document.calculator.total.value = ('0');
                    }
                  

                  } // end of agri_box_value is given 

                }              
              }

            else if(payer=="apo")
            {
              var income = parseInt(document.calculator.income.value);
              
              if(isNaN(document.calculator.income.value) || income<= "200000")
              {
                var output = 0; 
                document.calculator.tax.value = (output); 
                document.calculator.edu.value = (output); 
                document.calculator.hedu.value = (output); 
                document.calculator.total.value = (output); 
              }
              else if(income > "200000" && income <= "500000")
              {
            
                var taxable_income = Math.round(income - 200000);

                var devided_income = Math.round(taxable_income/100);  

                var tax = Math.round(devided_income*10); 

                var edu_tax = Math.round((tax/100)*2);

                var higher_edu_tax = Math.round((tax/100)*1); 

                var total = Math.round(tax + edu_tax + higher_edu_tax);

                document.calculator.tax.value = (tax); 
                document.calculator.edu.value = (edu_tax); 
                document.calculator.hedu.value = (higher_edu_tax); 
                document.calculator.total.value = (total); 

              }
              else if (income > "500000" && income < "1000000") 
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
              else 
              {
                if(income > 10000000)
                {
                  var taxable_income = Math.round(income - 1000000);  // Reduct 2L for Non-Taxable + 3L for 2nd slab + 5L for 3rd slab ( 2nd & 3rd slab tax 30000 + 100000 will be added manually)

                  var tax = Math.round((taxable_income/100)*30);

                  var total_tax = Math.round(tax + 130000); // Tax for 10L< slab + 2nd and 3rd slab tax

                  var surcharge_amount_one = Math.round(total_tax * 0.1);

                  var after_crore = income - 10000000;    // For find out the extra amount after one crore

                  var surcharge_amount = Math.round(after_crore * 0.7);   // For find out the surcharge amount

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
                  document.calculator.surcharge.value = ('0');
                  document.calculator.edu.value = (edu_tax); 
                  document.calculator.hedu.value = (higher_edu_tax); 
                  document.calculator.total.value = (total); 
                }
              }
            }     // end of apo
              
            else if(payer=="huf")
            {
              var income = parseInt(document.calculator.income.value);
              
              if(isNaN(document.calculator.income.value) || income<= "200000")
              {
                var output = 0; 
                document.calculator.tax.value = (output); 
                document.calculator.edu.value = (output); 
                document.calculator.hedu.value = (output); 
                document.calculator.total.value = (output); 
              }
              else if(income > "200000" && income <= "500000")
              {
            
                var taxable_income = Math.round(income - 200000);

                var devided_income = Math.round(taxable_income/100);  

                var tax = Math.round(devided_income*10); 

                var edu_tax = Math.round((tax/100)*2);

                var higher_edu_tax = Math.round((tax/100)*1); 

                var total = Math.round(tax + edu_tax + higher_edu_tax);

                document.calculator.tax.value = (tax); 
                document.calculator.edu.value = (edu_tax); 
                document.calculator.hedu.value = (higher_edu_tax); 
                document.calculator.total.value = (total); 

              }
              else if (income > "500000" && income < "1000000") 
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
              else 
              {
                if(income > 10000000)
                {
                  var taxable_income = Math.round(income - 1000000);  // Reduct 2L for Non-Taxable + 3L for 2nd slab + 5L for 3rd slab ( 2nd & 3rd slab tax 30000 + 100000 will be added manually)

                  var tax = Math.round((taxable_income/100)*30);

                  var total_tax = Math.round(tax + 130000); // Tax for 10L< slab + 2nd and 3rd slab tax

                  var surcharge_amount_one = Math.round(total_tax * 0.1);

                  var after_crore = income - 10000000;    // For find out the extra amount after one crore

                  var surcharge_amount = Math.round(after_crore * 0.7);   // For find out the surcharge amount

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
                  document.calculator.surcharge.value = ('0');
                  document.calculator.edu.value = (edu_tax); 
                  document.calculator.hedu.value = (higher_edu_tax); 
                  document.calculator.total.value = (total); 
                }

              }
            }     // end of huf calculations

            else if(payer=="society")
              {
                var income = parseInt(document.calculator.income.value);
                if(income < 10000)
                  {
                    var tax = (income/100)*10;

                    var edu_tax = (tax/100)*2;

                    var higher_edu_tax = (tax/100)*1;

                    var total = tax + edu_tax + higher_edu_tax;
                    
                    document.calculator.tax.value = (Math.round(tax)); 
                     document.calculator.edu.value = (Math.round(edu_tax)); 
                     document.calculator.hedu.value = (Math.round(higher_edu_tax)); 
                     document.calculator.total.value = (Math.round(total)); 


                  } // end of 10000 slab

                  else if(income > '10000' && income < '20000')
                  {
                    

                    var taxable_income = income - 10000;  // Reduct 10K from 1st slab

                    var tax = (taxable_income/100)*20;

                    var total_tax = tax + 1000; // Tax for 10L< slab + 1st slab tax (1000)

                    var edu_tax = (total_tax/100)*2;

                    var higher_edu_tax = (total_tax/100)*1;

                    var total = total_tax + edu_tax + higher_edu_tax;

                    document.calculator.tax.value = (Math.round(total_tax)); 
                     document.calculator.edu.value = (Math.round(edu_tax)); 
                     document.calculator.hedu.value = (Math.round(higher_edu_tax)); 
                     document.calculator.total.value = (Math.round(total)); 

                  } // end of 20000 slab

                  else
                  {
                    if(income > 10000000)
                    {
                      var taxable_income = income - 20000;  // Reduct 20K from 1st and 2nd slab

                      var tax = Math.round((taxable_income/100)*30);

                      var total_tax = tax + 3000; // Tax for 20L< slab + 1st and 2nd slab tax (1000 + 2000)

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

                      var taxable_income = income - 20000;  // Reduct 20K from 1st and 2nd slab

                      var tax = Math.round((taxable_income/100)*30);

                      var total_tax = tax + 3000; // Tax for 20L< slab + 1st and 2nd slab tax (1000 + 2000)

                      var edu_tax = Math.round((total_tax/100)*2);

                      var higher_edu_tax = Math.round((total_tax/100)*1);

                      var total = Math.round(total_tax + edu_tax + higher_edu_tax);

                      document.calculator.tax.value = (total_tax); 
                      document.calculator.surcharge.value = ('0');
                      document.calculator.edu.value = (edu_tax); 
                      document.calculator.hedu.value = (higher_edu_tax); 
                      document.calculator.total.value = (total); 
                    }

                  } // end of 20K plus slab
                
              }     // end of society calculations

            else if(payer=="foreign_company")
              {
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
                
              }   // end of foreign company calculations
            
            else if(payer=="company")
              {
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
            else
              {
                var income = parseInt(document.calculator.income.value);

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

              }   // End of other calculations
          } // End of 2014-2015 year
          else // Calculations for 2015-2016 financial year
          {
            var e = document.getElementById("taxpayer");
            var payer = e.options[e.selectedIndex].value;
          
            if(payer=="individual")
              {
                var f = document.getElementById("person");
                var type = f.options[f.selectedIndex].value;
                if(type=="male")
                {
                  
                  // Calculations for salary

                  var salary_box_value = parseInt(document.calculator.salary.value);
                  document.calculator.salary_box.value = (Math.round(salary_box_value));

                  //Calculations for income from House Property
                  
                  var let_out_rent = parseInt(document.calculator.let_out_rent.value);
                  var let_out_tax = parseInt(document.calculator.let_out_tax.value);
                  var unreal_rent = parseInt(document.calculator.unreal_rent.value);

                  document.calculator.net_rent.value = (Math.round(let_out_rent-(let_out_tax+unreal_rent)));

                  var net_rent = parseInt(document.calculator.net_rent.value);

                  if(net_rent > 0)
                  {
                    document.calculator.house_standard_deduction.value = (Math.round(net_rent*0.3));
                  }
                  else
                  {
                    document.calculator.house_standard_deduction.value = ('0');                    
                  }

                  var house_standard_deduction =  parseInt(document.calculator.house_standard_deduction.value);

                  var let_out_interest_house_loan = parseInt(document.calculator.let_out_interest_house_loan.value);

                  document.calculator.income_let_out.value = (Math.round(net_rent-(house_standard_deduction+let_out_interest_house_loan)));

                  var income_let_out = parseInt(document.calculator.income_let_out.value);

                  var house = parseInt(document.calculator.interest_house_loan.value);
                  var house_under_2l = parseInt(document.calculator.interest_house_loan.value);

                  if(house > 150000)        // if self house rent goes > 1.5L it will be reseted to 1.5L
                  {
                    house = 150000;
                    house = -house;           // Convert positive value to negative value
                    house_under_2l = -house_under_2l;
                    document.calculator.house_box.value = (Math.round(house+income_let_out));
                    document.calculator.self_occupied_house.value = (Math.round(house_under_2l));
                  }
                  else
                  {
                    house = -house;
                    document.calculator.house_box.value = (Math.round(house+income_let_out));
                    document.calculator.self_occupied_house.value = (Math.round(house));
                  }

                  // Calculations for capital gains

                  var short_capital = parseInt(document.calculator.short_capital.value);

                  var short_capital_111A = parseInt(document.calculator.short_capital_111A.value);
                  
                  var long_capital_20 = parseInt(document.calculator.long_capital_20.value);

                  var long_capital_10 = parseInt(document.calculator.long_capital_10.value);

                  document.calculator.capital_box.value = (Math.round(short_capital+short_capital_111A+long_capital_20+long_capital_10));

                  // Calculations for other income

                  var other_interest = parseInt(document.calculator.other_interest.value);

                  var other_commission = parseInt(document.calculator.other_commission.value);

                  var other_lottery = parseInt(document.calculator.other_lottery.value);

                  document.calculator.other_box.value = (Math.round(other_interest+other_commission+other_lottery));

                  // Calculations for profit

                  var profit = parseInt(document.calculator.profit.value);

                  document.calculator.profit_box.value = (Math.round(profit));

                  // Calculations for Agriculture

                  var agri = parseInt(document.calculator.agri.value);

                  document.calculator.agri_box.value = (Math.round(agri));

                  // Tax calculations

                  document.calculator.total_short_capital_111A.value = Math.round((short_capital_111A*0.15));

                  document.calculator.long_capital_20_final.value = Math.round((long_capital_20*0.2));

                  document.calculator.long_capital_gain_10.value = Math.round((long_capital_10*0.1));

                  document.calculator.crossword.value = Math.round((other_lottery*0.3));

                  var total_short_capital_111A = parseInt(document.calculator.total_short_capital_111A.value);

                  var long_capital_20_final = parseInt(document.calculator.long_capital_20_final.value);

                  var long_capital_gain_10 = parseInt(document.calculator.long_capital_gain_10.value);

                  var crossword = parseInt(document.calculator.crossword.value);

                  var house_box_value = parseInt(document.calculator.house_box.value);

                  var capital_box_value = parseInt(document.calculator.capital_box.value);

                  var other_box_value = parseInt(document.calculator.other_box.value);

                  var profit_box_value= parseInt(document.calculator.profit_box.value);

                  var agri_box_value = parseInt(document.calculator.agri_box.value);

                  var income = Math.round(salary_box_value+house_box_value+profit_box_value+short_capital+other_interest+other_commission+agri_box_value);

                  var deduction_box = parseInt(document.calculator.deduction_box.value);

                  var income_temp = income;

                  if(income <= 500000 && income > 0)
                  {
                    income = income - 20000;
                  }


                  document.calculator.income.value = Math.round(income-deduction_box);

                  // Calculations for Detections

                  var life_insurance_premium = parseInt(document.calculator.life_insurance_premium.value);

                  var annuity = parseInt(document.calculator.annuity.value);

                  var pf = parseInt(document.calculator.pf.value);

                  var nsc = parseInt(document.calculator.nsc.value);

                  var ulip = parseInt(document.calculator.ulip.value);

                  var mf = parseInt(document.calculator.mf.value);

                  var repayment_house_loan = parseInt(document.calculator.repayment_house_loan.value);

                  var tuition_fee = parseInt(document.calculator.tuition_fee.value);

                  var fixed_deposit = parseInt(document.calculator.fixed_deposit.value);

                  var npf = parseInt(document.calculator.npf.value);

                  var employee_nps = parseInt(document.calculator.employee_nps.value);

                  if(employee_nps > 100000)     // If employee nps value is more than 1L it will reseted to 1L
                  {
                    employee_nps = 100000;
                  }

                  var employer_nps = parseInt(document.calculator.employer_nps.value);

                  var equity_data = Math.round(salary_box_value+house_box_value+capital_box_value+profit_box_value+other_box_value+agri_box_value);

                  var equity = parseInt(document.calculator.equity.value);

                    if(equity >= 50000)
                    {
                      if(equity_data > 1000000)
                      {
                        equity = 25000;
                      }
                      else
                      {
                        equity = 0;
                      }
                    }
                    else
                    {
                      if(equity_data < 1000000)
                      {
                        equity = Math.round((equity/2));
                      }
                      else
                      {
                        equity = 0;
                      }
                    }


                  var other_deduction = parseInt(document.calculator.other_deduction.value);

                  var total_deduction = (Math.round(life_insurance_premium+annuity+pf+nsc+ulip+mf+repayment_house_loan+tuition_fee+fixed_deposit+npf+employee_nps+other_deduction));

                  document.calculator.total_deduction.value = (total_deduction);

                  if(total_deduction > 100000)
                  {
                    total_deduction = 100000;
                    total_deduction = Math.round(total_deduction + employer_nps + equity);   // add employer nsp & equity to total detection after calculations
                    document.calculator.total_deduction.value = (total_deduction);
                  }
                  else
                  {
                    total_deduction = Math.round(total_deduction + employer_nps + equity);   // add employer nsp & equity to total detection after calculations

                    document.calculator.total_deduction.value = (total_deduction);
                  }

                  var medi_claim = parseInt(document.calculator.medi_claim.value);

                  var medi_claim_parent = parseInt(document.calculator.medi_claim_parent.value);

                  if(medi_claim > 15000)    // Maximum medical calim for male  is 15000
                  {
                    medi_claim = 15000;
                  }

                  if(medi_claim_parent > 20000)      // Maximum medical calim for parent is 20000
                  {
                    medi_claim_parent = 20000;
                  }
                
                  var donation = parseInt(document.calculator.donation.value);

                  var political_donation = parseInt(document.calculator.political_donation.value);

                  var rent_paid = parseInt(document.calculator.rent_paid.value);

                  if(rent_paid > 24000)         // Other than who has claimed HRA(Maximum 240000)
                  {
                    rent_paid = 24000;
                  }

                  if(document.getElementById('80dd').checked)
                  {
                    if(document.getElementById('80dd_severe').checked)
                    {
                      var medical_treatment = 100000;
                      document.calculator.medical_treatment.value = (medical_treatment);
                    }
                    else
                    {
                      medical_treatment = 50000;
                      document.calculator.medical_treatment.value = (medical_treatment);  
                    }

                  }
                  else
                  {
                    medical_treatment = 0;
                    document.calculator.medical_treatment.value = (medical_treatment);
                  }

                  var interest_first_home_loan = parseInt(document.calculator.interest_first_home_loan.value);

                  if(interest_first_home_loan > 100000)
                  {
                    interest_first_home_loan = 100000;
                  }

                  var interest_education_loan = parseInt(document.calculator.interest_education_loan.value);

                  if(document.getElementById('80U').checked)
                  {
                    if(document.getElementById('80U_severe').checked)
                    {
                      var disability = 100000;
                      document.calculator.disability.value = (disability);
                    }
                    else
                    {
                      disability = 50000;   
                      document.calculator.disability.value = (disability);  
                    }

                  }
                  else
                  {
                    disability = 0;
                    document.calculator.disability.value = (disability);
                  }

                  var interest_saving_acc = parseInt(document.calculator.interest_saving_acc.value);

                  if(interest_saving_acc > 10000)     // if interest on savings acc more than 10000 it will reseted with 10000
                  {
                    interest_saving_acc = 10000;
                  }

                  var other_deduction_2 = parseInt(document.calculator.other_deduction_2.value);

                  var detection_down = Math.round(medi_claim+medi_claim_parent+donation+political_donation+rent_paid+medical_treatment+interest_first_home_loan+interest_education_loan+disability+interest_saving_acc+other_deduction_2);

                  document.calculator.deduction_box.value = Math.round(total_deduction+detection_down);

                  var income = parseInt(document.calculator.income.value);

                  document.calculator.total_income.value = Math.round((salary_box_value+house_box_value+capital_box_value+profit_box_value+other_box_value+agri_box_value)-deduction_box);

                  if(agri_box_value == 0)
                  {

                    // Normal slab tax calculations

                    if(isNaN(document.calculator.income.value) || income<= "250000")
                    {
                      document.calculator.tax.value = ('0');
                      document.calculator.surcharge.value = ('0');
                      document.calculator.edu.value = ('0'); 
                      document.calculator.hedu.value = ('0'); 
                      document.calculator.total.value = ('0');
                    }
                    else if(income > "250000" && income <= "500000")
                    {
                      
                      var taxable_income = Math.round(income - 250000);

                      var devided_income = Math.round(taxable_income/100);  

                      var tax = Math.round((devided_income*10)+total_short_capital_111A+long_capital_20_final+long_capital_gain_10+crossword); 

                      var edu_tax = Math.round((tax/100)*2);

                      var higher_edu_tax = Math.round((tax/100)*1); 

                      var total = Math.round(tax + edu_tax + higher_edu_tax);

                      document.calculator.tax.value = (tax);
                      document.calculator.surcharge.value = ('0');
                      document.calculator.edu.value = (edu_tax); 
                      document.calculator.hedu.value = (higher_edu_tax); 
                      document.calculator.total.value = (total); 

                    }
                    else if (income > "500000" && income < "1000000") 
                    {
                      //echo "You are come under 5 to 10 Laks Slab<br>";

                      var taxable_income = Math.round(income - 500000);  // Reduct 2L for Non-Taxable + 3L for 2nd slab( 2nd slab tax 30000 will be added manually)

                      var tax = Math.round(((taxable_income/100)*20)+total_short_capital_111A+long_capital_20_final+long_capital_gain_10+crossword);

                      var total_tax = Math.round(tax + 25000); // Tax for 5L< slab + 2.5L to 5L tax( 25000)

                      var edu_tax = Math.round((total_tax/100)*2);

                      var higher_edu_tax = Math.round((total_tax/100)*1);

                      var total = Math.round(total_tax + edu_tax + higher_edu_tax);

                      document.calculator.tax.value = (total_tax); 
                      document.calculator.surcharge.value = ('0');
                      document.calculator.edu.value = (edu_tax); 
                      document.calculator.hedu.value = (higher_edu_tax); 
                      document.calculator.total.value = (total); 

                    }
                    else 
                    {

                      if(income > 10000000)
                      {
                        var taxable_income = Math.round(income - 1000000);  // Reduct 2L for Non-Taxable + 3L for 2nd slab + 5L for 3rd slab ( 2nd & 3rd slab tax 30000 + 100000 will be added manually)

                        var tax = Math.round(((taxable_income/100)*30)+total_short_capital_111A+long_capital_20_final+long_capital_gain_10+crossword);

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
                      else    // Calculations for value between 10L to 1 crore
                      {

                        var taxable_income = Math.round(income - 1000000);  // Reduct 2L for Non-Taxable + 3L for 2nd slab + 5L for 3rd slab ( 2nd & 3rd slab tax 30000 + 100000 will be added manually)

                        var tax = Math.round(((taxable_income/100)*30)+total_short_capital_111A+long_capital_20_final+long_capital_gain_10+crossword);

                        var total_tax = Math.round(tax + 125000); // Tax for 10L< slab + 2nd and 3rd slab tax

                        var edu_tax = Math.round((total_tax/100)*2);

                        var higher_edu_tax = Math.round((total_tax/100)*1);

                        var total = Math.round(total_tax + edu_tax + higher_edu_tax);

                        document.calculator.tax.value = (total_tax); 
                        document.calculator.surcharge.value = ('0');
                        document.calculator.edu.value = (edu_tax); 
                        document.calculator.hedu.value = (higher_edu_tax); 
                        document.calculator.total.value = (total); 
                      }

                    }  // end of tax slab calculations

                  }   // end of agri_box_value = 0
                  
                else   // calculations for agricultural tax
                  {
                      var income_validate_agri = income - agri_box_value;       // For reseting agriculture value to 0 if income lessthan slab value

                      if(income_validate_agri > 250000)
                      {
                          
                        if(income_validate_agri > 10000000)
                          {

                              // Normal slab tax calculations

                              if(isNaN(document.calculator.income.value) || income<= "250000")
                              {
                                document.calculator.tax.value = ('0'); 
                                document.calculator.surcharge.value = ('0');
                                document.calculator.edu.value = ('0'); 
                                document.calculator.hedu.value = ('0'); 
                                document.calculator.total.value = ('0');
                              }
                              else if(income > "250000" && income <= "500000")
                              {
                                
                                var taxable_income = Math.round(income - 250000);

                                var devided_income = Math.round(taxable_income/100);  

                                var tax = Math.round((devided_income*10)+total_short_capital_111A+long_capital_20_final+long_capital_gain_10+crossword); 

                              }
                              else if (income > "500000" && income < "1000000") 
                              {
                                //echo "You are come under 5 to 10 Laks Slab<br>";

                                var taxable_income = Math.round(income - 500000);  // Reduct 2L for Non-Taxable + 3L for 2nd slab( 2nd slab tax 30000 will be added manually)

                                var tax = Math.round(((taxable_income/100)*20)+total_short_capital_111A+long_capital_20_final+long_capital_gain_10+crossword);

                                var tax = Math.round(tax + 25000); // Tax for 5L< slab + 2.5 to 5L tax( 25000)

                              }
                              else 
                              {
                                //echo "You are come under 10+ Laks Slab";

                                var taxable_income = Math.round(income - 1000000);  // Reduct 2L for Non-Taxable + 3L for 2nd slab + 5L for 3rd slab ( 2nd & 3rd slab tax 30000 + 100000 will be added manually)

                                var tax = Math.round(((taxable_income/100)*30)+total_short_capital_111A+long_capital_20_final+long_capital_gain_10+crossword);

                                var tax = Math.round(tax + 125000); // Tax for 10L< slab + 2nd and 3rd slab tax

                              }  // end of tax slab calculations

                              /* Reduce minimum exceptional amount as per Tax Act. For example if user enter agriculture income as 300000 for the 

                                 assessment year 2014-2015. For this assessment year exemption will starting from 2L, so reduce the 2L from Agriculture 

                                 income and calculate normal tax calculation for agri income. The final output will be in the difference between 

                                 Normal tax calcution amount with agriculture and calcutaion for agricultural tax.

                               */

                              var agri_tax_input = agri_box_value + 250000;   // Exemption on 2.5L as per slab 

                              if(agri_tax_input <= "250000")
                              {
                                document.calculator.tax.value = ('0'); 
                                document.calculator.surcharge.value = ('0');
                                document.calculator.edu.value = ('0'); 
                                document.calculator.hedu.value = ('0'); 
                                document.calculator.total.value = ('0');
                              }
                              else if(agri_tax_input > "250000" && agri_tax_input <= "500000")
                              {
                                
                                var agri_taxable_income = Math.round(agri_tax_input - 250000);

                                var agri_devided_income = Math.round(agri_taxable_income/100);  

                                var agri_tax = Math.round(agri_devided_income*10); 

                                agri_tax = tax - agri_tax ;

                                var surcharge_amount_one = agri_tax * 0.1;

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

                                agri_tax = agri_tax + surcharge_small;

                                var agri_edu_tax = Math.round((agri_tax/100)*2);

                                var agri_higher_edu_tax = Math.round((agri_tax/100)*1); 

                                var agri_total = Math.round(agri_tax + agri_edu_tax + agri_higher_edu_tax);

                                document.calculator.tax.value = (agri_tax-surcharge_small); 
                                document.calculator.surcharge.value = (surcharge_small);
                                document.calculator.edu.value = (agri_edu_tax); 
                                document.calculator.hedu.value = (agri_higher_edu_tax); 
                                document.calculator.total.value = (agri_total); 

                              }
                              else if (agri_tax_input > "500000" && agri_tax_input < "1000000") 
                              {

                                var agri_taxable_income = Math.round(agri_tax_input - 500000);  // Reduct 2L for Non-Taxable + 3L for 2nd slab( 2nd slab tax 30000 will be added manually)

                                var agri_tax = Math.round((agri_taxable_income/100)*20);

                                agri_tax = agri_tax + 25000;

                                agri_tax = tax - agri_tax ;

                                var agri_total_tax = Math.round(agri_tax); // Tax for 5L< slab + 2.5 to 5L tax( 30000)

                                var surcharge_amount_one = agri_total_tax * 0.1;

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

                                agri_total_tax = agri_total_tax + surcharge_small;

                                var agri_edu_tax = Math.round((agri_total_tax/100)*2);

                                var agri_higher_edu_tax = Math.round((agri_total_tax/100)*1);

                                var agri_total = Math.round(agri_total_tax + agri_edu_tax + agri_higher_edu_tax);

                                document.calculator.tax.value = (agri_total_tax); 
                                document.calculator.surcharge.value = (surcharge_small);
                                document.calculator.edu.value = (agri_edu_tax); 
                                document.calculator.hedu.value = (agri_higher_edu_tax); 
                                document.calculator.total.value = (agri_total); 

                              }
                              else 
                              {

                                var agri_taxable_income = Math.round(agri_tax_input - 1000000);  // Reduct 2L for Non-Taxable + 3L for 2nd slab + 5L for 3rd slab ( 2nd & 3rd slab tax 30000 + 100000 will be added manually)

                                var agri_tax = Math.round((agri_taxable_income/100)*30);

                                agri_tax = agri_tax + 125000 ;

                                agri_tax = tax - agri_tax ;

                                var agri_total_tax = Math.round(agri_tax); // Tax for 10L< slab + 2nd and 3rd slab tax

                                var surcharge_amount_one = agri_total_tax * 0.1;

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

                                agri_total_tax = agri_total_tax + surcharge_small;

                                var agri_edu_tax = Math.round((agri_total_tax/100)*2);

                                var agri_higher_edu_tax = Math.round((agri_total_tax/100)*1);

                                var agri_total = Math.round(agri_total_tax + agri_edu_tax + agri_higher_edu_tax);

                                document.calculator.tax.value = (agri_total_tax-surcharge_small); 
                                document.calculator.surcharge.value = (surcharge_small);
                                document.calculator.edu.value = (agri_edu_tax); 
                                document.calculator.hedu.value = (agri_higher_edu_tax); 
                                document.calculator.total.value = (agri_total); 

                              }  // end of tax slab calculations
                        }   // End of Income more than one crore
                        else
                        {
                            if(isNaN(document.calculator.income.value) || income<= "250000")
                            {
                              document.calculator.tax.value = ('0'); 
                              document.calculator.surcharge.value = ('0');
                              document.calculator.edu.value = ('0'); 
                              document.calculator.hedu.value = ('0'); 
                              document.calculator.total.value = ('0');
                            }
                            else if(income > "250000" && income <= "500000")
                            {
                              
                              var taxable_income = Math.round(income - 250000);

                              var devided_income = Math.round(taxable_income/100);  

                              var tax = Math.round((devided_income*10)+total_short_capital_111A+long_capital_20_final+long_capital_gain_10+crossword); 

                            }
                            else if (income > "500000" && income < "1000000") 
                            {

                              var taxable_income = Math.round(income - 500000);  // Reduct 2.5L for Non-Taxable + 2.5L for 2nd slab( 2nd slab tax 30000 will be added manually)

                              var tax = Math.round(((taxable_income/100)*20)+total_short_capital_111A+long_capital_20_final+long_capital_gain_10+crossword);

                              var tax = Math.round(tax + 25000); // Tax for 5L< slab + 2.5 to 5L tax( 25000)

                            }
                            else 
                            {
                              //echo "You are come under 10+ Laks Slab";

                              var taxable_income = Math.round(income - 1000000);  // Reduct 2.5L for Non-Taxable + 2.5L for 2nd slab + 5L for 3rd slab ( 2nd & 3rd slab tax 30000 + 100000 will be added manually)

                              var tax = Math.round(((taxable_income/100)*30)+total_short_capital_111A+long_capital_20_final+long_capital_gain_10+crossword);

                              var tax = Math.round(tax + 125000); // Tax for 10L< slab + 2nd and 3rd slab tax

                            }  // end of tax slab calculations

                            /* Reduce minimum exceptional amount as per Tax Act. For example if user enter agriculture income as 300000 for the 

                               assessment year 2014-2015. For this assessment year exemption will starting from 2L, so reduce the 2L from Agriculture 

                               income and calculate normal tax calculation for agri income. The final output will be in the difference between 

                               Normal tax calcution amount with agriculture and calcutaion for agricultural tax.

                             */

                            var agri_tax_input = agri_box_value + 250000;   // Exemption on 2.5L as per slab 

                            if(agri_tax_input <= "250000")
                            {
                              document.calculator.tax.value = ('0'); 
                              document.calculator.surcharge.value = ('0');
                              document.calculator.edu.value = ('0'); 
                              document.calculator.hedu.value = ('0'); 
                              document.calculator.total.value = ('0');
                            }
                            else if(agri_tax_input > "250000" && agri_tax_input <= "500000")
                            {
                              
                              var agri_taxable_income = Math.round(agri_tax_input - 250000);

                              var agri_devided_income = Math.round(agri_taxable_income/100);  

                              var agri_tax = Math.round(agri_devided_income*10); 

                              agri_tax = tax - agri_tax ;

                              var agri_edu_tax = Math.round((agri_tax/100)*2);

                              var agri_higher_edu_tax = Math.round((agri_tax/100)*1); 

                              var agri_total = Math.round(agri_tax + agri_edu_tax + agri_higher_edu_tax);

                              document.calculator.tax.value = (agri_tax); 
                              document.calculator.surcharge.value = ('0');
                              document.calculator.edu.value = (agri_edu_tax); 
                              document.calculator.hedu.value = (agri_higher_edu_tax); 
                              document.calculator.total.value = (agri_total); 

                            }
                            else if (agri_tax_input > "500000" && agri_tax_input < "1000000") 
                            {

                              var agri_taxable_income = Math.round(agri_tax_input - 500000);  // Reduct 2L for Non-Taxable + 3L for 2nd slab( 2nd slab tax 30000 will be added manually)

                              var agri_tax = Math.round((agri_taxable_income/100)*20);

                              agri_tax = agri_tax + 25000 ;

                              agri_tax = tax - agri_tax ;

                              var agri_total_tax = Math.round(agri_tax); // Tax for 5L< slab + 2 to 5L tax( 30000)

                              var agri_edu_tax = Math.round((agri_total_tax/100)*2);

                              var agri_higher_edu_tax = Math.round((agri_total_tax/100)*1);

                              var agri_total = Math.round(agri_total_tax + agri_edu_tax + agri_higher_edu_tax);

                              document.calculator.tax.value = (agri_total_tax); 
                              document.calculator.surcharge.value = ('0');
                              document.calculator.edu.value = (agri_edu_tax); 
                              document.calculator.hedu.value = (agri_higher_edu_tax); 
                              document.calculator.total.value = (agri_total); 

                            }
                            else 
                            {

                              var agri_taxable_income = Math.round(agri_tax_input - 1000000);  // Reduct 2.5L for Non-Taxable + 3L for 2nd slab + 5L for 3rd slab ( 2nd & 3rd slab tax 30000 + 100000 will be added manually)

                              var agri_tax = Math.round((agri_taxable_income/100)*30);

                              agri_tax = agri_tax + 125000 ;

                              agri_tax = tax - agri_tax ;

                              var agri_total_tax = Math.round(agri_tax); // Tax for 10L< slab + 2nd and 3rd slab tax

                              var agri_edu_tax = Math.round((agri_total_tax/100)*2);

                              var agri_higher_edu_tax = Math.round((agri_total_tax/100)*1);

                              var agri_total = Math.round(agri_total_tax + agri_edu_tax + agri_higher_edu_tax);

                              document.calculator.tax.value = (agri_total_tax);
                              document.calculator.surcharge.value = ('0');
                              document.calculator.edu.value = (agri_edu_tax); 
                              document.calculator.hedu.value = (agri_higher_edu_tax); 
                              document.calculator.total.value = (agri_total); 

                            }  // end of tax slab calculations

                        }
                    }
                    else
                    {
                      document.calculator.tax.value = ('0');
                      document.calculator.surcharge.value = ('0');
                      document.calculator.edu.value = ('0'); 
                      document.calculator.hedu.value = ('0'); 
                      document.calculator.total.value = ('0');
                    }
                  

                  } // end of agri_box_value is given 

                   
                }
                if(type=="female")
                {
                  
                  
                  // Calculations for salary

                  var salary_box_value = parseInt(document.calculator.salary.value);
                  document.calculator.salary_box.value = (Math.round(salary_box_value));

                  //Calculations for income from House Property
                  
                  var let_out_rent = parseInt(document.calculator.let_out_rent.value);
                  var let_out_tax = parseInt(document.calculator.let_out_tax.value);
                  var unreal_rent = parseInt(document.calculator.unreal_rent.value);

                  document.calculator.net_rent.value = (Math.round(let_out_rent-(let_out_tax+unreal_rent)));

                  var net_rent = parseInt(document.calculator.net_rent.value);

                  if(net_rent > 0)
                  {
                    document.calculator.house_standard_deduction.value = (Math.round(net_rent*0.3));
                  }
                  else
                  {
                    document.calculator.house_standard_deduction.value = ('0');                    
                  }

                  var house_standard_deduction =  parseInt(document.calculator.house_standard_deduction.value);

                  var let_out_interest_house_loan = parseInt(document.calculator.let_out_interest_house_loan.value);

                  document.calculator.income_let_out.value = (Math.round(net_rent-(house_standard_deduction+let_out_interest_house_loan)));

                  var income_let_out = parseInt(document.calculator.income_let_out.value);

                  var house = parseInt(document.calculator.interest_house_loan.value);
                  var house_under_2l = parseInt(document.calculator.interest_house_loan.value);

                  if(house > 200000)        // if self house rent goes > 1.5L it will be reseted to 1.5L
                  {
                    house = 200000;
                    house = -house;           // Convert positive value to negative value
                    house_under_2l = -house_under_2l;
                    document.calculator.house_box.value = (Math.round(house+income_let_out));
                    document.calculator.self_occupied_house.value = (Math.round(house_under_2l));
                  }
                  else
                  {
                    house = -house;
                    document.calculator.house_box.value = (Math.round(house+income_let_out));
                    document.calculator.self_occupied_house.value = (Math.round(house));
                  }

                  // Calculations for capital gains

                  var short_capital = parseInt(document.calculator.short_capital.value);

                  var short_capital_111A = parseInt(document.calculator.short_capital_111A.value);
                  
                  var long_capital_20 = parseInt(document.calculator.long_capital_20.value);

                  var long_capital_10 = parseInt(document.calculator.long_capital_10.value);

                  document.calculator.capital_box.value = (Math.round(short_capital+short_capital_111A+long_capital_20+long_capital_10));

                  // Calculations for other income

                  var other_interest = parseInt(document.calculator.other_interest.value);

                  var other_commission = parseInt(document.calculator.other_commission.value);

                  var other_lottery = parseInt(document.calculator.other_lottery.value);

                  document.calculator.other_box.value = (Math.round(other_interest+other_commission+other_lottery));

                  // Calculations for profit

                  var profit = parseInt(document.calculator.profit.value);

                  document.calculator.profit_box.value = (Math.round(profit));

                  // Calculations for Agriculture

                  var agri = parseInt(document.calculator.agri.value);

                  document.calculator.agri_box.value = (Math.round(agri));

                  // Tax calculations

                  document.calculator.total_short_capital_111A.value = Math.round((short_capital_111A*0.15));

                  document.calculator.long_capital_20_final.value = Math.round((long_capital_20*0.2));

                  document.calculator.long_capital_gain_10.value = Math.round((long_capital_10*0.1));

                  document.calculator.crossword.value = Math.round((other_lottery*0.3));

                  var total_short_capital_111A = parseInt(document.calculator.total_short_capital_111A.value);

                  var long_capital_20_final = parseInt(document.calculator.long_capital_20_final.value);

                  var long_capital_gain_10 = parseInt(document.calculator.long_capital_gain_10.value);

                  var crossword = parseInt(document.calculator.crossword.value);

                  var house_box_value = parseInt(document.calculator.house_box.value);

                  var capital_box_value = parseInt(document.calculator.capital_box.value);

                  var other_box_value = parseInt(document.calculator.other_box.value);

                  var profit_box_value= parseInt(document.calculator.profit_box.value);

                  var agri_box_value = parseInt(document.calculator.agri_box.value);

                  var income = Math.round(salary_box_value+house_box_value+profit_box_value+short_capital+other_interest+other_commission+agri_box_value);

                  var deduction_box = parseInt(document.calculator.deduction_box.value);

                  var income_temp = income;

                  if(income <= 500000 && income > 0)
                  {
                    income = income - 20000;
                  }


                  document.calculator.income.value = Math.round(income-deduction_box);

                  // Calculations for Detections

                  var life_insurance_premium = parseInt(document.calculator.life_insurance_premium.value);

                  var annuity = parseInt(document.calculator.annuity.value);

                  var pf = parseInt(document.calculator.pf.value);

                  var nsc = parseInt(document.calculator.nsc.value);

                  var ulip = parseInt(document.calculator.ulip.value);

                  var mf = parseInt(document.calculator.mf.value);

                  var repayment_house_loan = parseInt(document.calculator.repayment_house_loan.value);

                  var tuition_fee = parseInt(document.calculator.tuition_fee.value);

                  var fixed_deposit = parseInt(document.calculator.fixed_deposit.value);

                  var npf = parseInt(document.calculator.npf.value);

                  var employee_nps = parseInt(document.calculator.employee_nps.value);

                  if(employee_nps > 100000)     // If employee nps value is more than 1L it will reseted to 1L
                  {
                    employee_nps = 100000;
                  }

                  var employer_nps = parseInt(document.calculator.employer_nps.value);

                  var equity_data = Math.round(salary_box_value+house_box_value+capital_box_value+profit_box_value+other_box_value+agri_box_value);

                  var equity = parseInt(document.calculator.equity.value);

                    if(equity >= 50000)
                    {
                      if(equity_data > 1000000)
                      {
                        equity = 25000;
                      }
                      else
                      {
                        equity = 0;
                      }
                    }
                    else
                    {
                      if(equity_data < 1000000)
                      {
                        equity = Math.round((equity/2));
                      }
                      else
                      {
                        equity = 0;
                      }
                    }


                  var other_deduction = parseInt(document.calculator.other_deduction.value);

                  var total_deduction = (Math.round(life_insurance_premium+annuity+pf+nsc+ulip+mf+repayment_house_loan+tuition_fee+fixed_deposit+npf+employee_nps+other_deduction));

                  document.calculator.total_deduction.value = (total_deduction);

                  if(total_deduction > 150000)
                  {
                    total_deduction = 150000;
                    total_deduction = Math.round(total_deduction + employer_nps + equity);   // add employer nsp & equity to total detection after calculations
                    document.calculator.total_deduction.value = (total_deduction);
                  }
                  else
                  {
                    total_deduction = Math.round(total_deduction + employer_nps + equity);   // add employer nsp & equity to total detection after calculations

                    document.calculator.total_deduction.value = (total_deduction);
                  }

                  var medi_claim = parseInt(document.calculator.medi_claim.value);

                  var medi_claim_parent = parseInt(document.calculator.medi_claim_parent.value);

                  if(medi_claim > 15000)    // Maximum medical calim for male  is 15000
                  {
                    medi_claim = 15000;
                  }

                  if(medi_claim_parent > 20000)      // Maximum medical calim for parent is 20000
                  {
                    medi_claim_parent = 20000;
                  }
                
                  var donation = parseInt(document.calculator.donation.value);

                  var political_donation = parseInt(document.calculator.political_donation.value);

                  var rent_paid = parseInt(document.calculator.rent_paid.value);

                  if(rent_paid > 24000)         // Other than who has claimed HRA(Maximum 240000)
                  {
                    rent_paid = 24000;
                  }

                  if(document.getElementById('80dd').checked)
                  {
                    if(document.getElementById('80dd_severe').checked)
                    {
                      var medical_treatment = 100000;
                      document.calculator.medical_treatment.value = (medical_treatment);
                    }
                    else
                    {
                      medical_treatment = 50000;
                      document.calculator.medical_treatment.value = (medical_treatment);  
                    }

                  }
                  else
                  {
                    medical_treatment = 0;
                    document.calculator.medical_treatment.value = (medical_treatment);
                  }

                  var interest_first_home_loan = parseInt(document.calculator.interest_first_home_loan.value);

                  if(interest_first_home_loan > 100000)
                  {
                    interest_first_home_loan = 100000;
                  }

                  var interest_education_loan = parseInt(document.calculator.interest_education_loan.value);

                  if(document.getElementById('80U').checked)
                  {
                    if(document.getElementById('80U_severe').checked)
                    {
                      var disability = 100000;
                      document.calculator.disability.value = (disability);
                    }
                    else
                    {
                      disability = 50000;   
                      document.calculator.disability.value = (disability);  
                    }

                  }
                  else
                  {
                    disability = 0;
                    document.calculator.disability.value = (disability);
                  }

                  var interest_saving_acc = parseInt(document.calculator.interest_saving_acc.value);

                  if(interest_saving_acc > 10000)     // if interest on savings acc more than 10000 it will reseted with 10000
                  {
                    interest_saving_acc = 10000;
                  }

                  var other_deduction_2 = parseInt(document.calculator.other_deduction_2.value);

                  var detection_down = Math.round(medi_claim+medi_claim_parent+donation+political_donation+rent_paid+medical_treatment+interest_first_home_loan+interest_education_loan+disability+interest_saving_acc+other_deduction_2);

                  document.calculator.deduction_box.value = Math.round(total_deduction+detection_down);

                  var income = parseInt(document.calculator.income.value);

                  document.calculator.total_income.value = Math.round((salary_box_value+house_box_value+capital_box_value+profit_box_value+other_box_value+agri_box_value)-deduction_box);

                  if(agri_box_value == 0)
                  {

                    // Normal slab tax calculations

                    if(isNaN(document.calculator.income.value) || income<= "250000")
                    {
                      document.calculator.tax.value = ('0');
                      document.calculator.surcharge.value = ('0');
                      document.calculator.edu.value = ('0'); 
                      document.calculator.hedu.value = ('0'); 
                      document.calculator.total.value = ('0');
                    }
                    else if(income > "250000" && income <= "500000")
                    {
                      
                      var taxable_income = Math.round(income - 250000);

                      var devided_income = Math.round(taxable_income/100);  

                      var tax = Math.round((devided_income*10)+total_short_capital_111A+long_capital_20_final+long_capital_gain_10+crossword); 

                      var edu_tax = Math.round((tax/100)*2);

                      var higher_edu_tax = Math.round((tax/100)*1); 

                      var total = Math.round(tax + edu_tax + higher_edu_tax);

                      document.calculator.tax.value = (tax);
                      document.calculator.surcharge.value = ('0');
                      document.calculator.edu.value = (edu_tax); 
                      document.calculator.hedu.value = (higher_edu_tax); 
                      document.calculator.total.value = (total); 

                    }
                    else if (income > "500000" && income < "1000000") 
                    {
                      //echo "You are come under 5 to 10 Laks Slab<br>";

                      var taxable_income = Math.round(income - 500000);  // Reduct 2L for Non-Taxable + 3L for 2nd slab( 2nd slab tax 30000 will be added manually)

                      var tax = Math.round(((taxable_income/100)*20)+total_short_capital_111A+long_capital_20_final+long_capital_gain_10+crossword);

                      var total_tax = Math.round(tax + 25000); // Tax for 5L< slab + 2.5L to 5L tax( 25000)

                      var edu_tax = Math.round((total_tax/100)*2);

                      var higher_edu_tax = Math.round((total_tax/100)*1);

                      var total = Math.round(total_tax + edu_tax + higher_edu_tax);

                      document.calculator.tax.value = (total_tax); 
                      document.calculator.surcharge.value = ('0');
                      document.calculator.edu.value = (edu_tax); 
                      document.calculator.hedu.value = (higher_edu_tax); 
                      document.calculator.total.value = (total); 

                    }
                    else 
                    {

                      if(income > 10000000)
                      {
                        var taxable_income = Math.round(income - 1000000);  // Reduct 2L for Non-Taxable + 3L for 2nd slab + 5L for 3rd slab ( 2nd & 3rd slab tax 30000 + 100000 will be added manually)

                        var tax = Math.round(((taxable_income/100)*30)+total_short_capital_111A+long_capital_20_final+long_capital_gain_10+crossword);

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
                      else    // Calculations for value between 10L to 1 crore
                      {

                        var taxable_income = Math.round(income - 1000000);  // Reduct 2L for Non-Taxable + 3L for 2nd slab + 5L for 3rd slab ( 2nd & 3rd slab tax 30000 + 100000 will be added manually)

                        var tax = Math.round(((taxable_income/100)*30)+total_short_capital_111A+long_capital_20_final+long_capital_gain_10+crossword);

                        var total_tax = Math.round(tax + 125000); // Tax for 10L< slab + 2nd and 3rd slab tax

                        var edu_tax = Math.round((total_tax/100)*2);

                        var higher_edu_tax = Math.round((total_tax/100)*1);

                        var total = Math.round(total_tax + edu_tax + higher_edu_tax);

                        document.calculator.tax.value = (total_tax); 
                        document.calculator.surcharge.value = ('0');
                        document.calculator.edu.value = (edu_tax); 
                        document.calculator.hedu.value = (higher_edu_tax); 
                        document.calculator.total.value = (total); 
                      }

                    }  // end of tax slab calculations

                  }   // end of agri_box_value = 0
                  
                else   // calculations for agricultural tax
                  {
                      var income_validate_agri = income - agri_box_value;       // For reseting agriculture value to 0 if income lessthan slab value

                      if(income_validate_agri > 250000)
                      {
                          
                        if(income_validate_agri > 10000000)
                          {

                              // Normal slab tax calculations

                              if(isNaN(document.calculator.income.value) || income<= "250000")
                              {
                                document.calculator.tax.value = ('0'); 
                                document.calculator.surcharge.value = ('0');
                                document.calculator.edu.value = ('0'); 
                                document.calculator.hedu.value = ('0'); 
                                document.calculator.total.value = ('0');
                              }
                              else if(income > "250000" && income <= "500000")
                              {
                                
                                var taxable_income = Math.round(income - 250000);

                                var devided_income = Math.round(taxable_income/100);  

                                var tax = Math.round((devided_income*10)+total_short_capital_111A+long_capital_20_final+long_capital_gain_10+crossword); 

                              }
                              else if (income > "500000" && income < "1000000") 
                              {
                                //echo "You are come under 5 to 10 Laks Slab<br>";

                                var taxable_income = Math.round(income - 500000);  // Reduct 2L for Non-Taxable + 3L for 2nd slab( 2nd slab tax 30000 will be added manually)

                                var tax = Math.round(((taxable_income/100)*20)+total_short_capital_111A+long_capital_20_final+long_capital_gain_10+crossword);

                                var tax = Math.round(tax + 25000); // Tax for 5L< slab + 2.5 to 5L tax( 25000)

                              }
                              else 
                              {
                                //echo "You are come under 10+ Laks Slab";

                                var taxable_income = Math.round(income - 1000000);  // Reduct 2L for Non-Taxable + 3L for 2nd slab + 5L for 3rd slab ( 2nd & 3rd slab tax 30000 + 100000 will be added manually)

                                var tax = Math.round(((taxable_income/100)*30)+total_short_capital_111A+long_capital_20_final+long_capital_gain_10+crossword);

                                var tax = Math.round(tax + 125000); // Tax for 10L< slab + 2nd and 3rd slab tax

                              }  // end of tax slab calculations

                              /* Reduce minimum exceptional amount as per Tax Act. For example if user enter agriculture income as 300000 for the 

                                 assessment year 2014-2015. For this assessment year exemption will starting from 2L, so reduce the 2L from Agriculture 

                                 income and calculate normal tax calculation for agri income. The final output will be in the difference between 

                                 Normal tax calcution amount with agriculture and calcutaion for agricultural tax.

                               */

                              var agri_tax_input = agri_box_value + 250000;   // Exemption on 2.5L as per slab 

                              if(agri_tax_input <= "250000")
                              {
                                document.calculator.tax.value = ('0'); 
                                document.calculator.surcharge.value = ('0');
                                document.calculator.edu.value = ('0'); 
                                document.calculator.hedu.value = ('0'); 
                                document.calculator.total.value = ('0');
                              }
                              else if(agri_tax_input > "250000" && agri_tax_input <= "500000")
                              {
                                
                                var agri_taxable_income = Math.round(agri_tax_input - 250000);

                                var agri_devided_income = Math.round(agri_taxable_income/100);  

                                var agri_tax = Math.round(agri_devided_income*10); 

                                agri_tax = tax - agri_tax ;

                                var surcharge_amount_one = agri_tax * 0.1;

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

                                agri_tax = agri_tax + surcharge_small;

                                var agri_edu_tax = Math.round((agri_tax/100)*2);

                                var agri_higher_edu_tax = Math.round((agri_tax/100)*1); 

                                var agri_total = Math.round(agri_tax + agri_edu_tax + agri_higher_edu_tax);

                                document.calculator.tax.value = (agri_tax-surcharge_small); 
                                document.calculator.surcharge.value = (surcharge_small);
                                document.calculator.edu.value = (agri_edu_tax); 
                                document.calculator.hedu.value = (agri_higher_edu_tax); 
                                document.calculator.total.value = (agri_total); 

                              }
                              else if (agri_tax_input > "500000" && agri_tax_input < "1000000") 
                              {

                                var agri_taxable_income = Math.round(agri_tax_input - 500000);  // Reduct 2L for Non-Taxable + 3L for 2nd slab( 2nd slab tax 30000 will be added manually)

                                var agri_tax = Math.round((agri_taxable_income/100)*20);

                                agri_tax = agri_tax + 25000;

                                agri_tax = tax - agri_tax ;

                                var agri_total_tax = Math.round(agri_tax); // Tax for 5L< slab + 2.5 to 5L tax( 30000)

                                var surcharge_amount_one = agri_total_tax * 0.1;

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

                                agri_total_tax = agri_total_tax + surcharge_small;

                                var agri_edu_tax = Math.round((agri_total_tax/100)*2);

                                var agri_higher_edu_tax = Math.round((agri_total_tax/100)*1);

                                var agri_total = Math.round(agri_total_tax + agri_edu_tax + agri_higher_edu_tax);

                                document.calculator.tax.value = (agri_total_tax); 
                                document.calculator.surcharge.value = (surcharge_small);
                                document.calculator.edu.value = (agri_edu_tax); 
                                document.calculator.hedu.value = (agri_higher_edu_tax); 
                                document.calculator.total.value = (agri_total); 

                              }
                              else 
                              {

                                var agri_taxable_income = Math.round(agri_tax_input - 1000000);  // Reduct 2L for Non-Taxable + 3L for 2nd slab + 5L for 3rd slab ( 2nd & 3rd slab tax 30000 + 100000 will be added manually)

                                var agri_tax = Math.round((agri_taxable_income/100)*30);

                                agri_tax = agri_tax + 125000 ;

                                agri_tax = tax - agri_tax ;

                                var agri_total_tax = Math.round(agri_tax); // Tax for 10L< slab + 2nd and 3rd slab tax

                                var surcharge_amount_one = agri_total_tax * 0.1;

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

                                agri_total_tax = agri_total_tax + surcharge_small;

                                var agri_edu_tax = Math.round((agri_total_tax/100)*2);

                                var agri_higher_edu_tax = Math.round((agri_total_tax/100)*1);

                                var agri_total = Math.round(agri_total_tax + agri_edu_tax + agri_higher_edu_tax);

                                document.calculator.tax.value = (agri_total_tax-surcharge_small); 
                                document.calculator.surcharge.value = (surcharge_small);
                                document.calculator.edu.value = (agri_edu_tax); 
                                document.calculator.hedu.value = (agri_higher_edu_tax); 
                                document.calculator.total.value = (agri_total); 

                              }  // end of tax slab calculations
                        }   // End of Income more than one crore
                        else
                        {
                            if(isNaN(document.calculator.income.value) || income<= "250000")
                            {
                              document.calculator.tax.value = ('0'); 
                              document.calculator.surcharge.value = ('0');
                              document.calculator.edu.value = ('0'); 
                              document.calculator.hedu.value = ('0'); 
                              document.calculator.total.value = ('0');
                            }
                            else if(income > "250000" && income <= "500000")
                            {
                              
                              var taxable_income = Math.round(income - 250000);

                              var devided_income = Math.round(taxable_income/100);  

                              var tax = Math.round((devided_income*10)+total_short_capital_111A+long_capital_20_final+long_capital_gain_10+crossword); 

                            }
                            else if (income > "500000" && income < "1000000") 
                            {

                              var taxable_income = Math.round(income - 500000);  // Reduct 2.5L for Non-Taxable + 2.5L for 2nd slab( 2nd slab tax 30000 will be added manually)

                              var tax = Math.round(((taxable_income/100)*20)+total_short_capital_111A+long_capital_20_final+long_capital_gain_10+crossword);

                              var tax = Math.round(tax + 25000); // Tax for 5L< slab + 2.5 to 5L tax( 25000)

                            }
                            else 
                            {
                              //echo "You are come under 10+ Laks Slab";

                              var taxable_income = Math.round(income - 1000000);  // Reduct 2.5L for Non-Taxable + 2.5L for 2nd slab + 5L for 3rd slab ( 2nd & 3rd slab tax 30000 + 100000 will be added manually)

                              var tax = Math.round(((taxable_income/100)*30)+total_short_capital_111A+long_capital_20_final+long_capital_gain_10+crossword);

                              var tax = Math.round(tax + 125000); // Tax for 10L< slab + 2nd and 3rd slab tax

                            }  // end of tax slab calculations

                            /* Reduce minimum exceptional amount as per Tax Act. For example if user enter agriculture income as 300000 for the 

                               assessment year 2014-2015. For this assessment year exemption will starting from 2L, so reduce the 2L from Agriculture 

                               income and calculate normal tax calculation for agri income. The final output will be in the difference between 

                               Normal tax calcution amount with agriculture and calcutaion for agricultural tax.

                             */

                            var agri_tax_input = agri_box_value + 250000;   // Exemption on 2.5L as per slab 

                            if(agri_tax_input <= "250000")
                            {
                              document.calculator.tax.value = ('0'); 
                              document.calculator.surcharge.value = ('0');
                              document.calculator.edu.value = ('0'); 
                              document.calculator.hedu.value = ('0'); 
                              document.calculator.total.value = ('0');
                            }
                            else if(agri_tax_input > "250000" && agri_tax_input <= "500000")
                            {
                              
                              var agri_taxable_income = Math.round(agri_tax_input - 250000);

                              var agri_devided_income = Math.round(agri_taxable_income/100);  

                              var agri_tax = Math.round(agri_devided_income*10); 

                              agri_tax = tax - agri_tax ;

                              var agri_edu_tax = Math.round((agri_tax/100)*2);

                              var agri_higher_edu_tax = Math.round((agri_tax/100)*1); 

                              var agri_total = Math.round(agri_tax + agri_edu_tax + agri_higher_edu_tax);

                              document.calculator.tax.value = (agri_tax); 
                              document.calculator.surcharge.value = ('0');
                              document.calculator.edu.value = (agri_edu_tax); 
                              document.calculator.hedu.value = (agri_higher_edu_tax); 
                              document.calculator.total.value = (agri_total); 

                            }
                            else if (agri_tax_input > "500000" && agri_tax_input < "1000000") 
                            {

                              var agri_taxable_income = Math.round(agri_tax_input - 500000);  // Reduct 2L for Non-Taxable + 3L for 2nd slab( 2nd slab tax 30000 will be added manually)

                              var agri_tax = Math.round((agri_taxable_income/100)*20);

                              agri_tax = agri_tax + 25000 ;

                              agri_tax = tax - agri_tax ;

                              var agri_total_tax = Math.round(agri_tax); // Tax for 5L< slab + 2 to 5L tax( 30000)

                              var agri_edu_tax = Math.round((agri_total_tax/100)*2);

                              var agri_higher_edu_tax = Math.round((agri_total_tax/100)*1);

                              var agri_total = Math.round(agri_total_tax + agri_edu_tax + agri_higher_edu_tax);

                              document.calculator.tax.value = (agri_total_tax); 
                              document.calculator.surcharge.value = ('0');
                              document.calculator.edu.value = (agri_edu_tax); 
                              document.calculator.hedu.value = (agri_higher_edu_tax); 
                              document.calculator.total.value = (agri_total); 

                            }
                            else 
                            {

                              var agri_taxable_income = Math.round(agri_tax_input - 1000000);  // Reduct 2.5L for Non-Taxable + 3L for 2nd slab + 5L for 3rd slab ( 2nd & 3rd slab tax 30000 + 100000 will be added manually)

                              var agri_tax = Math.round((agri_taxable_income/100)*30);

                              agri_tax = agri_tax + 125000 ;

                              agri_tax = tax - agri_tax ;

                              var agri_total_tax = Math.round(agri_tax); // Tax for 10L< slab + 2nd and 3rd slab tax

                              var agri_edu_tax = Math.round((agri_total_tax/100)*2);

                              var agri_higher_edu_tax = Math.round((agri_total_tax/100)*1);

                              var agri_total = Math.round(agri_total_tax + agri_edu_tax + agri_higher_edu_tax);

                              document.calculator.tax.value = (agri_total_tax);
                              document.calculator.surcharge.value = ('0');
                              document.calculator.edu.value = (agri_edu_tax); 
                              document.calculator.hedu.value = (agri_higher_edu_tax); 
                              document.calculator.total.value = (agri_total); 

                            }  // end of tax slab calculations

                        }
                    }
                    else
                    {
                      document.calculator.tax.value = ('0'); 
                      document.calculator.surcharge.value = ('0');
                      document.calculator.edu.value = ('0'); 
                      document.calculator.hedu.value = ('0'); 
                      document.calculator.total.value = ('0');
                    }
                  

                  } // end of agri_box_value is given 
                }
                if(type=="citizen")
                {
                  
                  
                  // Calculations for salary

                  var salary_box_value = parseInt(document.calculator.salary.value);
                  document.calculator.salary_box.value = (Math.round(salary_box_value));

                  //Calculations for income from House Property
                  
                  var let_out_rent = parseInt(document.calculator.let_out_rent.value);
                  var let_out_tax = parseInt(document.calculator.let_out_tax.value);
                  var unreal_rent = parseInt(document.calculator.unreal_rent.value);

                  document.calculator.net_rent.value = (Math.round(let_out_rent-(let_out_tax+unreal_rent)));

                  var net_rent = parseInt(document.calculator.net_rent.value);

                  if(net_rent > 0)
                  {
                    document.calculator.house_standard_deduction.value = (Math.round(net_rent*0.3));
                  }
                  else
                  {
                    document.calculator.house_standard_deduction.value = ('0');                    
                  }

                  var house_standard_deduction =  parseInt(document.calculator.house_standard_deduction.value);

                  var let_out_interest_house_loan = parseInt(document.calculator.let_out_interest_house_loan.value);

                  document.calculator.income_let_out.value = (Math.round(net_rent-(house_standard_deduction+let_out_interest_house_loan)));

                  var income_let_out = parseInt(document.calculator.income_let_out.value);

                  var house = parseInt(document.calculator.interest_house_loan.value);
                  var house_under_2l = parseInt(document.calculator.interest_house_loan.value);

                  if(house > 200000)        // if self house rent goes > 2L it will be reseted to 1.5L
                  {
                    house = 200000;
                    house = -house;           // Convert positive value to negative value
                    house_under_2l = -house_under_2l;
                    document.calculator.house_box.value = (Math.round(house+income_let_out));
                    document.calculator.self_occupied_house.value = (Math.round(house_under_2l));
                  }
                  else
                  {
                    house = -house;
                    document.calculator.house_box.value = (Math.round(house+income_let_out));
                    document.calculator.self_occupied_house.value = (Math.round(house));
                  }

                  // Calculations for capital gains

                  var short_capital = parseInt(document.calculator.short_capital.value);

                  var short_capital_111A = parseInt(document.calculator.short_capital_111A.value);
                  
                  var long_capital_20 = parseInt(document.calculator.long_capital_20.value);

                  var long_capital_10 = parseInt(document.calculator.long_capital_10.value);

                  document.calculator.capital_box.value = (Math.round(short_capital+short_capital_111A+long_capital_20+long_capital_10));

                  // Calculations for other income

                  var other_interest = parseInt(document.calculator.other_interest.value);

                  var other_commission = parseInt(document.calculator.other_commission.value);

                  var other_lottery = parseInt(document.calculator.other_lottery.value);

                  document.calculator.other_box.value = (Math.round(other_interest+other_commission+other_lottery));

                  // Calculations for profit

                  var profit = parseInt(document.calculator.profit.value);

                  document.calculator.profit_box.value = (Math.round(profit));

                  // Calculations for Agriculture

                  var agri = parseInt(document.calculator.agri.value);

                  document.calculator.agri_box.value = (Math.round(agri));

                  // Tax calculations

                  document.calculator.total_short_capital_111A.value = Math.round((short_capital_111A*0.15));

                  document.calculator.long_capital_20_final.value = Math.round((long_capital_20*0.2));

                  document.calculator.long_capital_gain_10.value = Math.round((long_capital_10*0.1));

                  document.calculator.crossword.value = Math.round((other_lottery*0.3));

                  var total_short_capital_111A = parseInt(document.calculator.total_short_capital_111A.value);

                  var long_capital_20_final = parseInt(document.calculator.long_capital_20_final.value);

                  var long_capital_gain_10 = parseInt(document.calculator.long_capital_gain_10.value);

                  var crossword = parseInt(document.calculator.crossword.value);

                  var house_box_value = parseInt(document.calculator.house_box.value);

                  var capital_box_value = parseInt(document.calculator.capital_box.value);

                  var other_box_value = parseInt(document.calculator.other_box.value);

                  var profit_box_value= parseInt(document.calculator.profit_box.value);

                  var agri_box_value = parseInt(document.calculator.agri_box.value);

                  var income = Math.round(salary_box_value+house_box_value+profit_box_value+short_capital+other_interest+other_commission+agri_box_value);

                  var deduction_box = parseInt(document.calculator.deduction_box.value);

                  var income_temp = income;

                  if(income <= 500000 && income > 0)
                  {
                    income = income - 20000;
                  }


                  document.calculator.income.value = Math.round(income-deduction_box);

                  // Calculations for Detections

                  var life_insurance_premium = parseInt(document.calculator.life_insurance_premium.value);

                  var annuity = parseInt(document.calculator.annuity.value);

                  var pf = parseInt(document.calculator.pf.value);

                  var nsc = parseInt(document.calculator.nsc.value);

                  var ulip = parseInt(document.calculator.ulip.value);

                  var mf = parseInt(document.calculator.mf.value);

                  var repayment_house_loan = parseInt(document.calculator.repayment_house_loan.value);

                  var tuition_fee = parseInt(document.calculator.tuition_fee.value);

                  var fixed_deposit = parseInt(document.calculator.fixed_deposit.value);

                  var npf = parseInt(document.calculator.npf.value);

                  var employee_nps = parseInt(document.calculator.employee_nps.value);

                  if(employee_nps > 100000)     // If employee nps value is more than 1L it will reseted to 1L
                  {
                    employee_nps = 100000;
                  }

                  var employer_nps = parseInt(document.calculator.employer_nps.value);

                  var equity_data = Math.round(salary_box_value+house_box_value+capital_box_value+profit_box_value+other_box_value+agri_box_value);

                  var equity = parseInt(document.calculator.equity.value);

                    if(equity >= 50000)
                    {
                      if(equity_data > 1000000)
                      {
                        equity = 25000;
                      }
                      else
                      {
                        equity = 0;
                      }
                    }
                    else
                    {
                      if(equity_data < 1000000)
                      {
                        equity = Math.round((equity/2));
                      }
                      else
                      {
                        equity = 0;
                      }
                    }


                  var other_deduction = parseInt(document.calculator.other_deduction.value);

                  var total_deduction = (Math.round(life_insurance_premium+annuity+pf+nsc+ulip+mf+repayment_house_loan+tuition_fee+fixed_deposit+npf+employee_nps+other_deduction));

                  document.calculator.total_deduction.value = (total_deduction);

                  if(total_deduction > 150000)
                  {
                    total_deduction = 150000;
                    total_deduction = Math.round(total_deduction + employer_nps + equity);   // add employer nsp & equity to total detection after calculations
                    document.calculator.total_deduction.value = (total_deduction);
                  }
                  else
                  {
                    total_deduction = Math.round(total_deduction + employer_nps + equity);   // add employer nsp & equity to total detection after calculations

                    document.calculator.total_deduction.value = (total_deduction);
                  }

                  var medi_claim = parseInt(document.calculator.medi_claim.value);

                  var medi_claim_parent = parseInt(document.calculator.medi_claim_parent.value);

                  if(medi_claim > 15000)    // Maximum medical calim for male  is 15000
                  {
                    medi_claim = 15000;
                  }

                  if(medi_claim_parent > 20000)      // Maximum medical calim for parent is 20000
                  {
                    medi_claim_parent = 20000;
                  }
                
                  var donation = parseInt(document.calculator.donation.value);

                  var political_donation = parseInt(document.calculator.political_donation.value);

                  var rent_paid = parseInt(document.calculator.rent_paid.value);

                  if(rent_paid > 24000)         // Other than who has claimed HRA(Maximum 240000)
                  {
                    rent_paid = 24000;
                  }

                  if(document.getElementById('80dd').checked)
                  {
                    if(document.getElementById('80dd_severe').checked)
                    {
                      var medical_treatment = 100000;
                      document.calculator.medical_treatment.value = (medical_treatment);
                    }
                    else
                    {
                      medical_treatment = 50000;
                      document.calculator.medical_treatment.value = (medical_treatment);  
                    }

                  }
                  else
                  {
                    medical_treatment = 0;
                    document.calculator.medical_treatment.value = (medical_treatment);
                  }

                  var interest_first_home_loan = parseInt(document.calculator.interest_first_home_loan.value);

                  if(interest_first_home_loan > 100000)
                  {
                    interest_first_home_loan = 100000;
                  }

                  var interest_education_loan = parseInt(document.calculator.interest_education_loan.value);

                  if(document.getElementById('80U').checked)
                  {
                    if(document.getElementById('80U_severe').checked)
                    {
                      var disability = 100000;
                      document.calculator.disability.value = (disability);
                    }
                    else
                    {
                      disability = 50000;   
                      document.calculator.disability.value = (disability);  
                    }

                  }
                  else
                  {
                    disability = 0;
                    document.calculator.disability.value = (disability);
                  }

                  var interest_saving_acc = parseInt(document.calculator.interest_saving_acc.value);

                  if(interest_saving_acc > 10000)     // if interest on savings acc more than 10000 it will reseted with 10000
                  {
                    interest_saving_acc = 10000;
                  }

                  var other_deduction_2 = parseInt(document.calculator.other_deduction_2.value);

                  var detection_down = Math.round(medi_claim+medi_claim_parent+donation+political_donation+rent_paid+medical_treatment+interest_first_home_loan+interest_education_loan+disability+interest_saving_acc+other_deduction_2);

                  document.calculator.deduction_box.value = Math.round(total_deduction+detection_down);

                  var income = parseInt(document.calculator.income.value);

                  document.calculator.total_income.value = Math.round((salary_box_value+house_box_value+capital_box_value+profit_box_value+other_box_value+agri_box_value)-deduction_box);

                  if(agri_box_value == 0)
                  {

                    // Normal slab tax calculations

                    if(isNaN(document.calculator.income.value) || income<= "300000")
                    {
                      document.calculator.tax.value = ('0');
                      document.calculator.surcharge.value = ('0');
                      document.calculator.edu.value = ('0'); 
                      document.calculator.hedu.value = ('0'); 
                      document.calculator.total.value = ('0');
                    }
                    else if(income > "300000" && income <= "500000")
                    {
                      
                      var taxable_income = Math.round(income - 300000);

                      var devided_income = Math.round(taxable_income/100);  

                      var tax = Math.round((devided_income*10)+total_short_capital_111A+long_capital_20_final+long_capital_gain_10+crossword); 

                      var edu_tax = Math.round((tax/100)*2);

                      var higher_edu_tax = Math.round((tax/100)*1); 

                      var total = Math.round(tax + edu_tax + higher_edu_tax);

                      document.calculator.tax.value = (tax);
                      document.calculator.surcharge.value = ('0');
                      document.calculator.edu.value = (edu_tax); 
                      document.calculator.hedu.value = (higher_edu_tax); 
                      document.calculator.total.value = (total); 

                    }
                    else if (income > "500000" && income < "1000000") 
                    {
                      //echo "You are come under 5 to 10 Laks Slab<br>";

                      var taxable_income = Math.round(income - 500000);  // Reduct 2L for Non-Taxable + 3L for 2nd slab( 2nd slab tax 30000 will be added manually)

                      var tax = Math.round(((taxable_income/100)*20)+total_short_capital_111A+long_capital_20_final+long_capital_gain_10+crossword);

                      var total_tax = Math.round(tax + 20000); // Tax for 5L< slab + 3L to 5L tax( 20000)

                      var edu_tax = Math.round((total_tax/100)*2);

                      var higher_edu_tax = Math.round((total_tax/100)*1);

                      var total = Math.round(total_tax + edu_tax + higher_edu_tax);

                      document.calculator.tax.value = (total_tax); 
                      document.calculator.surcharge.value = ('0');
                      document.calculator.edu.value = (edu_tax); 
                      document.calculator.hedu.value = (higher_edu_tax); 
                      document.calculator.total.value = (total); 

                    }
                    else 
                    {

                      if(income > 10000000)
                      {
                        var taxable_income = Math.round(income - 1000000);  // Reduct 3L for Non-Taxable + 3L for 2nd slab + 5L for 3rd slab ( 2nd & 3rd slab tax 30000 + 100000 will be added manually)

                        var tax = Math.round(((taxable_income/100)*30)+total_short_capital_111A+long_capital_20_final+long_capital_gain_10+crossword);

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
                      else    // Calculations for value between 10L to 1 crore
                      {

                        var taxable_income = Math.round(income - 1000000);  // Reduct 3L for Non-Taxable + 2L for 2nd slab + 5L for 3rd slab ( 2nd & 3rd slab tax 30000 + 100000 will be added manually)

                        var tax = Math.round(((taxable_income/100)*30)+total_short_capital_111A+long_capital_20_final+long_capital_gain_10+crossword);

                        var total_tax = Math.round(tax + 120000); // Tax for 10L< slab + 2nd and 3rd slab tax

                        var edu_tax = Math.round((total_tax/100)*2);

                        var higher_edu_tax = Math.round((total_tax/100)*1);

                        var total = Math.round(total_tax + edu_tax + higher_edu_tax);

                        document.calculator.tax.value = (total_tax); 
                        document.calculator.surcharge.value = ('0');
                        document.calculator.edu.value = (edu_tax); 
                        document.calculator.hedu.value = (higher_edu_tax); 
                        document.calculator.total.value = (total); 
                      }

                    }  // end of tax slab calculations

                  }   // end of agri_box_value = 0
                  
                else   // calculations for agricultural tax
                  {
                      var income_validate_agri = income - agri_box_value;       // For reseting agriculture value to 0 if income lessthan slab value

                      if(income_validate_agri > 300000)
                      {
                         // Normal slab tax calculations

                         if(isNaN(document.calculator.income.value) || income<= "300000")
                        {
                          document.calculator.tax.value = ('0'); 
                          document.calculator.surcharge.value = ('0');
                          document.calculator.edu.value = ('0'); 
                          document.calculator.hedu.value = ('0'); 
                          document.calculator.total.value = ('0');
                        }
                        else if(income > "300000" && income <= "500000")
                        {
                          
                          var taxable_income = Math.round(income - 300000);

                          var devided_income = Math.round(taxable_income/100);  

                          var tax = Math.round((devided_income*10)+total_short_capital_111A+long_capital_20_final+long_capital_gain_10+crossword); 

                        }
                        else if (income > "500000" && income < "1000000") 
                        {
                          //echo "You are come under 5 to 10 Laks Slab<br>";

                          var taxable_income = Math.round(income - 500000);  // Reduct 3L for Non-Taxable + 2L for 2nd slab( 2nd slab tax 20000 will be added manually)

                          var tax = Math.round(((taxable_income/100)*20)+total_short_capital_111A+long_capital_20_final+long_capital_gain_10+crossword);

                          var tax = Math.round(tax + 20000); // Tax for 5L< slab + 3 to 5L tax( 20000)

                        }
                        else 
                        {
                          //echo "You are come under 10+ Laks Slab";

                          var taxable_income = Math.round(income - 1000000);  // Reduct 3L for Non-Taxable + 2L for 2nd slab + 5L for 3rd slab ( 2nd & 3rd slab tax 20000 + 100000 will be added manually)

                          var tax = Math.round(((taxable_income/100)*30)+total_short_capital_111A+long_capital_20_final+long_capital_gain_10+crossword);

                          var tax = Math.round(tax + 120000); // Tax for 10L< slab + 2nd and 3rd slab tax

                        }  // end of tax slab calculations

                        /* Reduce minimum exceptional amount as per Tax Act. For example if user enter agriculture income as 300000 for the 

                           assessment year 2014-2015. For this assessment year exemption will starting from 2L, so reduce the 2L from Agriculture 

                           income and calculate normal tax calculation for agri income. The final output will be in the difference between 

                           Normal tax calcution amount with agriculture and calcutaion for agricultural tax.

                         */

                        var agri_tax_input = agri_box_value + 300000;   // Exemption on 3L as per slab 

                        if(agri_tax_input <= "300000")
                        {
                          document.calculator.tax.value = ('0'); 
                          document.calculator.surcharge.value = ('0');
                          document.calculator.edu.value = ('0'); 
                          document.calculator.hedu.value = ('0'); 
                          document.calculator.total.value = ('0');
                        }
                        else if(agri_tax_input > "300000" && agri_tax_input <= "500000")
                        {
                          
                          var agri_taxable_income = Math.round(agri_tax_input - 300000);

                          var agri_devided_income = Math.round(agri_taxable_income/100);  

                          var agri_tax = Math.round((agri_devided_income*10)+total_short_capital_111A+long_capital_20_final+long_capital_gain_10+crossword); 

                          agri_tax = tax - agri_tax ;

                          var agri_edu_tax = Math.round((agri_tax/100)*2);

                          var agri_higher_edu_tax = Math.round((agri_tax/100)*1); 

                          var agri_total = Math.round(agri_tax + agri_edu_tax + agri_higher_edu_tax);

                          document.calculator.tax.value = (agri_tax); 
                          document.calculator.surcharge.value = ('0');
                          document.calculator.edu.value = (agri_edu_tax); 
                          document.calculator.hedu.value = (agri_higher_edu_tax); 
                          document.calculator.total.value = (agri_total); 

                        }
                        else if (agri_tax_input > "500000" && agri_tax_input < "1000000") 
                        {

                          var agri_taxable_income = Math.round(agri_tax_input - 500000);  // Reduct 3L for Non-Taxable + 2L for 2nd slab( 2nd slab tax 20000 will be added manually)

                          var agri_tax = Math.round(((agri_taxable_income/100)*20)+total_short_capital_111A+long_capital_20_final+long_capital_gain_10+crossword);

                          agri_tax = agri_tax + 20000;

                          agri_tax = tax - agri_tax ;

                          var agri_total_tax = Math.round(agri_tax); // Tax for 5L< slab + 3 to 5L tax( 20000)

                          var agri_edu_tax = Math.round((agri_total_tax/100)*2);

                          var agri_higher_edu_tax = Math.round((agri_total_tax/100)*1);

                          var agri_total = Math.round(agri_total_tax + agri_edu_tax + agri_higher_edu_tax);

                          document.calculator.tax.value = (agri_total_tax); 
                          document.calculator.surcharge.value = ('0');
                          document.calculator.edu.value = (agri_edu_tax); 
                          document.calculator.hedu.value = (agri_higher_edu_tax); 
                          document.calculator.total.value = (agri_total); 

                        }
                        else 
                        {

                          var agri_taxable_income = Math.round(agri_tax_input - 1000000);  // Reduct 3L for Non-Taxable + 2L for 2nd slab + 5L for 3rd slab ( 2nd & 3rd slab tax 20000 + 100000 will be added manually)

                          var agri_tax = Math.round(((agri_taxable_income/100)*30)+total_short_capital_111A+long_capital_20_final+long_capital_gain_10+crossword);

                          agri_tax = agri_tax + 120000 ;

                          agri_tax = tax - agri_tax ;

                          var agri_total_tax = Math.round(agri_tax); // Tax for 10L< slab + 2nd and 3rd slab tax

                          var agri_edu_tax = Math.round((agri_total_tax/100)*2);

                          var agri_higher_edu_tax = Math.round((agri_total_tax/100)*1);

                          var agri_total = Math.round(agri_total_tax + agri_edu_tax + agri_higher_edu_tax);

                          document.calculator.tax.value = (agri_total_tax); 
                          document.calculator.surcharge.value = ('0');
                          document.calculator.edu.value = (agri_edu_tax); 
                          document.calculator.hedu.value = (agri_higher_edu_tax); 
                          document.calculator.total.value = (agri_total); 

                        }  // end of tax slab calculations

                    }
                    else
                    {
                      document.calculator.tax.value = ('0'); 
                      document.calculator.surcharge.value = ('0');
                      document.calculator.edu.value = ('0'); 
                      document.calculator.hedu.value = ('0'); 
                      document.calculator.total.value = ('0');
                    }
                  

                  } // end of agri_box_value is given 

                }
                if(type=="s_citizen")
                {
                  
                  // Calculations for salary

                  var salary_box_value = parseInt(document.calculator.salary.value);
                  document.calculator.salary_box.value = (Math.round(salary_box_value));

                  //Calculations for income from House Property
                  
                  var let_out_rent = parseInt(document.calculator.let_out_rent.value);
                  var let_out_tax = parseInt(document.calculator.let_out_tax.value);
                  var unreal_rent = parseInt(document.calculator.unreal_rent.value);

                  document.calculator.net_rent.value = (Math.round(let_out_rent-(let_out_tax+unreal_rent)));

                  var net_rent = parseInt(document.calculator.net_rent.value);

                  if(net_rent > 0)
                  {
                    document.calculator.house_standard_deduction.value = (Math.round(net_rent*0.3));
                  }
                  else
                  {
                    document.calculator.house_standard_deduction.value = ('0');                    
                  }

                  var house_standard_deduction =  parseInt(document.calculator.house_standard_deduction.value);

                  var let_out_interest_house_loan = parseInt(document.calculator.let_out_interest_house_loan.value);

                  document.calculator.income_let_out.value = (Math.round(net_rent-(house_standard_deduction+let_out_interest_house_loan)));

                  var income_let_out = parseInt(document.calculator.income_let_out.value);

                  var house = parseInt(document.calculator.interest_house_loan.value);
                  var house_under_2l = parseInt(document.calculator.interest_house_loan.value);

                  if(house > 200000)        // if self house rent goes > 2L it will be reseted to 1.5L
                  {
                    house = 200000;
                    house = -house;           // Convert positive value to negative value
                    house_under_2l = -house_under_2l;
                    document.calculator.house_box.value = (Math.round(house+income_let_out));
                    document.calculator.self_occupied_house.value = (Math.round(house_under_2l));
                  }
                  else
                  {
                    house = -house;
                    document.calculator.house_box.value = (Math.round(house+income_let_out));
                    document.calculator.self_occupied_house.value = (Math.round(house));
                  }

                  // Calculations for capital gains

                  var short_capital = parseInt(document.calculator.short_capital.value);

                  var short_capital_111A = parseInt(document.calculator.short_capital_111A.value);
                  
                  var long_capital_20 = parseInt(document.calculator.long_capital_20.value);

                  var long_capital_10 = parseInt(document.calculator.long_capital_10.value);

                  document.calculator.capital_box.value = (Math.round(short_capital+short_capital_111A+long_capital_20+long_capital_10));

                  // Calculations for other income

                  var other_interest = parseInt(document.calculator.other_interest.value);

                  var other_commission = parseInt(document.calculator.other_commission.value);

                  var other_lottery = parseInt(document.calculator.other_lottery.value);

                  document.calculator.other_box.value = (Math.round(other_interest+other_commission+other_lottery));

                  // Calculations for profit

                  var profit = parseInt(document.calculator.profit.value);

                  document.calculator.profit_box.value = (Math.round(profit));

                  // Calculations for Agriculture

                  var agri = parseInt(document.calculator.agri.value);

                  document.calculator.agri_box.value = (Math.round(agri));

                  // Tax calculations

                  document.calculator.total_short_capital_111A.value = Math.round((short_capital_111A*0.15));

                  document.calculator.long_capital_20_final.value = Math.round((long_capital_20*0.2));

                  document.calculator.long_capital_gain_10.value = Math.round((long_capital_10*0.1));

                  document.calculator.crossword.value = Math.round((other_lottery*0.3));

                  var total_short_capital_111A = parseInt(document.calculator.total_short_capital_111A.value);

                  var long_capital_20_final = parseInt(document.calculator.long_capital_20_final.value);

                  var long_capital_gain_10 = parseInt(document.calculator.long_capital_gain_10.value);

                  var crossword = parseInt(document.calculator.crossword.value);

                  var house_box_value = parseInt(document.calculator.house_box.value);

                  var capital_box_value = parseInt(document.calculator.capital_box.value);

                  var other_box_value = parseInt(document.calculator.other_box.value);

                  var profit_box_value= parseInt(document.calculator.profit_box.value);

                  var agri_box_value = parseInt(document.calculator.agri_box.value);

                  var income = Math.round(salary_box_value+house_box_value+profit_box_value+short_capital+other_interest+other_commission+agri_box_value);

                  var deduction_box = parseInt(document.calculator.deduction_box.value);

                  var income_temp = income;

                  if(income <= 500000 && income > 0)
                  {
                    income = income - 20000;
                  }


                  document.calculator.income.value = Math.round(income-deduction_box);

                  // Calculations for Detections

                  var life_insurance_premium = parseInt(document.calculator.life_insurance_premium.value);

                  var annuity = parseInt(document.calculator.annuity.value);

                  var pf = parseInt(document.calculator.pf.value);

                  var nsc = parseInt(document.calculator.nsc.value);

                  var ulip = parseInt(document.calculator.ulip.value);

                  var mf = parseInt(document.calculator.mf.value);

                  var repayment_house_loan = parseInt(document.calculator.repayment_house_loan.value);

                  var tuition_fee = parseInt(document.calculator.tuition_fee.value);

                  var fixed_deposit = parseInt(document.calculator.fixed_deposit.value);

                  var npf = parseInt(document.calculator.npf.value);

                  var employee_nps = parseInt(document.calculator.employee_nps.value);

                  if(employee_nps > 100000)     // If employee nps value is more than 1L it will reseted to 1L
                  {
                    employee_nps = 100000;
                  }

                  var employer_nps = parseInt(document.calculator.employer_nps.value);

                  var equity_data = Math.round(salary_box_value+house_box_value+capital_box_value+profit_box_value+other_box_value+agri_box_value);

                  var equity = parseInt(document.calculator.equity.value);

                    if(equity >= 50000)
                    {
                      if(equity_data > 1000000)
                      {
                        equity = 25000;
                      }
                      else
                      {
                        equity = 0;
                      }
                    }
                    else
                    {
                      if(equity_data < 1000000)
                      {
                        equity = Math.round((equity/2));
                      }
                      else
                      {
                        equity = 0;
                      }
                    }


                  var other_deduction = parseInt(document.calculator.other_deduction.value);

                  var total_deduction = (Math.round(life_insurance_premium+annuity+pf+nsc+ulip+mf+repayment_house_loan+tuition_fee+fixed_deposit+npf+employee_nps+other_deduction));

                  document.calculator.total_deduction.value = (total_deduction);

                  if(total_deduction > 150000)
                  {
                    total_deduction = 150000;
                    total_deduction = Math.round(total_deduction + employer_nps + equity);   // add employer nsp & equity to total detection after calculations
                    document.calculator.total_deduction.value = (total_deduction);
                  }
                  else
                  {
                    total_deduction = Math.round(total_deduction + employer_nps + equity);   // add employer nsp & equity to total detection after calculations

                    document.calculator.total_deduction.value = (total_deduction);
                  }

                  var medi_claim = parseInt(document.calculator.medi_claim.value);

                  var medi_claim_parent = parseInt(document.calculator.medi_claim_parent.value);

                  if(medi_claim > 15000)    // Maximum medical calim for male  is 15000
                  {
                    medi_claim = 15000;
                  }

                  if(medi_claim_parent > 20000)      // Maximum medical calim for parent is 20000
                  {
                    medi_claim_parent = 20000;
                  }
                
                  var donation = parseInt(document.calculator.donation.value);

                  var political_donation = parseInt(document.calculator.political_donation.value);

                  var rent_paid = parseInt(document.calculator.rent_paid.value);

                  if(rent_paid > 24000)         // Other than who has claimed HRA(Maximum 240000)
                  {
                    rent_paid = 24000;
                  }

                  if(document.getElementById('80dd').checked)
                  {
                    if(document.getElementById('80dd_severe').checked)
                    {
                      var medical_treatment = 100000;
                      document.calculator.medical_treatment.value = (medical_treatment);
                    }
                    else
                    {
                      medical_treatment = 50000;
                      document.calculator.medical_treatment.value = (medical_treatment);  
                    }

                  }
                  else
                  {
                    medical_treatment = 0;
                    document.calculator.medical_treatment.value = (medical_treatment);
                  }

                  var interest_first_home_loan = parseInt(document.calculator.interest_first_home_loan.value);

                  if(interest_first_home_loan > 100000)
                  {
                    interest_first_home_loan = 100000;
                  }

                  var interest_education_loan = parseInt(document.calculator.interest_education_loan.value);

                  if(document.getElementById('80U').checked)
                  {
                    if(document.getElementById('80U_severe').checked)
                    {
                      var disability = 100000;
                      document.calculator.disability.value = (disability);
                    }
                    else
                    {
                      disability = 50000;   
                      document.calculator.disability.value = (disability);  
                    }

                  }
                  else
                  {
                    disability = 0;
                    document.calculator.disability.value = (disability);
                  }

                  var interest_saving_acc = parseInt(document.calculator.interest_saving_acc.value);

                  if(interest_saving_acc > 10000)     // if interest on savings acc more than 10000 it will reseted with 10000
                  {
                    interest_saving_acc = 10000;
                  }

                  var other_deduction_2 = parseInt(document.calculator.other_deduction_2.value);

                  var detection_down = Math.round(medi_claim+medi_claim_parent+donation+political_donation+rent_paid+medical_treatment+interest_first_home_loan+interest_education_loan+disability+interest_saving_acc+other_deduction_2);

                  document.calculator.deduction_box.value = Math.round(total_deduction+detection_down);

                  var income = parseInt(document.calculator.income.value);

                  document.calculator.total_income.value = Math.round((salary_box_value+house_box_value+capital_box_value+profit_box_value+other_box_value+agri_box_value)-deduction_box);

                  if(agri_box_value == 0)
                  {

                    // Normal slab tax calculations

                    if(isNaN(document.calculator.income.value) || income<= "500000")
                    {
                      document.calculator.tax.value = ('0');
                      document.calculator.surcharge.value = ('0');
                      document.calculator.edu.value = ('0'); 
                      document.calculator.hedu.value = ('0'); 
                      document.calculator.total.value = ('0');
                    }
                    else if (income > "500000" && income < "1000000") 
                    {
                      //echo "You are come under 5 to 10 Laks Slab<br>";

                      var taxable_income = Math.round(income - 500000);  // Reduct 2L for Non-Taxable + 3L for 2nd slab( 2nd slab tax 30000 will be added manually)

                      var tax = Math.round(((taxable_income/100)*20)+total_short_capital_111A+long_capital_20_final+long_capital_gain_10+crossword);

                      var total_tax = Math.round(tax); // Tax for 5L< slab + 3L to 5L tax( 20000)

                      var edu_tax = Math.round((total_tax/100)*2);

                      var higher_edu_tax = Math.round((total_tax/100)*1);

                      var total = Math.round(total_tax + edu_tax + higher_edu_tax);

                      document.calculator.tax.value = (total_tax); 
                      document.calculator.surcharge.value = ('0');
                      document.calculator.edu.value = (edu_tax); 
                      document.calculator.hedu.value = (higher_edu_tax); 
                      document.calculator.total.value = (total); 

                    }
                    else 
                    {

                      if(income > 10000000)
                      {
                        var taxable_income = Math.round(income - 1000000);  // Reduct 3L for Non-Taxable + 3L for 2nd slab + 5L for 3rd slab ( 2nd & 3rd slab tax 30000 + 100000 will be added manually)

                        var tax = Math.round(((taxable_income/100)*30)+total_short_capital_111A+long_capital_20_final+long_capital_gain_10+crossword);

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
                      else    // Calculations for value between 10L to 1 crore
                      {

                        var taxable_income = Math.round(income - 1000000);  // Reduct 3L for Non-Taxable + 2L for 2nd slab + 5L for 3rd slab ( 2nd & 3rd slab tax 30000 + 100000 will be added manually)

                        var tax = Math.round(((taxable_income/100)*30)+total_short_capital_111A+long_capital_20_final+long_capital_gain_10+crossword);

                        var total_tax = Math.round(tax + 100000); // Tax for 10L< slab + 2nd and 3rd slab tax

                        var edu_tax = Math.round((total_tax/100)*2);

                        var higher_edu_tax = Math.round((total_tax/100)*1);

                        var total = Math.round(total_tax + edu_tax + higher_edu_tax);

                        document.calculator.tax.value = (total_tax); 
                        document.calculator.surcharge.value = ('0');
                        document.calculator.edu.value = (edu_tax); 
                        document.calculator.hedu.value = (higher_edu_tax); 
                        document.calculator.total.value = (total); 
                      }

                    }  // end of tax slab calculations

                  }   // end of agri_box_value = 0
                  
                else   // calculations for agricultural tax
                  {
                      var income_validate_agri = income - agri_box_value;       // For reseting agriculture value to 0 if income lessthan slab value

                      if(income_validate_agri > 500000)
                      {
                         // Normal slab tax calculations

                         if(isNaN(document.calculator.income.value) || income<= "500000")
                        {
                          document.calculator.tax.value = ('0'); 
                          document.calculator.surcharge.value = ('0');
                          document.calculator.edu.value = ('0'); 
                          document.calculator.hedu.value = ('0'); 
                          document.calculator.total.value = ('0');
                        }
                        else if (income > "500000" && income < "1000000") 
                        {
                          //echo "You are come under 5 to 10 Laks Slab<br>";

                          var taxable_income = Math.round(income - 500000);  // Reduct 3L for Non-Taxable + 2L for 2nd slab( 2nd slab tax 20000 will be added manually)

                          var tax = Math.round(((taxable_income/100)*20)+total_short_capital_111A+long_capital_20_final+long_capital_gain_10+crossword);

                          var tax = Math.round(tax); // Tax for 5L< slab + 3 to 5L tax( 20000)

                        }
                        else 
                        {
                          //echo "You are come under 10+ Laks Slab";

                          var taxable_income = Math.round(income - 1000000);  // Reduct 3L for Non-Taxable + 2L for 2nd slab + 5L for 3rd slab ( 2nd & 3rd slab tax 20000 + 100000 will be added manually)

                          var tax = Math.round(((taxable_income/100)*30)+total_short_capital_111A+long_capital_20_final+long_capital_gain_10+crossword);

                          var tax = Math.round(tax + 100000); // Tax for 10L< slab + 2nd and 3rd slab tax

                        }  // end of tax slab calculations

                        /* Reduce minimum exceptional amount as per Tax Act. For example if user enter agriculture income as 300000 for the 

                           assessment year 2014-2015. For this assessment year exemption will starting from 2L, so reduce the 2L from Agriculture 

                           income and calculate normal tax calculation for agri income. The final output will be in the difference between 

                           Normal tax calcution amount with agriculture and calcutaion for agricultural tax.

                         */

                        var agri_tax_input = agri_box_value + 500000;   // Exemption on 3L as per slab 

                        if(agri_tax_input <= "500000")
                        {
                          document.calculator.tax.value = ('0'); 
                          document.calculator.surcharge.value = ('0');
                          document.calculator.edu.value = ('0'); 
                          document.calculator.hedu.value = ('0'); 
                          document.calculator.total.value = ('0');
                        }
                        else if (agri_tax_input > "500000" && agri_tax_input < "1000000") 
                        {

                          var agri_taxable_income = Math.round(agri_tax_input - 500000);  // Reduct 3L for Non-Taxable + 2L for 2nd slab( 2nd slab tax 20000 will be added manually)

                          var agri_tax = Math.round(((agri_taxable_income/100)*20)+total_short_capital_111A+long_capital_20_final+long_capital_gain_10+crossword);

                          agri_tax = agri_tax;

                          agri_tax = tax - agri_tax ;

                          var agri_total_tax = Math.round(agri_tax); // Tax for 5L< slab + 3 to 5L tax( 20000)

                          var agri_edu_tax = Math.round((agri_total_tax/100)*2);

                          var agri_higher_edu_tax = Math.round((agri_total_tax/100)*1);

                          var agri_total = Math.round(agri_total_tax + agri_edu_tax + agri_higher_edu_tax);

                          document.calculator.tax.value = (agri_total_tax); 
                          document.calculator.surcharge.value = ('0');
                          document.calculator.edu.value = (agri_edu_tax); 
                          document.calculator.hedu.value = (agri_higher_edu_tax); 
                          document.calculator.total.value = (agri_total); 

                        }
                        else 
                        {

                          var agri_taxable_income = Math.round(agri_tax_input - 1000000);  // Reduct 3L for Non-Taxable + 2L for 2nd slab + 5L for 3rd slab ( 2nd & 3rd slab tax 20000 + 100000 will be added manually)

                          var agri_tax = Math.round(((agri_taxable_income/100)*30)+total_short_capital_111A+long_capital_20_final+long_capital_gain_10+crossword);

                          agri_tax = agri_tax + 100000 ;

                          agri_tax = tax - agri_tax ;

                          var agri_total_tax = Math.round(agri_tax); // Tax for 10L< slab + 2nd and 3rd slab tax

                          var agri_edu_tax = Math.round((agri_total_tax/100)*2);

                          var agri_higher_edu_tax = Math.round((agri_total_tax/100)*1);

                          var agri_total = Math.round(agri_total_tax + agri_edu_tax + agri_higher_edu_tax);

                          document.calculator.tax.value = (agri_total_tax); 
                          document.calculator.surcharge.value = ('0');
                          document.calculator.edu.value = (agri_edu_tax); 
                          document.calculator.hedu.value = (agri_higher_edu_tax); 
                          document.calculator.total.value = (agri_total); 

                        }  // end of tax slab calculations

                    }
                    else
                    {
                      document.calculator.tax.value = ('0'); 
                      document.calculator.surcharge.value = ('0');
                      document.calculator.edu.value = ('0'); 
                      document.calculator.hedu.value = ('0'); 
                      document.calculator.total.value = ('0');
                    }
                  

                  } // end of agri_box_value is given 

                }                            
              }

            else if(payer=="apo")
            {
              var income = parseInt(document.calculator.income.value);
              
              if(isNaN(document.calculator.income.value) || income<= "250000")
              {
                var output = 0; 
                document.calculator.tax.value = (output); 
                document.calculator.edu.value = (output); 
                document.calculator.hedu.value = (output); 
                document.calculator.total.value = (output); 
              }
              else if(income > "250000" && income <= "500000")
              {
            
                var taxable_income = Math.round(income - 250000);

                var devided_income = Math.round(taxable_income/100);  

                var tax = Math.round(devided_income*10); 

                var edu_tax = Math.round((tax/100)*2);

                var higher_edu_tax = Math.round((tax/100)*1); 

                var total = Math.round(tax + edu_tax + higher_edu_tax);

                document.calculator.tax.value = (tax); 
                document.calculator.edu.value = (edu_tax); 
                document.calculator.hedu.value = (higher_edu_tax); 
                document.calculator.total.value = (total); 

              }
              else if (income > "500000" && income < "1000000") 
              {

                var taxable_income = Math.round(income - 500000);  // Reduct 2.5L for Non-Taxable + 2.5L for 2nd slab( 2nd slab tax 25000 will be added manually)

                var tax = Math.round((taxable_income/100)*20);

                var total_tax = Math.round(tax + 25000); // Tax for 5L< slab + 2.5 to 5L tax( 25000)

                var edu_tax = Math.round((total_tax/100)*2);

                var higher_edu_tax = Math.round((total_tax/100)*1);

                var total = Math.round(total_tax + edu_tax + higher_edu_tax);

                document.calculator.tax.value = (total_tax); 
                document.calculator.edu.value = (edu_tax); 
                document.calculator.hedu.value = (higher_edu_tax); 
                document.calculator.total.value = (total); 

              }
              else 
              {
                if(income > 10000000)
                {
                  var taxable_income = Math.round(income - 1000000);  // Reduct 2.5L for Non-Taxable + 2.5L for 2nd slab + 5L for 3rd slab ( 2nd & 3rd slab tax 30000 + 100000 will be added manually)

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
                  document.calculator.surcharge.value = ('0');
                  document.calculator.edu.value = (edu_tax); 
                  document.calculator.hedu.value = (higher_edu_tax); 
                  document.calculator.total.value = (total); 
                }

              }
            }     // end of apo
              
            else if(payer=="huf")
            {
              var income = parseInt(document.calculator.income.value);
              
              if(isNaN(document.calculator.income.value) || income<= "250000")
              {
                var output = 0; 
                document.calculator.tax.value = (output); 
                document.calculator.edu.value = (output); 
                document.calculator.hedu.value = (output); 
                document.calculator.total.value = (output); 
              }
              else if(income > "250000" && income <= "500000")
              {
            
                var taxable_income = Math.round(income - 250000);

                var devided_income = Math.round(taxable_income/100);  

                var tax = Math.round(devided_income*10); 

                var edu_tax = Math.round((tax/100)*2);

                var higher_edu_tax = Math.round((tax/100)*1); 

                var total = Math.round(tax + edu_tax + higher_edu_tax);

                document.calculator.tax.value = (tax); 
                document.calculator.edu.value = (edu_tax); 
                document.calculator.hedu.value = (higher_edu_tax); 
                document.calculator.total.value = (total); 

              }
              else if (income > "500000" && income < "1000000") 
              {

                var taxable_income = Math.round(income - 500000);  // Reduct 2.5L for Non-Taxable + 2.5L for 2nd slab( 2nd slab tax 25000 will be added manually)

                var tax = Math.round((taxable_income/100)*20);

                var total_tax = Math.round(tax + 25000); // Tax for 5L< slab + 2.5 to 5L tax( 25000)

                var edu_tax = Math.round((total_tax/100)*2);

                var higher_edu_tax = Math.round((total_tax/100)*1);

                var total = Math.round(total_tax + edu_tax + higher_edu_tax);

                document.calculator.tax.value = (total_tax); 
                document.calculator.edu.value = (edu_tax); 
                document.calculator.hedu.value = (higher_edu_tax); 
                document.calculator.total.value = (total); 

              }
              else 
              {
                if(income > 10000000)
                {
                  var taxable_income = Math.round(income - 1000000);  // Reduct 2.5L for Non-Taxable + 2.5L for 2nd slab + 5L for 3rd slab ( 2nd & 3rd slab tax 30000 + 100000 will be added manually)

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
                  document.calculator.surcharge.value = ('0');
                  document.calculator.edu.value = (edu_tax); 
                  document.calculator.hedu.value = (higher_edu_tax); 
                  document.calculator.total.value = (total); 
                }

              }
            }     // end of huf calculations

            else if(payer=="society")
              {
                var income = parseInt(document.calculator.income.value);
                if(income < 10000)
                  {
                    var tax = (income/100)*10;

                    var edu_tax = (tax/100)*2;

                    var higher_edu_tax = (tax/100)*1;

                    var total = tax + edu_tax + higher_edu_tax;
                    
                    document.calculator.tax.value = (Math.round(tax)); 
                     document.calculator.edu.value = (Math.round(edu_tax)); 
                     document.calculator.hedu.value = (Math.round(higher_edu_tax)); 
                     document.calculator.total.value = (Math.round(total)); 


                  } // end of 10000 slab

                  else if(income > '10000' && income < '20000')
                  {

                    var taxable_income = income - 10000;  // Reduct 10K from 1st slab

                    var tax = (taxable_income/100)*20;

                    var total_tax = tax + 1000; // Tax for 10L< slab + 1st slab tax (1000)

                    var edu_tax = (total_tax/100)*2;

                    var higher_edu_tax = (total_tax/100)*1;

                    var total = total_tax + edu_tax + higher_edu_tax;

                    document.calculator.tax.value = (Math.round(total_tax)); 
                     document.calculator.edu.value = (Math.round(edu_tax)); 
                     document.calculator.hedu.value = (Math.round(higher_edu_tax)); 
                     document.calculator.total.value = (Math.round(total)); 

                  } // end of 20000 slab

                  else
                  {

                    if(income > 10000000)
                    {
                      var taxable_income = income - 20000;  // Reduct 20K from 1st and 2nd slab

                      var tax = Math.round((taxable_income/100)*30);

                      var total_tax = tax + 3000; // Tax for 20L< slab + 1st and 2nd slab tax (1000 + 2000)

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

                      var taxable_income = income - 20000;  // Reduct 20K from 1st and 2nd slab

                      var tax = Math.round((taxable_income/100)*30);

                      var total_tax = tax + 3000; // Tax for 20L< slab + 1st and 2nd slab tax (1000 + 2000)

                      var edu_tax = Math.round((total_tax/100)*2);

                      var higher_edu_tax = Math.round((total_tax/100)*1);

                      var total = Math.round(total_tax + edu_tax + higher_edu_tax);

                      document.calculator.tax.value = (total_tax); 
                      document.calculator.surcharge.value = ('0');
                      document.calculator.edu.value = (edu_tax); 
                      document.calculator.hedu.value = (higher_edu_tax); 
                      document.calculator.total.value = (total); 
                    }

                  } // end of 20K plus slab
                
              }     // end of society calculations

            else if(payer=="foreign_company")
              {
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
                
              }   // end of foreign company calculations

              else if(payer=="company")
              {
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

            else if(payer=="company")
              {
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
            else
              {
                var income = parseInt(document.calculator.income.value);
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

              }   // End of other calculations   
          } // End of 2015-2016 year
  } 