// Store form data in memory instead of localStorage
let reservationData = {};

const monthYear = document.getElementById("monthYear");
const calendarDates = document.getElementById("calendarDates");
const prevMonth = document.getElementById("prevMonth");
const nextMonth = document.getElementById("nextMonth");
let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();
let selectedDate = null;

function renderCalendar(month, year) {
  const months = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];
  monthYear.textContent = `${months[month]} ${year}`;
  calendarDates.innerHTML = "";
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const dayOffset = (firstDay + 6) % 7;

  for (let i = 0; i < dayOffset; i++) {
    calendarDates.innerHTML += `<div></div>`;
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(year, month, day);
    const div = document.createElement("div");
    div.textContent = day;
    div.addEventListener("click", () => {
      document
        .querySelectorAll(".calendar-dates div")
        .forEach((d) => d.classList.remove("selected"));
      div.classList.add("selected");
      selectedDate = `${day}-${months[month]}-${year}`;
    });
    calendarDates.appendChild(div);
  }
}

prevMonth.addEventListener("click", () => {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  renderCalendar(currentMonth, currentYear);
});

nextMonth.addEventListener("click", () => {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  renderCalendar(currentMonth, currentYear);
});

renderCalendar(currentMonth, currentYear);

document.getElementById("lanjutBtn").addEventListener("click", () => {
  const lokasi = document.getElementById("lokasi").value;
  const vaksin = document.getElementById("vaksin").value;
  const jam = document.querySelector('input[name="jam"]:checked').value;

  if (!selectedDate || !lokasi || !vaksin) {
    alert("Mohon lengkapi semua pilihan!");
    return;
  }

  // Store data in memory instead of localStorage
  reservationData = {
    tanggal: selectedDate,
    lokasi: lokasi,
    vaksin: vaksin,
    jam: jam,
  };

  // Show confirmation (since we can't navigate to next page)
  alert(
    `Reservasi berhasil disimpan!\nTanggal: ${selectedDate}\nLokasi: ${lokasi}\nVaksin: ${vaksin}\nJam: ${jam}`
  );
  console.log("Data reservasi:", reservationData);

  // In real implementation, you would navigate to next page:
  window.location.href = "../Tahap3/tahap3.html";
});
