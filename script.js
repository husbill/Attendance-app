const pupils = ["Amina Yusuf", "Chinedu Obi", "Zainab Musa", "John Paul"]; // Customize this list

const dateEl = document.getElementById("date");
dateEl.textContent = new Date().toLocaleDateString();

const studentList = document.getElementById("student-list");

pupils.forEach((name, index) => {
  const div = document.createElement("div");
  div.innerHTML = `
    <div class="flex items-center justify-between">
      <span>${name}</span>
      <select name="status-${index}" class="border p-1 rounded">
        <option value="Present">Present</option>
        <option value="Absent">Absent</option>
        <option value="Late">Late</option>
      </select>
    </div>
  `;
  studentList.appendChild(div);
});

document.getElementById("attendance-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const data = pupils.map((name, index) => {
    const status = document.querySelector(`select[name="status-${index}"]`).value;
    return {
      name,
      date: new Date().toLocaleDateString(),
      status
    };
  });

  console.log("Attendance Submitted:", data);
  alert("Attendance submitted! (Check console for now)");
});
