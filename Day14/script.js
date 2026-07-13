let expenses = [];

function addExpense(){

    let title = document.getElementById("title").value.trim();
    let amount = document.getElementById("amount").value.trim();

    if(title === "" || amount === ""){

        alert("Please fill all fields.");
        return;

    }

    expenses.push({

        title:title,
        amount:Number(amount)

    });

    displayExpenses();

    document.getElementById("title").value="";
    document.getElementById("amount").value="";

}

function displayExpenses(){

    let table=document.getElementById("expenseTable");

    table.innerHTML="";

    let total=0;

    for(let i=0;i<expenses.length;i++){

        total += expenses[i].amount;

        table.innerHTML +=`

        <tr>

            <td>${expenses[i].title}</td>

            <td>₹${expenses[i].amount}</td>

            <td>

                <button class="editBtn" onclick="editExpense(${i})">

                    Edit

                </button>

                <button class="deleteBtn" onclick="deleteExpense(${i})">

                    Delete

                </button>

            </td>

        </tr>

        `;

    }

    document.getElementById("total").innerHTML="Total: ₹"+total;

}

function deleteExpense(index){

    expenses.splice(index,1);

    displayExpenses();

}

function editExpense(index){

    let newTitle = prompt("Enter New Title",expenses[index].title);

    let newAmount = prompt("Enter New Amount",expenses[index].amount);

    if(newTitle!==null && newAmount!==null){

        expenses[index].title=newTitle;

        expenses[index].amount=Number(newAmount);

        displayExpenses();

    }

}