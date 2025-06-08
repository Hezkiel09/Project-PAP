document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".form-box");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nama = document.getElementById("nama").value.trim();
    const nik = document.getElementById("nik").value.trim();
    const email = document.getElementById("email").value.trim();
    const wa = document.getElementById("wa").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirm-password").value.trim();

    if (!nama || !nik || !email || !wa || !password || !confirmPassword) {
      alert("Semua kolom harus diisi!");
      return;
    }

    if (password !== confirmPassword) {
      alert("Kata sandi dan konfirmasi tidak cocok!");
      return;
    }

    // Simpan data ke localStorage
    const userData = {
      nama,
      nik,
      email,
      wa,
      password
    };

    localStorage.setItem("registeredUser", JSON.stringify(userData));

    alert("Pendaftaran berhasil! Silakan login.");
    window.location.href = "../login/login.html";
  });
});
