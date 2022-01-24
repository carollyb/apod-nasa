class Api {
    constructor(day){
        this.day = day;
    }

    request(){
        let apodDay = this.day
        let apiKey = "kwPL2iqJxey8eE55Qooxweeif9eCPox9Yu7seLaG"
        let url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${apodDay}`;

        return fetch(url)
        .then((data) => data.json())
        .then((data) => {
            console.log(data);
            return data
        })
        .catch((error) => {
            return {error: error};
        })
    }

}