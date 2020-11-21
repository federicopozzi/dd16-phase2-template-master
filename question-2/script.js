// this is the Javascript file
console.log("Script is loaded!");
Promise.all([d3.html("./question.html"), d3.html("./VizP2.svg")]).then(function([html, svgDocument]) {
  const questionContent = d3.select(html).selectAll('body > *');
  questionContent.each(function(d) {
    d3.select("#question-container").node().appendChild(this);
  });
  let svgNode = svgDocument.querySelector("svg");
  // console.log(svgNode);
  let container = document.querySelector("#visualisation");
  // console.log(container);
  container.appendChild(svgNode);

 const arbol = d3.selectAll("#CASA_DEL_ARBOL");
 arbol.style("visibility", "hidden");

 const lempuyang = d3.selectAll("#LEMPUYANG");
 lempuyang.style("visibility", "visible");

 const pig = d3.selectAll("#PIG_ISLAND");
 pig.style("visibility", "hidden");

 const bottonePig = d3.select("#pig_island_on-hover");
 bottonePig.on("click", function(){
   pig.style("visibility", "visible");
   lempuyang.style("visibility", "hidden");
   arbol.style("visibility", "hidden");
 })

 const bottoneLemp = d3.select("#lempuyang_on-hover");
 bottoneLemp.on("click", function(){
   pig.style("visibility", "hidden");
   lempuyang.style("visibility", "visible");
   arbol.style("visibility", "hidden");
 })

 const bottoneArbol = d3.select("#casa_albor_on-hover");
 bottoneArbol.on("click", function(){
   pig.style("visibility", "hidden");
   lempuyang.style("visibility", "hidden");
   arbol.style("visibility", "visibile");
 })



//PIG Island
const instaPig = d3.selectAll("#Pig_Instagram_9");
instaPig.style("visibility", "visible");

const sorterPig = d3.selectAll("#Pig_Imagesorter");
sorterPig.style("visibility", "hidden");

d3.select("#OVERVIEW-on").on("click", function(){
  d3.select(this).style("visibility", "hidden");
  d3.select("#ALL-on").style("visibility", "visible");
  instaPig.style("visibility", "hidden");
  sorterPig.style("visibility", "visible");

})

d3.select("#ALL-on").on("click", function(){
  d3.select(this).style("visibility", "hidden");
  d3.select("#OVERVIEW-on").style("visibility", "visible");
instaPig.style("visibility", "visible");
sorterPig.style("visibility", "hidden");

})

const imagePig = d3.selectAll("#Pig_pictures > g > image");





//lempuyang


});
