// Function to fetch Women's and Men's Records CSV data based on data-csv attribute
async function fetchRecordCSVData() {
  const recordContainers = document.querySelectorAll('.record-container');
  recordContainers.forEach(async (container) => {
      const csvPath = container.dataset.csv;
      const response = await fetch(csvPath);
      const data = await response.text();
      parseRecordCSV(data, container);
  });
}

function parseRecordCSV(data, tableContainer) {
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

async function populateRecordTables() {
  await fetchRecordCSVData();
}

// Function to fetch McKenna's split CSV data based on data-csv attribute
async function fetchSplitCSVData() {
  const splitContainers = document.querySelectorAll('.split-container');
  splitContainers.forEach(async (container) => {
      const csvPath = container.dataset.csv;
      const response = await fetch(csvPath);
      const data = await response.text();
      parseSplitCSV(data, container);
  });
}

function parseSplitCSV(data, tableContainer) {
  const rows = data.split('\n');
  const table = document.createElement('div');

  rows.forEach((row, index) => {
      if (index === 0) {
          // Create header row
          const headerRow = document.createElement('div');
          headerRow.classList.add('table-row');
          const [Event, Split_1, Split_2, Split_3, Split_4, Date] = row.split(',');
          headerRow.innerHTML = `
              <div class="split-event-cell">${Event}</div>
              <div class="split_1-cell">${Split_1}</div>
              <div class="split_2-cell">${Split_2}</div>
              <div class="split_3-cell">${Split_3}</div>
              <div class="split_4-cell">${Split_4}</div>
              <div class="date-cell">${Date}</div>

          `;
          table.appendChild(headerRow);
      } else {
          // Create data rows
          const [Event, Split_1, Split_2, Split_3, Split_4, Date] = row.split(',');
          const dataRow = document.createElement('div');
          dataRow.classList.add('table-row');
          dataRow.innerHTML = `
              <div class="split-event-cell">${Event}</div>
              <div class="split_1-cell">${Split_1}</div>
              <div class="split_2-cell">${Split_2}</div>
              <div class="split_3-cell">${Split_3}</div>
              <div class="split_4-cell">${Split_4}</div>
              <div class="date-cell">${Date}</div>
          `;
          table.appendChild(dataRow);
      }
  });

  tableContainer.appendChild(table);
}

async function populateSplitTables() {
  await fetchSplitCSVData();
}

populateRecordTables();
populateSplitTables();