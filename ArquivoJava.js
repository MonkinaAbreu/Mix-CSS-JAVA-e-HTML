
function carregar(){

let mensagem = document.getElementById('mensagem');
let figura = document.getElementById('figura');
let bomDia = document.getElementById('bomDia')

// tentativa de formatar data
let data = new Date();
let dataFormatada = Intl.DateTimeFormat('pt-BR', {dateStyle: 'long'});
let hoje = dataFormatada.format(data);

let hora = data.getHours();

mensagem.innerHTML = `Hoje é dia ${hoje} e agora são ${hora} horas `

if(hora >= 1 && hora <= 5){
figura.src = 'amanhecer.jpg'
bomDia.innerHTML = `Esta quase amanhecendo !`
document.body.style.background = '#f0e68c' }
    
    else if(hora > 5 && hora < 12){ 
    figura.src = 'solmeiodia.jpg'
    bomDia.innerHTML = `Bom Dia !`
    document.body.style.background = '#84dae5' }

        else if(hora >= 12 && hora <= 18){
        figura.src = ' entardecer.jpg'
        bomDia.innerHTML = `Boa Tarde !`
        document.body.style.background =  '#903015' }

            else if(hora > 18 && hora <= 24){
            figura.src = 'anoitecer.jpg' 
            bomDia.innerHTML = `Boa Noite !`
            document.body.style.background =  '#13064a' }

}
