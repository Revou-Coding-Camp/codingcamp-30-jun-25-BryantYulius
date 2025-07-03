// FUNCTION UNTUK HALAMAN INDEX.HTML
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

      // Simpan nama ke localStorage
      localStorage.setItem("namaUser", nama);
      localStorage.setItem("outputGender", gender);
      localStorage.setItem("outputPesan", pesan);
      localStorage.setItem("outputTanggal", tanggal); 

      // Ganti welcome title di halaman index jika ada
      const welcomeTitle = document.getElementById("welcomeTitle");
      if (welcomeTitle) {
        welcomeTitle.textContent = `Hi ${nama}, Welcome To Website`;
      }

      // Update info box
      const outputNama = document.getElementById("outputNama");
      const outputTanggal = document.getElementById("outputTanggal");
      const outputGender = document.getElementById("outputGender");
      const outputPesan = document.getElementById("outputPesan");

      if (outputNama) outputNama.textContent = nama;
      if (outputTanggal) outputTanggal.textContent = tanggal;
      if (outputGender) outputGender.textContent = gender;
      if (outputPesan) outputPesan.textContent = pesan;

      if (currentTimeElement) {
        currentTimeElement.textContent = new Date().toLocaleString();
      }
    });
  }

  // untuk simpen data agar tidak ke reset saat pindah halaman 
 const savedName = localStorage.getItem("namaUser");
  const savedoutputGender = localStorage.getItem("outputGender");
  const savedoutputPesan = localStorage.getItem("outputPesan");
  const savedoutputTanggal = localStorage.getItem("outputTanggal");

  // Ganti welcome title kalau ada
  const welcomeTitle = document.getElementById("welcomeTitle");
  if (savedName && welcomeTitle) {
    welcomeTitle.textContent = `Hi ${savedName}, Welcome To Website`;
  }

  // Tampilkan data di info box
  const outputNama = document.getElementById("outputNama");
  if (savedName && outputNama) {
    outputNama.textContent = savedName;
  }

  const outputGender = document.getElementById("outputGender");
  if (savedoutputGender && outputGender) {
    outputGender.textContent = savedoutputGender;
  }

  const outputPesan = document.getElementById("outputPesan");
  if (savedoutputPesan && outputPesan) {
    outputPesan.textContent = savedoutputPesan;
  }

  const outputTanggal = document.getElementById("outputTanggal");
  if (savedoutputTanggal && outputTanggal) {
    outputTanggal.textContent = savedoutputTanggal;
  }

});


