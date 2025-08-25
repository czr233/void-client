let selectedType = null;

function selectType(type, btn) {
  document.querySelectorAll(".selector-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  selectedType = type;
}

function startSearch() {
  const value = document.getElementById("queryInput").value;
  if (!selectedType || !value) {
    alert("Please select a type and enter a value.");
    return;
  }

  // Fake results
  const leaks = [
    { site: "WhitePages", info: "Name, address, phone number" },
    { site: "Spokeo", info: "Email + phone linked" },
    { site: "DataFinder", info: "Marketing data profile" }
  ];

  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = `
    <div class="result-card">
      <h3>Results for ${selectedType}: ${value}</h3>
      <p>⚠️ Data brokers have info linked to this.</p>
      <button class="details-btn" onclick="showDetails()">Show Details</button>
      <div id="details" style="display:none;">
        ${leaks.map(m => `<p><b>${m.site}</b>: ${m.info}</p>`).join("")}
      </div>
    </div>
  `;
}

function showDetails() {
  document.getElementById("details").style.display = "block";
}