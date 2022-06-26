/** 1. ambil inputnya (number) => jumlah bar yg ditampilkan (length of array)
 *  2. buat toggle button start & stop
 *  3. push math random 1-100 ke array of bar value  
 *  4. ganti warna berdasarkan value masing2 bar
 *  5. canvas destroy tiap klik stop
 */

$(document).ready(()=> {
  $("#btn-stop").hide()

  $("#btn-start").on("click", (e) => {
    e.preventDefault()
    updateChart()
    $("#btn-stop").show()
    $("#btn-start").hide()
  })

   const config = {
    type: 'bar',
    data: {
    labels,
    datasets: [{
      label: 'Data sets',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [], // = value for each bar
    }]
  },
    options: {}
  };

  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );
})




function stopChart() {
  // console.log("clear chart")
  clearTimeout(myTimeout);
}

function addData(chart, labels) {
  const newChartData = [];
  // generate random number from 1 to 100
  for (const _ of labels) {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    newChartData.push(randomNum);
  }

  chart.data.datasets.forEach((dataset) => {
    dataset.data = newChartData;
  });
  
  chart.update();
}

function updateChart() {
  console.log("masuk update")
  let labels = [];
  const chartLength = isNaN($("#num-input").val()) ? 0 : Number($("#num-input").val());
  for (let i = 1; i <= chartLength; i++) {
    labels.push(i)
  }

  const data = {
    labels,
    datasets: [{
      label: 'Data sets',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [], // = value for each bar
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


   // auto generate data in 3 seconds
  const genRandomEvery3Sec = setInterval(() => {
    addData(myChart, labels)
  }, 3000)

  // if button is clicked, clear timeout => it means random generation will be stopped
  $("#btn-stop").on('click', () => {
    $("#btn-start").show()
    $("#btn-stop").hide()
    $("#num-input").val('')

    clearInterval(genRandomEvery3Sec);
    myChart.destroy();
  })
}