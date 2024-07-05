document.addEventListener('DOMContentLoaded', () => {
    const transactionForm = document.getElementById('transactionForm');

    transactionForm.addEventListener('submit', processTransaction);
});

function processTransaction(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const destination = document.getElementById('destination').value;

    if (!name || !email || !phone || !destination) {
        alert('Harap isi semua field!');
        return;
    }

    const confirmationMessage = `
        Transaksi Berhasil!
        Nama: ${name}
        Email: ${email}
        Nomor Telepon: ${phone}
        Destinasi: ${destination}
    `;

    alert(confirmationMessage);

    transactionForm.reset();
}

document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        burger.classList.toggle('toggle');
    });
});


