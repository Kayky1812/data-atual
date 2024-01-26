const h1 = document.querySelector('.container');
const data = new Date();

function getDayInText(diaSemana){
    
    let diaSemanaTexto;         //outro possibilidade seria ter trocado o switch por um array com os dias e meses

    switch (diaSemana){
        case 0:
            diaSemanaTexto = "domingo"
        return diaSemanaTexto;
        case 1: 
            diaSemanaTexto="segunda-feira"
            return diaSemanaTexto;       
            case 2:
            diaSemanaTexto = "terça-feira"
            return diaSemanaTexto;        
            case 3:
            diaSemanaTexto = "quarta-feira"
            return diaSemanaTexto;;
            case 4:
            diaSemanaTexto = "quinta-feira"
            return diaSemanaTexto;        
            case 5:
            diaSemanaTexto = "sexta-feira"
            return diaSemanaTexto;        
            case 6:
            diaSemanaTexto = "sabado"
            return diaSemanaTexto;;
        default: 
        diaSemanaTexto=""
        break;
        
    
    }
}

function getNameMonth(mes){
    
    let mesTexto;

    switch (mes){
        case 0:
            mesTexto = "janeiro"
        return mesTexto;
        case 1: 
             mesTexto="fevereiro"
            return mesTexto;       
            case 2:
                mesTexto = "março"
            return mesTexto;        
            case 3:
                mesTexto = "abril"
            return mesTexto;
            case 4:
                mesTexto = "maio"
            return mesTexto;        
            case 5:
                mesTexto = "junho"
            return mesTexto;        
            case 6:
                mesTexto = "julho"
            return mesTexto;
            case 7:
                mesTexto = "agosto"
            return mesTexto;
            case 8:
                mesTexto = "setembro"
            return mesTexto;
            case 9:
                mesTexto = "outubro"
            return mesTexto;
            case 10:
                mesTexto = "novembro"
            return mesTexto;
            case 11:
                mesTexto = "dezembro"
            return mesTexto;
       
        
    
    }
}

function criaDate (data){
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();

    const nomeDia = getDayInText(diaSemana);
    const mesTexto = getNameMonth(numeroMes)

    return (`${nomeDia}, ${data.getDate()} de ${mesTexto} de ${data.getFullYear()} as ${data.getHours()}:${data.getMinutes()}`)
}

h1.innerHTML =criaDate(data);



//outra maneira de fazer a mesma coisa seria 


// const h1 = document.querySelector('.container')
// const data = new Date();
// h1.innerHTML = data.toLocaleDateString ('pt-BR', {dateStyle: 'full', timeStyle:'short'})
