function chatbot(message_number){
    switch(message_number) {
        case 0: $('#messages').append($('<li>').text("Você tem mais que 25 anos?"));
                break;
        case 1: $('#messages').append($('<li>').text("Você já fez investimentos antes?"));
                break;
        case 2: $('#messages').append($('<li>').text("Quer ganhar dinheiro a curto prazo?"));
                break;
        case 3: $('#messages').append($('<li>').text("Você se sente confortável correndo riscos?"));
                break;
        case 4: $('#messages').append($('<li>').text("Você se sente confortável correndo riscos?"));
                break;
    }


}