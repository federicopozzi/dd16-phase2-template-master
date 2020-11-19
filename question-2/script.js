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

 const arbol = d3.selectAll("#Arbol");
 arbol.style("visibility", "visible");

 const lempuyang = d3.selectAll("#Lempuyang");
 lempuyang.style("visibility", "hidden");

 const pig = d3.selectAll("#Pig");
 pig.style("visibility", "hidden");

 const buttonLemp = d3.select("#Lampuyang-on");
 buttonLemp.style("opacity", "0");
 buttonLemp.on("click", function(){
   buttonLemp.style("opacity", "1");
   buttonArbol.style("opacity", "0");
   buttonPig.style("opacity", "0");
   lempuyang.style("visibility", "visible");
   pig.style("visibility", "hidden");
   arbol.style("visibility", "hidden");

 })

 const buttonArbol = d3.select("#Arbol-on");
 buttonArbol.style("opacity", "1");
 buttonArbol.on("click", function(){
   buttonLemp.style("opacity", "0");
   buttonArbol.style("opacity", "1");
   buttonPig.style("opacity", "0");
   lempuyang.style("visibility", "hidden");
   pig.style("visibility", "hidden");
   arbol.style("visibility", "visible");
 })

 const buttonPig = d3.select("#Pig-on");
 buttonPig.style("opacity", "0");
 buttonPig.on("click", function(){
   buttonLemp.style("opacity", "0");
   buttonArbol.style("opacity", "0");
   buttonPig.style("opacity", "1");
   lempuyang.style("visibility", "hidden");
   pig.style("visibility", "visible");
   arbol.style("visibility", "hidden");
 })



});
