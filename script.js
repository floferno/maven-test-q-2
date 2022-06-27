/** 1. ambil inputnya (number) => jumlah bar yg ditampilkan (length of array)
 *  2. buat toggle button start & stop
 *  3. canvas destroy tiap klik stop
 *  4. push math random 1-100 ke array of bar value
 *  5. ganti warna berdasarkan value masing2 bar
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
        backgroundColor: [],
        borderColor: [],
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

function changeColor(chart, labels) {
    const newChartData = [];

    
    for (const _ of labels) {
        const randomNum = Math.floor(Math.random() * 100) + 1; // start from 1 to 100;
        newChartData.push(randomNum);
    }

    chart.data.datasets.forEach((dataset) => {
        // dataset.data = newChartData;
        const bgColor = [];

        console.log(dataset)
        console.log(dataset.data) // array of bar value
        console.log(dataset.backgroundColor) //bgcolor

        for (let i = 0; i < dataset.data.length; i++) {
        console.log(dataset.data[i], "value di dlm array")
        if (dataset.data[i] >= 0 && dataset.data[i] <= 25) {
        bgColor.push('rgb(9,128,17)')
        } else if (dataset.data[i] >= 26 && dataset.data[i] <= 50 ) {
        bgColor.push('rgb(255,255,15)')
        } else if (dataset.data[i] >= 51 && dataset.data[i] <= 75) {
        bgColor.push('rgb(255,0,0)')
        } else if (dataset.data[i] <= 76 && dataset.data[i] <= 100) {
        bgColor.push('rgb(0,0,255)')
        }
    }
    // console.log(bgColor)
    dataset.data = newChartData;
    dataset.backgroundColor = bgColor;
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

    const config = {
        type: 'bar',
        data: {
        labels,
        datasets: [{
            label: 'Data sets',
            backgroundColor: [], // 'rgb(255, 99, 132)' tadinya ini
            borderColor: [],
            data: [], // = value for each bar
            }],
            options: {}
        }
    }

    const myChart = new Chart(
        document.getElementById('myChart'),
        config
    );


   // auto generate data in 3 seconds
    const genRandomEvery3Sec = setInterval(() => {
        addData(myChart, labels)
        changeColor(myChart, labels)
    }, 3000)

    $("#btn-stop").on('click', () => {
        $("#btn-start").show()
        $("#btn-stop").hide()
        $("#num-input").val('')

        clearInterval(genRandomEvery3Sec);
        myChart.destroy();
    })


}