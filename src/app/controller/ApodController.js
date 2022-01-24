class ApodController {
    constructor(){
        $("#video").hide();
        this.apodDia = $("#dia");

    }

    async envia(event){
        event.preventDefault();

        let inputUser = this.apodDia.val();

        let api = new Api(inputUser)

        let resp = await api.request()    
        console.log(resp);
            
    }
}