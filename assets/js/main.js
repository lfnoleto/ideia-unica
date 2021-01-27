const h1 = document.querySelector('#cabecario')

const data = new Date()

let manth = ['Janeiro','Fevereiro','Março','Abriu','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro']

switch(data.getDay()){
    case 0:
        h1.innerHTML = `Domingo, ${data.getDate()} ${manth[data.getMonth()]} de ${data.getFullYear()} ${data.getHours()}:${data.getMinutes()}`
        break;
    case 1:
        h1.innerHTML = `Segundo-feira, ${data.getDate()} ${manth[data.getMonth()]} de ${data.getFullYear()} ${data.getHours()}:${data.getMinutes()}`
        break;
    case 2:
        h1.innerHTML = `Terça-feira, ${data.getDate()} ${manth[data.getMonth()]} de ${data.getFullYear()} ${data.getHours()}:${data.getMinutes()}`
        break;
    case 3:
        h1.innerHTML = `Quarta-feira, ${data.getDate()} ${manth[data.getMonth()]} de ${data.getFullYear()} ${data.getHours()}:${data.getMinutes()}`
        break;
    case 4:
        h1.innerHTML = `Quinta-feira, ${data.getDate()} ${manth[data.getMonth()]} de ${data.getFullYear()} ${data.getHours()}:${data.getMinutes()}`
        break;
    case 5:
        h1.innerHTML = `Sexta-feira, ${data.getDate()} ${manth[data.getMonth()]} de ${data.getFullYear()} ${data.getHours()}:${data.getMinutes()}`
        break;
    case 6:
        h1.innerHTML = `Sabado, ${data.getDate()} ${manth[data.getMonth()]} de ${data.getFullYear()} ${data.getHours()}:${data.getMinutes()}`
        break;
    
}








