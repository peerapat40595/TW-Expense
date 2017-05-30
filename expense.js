
// Internet
var merchant = "Triple T Internet"
var total = 1284
var category = "High Speed Internet"
var account = "TW Core Business"
var opportunity = "People Support & Development"
var project = "People Support & Development"
var subProject = "TWer benefit (Expenses only)"
var comment = "High Speed Internet 05/08/17 - 04/09/17"

// Telephone
var merchant = "Dtac"
var total = 373.43
var category = "Telephone"
var account = "TW Core Business"
var opportunity = "People Support & Development"
var project = "People Support & Development"
var subProject = "TWer benefit (Expenses only)"
var comment = "Telephone 11/08/17 - 10/09/17"

// Currency Conversion Fees
var merchant = "Currency Conversion Fees"
var total = 1
var category = "Fees and Other Charges"
var account = "TW Core Business"
var opportunity = "People Support & Development"
var project = "People Support & Development"
var subProject = "TWer benefit (Expenses only)"
var comment = "5% currency conversion fees from SGD to THB"

// Training or Conference
var merchant = "Event Pop"
var total = 1
var category = "Training/Education"
// var category = "Books"
var account = "TW Core Business"
var opportunity = "People Support & Development"
var project = "People Support & Development"
var subProject = "TWer benefit (Expenses only)"
var comment = "AI Meetup #3 - AI First!"

// Event or Taxi to client
var merchant = "Depends"
var total = 1
var category = "Conference"
// var category = "Local Transportation"
// var category = "Office Supplies"
// var category = "Business Meals"
var account = "TW Investment"
var opportunity = "Thailand"
var project = "Thailand"
var subProject = "Business As Usual"
var comment = "Food for Evolutionary Architecture Event 03/04/17"

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
