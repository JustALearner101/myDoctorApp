// Memilih elemen-elemen yang dibutuhkan dari halaman HTML
const scheduleButtons = document.querySelectorAll('.schedule-button');
const morningIcon = document.querySelector('.morning-icon');
const afternoonIcon = document.querySelector('.afternoon-icon');
const nightIcon = document.querySelector('.night-icon');
const bookAppointmentButton = document.querySelector('.book-appointment');
const backButton = document.querySelector('.back-button');
const otherLocationsButton = document.querySelector('.other-locations');

// Memilih elemen-elemen yang dibutuhkan dari halaman HTML
const timeButtons = document.querySelectorAll('.time p');

// Fungsi untuk menangani klik pada tombol jadwal
function handleScheduleButtonClick(event) {
    // Menghapus kelas 'active' dari semua tombol jadwal
    scheduleButtons.forEach(button => button.classList.remove('active'));
    // Menambahkan kelas 'active' pada tombol yang diklik
    event.target.classList.add('active');
    // Menampilkan state hover pada waktu yang dipilih
    timeButtons.forEach(button => button.classList.add('hover'));
}

// Fungsi untuk menangani klik pada waktu
function handleTimeClick(event) {
    // Menghapus kelas 'hover' dari semua waktu
    timeButtons.forEach(button => button.classList.remove('hover'));
    // Menambahkan kelas 'hover' pada waktu yang diklik
    event.target.classList.add('hover');
}

// Menambahkan event listener untuk setiap tombol jadwal
scheduleButtons.forEach(button => {
    button.addEventListener('click', handleScheduleButtonClick);
});

// Menambahkan event listener untuk setiap waktu
timeButtons.forEach(button => {
    button.addEventListener('click', handleTimeClick);
});


// Fungsi untuk menangani klik pada tombol jadwal
function handleScheduleButtonClick(event) {
    // Menghapus kelas 'active' dari semua tombol jadwal
    scheduleButtons.forEach(button => button.classList.remove('active'));
    // Menambahkan kelas 'active' pada tombol yang diklik
    event.target.classList.add('active');
}

// Fungsi untuk menangani klik pada tombol buat janji
function handleBookAppointmentClick() {
    // Di sini bisa ditambahkan logika untuk membuka form buat janji atau tindakan lainnya
    alert('Anda akan membuat janji dengan dr. Saipul, Blu. Bup.');
}

// Fungsi untuk menangani klik pada tombol kembali
function handleBackButtonClick() {
    // Di sini bisa ditambahkan logika untuk kembali ke halaman sebelumnya
    alert('Anda akan kembali ke halaman sebelumnya.');
}

// Fungsi untuk menangani klik pada tombol tempat praktek lainnya
function handleOtherLocationsButtonClick() {
    // Di sini bisa ditambahkan logika untuk menampilkan tempat praktek lainnya
    alert('Menampilkan tempat praktek lainnya.');
}

// Menambahkan event listener untuk setiap tombol jadwal
scheduleButtons.forEach(button => {
    button.addEventListener('click', handleScheduleButtonClick);
});

// Menambahkan event listener untuk tombol buat janji
bookAppointmentButton.addEventListener('click', handleBookAppointmentClick);

// Menambahkan event listener untuk tombol kembali
backButton.addEventListener('click', handleBackButtonClick);

// Menambahkan event listener untuk tombol tempat praktek lainnya
otherLocationsButton.addEventListener('click', handleOtherLocationsButtonClick);
