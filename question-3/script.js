// this is the Javascript file
console.log("Script is loaded!");
Promise.all([d3.html("./question.html"), d3.html("./VizP3.svg")]).then(function([html, svgDocument]) {
  const questionContent = d3.select(html).selectAll('body > *');
  questionContent.each(function(d) {
    d3.select("#question-container").node().appendChild(this);
  });
  let svgNode = svgDocument.querySelector("svg");
  // console.log(svgNode);
  let container = document.querySelector("#visualisation");
  // console.log(container);
  container.appendChild(svgNode);


  // script gephi prova
  // background
  const hash = d3.selectAll("#hashtag");
  hash.style("opacity", "1");

  const posts = d3.selectAll("#posts_square");
  posts.style("opacity", "1");

  const hashT = d3.selectAll("#hasthag_text");

  //selectall nodes
  const clusters = d3.selectAll("#nodes > g");
  clusters.style("opacity", "0");


  //background
  const background = d3.selectAll("#sfondo");
  background.on("click", function() {
    skull.style("opacity", "0");
    nuke.style("opacity", "0");
  })


//hover sui nodes
  d3.select("#g_skull").on("mouseover", function() {
    d3.select("#skull").style("opacity", "1");
    hash.style("opacity", "0.2");
    posts.style("opacity", "0.2");
    hashT.style("opacity", "0.2");

  });
  d3.select("#g_skull").on("mouseout", function() {
    d3.select("#skull").style("opacity", "0")
    hash.style("opacity", "1");
    posts.style("opacity", "1");
    hashT.style("opacity", "1");
  });

  d3.select("#g_history").on("mouseover", function() {
    d3.select("#history").style("opacity", "1");
    hash.style("opacity", "0.2");
    posts.style("opacity", "0.2");
    hashT.style("opacity", "0.2");
  });
  d3.select("#g_history").on("mouseout", function() {
    d3.select("#history").style("opacity", "0");
    hash.style("opacity", "1");
    posts.style("opacity", "1");
    hashT.style("opacity", "1");
  });



  //interaction on click sulle aree
  const nuke = d3.selectAll("#nuclear");
  nuke.style("opacity", "0");

  const skull = d3.selectAll("#death");
  skull.style("opacity", "0");

  const areaDeath = d3.selectAll("#area_death");
  areaDeath.on("click", function() {
    skull.style("opacity", "1");
  })

  const areaNuke = d3.selectAll("#area_nuclear");
  areaNuke.on("click", function() {
    nuke.style("opacity", "1");
  })


});
