document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('doctorForm');
    const tableBody = document.getElementById('doctorTableBody');
    const filterSelect = document.getElementById('filter');

    function calculateRole(experience) {
        if (experience > 5) {
            return 'Senior';
        } else if (experience >= 2 && experience <= 5) {
            return 'Junior';
        } else {
            return 'Trainee';
        }
    }

    function createDeleteButton(row) {
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function () {
            tableBody.deleteRow(row.rowIndex);
        });
        return deleteButton;
    }

    function addRowToTable(data) {
        const newRow = tableBody.insertRow();
        const role = calculateRole(data.experience);
        
        const cellsData = [data.name, data.doctorId, data.specialization, data.experience, data.email, data.mobile, role];

        for (let i = 0; i < cellsData.length; i++) {
            const cell = newRow.insertCell();
            cell.textContent = cellsData[i];
        }

        const deleteButtonCell = newRow.insertCell();
        deleteButtonCell.appendChild(createDeleteButton(newRow));
    }

    function clearForm() {
        form.reset();
    }

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = {
            name: form.name.value,
            doctorId: form.doctorId.value,
            specialization: form.specialization.value,
            experience: parseFloat(form.experience.value),
            email: form.email.value,
            mobile: form.mobile.value,
        };

        addRowToTable(formData);
        clearForm();
    });

    filterSelect.addEventListener('change', function () {
        const selectedSpecialization = filterSelect.value.toLowerCase();

        for (let i = 0; i < tableBody.rows.length; i++) {
            const rowSpecialization = tableBody.rows[i].cells[2].textContent.toLowerCase();

            if (selectedSpecialization === 'all' || selectedSpecialization === rowSpecialization) {
                tableBody.rows[i].style.display = '';
            } else {
                tableBody.rows[i].style.display = 'none';
            }
        }
    });
});
