// this is the Javascript file
console.log("Script is loaded!");
Promise.all([d3.html("./question.html"), d3.html("./VizP4.svg")]).then(function([html, svgDocument]) {
  const questionContent = d3.select(html).selectAll('body > *');
  questionContent.each(function(d) {
    d3.select("#question-container").node().appendChild(this);
  });
  let svgNode = svgDocument.querySelector("svg");
  // console.log(svgNode);
  let container = document.querySelector("#visualization");
  // console.log(container);
  container.appendChild(svgNode);

  const a = 0;

  //background
  const background = d3.selectAll("#Sfondo");
  background.on("click", function(){
    etichette.style("opacity", "1");
    cliniche.style("opacity", "0");
    base.style("opacity", "1");
  
  })

  const cliniche = d3.selectAll("#Pallinicolori_EtichetteCitta > g");
  cliniche.style("opacity", "0");

  const etichette = d3.selectAll("#EtichetteCorpo > g");

  const nazioni = d3.selectAll("#EtichetteNazioni > g");
  nazioni.style("opacity", "0");

  const base = d3.selectAll("#PallineBase > g");



    //interazione con hover
    d3.select("#Mexico").on("mouseover", function(){
      base.style("opacity", "0.2");
      d3.select(this).style("opacity", "1");
      d3.select("#Etichetta_Mexico").style("opacity", "1");
    })
    d3.select("#Mexico").on("mouseout", function(){
      base.style("opacity", "1");
      d3.select("#Etichetta_Mexico").style("opacity", "0");
    })

    d3.select("#United_States").on("mouseover", function(){
      base.style("opacity", "0.2");
      d3.select(this).style("opacity", "1");
      d3.select("#Etichetta_UnitedStates").style("opacity", "1");
    })
    d3.select("#United_States").on("mouseout", function(){
      base.style("opacity", "1");
      d3.select("#Etichetta_UnitedStates").style("opacity", "0");
    })

    d3.select("#Dominican_Republic").on("mouseover", function(){
      base.style("opacity", "0.2");
      d3.select(this).style("opacity", "1");
      d3.select("#Etichetta_DomenicanRepublic").style("opacity", "1");
    })
    d3.select("#Dominican_Republic").on("mouseout", function(){
      base.style("opacity", "1");
      d3.select("#Etichetta_DomenicanRepublic").style("opacity", "0");
    })

    d3.select("#South_Korea-4").on("mouseover", function(){
      base.style("opacity", "0.2");
      d3.select(this).style("opacity", "1");
      d3.select("#Etichetta_SouthKorea").style("opacity", "1");
    })
    d3.select("#South_Korea-4").on("mouseout", function(){
      base.style("opacity", "1");
      d3.select("#Etichetta_SouthKorea").style("opacity", "0");
    })

    d3.select("#Iran").on("mouseover", function(){
      base.style("opacity", "0.2");
      d3.select(this).style("opacity", "1");
      d3.select("#Etichetta_Iran").style("opacity", "1");
    })
    d3.select("#Iran").on("mouseout", function(){
      base.style("opacity", "1");
      d3.select("#Etichetta_Iran").style("opacity", "0");
    })

    d3.select("#United_Kingdom").on("mouseover", function(){
      base.style("opacity", "0.2");
      d3.select(this).style("opacity", "1");
      d3.select("#Etichetta_United_Kingdom").style("opacity", "1");
    })
    d3.select("#United_Kingdom").on("mouseout", function(){
      base.style("opacity", "1");
      d3.select("#Etichetta_United_Kingdom").style("opacity", "0");
    })







    //function click per le cliniche
    d3.select("#Skin_Body").on("click", function(){
      base.style("opacity", "0");
      etichette.style("opacity", "0");
      d3.select(this).style("opacity", "1");
      d3.select("#Skin_Etichette").style("opacity", "1");

    })

    d3.select("#Legs_Body").on("click", function(){
      base.style("opacity", "0");
      etichette.style("opacity", "0");
      d3.select(this).style("opacity", "1");
      d3.select("#Legs_Etichette").style("opacity", "1");
    })

    d3.select("#Fertility_Body").on("click", function(){
      base.style("opacity", "0");
      etichette.style("opacity", "0");
      d3.select(this).style("opacity", "1");
      d3.select("#Fertility_Etichette").style("opacity", "1");
    })

    d3.select("#Butt_Body").on("click", function(){
      base.style("opacity", "0");
      etichette.style("opacity", "0");
      d3.select(this).style("opacity", "1");
      d3.select("#Butt_Etichette").style("opacity", "1");
    })

    d3.select("#WeightLoss_Body").on("click", function(){
      base.style("opacity", "0");
      etichette.style("opacity", "0");
      d3.select(this).style("opacity", "1");
      d3.select("#Weigh_Loss_Etichette").style("opacity", "1");
    })

    d3.select("#GeneralSurgery_Body").on("click", function(){
      base.style("opacity", "0");
      etichette.style("opacity", "0");
      d3.select(this).style("opacity", "1");
      d3.select("#General_Surgery_Etichette").style("opacity", "1");
    })

    d3.select("#Breast_Body").on("click", function(){
      base.style("opacity", "0");
      etichette.style("opacity", "0");
      d3.select(this).style("opacity", "1");
      d3.select("#Breast_Etichette").style("opacity", "1");
    })

    d3.select("#Teeth_Body").on("click", function(){
      base.style("opacity", "0");
      etichette.style("opacity", "0");
      d3.select(this).style("opacity", "1");
      d3.select("#Teeth_Etichette").style("opacity", "1");
    })

    d3.select("#Face_Body").on("click", function(){
      base.style("opacity", "0");
      etichette.style("opacity", "0");
      d3.select(this).style("opacity", "1");
      d3.select("#Face_Etichette").style("opacity", "1");
    })

    d3.select("#Nose_Body").on("click", function(){
      base.style("opacity", "0");
      etichette.style("opacity", "0");
      d3.select(this).style("opacity", "1");
      d3.select("#Nose_Etichette").style("opacity", "1");
    })

    d3.select("#Hairs_Body").on("click", function(){
      base.style("opacity", "0");
      etichette.style("opacity", "0");
      d3.select(this).style("opacity", "1");
      d3.select("#Hair_Etichette").style("opacity", "1");
    })


});
