document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const emailInput = document.getElementById("email").value.trim();
    const passwordInput = document.getElementById("password").value.trim();

    if (!emailInput || !passwordInput) {
      alert("Semua kolom harus diisi!");
      return;
    }

    const storedUser = JSON.parse(localStorage.getItem("registeredUser"));

    if (!storedUser) {
      alert("Akun belum terdaftar!");
      return;
    }

    if (
      storedUser &&
      storedUser.email === emailInput &&
      storedUser.password === passwordInput
    ) {
      alert("Login berhasil!");
      localStorage.setItem("isLoggedIn", "true");
      window.location.href = "../home/home.html";
    } else {
      alert("Email atau password salah!");
    }
  });
});
