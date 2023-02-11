const bt_xml = document.querySelector("#bt_xml");
const bt_fetch = document.querySelector("#bt_fetch");
const input_img = document.querySelector("#input_img");
const img = document.querySelector("#img");

bt_xml.addEventListener("click", function () {
  console.log(input_img.value);

  var requisicao = new XMLHttpRequest();

  chave_api = "563492ad6f9170000100000182cfa5251b204eb7954b4d9fd8c1a8f8";
  url = "https://api.pexels.com/v1/search?query=" + input_img.value;

  requisicao.onload = manipulaResposta;

  requisicao.open("GET", url);
  requisicao.setRequestHeader("Authorization", chave_api);

  requisicao.send();

  function manipulaResposta() {
    var response = JSON.parse(requisicao.responseText);
    console.log(response);

    img.src = response.photos[0].src.large2x;
  }
});

bt_fetch.addEventListener("click", function () {

  chave_api = "563492ad6f9170000100000182cfa5251b204eb7954b4d9fd8c1a8f8";
  url = "https://api.pexels.com/v1/search?query=" + input_img.value;

  fetch(url)
    .then(function (response) {
      response.json().then(function (result){img.src = result.photos[2].src.large2x});
    })
    .catch(function (err) {
      console.log("ERRO: ", err);
    });
});
