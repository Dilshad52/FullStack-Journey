let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

displayExpenses();

function saveData(){

localStorage.setItem("expenses", JSON.stringify(expenses));

}

function addExpense(){

let title=document.getElementById("title").value.trim();

let amount=document.getElementById("amount").value.trim();

if(title===""||amount===""){

alert("Please fill all fields.");

return;

}

expenses.push({

title:title,

amount:Number(amount)

});

saveData();

displayExpenses();

document.getElementById("title").value="";

document.getElementById("amount").value="";

}

function displayExpenses(list=expenses){

let table=document.getElementById("expenseTable");

table.innerHTML="";

let total=0;

for(let i=0;i<list.length;i++){

total+=list[i].amount;

table.innerHTML+=`

<tr>

<td>${list[i].title}</td>

<td>₹${list[i].amount}</td>

<td>

<button class="editBtn" onclick="editExpense(${expenses.indexOf(list[i])})">

Edit

</button>

<button class="deleteBtn" onclick="deleteExpense(${expenses.indexOf(list[i])})">

Delete

</button>

</td>

</tr>

`;

}

document.getElementById("total").innerHTML="Total : ₹"+total;

}

function deleteExpense(index){

expenses.splice(index,1);

saveData();

displayExpenses();

}

function editExpense(index){

let newTitle=prompt("Enter New Title",expenses[index].title);

let newAmount=prompt("Enter New Amount",expenses[index].amount);

if(newTitle!==null && newAmount!==null){

expenses[index].title=newTitle;

expenses[index].amount=Number(newAmount);

saveData();

displayExpenses();

}

}

function clearAll(){

if(confirm("Delete all expenses?")){

expenses=[];

saveData();

displayExpenses();

}

}

function searchExpense(){

let keyword=document.getElementById("search").value.toLowerCase();

let filtered=expenses.filter(function(expense){

return expense.title.toLowerCase().includes(keyword);

});

displayExpenses(filtered);

}