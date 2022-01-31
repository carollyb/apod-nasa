class ApodView {
    constructor(){
        this.imagem = $("#imagem")
        this.video = $("#video")
        this.explanation =  $(".trn")
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
    }

    error(model){
        //cria dinamicamente uma div para exibir msg de erro
    }
}