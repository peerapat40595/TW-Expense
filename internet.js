// merchant
var merchant = "Triple T Internet"
$("#newExpense3_expenseForm > ol > li.merchantRow > input").val(merchant);
// total
var total = 1284
$("#newExpense3_oneExpense_amount").val(total);
$("#newExpense3_oneExpense_currency").val("THB");
$("#newExpense3_oneExpense_reimbursable").prop("checked", true);
$("#newExpense3_oneExpense_billable").prop("checked", false);

// category
var category = "High Speed Internet"
$('#newExpense3_expenseForm > ol > li:nth-child(9) > span > div > div > button').click();
$('#newExpense3_expenseForm > ol > li:nth-child(9) > span > div > div > ul > li > a:contains('+category+')')[0].click();

//account
var account = "TW Core Business"
$('#newExpense3_expenseForm > ol > li:nth-child(10) > span > div > div > button').click();
$('#newExpense3_expenseForm > ol > li:nth-child(10) > span > div > div > ul > li > a:contains('+account+')')[0].click();

//opportunity
var opportunity = "People Support & Development"
$('#newExpense3_expenseForm > ol > li:nth-child(11) > span > div > div > button').click();
$('#newExpense3_expenseForm > ol > li:nth-child(11) > span > div > div > ul > li > a:contains('+opportunity+')')[0].click();

//project
var project = "People Support & Development"
$('#newExpense3_expenseForm > ol > li:nth-child(12) > span > div > div > button').click();
$('#newExpense3_expenseForm > ol > li:nth-child(12) > span > div > div > ul > li > a:contains('+project+')')[0].click();

//sub-project
var subProject = "TWer benefit (Expenses only)"
$('#newExpense3_expenseForm > ol > li:nth-child(13) > span > div > div > button').click();
$('#newExpense3_expenseForm > ol > li:nth-child(13) > span > div > div > ul > li > a:contains('+subProject+')')[0].click();

//comment
var comment = "Telephone"
$('#newExpense3_expenseForm > ol > li:nth-child(14) > input[type="text"]').val(
  "Internet 05/04/17 - 04/05/17"
);
