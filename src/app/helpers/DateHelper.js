class DateHelper{
    constructor(){
        this.date = $("#dia")
        this.hoje = new Date()
    }

    today(){
        
        var dd = this.hoje.getDate();
        var mm = this.hoje.getMonth()+1; 
        var yyyy = this.hoje.getFullYear();
        
        if(dd<10){
            dd=`0${dd}`
        } 
        
        if(mm<10){
            mm=`0${mm}`
        }
    
        let td = `${yyyy}-${mm}-${dd}`;
        return this.date.attr("max",td);
    }
    
} 