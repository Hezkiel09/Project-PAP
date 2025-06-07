window.addEventListener("DOMContentLoaded", () => {
  const pasien = JSON.parse(localStorage.getItem("dataPasien")) || {};
  const reservasi = JSON.parse(localStorage.getItem("dataReservasi")) || {};

  document.getElementById("namaLengkap").textContent = pasien.namaLengkap || "-";
  document.getElementById("nik").textContent = pasien.nik || "-";
  document.getElementById("tglLahir").textContent = pasien.tanggalLahir || "-";
  document.getElementById("jenisKelamin").textContent = pasien.jenisKelamin || "-";
  document.getElementById("golDarah").textContent = pasien.golDarah || "-";
  document.getElementById("alamat").textContent = pasien.alamat || "-";

  document.getElementById("vaksin").textContent = reservasi.vaksin || "-";
  document.getElementById("tanggal").textContent = reservasi.tanggal || "-";
  document.getElementById("waktu").textContent = reservasi.waktu || "-";
  document.getElementById("lokasi").textContent = reservasi.lokasi || "-";
});
