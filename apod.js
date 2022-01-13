$("#video").hide() //v
$("#botao").click(function () { //c
  let apodDia = $("#dia").val();
  let apiKey = "kwPL2iqJxey8eE55Qooxweeif9eCPox9Yu7seLaG";
  $.ajax({
    type: "GET",
    url: `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${apodDia}`, //m
    success: function (result) {
      console.log(result);
      let tipoDaMidia = result.media_type;
      if (tipoDaMidia == "image") { //v
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
//v
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
