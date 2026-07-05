let expenses = [];

function addExpense(){

    let title = document.getElementById("title").value.trim();

    let amount = document.getElementById("amount").value.trim();

    if(title === "" || amount === ""){

        alert("Please fill all fields.");

        return;

    }

    let expense = {

        title: title,

        amount: amount

    };

    expenses.push(expense);

    displayExpenses();

    document.getElementById("title").value = "";

    document.getElementById("amount").value = "";

}

function displayExpenses(){

    let table = document.getElementById("expenseTable");

    table.innerHTML = "";

    for(let i = 0; i < expenses.length; i++){

        table.innerHTML += `

        <tr>

            <td>${expenses[i].title}</td>

            <td>₹${expenses[i].amount}</td>

        </tr>

        `;

    }

}
