let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

function save(){
localStorage.setItem("expenses", JSON.stringify(expenses));
}

function render(){

let list = document.getElementById("list");
list.innerHTML = "";

let total = 0;

expenses.forEach(e=>{

let li = document.createElement("li");
li.textContent = e.desc + " - ₱" + e.amount;

list.appendChild(li);

total += Number(e.amount);

});

document.getElementById("total").textContent = total;

}

function addExpense(){

let desc = document.getElementById("desc").value;
let amount = document.getElementById("amount").value;

if(desc=="" || amount=="") return;

expenses.push({
desc:desc,
amount:amount
});

save();
render();

document.getElementById("desc").value="";
document.getElementById("amount").value="";
}

render();