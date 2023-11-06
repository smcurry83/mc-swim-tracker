// Function to fetch CSV data
async function fetchCSVData() {
  const response = await fetch('../files/womens-yards-records.csv');
  const data = await response.text();
  return data;
}

// Function to parse CSV data
function parseCSV(data) {
  const rows = data.split('\n');
  const tableContainer = document.getElementById('table-container');

  rows.forEach((row, index) => {
      if (index === 0) {
          // Create header row
          const headerRow = document.createElement('div');
          headerRow.classList.add('table-row');
          const [Event, Swimmer, Time, Year] = row.split(',');
          headerRow.innerHTML = `
              <div class="event-cell">${Event}</div>
              <div class="swimmer-cell">${Swimmer}</div>
              <div class="time-cell">${Time}</div>
              <div class="year-cell">${Year}</div>
          `;
          tableContainer.appendChild(headerRow);
      } else {
          // Create data rows
          const [Event, Swimmer, Time, Year] = row.split(',');
          const dataRow = document.createElement('div');
          dataRow.classList.add('table-row');
          dataRow.innerHTML = `
              <div class="event-cell">${Event}</div>
              <div class="swimmer-cell">${Swimmer}</div>
              <div class="time-cell">${Time}</div>
              <div class="year-cell">${Year}</div>
          `;
          tableContainer.appendChild(dataRow);
      }
  });
}

// Main function to populate the table
async function populateTable() {
  const csvData = await fetchCSVData();
  parseCSV(csvData);
}

populateTable();
