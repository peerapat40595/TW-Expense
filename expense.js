// $('#expenses_action_buttons > div > button')[0].click();
// merchant
$("#newExpense3_expenseForm > ol > li.merchantRow > input").val(merchant);
// total
$("#newExpense3_oneExpense_amount").val(total);

// Currency
$('#newExpense3_expenseForm > ol > li:nth-child(4) > span > div > div > button').click();
$('#newExpense3_expenseForm > ol > li:nth-child(4) > span > div > div > ul > li > a:contains('+'THB'+')')[0].click();

$("#newExpense3_oneExpense_reimbursable").prop("checked", true);
$("#newExpense3_oneExpense_billable").prop("checked", false);

// category
$('#newExpense3_expenseForm > ol > li:nth-child(9) > span > div > div > button').click();
$('#newExpense3_expenseForm > ol > li:nth-child(9) > span > div > div > ul > li > a:contains('+category+')')[0].click();

//project
$('#newExpense3_expenseForm > ol > li:nth-child(11) > span > div > div > button').click();
$('#newExpense3_expenseForm > ol > li:nth-child(11) > span > div > div > ul > li > a:contains('+project+')')[0].click();

//Milestone
$('#newExpense3_expenseForm > ol > li:nth-child(12) > span > div > div > button').click();
$('#newExpense3_expenseForm > ol > li:nth-child(12) > span > div > div > ul > li > a:contains('+milestone+')')[0].click();

//comment
$('#newExpense3_expenseForm > ol > li:nth-child(13) > input[type="text"]').val(
  comment
);