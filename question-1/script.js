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


});
