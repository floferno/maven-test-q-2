/** 1. ambil inputnya (number) => jumlah bar yg ditampilkan (length of array)
 *  2. 
 * 
 * 
 */

$(document).ready(()=> {
   $("#btn-start").on("click", (e) => {
        e.preventDefault()
        $('#myChart').empty()
        updateChart()
    })

})



function updateChart() {
  let val = $("#num-input").val()
  let valNum = parseInt(val)
  console.log(valNum) // number 
  
  let labels = []; // this length = bar total
  // labels = $("#num-input").val()

  for (let i = 1; i <= $("#num-input").val(); i++) {
    labels.push(i)
  }

  const data = {
    labels: labels,
    datasets: [{
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [10, 20, 5, 2, 20, 30, 45], // = value for each bar
    }]
  };

  const config = {
    type: 'bar',
    data: data,
    options: {}
  };

  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );
}
