document.addEventListener("DOMContentLoaded", function () {
  const currentTimeElement = document.getElementById("currentTime");
  if (currentTimeElement) {
    currentTimeElement.textContent = new Date().toLocaleString();
  }

  const form = document.getElementById("contactForm");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const nama = document.getElementById("nama").value;
      const tanggal = document.getElementById("tanggal").value;
      const pesan = document.getElementById("pesan").value;
      const gender = document.querySelector('input[name="gender"]:checked').value;

      localStorage.setItem("namaUser", nama);
      localStorage.setItem("outputTanggal", tanggal);
      localStorage.setItem("outputGender", gender);
      localStorage.setItem("outputPesan", pesan);

      updateOutput(nama, tanggal, gender, pesan);

      const welcomeTitle = document.getElementById("welcomeTitle");
      if (welcomeTitle) {
        welcomeTitle.textContent = `Hi ${nama}, Welcome To Website`;
      }
    });
  }

  const savedName = localStorage.getItem("namaUser");
  const savedTanggal = localStorage.getItem("outputTanggal");
  const savedGender = localStorage.getItem("outputGender");
  const savedPesan = localStorage.getItem("outputPesan");

  updateOutput(savedName, savedTanggal, savedGender, savedPesan);

  const welcomeTitle = document.getElementById("welcomeTitle");
  if (savedName && welcomeTitle) {
    welcomeTitle.textContent = `Hi ${savedName}, Welcome To Website`;
  }
});

// Fungsi update info box
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
