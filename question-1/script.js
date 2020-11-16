// this is the Javascript file
console.log("Script is loaded!");
Promise.all([d3.html("./question.html"), d3.html("./VizP1.svg")]).then(function([html, svgDocument]) {
  const questionContent = d3.select(html).selectAll('body > *');
  questionContent.each(function(d) {
    d3.select("#question-container").node().appendChild(this);
  });
  let svgNode = svgDocument.querySelector("svg");
  // console.log(svgNode);
  let container = document.querySelector("#visualisation");
  // console.log(container);
  container.appendChild(svgNode);

  const immagine = d3.selectAll("image");

  immagine.style("opacity", "1");


  //hover immagini
  immagine.on("mouseover", function() {
    console.log(d3.select(this));
    d3.select(this).raise();
    immagine.style("opacity", "1");
    d3.select(this).style("opacity", "1");
    d3.select(this).attr("width", "150");
    d3.select(this).attr("height", "150");
  })

  immagine.on("mouseout", function() {
    immagine.style("opacity", "1");
    d3.select(this).attr("width", "25");
    d3.select(this).attr("height", "25");
  })


  //hover categorie


  const etichette = d3.selectAll("#Etichette > g");
  const sezioni = d3.selectAll("#SEZIONI > g");
  const imgTutte = d3.selectAll("#Images > g");


  d3.select("#SEZ-NATURE").on("mouseover", function(){
    imgTutte.style("opacity", "0.3");
    sezioni.style("opacity", "0.3");
    d3.select(this).style("opacity", "1");
    d3.select("#Nature").style("opacity", "1");
    etichette.style("opacity", "0.3");
    d3.select("#Box-nature").style("opacity", "1");
  })
  d3.select("#SEZ-NATURE").on("mouseout", function(){
    imgTutte.style("opacity", "1");
    etichette.style("opacity", "1");
    sezioni.style("opacity", "1");
  })

  d3.select("#SEZ-ACTIVITIES").on("mouseover", function(){
    imgTutte.style("opacity", "0.3");
    sezioni.style("opacity", "0.3");
    d3.select(this).style("opacity", "1");
    d3.select("#Activities").style("opacity", "1");
    etichette.style("opacity", "0.3");
    d3.select("#Box-sport").style("opacity", "1");
  })
  d3.select("#SEZ-ACTIVITIES").on("mouseout", function(){
    imgTutte.style("opacity", "1");
    etichette.style("opacity", "1");
    sezioni.style("opacity", "1");
  })

  d3.select("#SEZ-ADVENTURE").on("mouseover", function(){
    imgTutte.style("opacity", "0.3");
    sezioni.style("opacity", "0.3");
    d3.select(this).style("opacity", "1");
    d3.select("#Adventure").style("opacity", "1");
    etichette.style("opacity", "0.3");
    d3.select("#Box-adventure").style("opacity", "1");
  })
  d3.select("#SEZ-ADVENTURE").on("mouseout", function(){
    imgTutte.style("opacity", "1");
    etichette.style("opacity", "1");
    sezioni.style("opacity", "1");
  })

  d3.select("#SEZ-AID").on("mouseover", function(){
    imgTutte.style("opacity", "0.3");
    sezioni.style("opacity", "0.3");
    d3.select(this).style("opacity", "1");
    d3.select("#Aid").style("opacity", "1");
    etichette.style("opacity", "0.3");
    d3.select("#Box-aid").style("opacity", "1");
  })
  d3.select("#SEZ-AID").on("mouseout", function(){
    imgTutte.style("opacity", "1");
    etichette.style("opacity", "1");
    sezioni.style("opacity", "1");
  })

  d3.select("#SEZ-CULTURE").on("mouseover", function(){
    imgTutte.style("opacity", "0.3");
    sezioni.style("opacity", "0.3");
    d3.select(this).style("opacity", "1");
    d3.select("#Culture").style("opacity", "1");
    etichette.style("opacity", "0.3");
    d3.select("#Box-cultural").style("opacity", "1");
  })
  d3.select("#SEZ-CULTURE").on("mouseout", function(){
    imgTutte.style("opacity", "1");
    etichette.style("opacity", "1");
    sezioni.style("opacity", "1");
  })

  d3.select("#SEZ-DOMESTIC").on("mouseover", function(){
    imgTutte.style("opacity", "0.3");
    sezioni.style("opacity", "0.3");
    d3.select(this).style("opacity", "1");
    d3.select("#DOMESTIC").style("opacity", "1");
    etichette.style("opacity", "0.3");
    d3.select("#Box-DOMESTIC").style("opacity", "1");
  })
  d3.select("#SEZ-DOMESTIC").on("mouseout", function(){
    imgTutte.style("opacity", "1");
    etichette.style("opacity", "1");
    sezioni.style("opacity", "1");
  })

  d3.select("#SEZ-HERITAGE").on("mouseover", function(){
    imgTutte.style("opacity", "0.3");
    sezioni.style("opacity", "0.3");
    d3.select(this).style("opacity", "1");
    d3.select("#HERITAGE").style("opacity", "1");
    etichette.style("opacity", "0.3");
    d3.select("#Box-HERITAGE").style("opacity", "1");
  })
  d3.select("#SEZ-HERITAGE").on("mouseout", function(){
    imgTutte.style("opacity", "1");
    etichette.style("opacity", "1");
    sezioni.style("opacity", "1");
  })

  d3.select("#SEZ-LGBT").on("mouseover", function(){
    imgTutte.style("opacity", "0.3");
    sezioni.style("opacity", "0.3");
    d3.select(this).style("opacity", "1");
    d3.select("#LGBT").style("opacity", "1");
    etichette.style("opacity", "0.3");
    d3.select("#Box-LGBT").style("opacity", "1");
  })
  d3.select("#SEZ-LGBT").on("mouseout", function(){
    imgTutte.style("opacity", "1");
    etichette.style("opacity", "1");
    sezioni.style("opacity", "1");
  })

  d3.select("#SEZ-BUSINESS").on("mouseover", function(){
    imgTutte.style("opacity", "0.3");
    sezioni.style("opacity", "0.3");
    d3.select(this).style("opacity", "1");
    d3.select("#BUSINESS").style("opacity", "1");
    etichette.style("opacity", "0.3");
    d3.select("#Box-BUSINESS").style("opacity", "1");
  })
  d3.select("#SEZ-BUSINESS").on("mouseout", function(){
    imgTutte.style("opacity", "1");
    etichette.style("opacity", "1");
    sezioni.style("opacity", "1");
  })

  d3.select("#SEZ-ACCESSIBLE").on("mouseover", function(){
    imgTutte.style("opacity", "0.3");
    sezioni.style("opacity", "0.3");
    d3.select(this).style("opacity", "1");
    d3.select("#ACCESSIBLE").style("opacity", "1");
    etichette.style("opacity", "0.3");
    d3.select("#Box-ACCESSIBLE").style("opacity", "1");
  })
  d3.select("#SEZ-ACCESSIBLE").on("mouseout", function(){
    imgTutte.style("opacity", "1");
    etichette.style("opacity", "1");
    sezioni.style("opacity", "1");
  })

  d3.select("#SEZ-RELIGION").on("mouseover", function(){
    imgTutte.style("opacity", "0.3");
    sezioni.style("opacity", "0.3");
    d3.select(this).style("opacity", "1");
    d3.select("#Religion").style("opacity", "1");
    etichette.style("opacity", "0.3");
    d3.select("#Box-religious").style("opacity", "1");
  })
  d3.select("#SEZ-RELIGION").on("mouseout", function(){
    imgTutte.style("opacity", "1");
    etichette.style("opacity", "1");
    sezioni.style("opacity", "1");
  })

  d3.select("#SEZ-SEX").on("mouseover", function(){
    imgTutte.style("opacity", "0.3");
    sezioni.style("opacity", "0.3");
    d3.select(this).style("opacity", "1");
    d3.select("#SEX").style("opacity", "1");
    etichette.style("opacity", "0.3");
    d3.select("#Box-SEX").style("opacity", "1");
  })
  d3.select("#SEZ-SEX").on("mouseout", function(){
    imgTutte.style("opacity", "1");
    etichette.style("opacity", "1");
    sezioni.style("opacity", "1");
  })

  d3.select("#SEZ-SPACE").on("mouseover", function(){
    imgTutte.style("opacity", "0.3");
    sezioni.style("opacity", "0.3");
    d3.select(this).style("opacity", "1");
    d3.select("#SPACE").style("opacity", "1");
    etichette.style("opacity", "0.3");
    d3.select("#Box-SPACE").style("opacity", "1");
  })
  d3.select("#SEZ-SPACE").on("mouseout", function(){
    imgTutte.style("opacity", "1");
    etichette.style("opacity", "1");
    sezioni.style("opacity", "1");
  })

  d3.select("#SEZ-MEDIC").on("mouseover", function(){
    imgTutte.style("opacity", "0.3");
    sezioni.style("opacity", "0.3");
    d3.select(this).style("opacity", "1");
    d3.select("#Medical").style("opacity", "1");
    etichette.style("opacity", "0.3");
    d3.select("#Box-medical").style("opacity", "1");
  })
  d3.select("#SEZ-MEDIC").on("mouseout", function(){
    imgTutte.style("opacity", "1");
    etichette.style("opacity", "1");
    sezioni.style("opacity", "1");
  })

  d3.select("#SEZ-FOOD").on("mouseover", function(){
    imgTutte.style("opacity", "0.3");
    sezioni.style("opacity", "0.3");
    d3.select(this).style("opacity", "1");
    d3.select("#Food").style("opacity", "1");
    etichette.style("opacity", "0.3");
    d3.select("#Box-food").style("opacity", "1");
  })
  d3.select("#SEZ-FOOD").on("mouseout", function(){
    imgTutte.style("opacity", "1");
    etichette.style("opacity", "1");
    sezioni.style("opacity", "1");
  })

  d3.select("#SEZ-DARK").on("mouseover", function(){
    imgTutte.style("opacity", "0.3");
    sezioni.style("opacity", "0.3");
    d3.select(this).style("opacity", "1");
    d3.select("#Dark").style("opacity", "1");
    etichette.style("opacity", "0.3");
    d3.select("#Box-dark").style("opacity", "1");
  })
  d3.select("#SEZ-DARK").on("mouseout", function(){
    imgTutte.style("opacity", "1");
    etichette.style("opacity", "1");
    sezioni.style("opacity", "1");
  })





});
