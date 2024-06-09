function generateInputs() {
    const subjects = document.getElementById('subjects').value;
    const gradesContainer = document.getElementById('grades-container');
    gradesContainer.innerHTML = '';

    for (let i = 0; i < subjects; i++) {
        const formGroup = document.createElement('div');
        formGroup.className = 'form-group';

        const label = document.createElement('label');
        label.textContent = `Subject ${i + 1} Grade:`;

        const input = document.createElement('input');
        input.type = 'number';
        input.min = 0;
        input.max = 10;
        input.required = true;
        input.className = 'grade';

        formGroup.appendChild(label);
        formGroup.appendChild(input);
        gradesContainer.appendChild(formGroup);
    }
}

document.getElementById('cgpa-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const grades = document.querySelectorAll('.grade');
    let total = 0;

    grades.forEach(grade => {
        total += parseFloat(grade.value);
    });

    const cgpa = total / grades.length;
    document.getElementById('result').textContent = `Your CGPA is: ${cgpa.toFixed(2)}`;
});
