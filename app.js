
let searchBtn = document.getElementById('searchBtn');

class CalculatePay{
    constructor(cashTip,creditTip,hoursWorked,pay,employeesWorked){
        this.cashTip = cashTip;
        this.creditTip = creditTip;
        this.hoursWorked = hoursWorked;
        this.pay = pay;
        this.employeesWorked = employeesWorked
    }
}



searchBtn.addEventListener('click', function (e) {
    e.preventDefault();
    let cashTip = document.getElementById('cashTip').value;
    let creditTip = document.getElementById('creditTip').value;
    let hoursWorked = document.getElementById('hoursWorked').value;
    let pay = document.getElementById('pay').value;
    let employeesWorked = document.getElementById('employeesWorked').value;

    const finalPay = new CalculatePay(cashTip,creditTip,hoursWorked,pay,employeesWorked);

    const basePay = (finalPay.hoursWorked) * (finalPay.pay);
    const totalTip = +(finalPay.cashTip) + +(finalPay.creditTip); 
    const employees = (finalPay.employeesWorked);
    const tipPerEmployee = Math.round((totalTip / employees));
    const totalEmployeePay = +basePay + +tipPerEmployee;
    const results = `
    <ul>
    <li>Employee Base Pay is $${basePay}</li>
    <li>Total Tips are $${totalTip}</li>
    <li>Tips were split between ${employees} employees</li>
    <li>Each employee gets $${tipPerEmployee} in tips</li>
    <li id="totalPay">Calculated employee total pay is $${totalEmployeePay}</li>
    </ul>
    `
    $('.results').append(results)
    console.log(results)
});

