// this is the Javascript file
console.log("Script is loaded!");
Promise.all([d3.html("./question.html"), d3.html("./VizP1.svg")]).then(function([html, svgDocument]){
  const questionContent = d3.select(html).selectAll('body > *');
  questionContent.each(function(d){
      d3.select("#question-container").node().appendChild(this);
  });
  let svgNode = svgDocument.querySelector("svg");
  // console.log(svgNode);
  let container = document.querySelector("#visualization");
  // console.log(container);
  container.appendChild(svgNode);

//script gephi prova
  const posts = d3.selectAll("#posts_square");
  posts.style("opacity","0.4");

  const hover = d3.selectAll("#hover");
  hover.style("opacity","0");

  const tasto = d3.selectAll("#button");
  tasto.style("opacity","1");

  const verdi = d3.selectAll("#hashtag");
  verdi.style("opacity","0");

//fade on mousehover
  tasto.on("mouseover", function() {
    console.log("ciao");
    hover.style("opacity","1");
  });
  tasto.on("mouseout", function(){
    hover.style("opacity","0");
  })

});
