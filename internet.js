
// Internet
var merchant = "Triple T Internet"
var total = 1284
var category = "High Speed Internet"
var account = "TW Core Business"
var opportunity = "People Support & Development"
var project = "People Support & Development"
var subProject = "TWer benefit (Expenses only)"
var comment = "Telephone"

// merchant
$("#newExpense3_expenseForm > ol > li.merchantRow > input").val(merchant);
// total
$("#newExpense3_oneExpense_amount").val(total);
$("#newExpense3_oneExpense_currency").val("THB");
$("#newExpense3_oneExpense_reimbursable").prop("checked", true);
$("#newExpense3_oneExpense_billable").prop("checked", false);

// category
$('#newExpense3_expenseForm > ol > li:nth-child(9) > span > div > div > button').click();
$('#newExpense3_expenseForm > ol > li:nth-child(9) > span > div > div > ul > li > a:contains('+category+')')[0].click();

//account
$('#newExpense3_expenseForm > ol > li:nth-child(10) > span > div > div > button').click();
$('#newExpense3_expenseForm > ol > li:nth-child(10) > span > div > div > ul > li > a:contains('+account+')')[0].click();

//opportunity
$('#newExpense3_expenseForm > ol > li:nth-child(11) > span > div > div > button').click();
$('#newExpense3_expenseForm > ol > li:nth-child(11) > span > div > div > ul > li > a:contains('+opportunity+')')[0].click();

//project
$('#newExpense3_expenseForm > ol > li:nth-child(12) > span > div > div > button').click();
$('#newExpense3_expenseForm > ol > li:nth-child(12) > span > div > div > ul > li > a:contains('+project+')')[0].click();

//sub-project
$('#newExpense3_expenseForm > ol > li:nth-child(13) > span > div > div > button').click();
$('#newExpense3_expenseForm > ol > li:nth-child(13) > span > div > div > ul > li > a:contains('+subProject+')')[0].click();

//comment
$('#newExpense3_expenseForm > ol > li:nth-child(14) > input[type="text"]').val(
  comment
);
