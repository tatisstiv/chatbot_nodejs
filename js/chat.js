var pontuação = 0;
$(function () {
    var i = 0
    var socket = io();
    $('#messages').append($('<li>').text("Olá, eu sou o bot da Warren e estou aqui para te ajudar a descobrir seu perfil de investimento, digite qualque coisa para começar"));

    $('form').submit(function(){
        socket.emit('chat message', $('#m').val());
        $('#m').val('');
        return false;

    });
    socket.on('chat message', function(msg){
        $('#messages').append($('<li>').text(msg));
        i++;
        switch(i) {
            case 1: $('#messages').append($('<li>').text("Você tem menos que 25 anos?"));
                    pontuação = calculo(msg);
                    break;
            case 2: $('#messages').append($('<li>').text("Você já fez investimentos antes?"));
                    pontuação = calculo(msg);
                    break;
            case 3: $('#messages').append($('<li>').text("Quer ganhar dinheiro a curto prazo?"));
                    pontuação = calculo(msg);
                    break;
            case 4: $('#messages').append($('<li>').text("Você se sente confortável correndo riscos?"));
                    pontuação = calculo(msg);
                    break;
            case 5: $('#messages').append($('<li>').text("Você gosta de apoiar ideias novas?"));
                    pontuação = calculo(msg);
                    break;
            case 6: if (pontuação < 1){
                        $('#messages').append($('<li>').text("Você tem um perfil conservador"));
                    }
                    else{
                        $('#messages').append($('<li>').text("Você tem um perfil não conservador"));
                    }
        }
    });
});