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




});
