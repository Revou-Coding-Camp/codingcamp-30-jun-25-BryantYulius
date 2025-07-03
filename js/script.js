document.addEventListener("DOMContentLoaded", function () {
  const currentTimeElement = document.getElementById("currentTime");
  if (currentTimeElement) {
    currentTimeElement.textContent = new Date().toLocaleString();
  }

  const form = document.getElementById("contactForm");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const nama = document.getElementById("nama").value.trim();
      const tanggal = document.getElementById("tanggal").value;
      const pesan = document.getElementById("pesan").value.trim();
      const gender = document.querySelector('input[name="gender"]:checked').value;

      // Validasi nama hanya huruf
      const nameRegex = /^[A-Za-z\s]+$/;
      if (!nameRegex.test(nama)) {
        alert("Nama hanya boleh mengandung huruf dan spasi.");
        return;
      }

      // Cegah SQL Injection sederhana pada pesan
      const sqlKeywords = /(SELECT|INSERT|DELETE|UPDATE|DROP|--|;)/i;
      if (sqlKeywords.test(pesan)) {
        alert("Pesan tidak boleh mengandung perintah SQL.");
        return;
      }

      // Update tampilan
      updateOutput(nama, tanggal, gender, pesan);

      const welcomeTitle = document.getElementById("welcomeTitle");
      if (welcomeTitle) {
        welcomeTitle.textContent = `Hi ${nama}, Welcome To Website`;
      }
    });
  }
});

function updateOutput(nama, tanggal, gender, pesan) {
  if (nama && document.getElementById("outputNama")) {
    document.getElementById("outputNama").textContent = nama;
  }
  if (tanggal && document.getElementById("outputTanggal")) {
    document.getElementById("outputTanggal").textContent = tanggal;
  }
  if (gender && document.getElementById("outputGender")) {
    document.getElementById("outputGender").textContent = gender;
  }
  if (pesan && document.getElementById("outputPesan")) {
    document.getElementById("outputPesan").textContent = pesan;
  }
}
