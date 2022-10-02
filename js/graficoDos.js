const SEGUNDA_CONSULTA = "https://lp2-cuatro.herokuapp.com/api/home/segundaApi"


const apenasCarga = async () => {
    const api = await consumirApi(SEGUNDA_CONSULTA)

    const data = {}

    api.forEach(x => {
        return data[x.anyo_inicio] = (data[x.anyo_inicio] || 0) + 1
    })

    console.log(data)

    const ctx  = document.getElementById('myChart').getContext('2d')

    new Chart(ctx , {
        type: 'doughnut',
        data: {
            labels: [...Object.keys(data)],
            datasets: [{
                data: [...Object.values(data)],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 2
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    })
}

const consumirApi = async (api) => {
    const respuesta = await fetch(api)
    return respuesta.json()
}