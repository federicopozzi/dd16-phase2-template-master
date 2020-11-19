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

  // const etichette = d3.selectAll("#Layer_57 > g > #nome");
  //
  // etichette.style("visibility", "hidden");
  //
  // const pulsante = d3.selectAll("#Layer_57 > g > ellipse");
  //  d3.selectAll("#Layer_57 > g").on("mouseover", function(){
  //    d3.select(this).select("#nome").style("visibility", "visible");
  //  })
  //
  //  d3.selectAll("#Layer_57 > g").on("mouseout", function(){
  //    d3.select(this).select("#nome").style("visibility", "hidden");
  //  })

  const hash = d3.selectAll("#hashtag");
  hash.style("opacity", "1");

  const posts = d3.selectAll("#posts_square");
  posts.style("opacity", "1");

  const hashT = d3.selectAll("#hasthag_text");

  //selectall nodes
  const clusters = d3.selectAll("#nodes > g");
  clusters.style("opacity", "0");




  d3.select("#targhette_nuove").style("opacity", "0");

//hover sui nodes
  d3.select("#g_skull").on("mouseover", function() {
    d3.select("#skull").style("opacity", "1");
    hash.style("opacity", "0.2");
    posts.style("opacity", "0.2");
    hashT.style("opacity", "0.2");
    d3.select("#targhette_grandi").style("opacity", "0");

  });
  d3.select("#g_skull").on("mouseout", function() {
    d3.select("#skull").style("opacity", "0")
    hash.style("opacity", "1");
    posts.style("opacity", "1");
    hashT.style("opacity", "1");
    d3.select("#targhette_grandi").style("opacity", "1");
  });

  d3.select("#g_history").on("mouseover", function() {
    d3.select("#history").style("opacity", "1");
    hash.style("opacity", "0.2");
    posts.style("opacity", "0.2");
    hashT.style("opacity", "0.2");
    d3.select("#targhette_grandi").style("opacity", "0");
  });
  d3.select("#g_history").on("mouseout", function() {
    d3.select("#history").style("opacity", "0");
    hash.style("opacity", "1");
    posts.style("opacity", "1");
    hashT.style("opacity", "1");
    d3.select("#targhette_grandi").style("opacity", "1");
  });



  //background
  const background = d3.selectAll("#sfondo");
  background.on("click", function() {
  d3.select("#nuclear").style("opacity", "0");
  d3.select("#death").style("opacity", "0");
  nuke.style("opacity", "0");
  death.style("opacity", "0");
  })


  //interaction on click sulle aree

  const tutteFoto = d3.selectAll("#foto_feed > g");
  tutteFoto.style("opacity", "0");
  d3.select("#grid").style("opacity", "1");

  const nuke = d3.selectAll("#area_nuclear_on");
  nuke.style("opacity", "0");

  nuke.on("click", function() {
    nuke.style("opacity", "1");
    d3.select("#nuclear").style("opacity", "1");
  })

  const death = d3.selectAll("#area_death_on");
  death.style("opacity", "0");

  death.on("click", function(){
    death.style("opacity", "1");
    d3.select("#death").style("opacity", "1");
  })

  const spanish = d3.selectAll("#area_spanish_on");
  spanish.style("opacity", "0");

  const horror = d3.selectAll("#area_horror_on");
  horror.style("opacity", "0");

  const halloween = d3.selectAll("#area_halloween_on");
  halloween.style("opacity", "0");

  const travel = d3.selectAll("#area_travel_on");
  travel.style("opacity", "0");

  const korea = d3.selectAll("#area_korean_on");
  korea.style("opacity", "0");

  const cambodian = d3.selectAll("#area_cambodian_on");
  cambodian.style("opacity", "0");
});
