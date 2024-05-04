
{
    // tax calculation
    const TAX_RATE_TABLE = [
        {min: 0, max: 18200, base: 0, rate: 0},
        {min: 18201, max: 37000, base: 0, rate: 0.19},
        {min: 37001, max: 90000, base: 3572, rate: 0.325},
        {min: 90001, max: 180000, base: 20797, rate: 0.37},
        {min: 180001, max: Number.MAX_VALUE, base: 54097, rate: 0.45}
    ]

    function calculateTax(income) {
        const row = TAX_RATE_TABLE.find(row => income >= row.min && income <= row.max);
        const {base, rate, min} = row;
        const tax = base + (income - min) * rate;
        return `
            
            Your tax is ${tax.toFixed(2)}AUD.
            And your income after tax is ${(income - tax).toFixed(2)}AUD.
            
        `;
    }
    console.log(calculateTax(240000));
    
    const section = document.getElementById('container');
    document.getElementById('taxForm').addEventListener('submit', function(event) {
        event.preventDefault();
        let income = document.getElementById('income').value;
        let message = calculateTax(income);
        section.innerHTML = '';
        section.appendChild(document.createElement('span'));
        section.firstElementChild.innerText = message;
    });
}