/*
* El cliente puede ser angular, react, vue o js o ... flutter
*/

const PRIMERA_CONSULTA = "https://lp2-cuatro.herokuapp.com/api/home/primeraApi"


const apenasCargaUno = async () => {

    /* -------------------------------------------graficoUno------------------------------------------ */

    const apiUno = await consumirApi(PRIMERA_CONSULTA)

    const dataApiUno = {}

    apiUno.forEach(x => {
        return dataApiUno[x.asignatura] = (dataApiUno[x.asignatura] || 0) + 1
    })

    console.log(dataApiUno)

    const fechita = new Date("2014-01-01T00:00:00.000+00:00").getUTCFullYear();
    console.log(fechita); 


    const ctx  = document.getElementById('myChart').getContext('2d')

    new Chart(ctx , {
        type: 'bar',
        data: {
            labels: [...Object.keys(dataApiUno)],
            datasets: [{
                label: '# personas inscritas',
                data: [...Object.values(dataApiUno)],
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





/** Responsabilidad y funciones puras */
const consumirApi = async (api) => {
    const respuesta = await fetch(api)
    return respuesta.json()
}