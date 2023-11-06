// Function to fetch CSV data based on data-csv attribute
async function fetchCSVData() {
  const tableContainers = document.querySelectorAll('.table-container');
  tableContainers.forEach(async (container) => {
      const csvPath = container.dataset.csv;
      const response = await fetch(csvPath);
      const data = await response.text();
      parseCSV(data, container);
  });
}

// Function to parse CSV data and populate the table
function parseCSV(data, tableContainer) {
  const rows = data.split('\n');
  const table = document.createElement('div');

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
          table.appendChild(headerRow);
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
          table.appendChild(dataRow);
      }
  });

  tableContainer.appendChild(table);
}

// Main function to populate the tables on all pages
async function populateTables() {
  await fetchCSVData();
}

populateTables();
