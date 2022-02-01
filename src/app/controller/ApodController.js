class ApodController {
    constructor(){

        $("#video").hide();
        this.apodDia = $("#dia");
        this.apodView = new ApodView()
        
    }

    async envia(event){
        event.preventDefault();

        let inputUser = this.apodDia.val();

        let api = new Api(inputUser)

        let resp = await api.request()

        resp.code == 500 ? this.apodView.error(resp) : this.apodView.update(resp)
                
    }
}