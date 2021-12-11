$("#video").hide()
$("#botao").click(function () {
  let apodDia = $("#dia").val();
  let apiKey = "kwPL2iqJxey8eE55Qooxweeif9eCPox9Yu7seLaG";
  $.ajax({
    type: "GET",
    url: `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${apodDia}`, //tenho que dar um jeito de passar a data do input pra cá, formatada
    success: function (result) {
      console.log(result);
      let tipoDaMidia = result.media_type;
      if (tipoDaMidia == "image") {
        $("#ft").hide()
        $("#imagem").show()
        $("#imagem").attr("src", result.hdurl)
        $("#video").hide()
      } else if (tipoDaMidia == "video") {
        $("#ft").hide()
        $("#video").show()
        $("#video").attr("src", result.url)
        $("#imagem").hide()
      };

      $("#fotoDia").text(`Foto astronômica do dia: ${result.title}`),

      $(".trn").text(`Explicação da imagem: ${result.explanation}`);
      let copyR = result.copyright;
      if (copyR == undefined) {
        $("#copyright").text(``)
      } else {
        $("#copyright").text(`Crédito da imagem: ${copyR}`);
      }
    },
  });
});
//e quando nao for foto? passar um if  pra colocar o video
//formato do link com data https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2018-10-07
