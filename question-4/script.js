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

  //script gephi prova
  //background
  const butte = d3.selectAll("#Butt_Etichette");
  butte.style("opacity", "0");

  const skin = d3.selectAll("#Skin_Body");
  const leg = d3.selectAll("#Legs_Body");
  const fertility = d3.selectAll("#Fertility_body");
  const peso = d3.selectAll("#Weight_Loss_Body");
  const general = d3.selectAll("#General_Surgery_Body");
  const breast = d3.selectAll("#Breast_Body");
  const teeth = d3.selectAll("#Teeth_Body");
  const face = d3.selectAll("#Face_Body");
  const nose = d3.selectAll("#Nose_Body");
  const hairs = d3.selectAll("#Hairs_Body");

  const pallini = d3.selectAll("#Pallini");

  const korea = d3.selectAll("#South_Korea_Etichetta");
  korea.on("mouseover", function(){
    pallini.style("opacity", "0.3");
  })

  korea.on("mouseout", function(){
    pallini.style("opacity", "1");
  })

  const buttb = d3.selectAll("#Butt_Body");
  buttb.on("click", function(){
    butte.style("opacity", "1");
    pallini.style("opacity", "0");
    korea.style("opacity", "0");
    skin.style("opacity", "0");
    leg.style("opacity", "0");
    fertility.style("opacity", "0");
    peso.style("opacity", "0");
    general.style("opacity", "0");
    breast.style("opacity", "0");
    teeth.style("opacity", "0");
    face.style("opacity", "0");
    nose.style("opacity", "0");
    hairs.style("opacity", "0");
  })

  const background = d3.selectAll("#Livello_8");
  background.on("click", function(){
    butte.style("opacity", "0");
    pallini.style("opacity", "1");
    korea.style("opacity", "1");
    skin.style("opacity", "1");
    leg.style("opacity", "1");
    fertility.style("opacity", "1");
    peso.style("opacity", "1");
    general.style("opacity", "1");
    breast.style("opacity", "1");
    teeth.style("opacity", "1");
    face.style("opacity", "1");
    nose.style("opacity", "1");
    hairs.style("opacity", "1");
  })

  //fade on mousehover
  // skull.on("mouseover", function() {
  //   console.log("ciao");
  //   skull.style("opacity","1");
  // });
  // skull.on("mouseout", function(){
  //   skull.style("opacity","0");
  // })

});
