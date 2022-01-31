class ApodView {
    constructor(){
        this.imagem = $("#imagem");
        this.video = $("#video");
        this.explanation =  $(".trn");
        this.titulo = $('#fotoDia')
        this.copyright = $('#copyright')
    }

    update(model){
        //você também pode criar o iframe dinamicamente para não ter q esconder
        let tipoDaMidia = model.media_type;
        if (tipoDaMidia == "image") { 
            $("#ft").hide()
            this.imagem.show()
            this.imagem.attr("src", model.hdurl)
            this.video.hide()
        } else if (tipoDaMidia == "video") {
            $("#ft").hide()
            this.video.show()
            this.video.attr("src", model.url)
            this.imagem.hide()
        }
        this.titulo.text(`Foto astronômica do dia: ${model.title}`);

        this.copyright.text(`${model.copyright}`)

        this.explanation.html(`<p>${model.explanation}</p>`)

    }

    error(model){
        //cria dinamicamente uma div para exibir msg de erro
        this.explanation.html(`<p>Houve um problema interno! Aguarde e pesquise novamente.</p>`)
    }
}