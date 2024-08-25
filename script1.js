document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('passenger-form');
    const passengerList = document.getElementById('passenger-list');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form values
        const serial = document.getElementById('serial').value;
        const name = document.getElementById('name').value;
        const flightNumber = document.getElementById('flight-number').value;
        const dateTime = document.getElementById('date-time').value;
        const bidaLetter = document.getElementById('bida-letter').value;
        const journeyType = document.getElementById('journey-type').value;
        //const bill = document.getElementById('bill').value;

        // Validate form values
        if (!serial || !name || !flightNumber || !dateTime || !bidaLetter || !journeyType) {
            alert('Please fill in all fields.');
            return;
        }

        // Create a new row
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${serial}</td>
            <td>${name}</td>
            <td>${flightNumber}</td>
            <td>${dateTime}</td>
            <td>${bidaLetter}</td>
            <td>${journeyType}</td>
            <td class="actions">
                <button type="button" onclick="deleteRow(this)">Delete</button>
            </td>
        `;

        // Append the new row to the table body
        passengerList.appendChild(row);

        // Clear form fields
        form.reset();
    });

    window.deleteRow = function(button) {
        // Remove the row from the table
        button.closest('tr').remove();
    };
});

