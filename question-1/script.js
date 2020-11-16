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
    immagine.style("opacity", "0.4");
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

  d3.select("#SEZ-NATURE").on("mouseover", function(){
    sezioni.style("opacity", "0");
    d3.select(this).style("opacity", "1");
    etichette.style("opacity", "0");

    d3.select("#BOX-ECOTOURISM").style("opacity","1");
    d3.select("#BOX-SHARK").style("opacity","1");
    d3.select("#BOX-WATER").style("opacity","1");
    d3.select("#BOX-WILDLIFE").style("opacity","1");
    d3.select("#BOX-GARDEN").style("opacity","1");
    d3.select("#BOX-GEO").style("opacity","1");
    d3.select("#BOX-ALTERNATIVE").style("opacity","1");
    d3.select("#BOX-RURAL").style("opacity","1");
    d3.select("#BOX-SUSTAINABLE").style("opacity","1");
    d3.select("#BOX-JUNGLE").style("opacity","1");

    d3.select("#Adventure").style("opacity", "0");
    d3.select("#BUSINESS").style("opacity", "0");
    d3.select("#LGBT").style("opacity", "0");
    d3.select("#Activities").style("opacity", "0");
    d3.select("#HERITAGE").style("opacity", "0");
    d3.select("#Religion").style("opacity", "0");
    d3.select("#DOMESTIC").style("opacity", "0");
    d3.select("#SPACE").style("opacity", "0");
    d3.select("#Aid").style("opacity", "0");
    d3.select("#Culture").style("opacity", "0");
    d3.select("#ACCESSIBLE").style("opacity", "0");
    d3.select("#Food").style("opacity", "0");
    d3.select("#SEX").style("opacity", "0");
    d3.select("#Medical").style("opacity", "0");
    d3.select("#Dark").style("opacity", "0");
    d3.select("#Adventure").style("opacity", "0");

  })
  d3.select("#SEZ-NATURE").on("mouseout", function(){
    sezioni.style("opacity", "1");

    etichette.style("opacity", "1");

    d3.select("#Adventure").style("opacity", "1");
    d3.select("#BUSINESS").style("opacity", "1");
    d3.select("#LGBT").style("opacity", "1");
    d3.select("#Activities").style("opacity", "1");
    d3.select("#HERITAGE").style("opacity", "1");
    d3.select("#Religion").style("opacity", "1");
    d3.select("#DOMESTIC").style("opacity", "1");
    d3.select("#SPACE").style("opacity", "1");
    d3.select("#Aid").style("opacity", "1");
    d3.select("#Culture").style("opacity", "1");
    d3.select("#ACCESSIBLE").style("opacity", "1");
    d3.select("#Food").style("opacity", "1");
    d3.select("#SEX").style("opacity", "1");
    d3.select("#Medical").style("opacity", "1");
    d3.select("#Dark").style("opacity", "1");
    d3.select("#Adventure").style("opacity", "1");
  })

});
