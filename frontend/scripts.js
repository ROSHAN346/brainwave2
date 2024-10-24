fetch('/appointments/')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('appointments');
        data.forEach(appointment => {
            const item = document.createElement('div');
            item.textContent = `Appointment with Dr. ${appointment.doctor} on ${appointment.date}`;
            container.appendChild(item);
        });
    });
