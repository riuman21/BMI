const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    let weightInput = document.getElementById('weight-input').value;
    let heightInput = document.getElementById('height-input').value;
    let result = (weightInput / (heightInput * heightInput) * 10000);
    document.getElementById('bmi-input').value = result;
});