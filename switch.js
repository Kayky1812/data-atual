//switch é basicamente uma forma de fazer um if




const data = new Date('2023-12-19');
let diaSemana = data.getDay();
let diaSemanaTexto;

switch (diaSemana){
    case 0:
        diaSemanaTexto = "domingo"
    break;
    case 1: 
        diaSemanaTexto="segunda"
    break;
    case 2:
        diaSemanaTexto = "terça"
    break;
    case 3:
        diaSemanaTexto = "quarta"
    break;
    case 4:
        diaSemanaTexto = "quinta"
    break;
    case 5:
        diaSemanaTexto = "sexta"
    break;
    case 6:
        diaSemanaTexto = "sabado"
    break;
    default: 
    diaSemanaTexto=""
    break;
    

}

console.log(diaSemana)


// caso eu quisesse fazer uma função para retornar o dia da semana poderia ser feito assim 

function getDayInText(diaSemana){
    
    let diaSemanaTexto;

    switch (diaSemana){
        case 0:
            diaSemanaTexto = "domingo"
        return diaSemanaTexto;
        case 1: 
            diaSemanaTexto="segunda"
            return diaSemanaTexto;       
            case 2:
            diaSemanaTexto = "terça"
            return diaSemanaTexto;        
            case 3:
            diaSemanaTexto = "quarta"
            return diaSemanaTexto;;
            case 4:
            diaSemanaTexto = "quinta"
            return diaSemanaTexto;        
            case 5:
            diaSemanaTexto = "sexta"
            return diaSemanaTexto;        
            case 6:
            diaSemanaTexto = "sabado"
            return diaSemanaTexto;;
        default: 
        diaSemanaTexto=""
        break;
        
    
    }
    
}


