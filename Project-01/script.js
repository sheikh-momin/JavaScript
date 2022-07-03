window.onload = () => {
    main();
}

function main() {
    const income = document.getElementById('income').value
    const food = document.getElementById('food').value
    const rent = document.getElementById('rent').value
    const clothes = document.getElementById('clothes').value
    const calculateBtn = document.getElementById('calculate-btn')
    const totalExpenses = document.getElementById('total-expenses')
    const totalBalance = document.getElementById('balance')






    calculateBtn.addEventListener('click', function() {

        const expenses = food + rent + clothes;
        const calculateBalance = income - expenses;

        totalExpenses.innerHTML = expenses;
        totalBalance.innerHTML = calculateBalance;
        income.value = ''
        console.log('clicked..')
    })

}