// this is the Javascript file
console.log("Script is loaded!");
Promise.all([d3.html("./question.html"), d3.html("./VizP4.svg")]).then(function([html, svgDocument]) {
  const questionContent = d3.select(html).selectAll('body > *');
  questionContent.each(function(d) {
    d3.select("#question-container").node().appendChild(this);
  });
  let svgNode = svgDocument.querySelector("svg");
  // console.log(svgNode);
  let container = document.querySelector("#visualisation");
  // console.log(container);
  container.appendChild(svgNode);

  const labelCity = d3.selectAll("#Labels-Cities > g");
  labelCity.style("opacity", "0");

  const countries = d3.selectAll("#Countries > g");

  countries.on("mouseover", function(){
    countries.style("opacity", "0.3");
    d3.select(this).style("opacity", "1");
  })
  countries.on("mouseout", function(){
    countries.style("opacity", "1");

  })

  const labelBody = d3.selectAll("#Body > g");


  //reset sullo sfondo
  const sfondo = d3.select("#Background");
  sfondo.on("click", function(){
    countries.style("visibility", "visible");
    labelBody.style("opacity", "1");
    labelCity.style("opacity", "0");
  })


  //function click per le cliniche
  d3.select("#Skin-Body").on("click", function() {
    countries.style("visibility", "hidden");
    labelBody.style("opacity", "0.4");
    d3.select(this).style("opacity", "1");
    d3.select("#Skin-Labels").style("opacity", "1");
  })

  d3.select("#Legs-Body").on("click", function() {
    countries.style("visibility", "hidden");
    labelBody.style("opacity", "0.4");
    d3.select(this).style("opacity", "1");
    d3.select("#Legs-Labels").style("opacity", "1");
  })

  d3.select("#Fertility-Body").on("click", function() {
    countries.style("visibility", "hidden");
    labelBody.style("opacity", "0.4");
    d3.select(this).style("opacity", "1");
    d3.select("#Fertility-Labels").style("opacity", "1");
  })

  d3.select("#Butt-Body").on("click", function() {
    countries.style("visibility", "hidden");
    labelBody.style("opacity", "0.4");
    d3.select(this).style("opacity", "1");
    d3.select("#Butt-Labels").style("opacity", "1");
  })

  d3.select("#Weight-Loss-Body").on("click", function() {
    countries.style("visibility", "hidden");
    labelBody.style("opacity", "0.4");
    d3.select(this).style("opacity", "1");
    d3.select("#Weight-Loss-Labels").style("opacity", "1");
  })

  d3.select("#General-Surgery-Body").on("click", function() {
    countries.style("visibility", "hidden");
    labelBody.style("opacity", "0.4");
    d3.select(this).style("opacity", "1");
    d3.select("#General-Surgery-Labels").style("opacity", "1");
  })

  d3.select("#Breast-Body").on("click", function() {
    countries.style("visibility", "hidden");
    labelBody.style("opacity", "0.4");
    d3.select(this).style("opacity", "1");
    d3.select("#Breast-Labels").style("opacity", "1");
  })

  d3.select("#Teeth-Body").on("click", function() {
    countries.style("visibility", "hidden");
    labelBody.style("opacity", "0.4");
    d3.select(this).style("opacity", "1");
    d3.select("#Teeth-Labels").style("opacity", "1");
  })

  d3.select("#Face-Body").on("click", function() {
    countries.style("visibility", "hidden");
    labelBody.style("opacity", "0.4");
    d3.select(this).style("opacity", "1");
    d3.select("#Face-Labels").style("opacity", "1");
  })

  d3.select("#Nose-Body").on("click", function() {
    countries.style("visibility", "hidden");
    labelBody.style("opacity", "0.4");
    d3.select(this).style("opacity", "1");
    d3.select("#Nose-Labels").style("opacity", "1");
  })

  d3.select("#Hair-Body").on("click", function() {
    countries.style("visibility", "hidden");
    labelBody.style("opacity", "0.4");
    d3.select(this).style("opacity", "1");
    d3.select("#Hair-Labels").style("opacity", "1");
  })


});
