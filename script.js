// --- SOAL NO. 5: DATA DINAMIS DOM ---
let articles = [
    { id: 1, title: "Pentingnya Cuci Tangan" },
    { id: 2, title: "Menu Diet Sehat" },
    { id: 3, title: "Tips Tidur Berkualitas" },
    { id: 4, title: "Mengenal Gejala Flu" }
];

const listContainer = document.getElementById('article-list');

function renderArticles() {
    listContainer.innerHTML = '';
    articles.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'dynamic-item';
        div.innerHTML = `
            <span>${item.title}</span>
            <button onclick="removeItem(${index})" style="width:auto; background:red;">Hapus</button>
        `;
        listContainer.appendChild(div);
    });
}

function addItem() {
    const input = document.getElementById('newTitle');
    if (input.value !== "") {
        articles.push({ id: Date.now(), title: input.value });
        input.value = '';
        renderArticles();
    }
}

function removeItem(index) {
    articles.splice(index, 1);
    renderArticles();
}

// Panggil fungsi render pertama kali
renderArticles();


// --- SOAL NO. 4: VALIDASI FORM ---
document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let isValid = true;

    // Reset error messages
    document.querySelectorAll('.error-msg').forEach(el => el.innerText = '');

    const nama = document.getElementById('nama').value;
    const email = document.getElementById('email').value;
    const telepon = document.getElementById('telepon').value;

    // Validasi Nama Kosong
    if (nama.trim() === "") {
        document.getElementById('err-nama').innerText = "Nama tidak boleh kosong!";
        isValid = false;
    }

    // Validasi Email Format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('err-email').innerText = "Format email tidak valid!";
        isValid = false;
    }

    // Validasi Nomor Telepon (Harus Positif)
    if (telepon <= 0 || telepon === "") {
        document.getElementById('err-telepon').innerText = "Nomor telepon harus bernilai positif!";
        isValid = false;
    }

    if (isValid) {
        alert("Pendaftaran Berhasil!");
        this.reset();
    }
});