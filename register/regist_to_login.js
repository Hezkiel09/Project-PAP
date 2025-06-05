document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".form-box");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Cegah reload

    // Ambil semua input
    const nama = document.getElementById("nama").value.trim();
    const nik = document.getElementById("nik").value.trim();
    const email = document.getElementById("email").value.trim();
    const wa = document.getElementById("wa").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirm-password").value.trim();

    // Validasi sederhana
    if (!nama || !nik || !email || !wa || !password || !confirmPassword) {
      alert("Semua kolom harus diisi!");
      return;
    }

    if (password !== confirmPassword) {
      alert("Kata sandi dan konfirmasi tidak cocok!");
      return;
    }

    // Simulasi "pendaftaran berhasil"
    alert("Pendaftaran berhasil! Silakan login.");

    // Redirect ke login page
    window.location.href = "../login/login.html";
  });
});
