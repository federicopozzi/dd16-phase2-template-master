// this is the Javascript file
console.log("Script is loaded!");
Promise.all([d3.html("./question.html"), d3.html("./VizP2.svg")]).then(function([html, svgDocument]) {
  const questionContent = d3.select(html).selectAll('body > *');
  questionContent.each(function(d) {
    d3.select("#question-container").node().appendChild(this);
  });
  let svgNode = svgDocument.querySelector("svg");
  // console.log(svgNode);
  let container = document.querySelector("#visualization");
  // console.log(container);
  container.appendChild(svgNode);


  const pic2018 = d3.selectAll("#_2018_zoom > g");
  pic2018.style("opacity", "0");

  const smallPic2018 = d3.selectAll("#_2018");
  smallPic2018.style("opacity", "1");


  //interazioni con hover

  //not following the trend
  d3.select("#_2018_1").on("mouseover", function() {
    d3.select("#_2018_1_zoom").style("opacity", "1");
  })
  d3.select("#_2018_1").on("mouseout", function() {
    pic2018.style("opacity", "0");
  })

  d3.select("#_2018_2").on("mouseover", function() {
    d3.select("#_2018_2_zoom").style("opacity", "1");
  })
  d3.select("#_2018_2").on("mouseout", function() {
    pic2018.style("opacity", "0");
  })

  d3.select("#_2018_3").on("mouseover", function() {
    d3.select("#_2018_3_zoom").style("opacity", "1");
  })
  d3.select("#_2018_3").on("mouseout", function() {
    pic2018.style("opacity", "0");
  })

  //following the trend
  d3.select("#_2018_103").on("mouseover", function() {
    d3.select("#_2018_103_zoom").style("opacity", "1");
  })
  d3.select("#_2018_103").on("mouseout", function() {
    pic2018.style("opacity", "0");
  })

  d3.select("#_2018_104").on("mouseover", function() {
    d3.select("#_2018_104_zoom").style("opacity", "1");
  })
  d3.select("#_2018_104").on("mouseout", function() {
    pic2018.style("opacity", "0");
  })





});
