// Data from https://data.gov.sg/dataset/cases-recorded-for-selected-major-offences
const data = [
  {
    _full_count: '10',
    value: '8',
    rank: 0.0573088,
    year: '2020',
    _id: 91,
    level_1: 'Total',
    level_2: 'Murder',
  },
  {
    _full_count: '10',
    value: '445',
    rank: 0.0573088,
    year: '2020',
    _id: 92,
    level_1: 'Total',
    level_2: 'Serious Hurt',
  },
  {
    _full_count: '10',
    value: '348',
    rank: 0.0573088,
    year: '2020',
    _id: 93,
    level_1: 'Total',
    level_2: 'Rape',
  },
  {
    _full_count: '10',
    value: '1320',
    rank: 0.0573088,
    year: '2020',
    _id: 94,
    level_1: 'Total',
    level_2: 'Outrage Of Modesty',
  },
  {
    _full_count: '10',
    value: '59',
    rank: 0.0573088,
    year: '2020',
    _id: 95,
    level_1: 'Total',
    level_2: 'Rioting',
  },
  {
    _full_count: '10',
    value: '37',
    rank: 0.0573088,
    year: '2020',
    _id: 96,
    level_1: 'Total',
    level_2: 'Robbery',
  },
  {
    _full_count: '10',
    value: '164',
    rank: 0.0573088,
    year: '2020',
    _id: 97,
    level_1: 'Total',
    level_2: 'Housebreaking',
  },
  {
    _full_count: '10',
    value: '60',
    rank: 0.0573088,
    year: '2020',
    _id: 98,
    level_1: 'Total',
    level_2: 'Theft Of Motor Vehicle',
  },
  {
    _full_count: '10',
    value: '18',
    rank: 0.0573088,
    year: '2020',
    _id: 99,
    level_1: 'Total',
    level_2: 'Snatch Theft',
  },
  {
    _full_count: '10',
    value: '16523',
    rank: 0.0573088,
    year: '2020',
    _id: 100,
    level_1: 'Total',
    level_2: 'Cheating Related Offences',
  },
];

// Prepare data labels and values
const labels = [];
const values = [];
for (const item of data) {
  labels.push(item.level_2);
  values.push(item.value);
}

// Draw chart
const ctx = document.getElementById('chart').getContext('2d');
const chart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: labels,
    datasets: [
      {
        label: 'Cases Recorded for Selected Major Offences in 2020',
        data: values,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
