const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'bar',
 
  data: {
    labels: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Satu', 'Sun'],
    datasets: [{
        label: 'USD$',
     
      data: [17.45, 34.91, 52.36, 31.07,23.39,43.28, 25.48],
      backgroundColor: [
        'rgba(236, 119, 95)',
        'rgba(236, 119, 95)',
        'rgba(118, 181, 188)',
        'rgba(236, 119, 95)',
        'rgba(236, 119, 95)',
        'rgba(236, 119, 95)',
        'rgba(236, 119, 95)',
      ],
      borderWidth: 0
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
    
  }
});