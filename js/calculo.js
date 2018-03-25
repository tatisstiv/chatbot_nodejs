function calculo (user_answer){
    switch(user_answer){
        case "SIM":
        case "sim":
        case "Sim": pontuação++
                    break;
        case "NÃO":
        case "não":
        case "Não": pontuação--;
                    break;
        default: $('#messages').append($('<li>').text("Responda sempre com sim ou não"));
    }
    return pontuação;
}