$("#page_expenses > a").click();
$("#expenses_action_buttons > div > button").click();
$("#expenses_action_buttons > div > button").click().delay(2000);

// Internet
$("#newExpense3_expenseForm > ol > li.merchantRow > input").val(
  "Triple T Internet"
);
$("#newExpense3_oneExpense_amount").val("1284");
$("#newExpense3_oneExpense_currency").val("THB");
$("#newExpense3_oneExpense_reimbursable").prop("checked", true);
$("#newExpense3_oneExpense_billable").prop("checked", false);
$('#newExpense3_expenseForm > ol > li:nth-child(11) > input[type="text"]').val(
  "Internet 05/04/17 - 04/05/17"
);

// Telephone
$("#newExpense3_expenseForm > ol > li.merchantRow > input").val("Dtac");
$("#newExpense3_oneExpense_amount").val("373.43");
$("#newExpense3_oneExpense_currency").val("THB");
$("#newExpense3_oneExpense_reimbursable").prop("checked", true);
$("#newExpense3_oneExpense_billable").prop("checked", false);
$('#newExpense3_expenseForm > ol > li:nth-child(11) > input[type="text"]').val(
  "Telephone 11/04/17 - 10/05/17"
);

// Covertion fee
$("#newExpense3_expenseForm > ol > li.merchantRow > input").val(
  "Currency Conversion Fees"
);
$("#newExpense3_oneExpense_amount").val("1");
$("#newExpense3_oneExpense_currency").val("THB");
$("#newExpense3_oneExpense_reimbursable").prop("checked", true);
$("#newExpense3_oneExpense_billable").prop("checked", false);
$('#newExpense3_expenseForm > ol > li:nth-child(11) > input[type="text"]').val(
  "5% currency conversion fees from SGD to THB"
);
