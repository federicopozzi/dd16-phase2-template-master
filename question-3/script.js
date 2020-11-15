// this is the Javascript file
console.log("Script is loaded!");
Promise.all([d3.html("./question.html"), d3.html("./VizP3.svg")]).then(function([html, svgDocument]) {
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
  const hash = d3.selectAll("#hashtag");
  hash.style("opacity", "1");

  const posts = d3.selectAll("#posts_square");
  posts.style("opacity", "1");

  //selectall nodes
  const clusters = d3.selectAll("#nodes > g");
  clusters.style("opacity","0");

  //interaction on nodes
  clusters.on("mouseover", function(){
    d3.select(this).style("opacity", "1");
    hash.style("opacity", "0.4");
    posts.style("opacity", "0.4");
  })

  clusters.on("mouseout", function(){
    d3.select(this).style("opacity", "0");
    hash.style("opacity", "1");
    posts.style("opacity", "1");
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
