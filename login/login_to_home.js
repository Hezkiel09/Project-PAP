document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Mencegah reload halaman

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (email === "" || password === "") {
      alert("Semua kolom harus diisi!");
    } else {
      alert("Login berhasil!");
      window.location.href = "../home/home.html"; // Ganti sesuai lokasi file home
    }
  });
});
