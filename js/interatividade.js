$(function(){
    //entrada
    var botoes = $(".botao");
    var titulo = $("h1");
    var subtitulo = $("h2");
    var icones = $(".icones");
    var background = $("body")
    //processamento
    titulo.click(()=>{
        botoes.css ('color','black');
    });
    titulo.dblclick(()=>{
        background.html('<h1>alterado pelo JS</h1>');
    });
    subtitulo.click(()=>{
        icones.css('background-color','red');
    })
    //saida
});