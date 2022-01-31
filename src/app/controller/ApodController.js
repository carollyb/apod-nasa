class ApodController {
    constructor(){
        $("#video").hide();
        this.apodDia = $("#dia");
        this.apodView = new ApodView()
        //instancia o apodView
    }

    async envia(event){
        event.preventDefault();

        let inputUser = this.apodDia.val();

        let api = new Api(inputUser)

        let resp = await api.request()

        resp.code == 500 ? this.apodView.error(resp) : this.apodView.update(resp)
                 //this.apodView.error(resp) : this.apodView.update(resp)
    }
}