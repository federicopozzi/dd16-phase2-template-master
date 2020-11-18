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
  labelCity.style("visibility", "hidden");

  const countries = d3.selectAll("#Countries > g");


  countries.on("mouseout", function() {
    countries.style("opacity", "1");
    labelBody.style("opacity", "1");
  })


  //hover per etichette
  d3.select("#INDONESIA").on("mouseover", function(){
    countries.style("opacity", "0.3");
    d3.select(this).style("opacity", "1");
    labelBody.style("opacity", "0");
    d3.select("#General-Surgery-Body").style("opacity", "1");
    d3.select("#Butt-Body").style("opacity", "1");
    d3.select("#Fertility-Body").style("opacity", "1");
  })

  d3.select("#SOUTH-KOREA").on("mouseover", function(){
    countries.style("opacity", "0.3");
    d3.select(this).style("opacity", "1");
    labelBody.style("opacity", "0");
    d3.select("#Nose-Body").style("opacity", "1");
    d3.select("#General-Surgery-Body").style("opacity", "1");
    d3.select("#Fertility-Body").style("opacity", "1");
    d3.select("#Face-Body").style("opacity", "1");
    d3.select("#Teeth-Body").style("opacity", "1");
  })

  d3.select("#AUSTRALIA").on("mouseover", function(){
    countries.style("opacity", "0.3");
    d3.select(this).style("opacity", "1");
    labelBody.style("opacity", "0");
    d3.select("#General-Surgery-Body").style("opacity", "1");
  })

  d3.select("#MALAYSIA").on("mouseover", function(){
    countries.style("opacity", "0.3");
    d3.select(this).style("opacity", "1");
    labelBody.style("opacity", "0");
    d3.select("#Skin-Body").style("opacity", "1");
    d3.select("#Hair-Body").style("opacity", "1");
  })

  d3.select("#INDIA").on("mouseover", function(){
    countries.style("opacity", "0.3");
    d3.select(this).style("opacity", "1");
    labelBody.style("opacity", "0");
    d3.select("#General-Surgery-Body").style("opacity", "1");
    d3.select("#Fertility-Body").style("opacity", "1");
    d3.select("#Teeth-Body").style("opacity", "1");
  })

  d3.select("#THAILAND").on("mouseover", function(){
    countries.style("opacity", "0.3");
    d3.select(this).style("opacity", "1");
    labelBody.style("opacity", "0");
    d3.select("#Nose-Body").style("opacity", "1");
  })

  d3.select("#GREECE").on("mouseover", function(){
    countries.style("opacity", "0.3");
    d3.select(this).style("opacity", "1");
    labelBody.style("opacity", "0");
    d3.select("#Fertility-Body").style("opacity", "1");
  })

  d3.select("#IRELAND").on("mouseover", function(){
    countries.style("opacity", "0.3");
    d3.select(this).style("opacity", "1");
    labelBody.style("opacity", "0");
    d3.select("#Weight-Loss-Body").style("opacity", "1");
  })

  d3.select("#ALBANIA").on("mouseover", function(){
    countries.style("opacity", "0.3");
    d3.select(this).style("opacity", "1");
    labelBody.style("opacity", "0");
    d3.select("#Face-Body").style("opacity", "1");
  })

  d3.select("#UK").on("mouseover", function(){
    countries.style("opacity", "0.3");
    d3.select(this).style("opacity", "1");
    labelBody.style("opacity", "0");
    d3.select("#Legs-Body").style("opacity", "1");
    d3.select("#Teeth-Body").style("opacity", "1");
    d3.select("#Fertility-Body").style("opacity", "1");
    d3.select("#Face-Body").style("opacity", "1");
    d3.select("#Breast-Body").style("opacity", "1");
  })

  d3.select("#SPAIN").on("mouseover", function(){
    countries.style("opacity", "0.3");
    d3.select(this).style("opacity", "1");
    labelBody.style("opacity", "0");
    d3.select("#Weight-Loss-Body").style("opacity", "1");
  })

  d3.select("#FINLAND").on("mouseover", function(){
    countries.style("opacity", "0.3");
    d3.select(this).style("opacity", "1");
    labelBody.style("opacity", "0");
    d3.select("#General-Surgery-Body").style("opacity", "1");
  })

  d3.select("#LITHUANIA").on("mouseover", function(){
    countries.style("opacity", "0.3");
    d3.select(this).style("opacity", "1");
    labelBody.style("opacity", "0");
    d3.select("#Breast-Body").style("opacity", "1");
    d3.select("#Butt-Body").style("opacity", "1");
    d3.select("#Weight-Loss-Body").style("opacity", "1");
  })

  d3.select("#CZECH-REPUBLIC").on("mouseover", function(){
    countries.style("opacity", "0.3");
    d3.select(this).style("opacity", "1");
    labelBody.style("opacity", "0");
    d3.select("#Fertility-Body").style("opacity", "1");
  })

  d3.select("#RUSSIA").on("mouseover", function(){
    countries.style("opacity", "0.3");
    d3.select(this).style("opacity", "1");
    labelBody.style("opacity", "0");
    d3.select("#Fertility-Body").style("opacity", "1");
    d3.select("#Face-Body").style("opacity", "1");
  })

  d3.select("#SINGAPORE").on("mouseover", function(){
    countries.style("opacity", "0.3");
    d3.select(this).style("opacity", "1");
    labelBody.style("opacity", "0");
    d3.select("#Skin-Body").style("opacity", "1");
  })

  d3.select("#TURKEY").on("mouseover", function(){
    countries.style("opacity", "0.3");
    d3.select(this).style("opacity", "1");
    labelBody.style("opacity", "0");
    d3.select("#Skin-Body").style("opacity", "1");
    d3.select("#Breast-Body").style("opacity", "1");
    d3.select("#Butt-Body").style("opacity", "1");
    d3.select("#Weight-Loss-Body").style("opacity", "1");
    d3.select("#Fertility-Body").style("opacity", "1");
    d3.select("#Face-Body").style("opacity", "1");
    d3.select("#General-Surgery-Body").style("opacity", "1");
    d3.select("#Teeth-Body").style("opacity", "1");
    d3.select("#Nose-Body").style("opacity", "1");
    d3.select("#Hair-Body").style("opacity", "1");
  })

  d3.select("#PAKISTAN").on("mouseover", function(){
    countries.style("opacity", "0.3");
    d3.select(this).style("opacity", "1");
    labelBody.style("opacity", "0");
    d3.select("#Nose-Body").style("opacity", "1");
  })

  d3.select("#LEBANON").on("mouseover", function(){
    countries.style("opacity", "0.3");
    d3.select(this).style("opacity", "1");
    labelBody.style("opacity", "0");
    d3.select("#Legs-Body").style("opacity", "1");
  })

  d3.select("#UAE").on("mouseover", function(){
    countries.style("opacity", "0.3");
    d3.select(this).style("opacity", "1");
    labelBody.style("opacity", "0");
    d3.select("#Legs-Body").style("opacity", "1");
  })

  d3.select("#UKRAINE").on("mouseover", function(){
    countries.style("opacity", "0.3");
    d3.select(this).style("opacity", "1");
    labelBody.style("opacity", "0");
    d3.select("#Breast-Body").style("opacity", "1");
    d3.select("#Butt-Body").style("opacity", "1");
    d3.select("#Face-Body").style("opacity", "1");
    d3.select("#General-Surgery-Body").style("opacity", "1");
    d3.select("#Teeth-Body").style("opacity", "1");
  })

  d3.select("#PHILIPPINES").on("mouseover", function(){
    countries.style("opacity", "0.3");
    d3.select(this).style("opacity", "1");
    labelBody.style("opacity", "0");
    d3.select("#Teeth-Body").style("opacity", "1");
  })

  d3.select("#IRAN").on("mouseover", function(){
    countries.style("opacity", "0.3");
    d3.select(this).style("opacity", "1");
    labelBody.style("opacity", "0");
    d3.select("#Teeth-Body").style("opacity", "1");
    d3.select("#Nose-Body").style("opacity", "1");
    d3.select("#Legs-Body").style("opacity", "1");
    d3.select("#General-Surgery-Body").style("opacity", "1");
  })

  d3.select("#CHILE").on("mouseover", function(){
    countries.style("opacity", "0.3");
    d3.select(this).style("opacity", "1");
    labelBody.style("opacity", "0");
    d3.select("#Weight-Loss-Body").style("opacity", "1");
  })

  d3.select("#BRAZIL").on("mouseover", function(){
    countries.style("opacity", "0.3");
    d3.select(this).style("opacity", "1");
    labelBody.style("opacity", "0");
    d3.select("#Teeth-Body").style("opacity", "1");
  })

  d3.select("#USA").on("mouseover", function(){
    countries.style("opacity", "0.3");
    d3.select(this).style("opacity", "1");
    labelBody.style("opacity", "0");
    d3.select("#Skin-Body").style("opacity", "1");
    d3.select("#Butt-Body").style("opacity", "1");
    d3.select("#Weight-Loss-Body").style("opacity", "1");
    d3.select("#Face-Body").style("opacity", "1");
    d3.select("#General-Surgery-Body").style("opacity", "1");
    d3.select("#Teeth-Body").style("opacity", "1");
    d3.select("#Legs-Body").style("opacity", "1");
  })

  d3.select("#COSTA-RICA").on("mouseover", function(){
    countries.style("opacity", "0.3");
    d3.select(this).style("opacity", "1");
    labelBody.style("opacity", "0");
    d3.select("#Breast-Body").style("opacity", "1");
    d3.select("#Butt-Body").style("opacity", "1");
    d3.select("#Fertility-Body").style("opacity", "1");
    d3.select("#Teeth-Body").style("opacity", "1");
    d3.select("#Nose-Body").style("opacity", "1");
  })

  d3.select("#COSTA-RICA").on("mouseover", function(){
    countries.style("opacity", "0.3");
    d3.select(this).style("opacity", "1");
    labelBody.style("opacity", "0");
    d3.select("#Breast-Body").style("opacity", "1");
    d3.select("#Butt-Body").style("opacity", "1");
    d3.select("#Fertility-Body").style("opacity", "1");
    d3.select("#Teeth-Body").style("opacity", "1");
    d3.select("#Nose-Body").style("opacity", "1");
  })

  d3.select("#COLOMBIA").on("mouseover", function(){
    countries.style("opacity", "0.3");
    d3.select(this).style("opacity", "1");
    labelBody.style("opacity", "0");
    d3.select("#Breast-Body").style("opacity", "1");
    d3.select("#Butt-Body").style("opacity", "1");
    d3.select("#Weight-Loss-Body").style("opacity", "1");
    d3.select("#Face-Body").style("opacity", "1");
    d3.select("#Teeth-Body").style("opacity", "1");
    d3.select("#Nose-Body").style("opacity", "1");
  })

  d3.select("#DOMINICAN-REPUBLIC").on("mouseover", function(){
    countries.style("opacity", "0.3");
    d3.select(this).style("opacity", "1");
    labelBody.style("opacity", "0");
    d3.select("#Breast-Body").style("opacity", "1");
    d3.select("#Butt-Body").style("opacity", "1");
    d3.select("#Weight-Loss-Body").style("opacity", "1");
    d3.select("#Face-Body").style("opacity", "1");
    d3.select("#Legs-Body").style("opacity", "1");
  })

  d3.select("#MEXICO").on("mouseover", function(){
    countries.style("opacity", "0.3");
    d3.select(this).style("opacity", "1");
    labelBody.style("opacity", "0");
    d3.select("#Skin-Body").style("opacity", "1");
    d3.select("#Breast-Body").style("opacity", "1");
    d3.select("#Butt-Body").style("opacity", "1");
    d3.select("#Weight-Loss-Body").style("opacity", "1");
    d3.select("#Fertility-Body").style("opacity", "1");
    d3.select("#Face-Body").style("opacity", "1");
    d3.select("#General-Surgery-Body").style("opacity", "1");
    d3.select("#Teeth-Body").style("opacity", "1");
    d3.select("#Nose-Body").style("opacity", "1");
  })



  const labelBody = d3.selectAll("#Body > g");


  //reset sullo sfondo
  const sfondo = d3.select("#Background");
  sfondo.on("click", function() {
    countries.style("visibility", "visible");
    labelBody.style("opacity", "1");
    labelCity.style("visibility", "hidden");
  })


  //function click per le cliniche
  d3.select("#Skin-Body").on("click", function() {
    labelCity.style("visibility", "hidden");
    countries.style("visibility", "hidden");
    labelBody.style("opacity", "0.4");
    d3.select(this).style("opacity", "1");
    d3.select("#Skin-Labels").style("visibility", "visible");
  })

  d3.select("#Legs-Body").on("click", function() {
    labelCity.style("visibility", "hidden");
    countries.style("visibility", "hidden");
    labelBody.style("opacity", "0.4");
    d3.select(this).style("opacity", "1");
    d3.select("#Legs-Labels").style("visibility", "visible");
  })

  d3.select("#Fertility-Body").on("click", function() {
    labelCity.style("visibility", "hidden");
    countries.style("visibility", "hidden");
    labelBody.style("opacity", "0.4");
    d3.select(this).style("opacity", "1");
    d3.select("#Fertility-Labels").style("visibility", "visible");
  })

  d3.select("#Butt-Body").on("click", function() {
    labelCity.style("visibility", "hidden");
    countries.style("visibility", "hidden");
    labelBody.style("opacity", "0.4");
    d3.select(this).style("opacity", "1");
    d3.select("#Butt-Labels").style("visibility", "visible");
  })

  d3.select("#Weight-Loss-Body").on("click", function() {
    labelCity.style("visibility", "hidden");
    countries.style("visibility", "hidden");
    labelBody.style("opacity", "0.4");
    d3.select(this).style("opacity", "1");
    d3.select("#Weight-Loss-Labels").style("visibility", "visible");
  })

  d3.select("#General-Surgery-Body").on("click", function() {
    labelCity.style("visibility", "hidden");
    countries.style("visibility", "hidden");
    labelBody.style("opacity", "0.4");
    d3.select(this).style("opacity", "1");
    d3.select("#General-Surgery-Labels").style("visibility", "visible");
  })

  d3.select("#Breast-Body").on("click", function() {
    labelCity.style("visibility", "hidden");
    countries.style("visibility", "hidden");
    labelBody.style("opacity", "0.4");
    d3.select(this).style("opacity", "1");
    d3.select("#Breast-Labels").style("visibility", "visible");
  })

  d3.select("#Teeth-Body").on("click", function() {
    labelCity.style("visibility", "hidden");
    countries.style("visibility", "hidden");
    labelBody.style("opacity", "0.4");
    d3.select(this).style("opacity", "1");
    d3.select("#Teeth-Labels").style("visibility", "visible");
  })

  d3.select("#Face-Body").on("click", function() {
    labelCity.style("visibility", "hidden");
    countries.style("visibility", "hidden");
    labelBody.style("opacity", "0.4");
    d3.select(this).style("opacity", "1");
    d3.select("#Face-Labels").style("visibility", "visible");
  })

  d3.select("#Nose-Body").on("click", function() {
    labelCity.style("visibility", "hidden");
    countries.style("visibility", "hidden");
    labelBody.style("opacity", "0.4");
    d3.select(this).style("opacity", "1");
    d3.select("#Nose-Labels").style("visibility", "visible");
  })

  d3.select("#Hair-Body").on("click", function() {
    labelCity.style("visibility", "hidden");
    countries.style("visibility", "hidden");
    labelBody.style("opacity", "0.4");
    d3.select(this).style("opacity", "1");
    d3.select("#Hair-Labels").style("visibility", "visible");
  })




});
