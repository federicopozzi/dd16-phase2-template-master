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

  const etichette = d3.selectAll("#interazione_etichette > g > g");
  const hashScomparire = d3.selectAll("#interazione_etichette");

  etichette.style("visibility", "hidden");

  const pulsante = d3.selectAll("#Layer_57 > g > ellipse");
   d3.selectAll("#interazione_etichette > g").on("mouseover", function(){
     d3.select(this).select("g").style("visibility", "visible");
   })

   d3.selectAll("#interazione_etichette > g").on("mouseout", function(){
     d3.select(this).select("g").style("visibility", "hidden");
   })

  const hash = d3.selectAll("#hashtag");
  hash.style("opacity", "1");

  const posts = d3.selectAll("#posts_square");
  posts.style("opacity", "1");

  const hashT = d3.selectAll("#hasthag_text");


  //selectall nodes
  const clusters = d3.selectAll("#nodes > g");
  clusters.style("opacity", "0");
  clusters.on("mouseover", function(){
      hashScomparire.style("opacity", "0");
  })
  clusters.on("mouseout", function(){
      hashScomparire.style("opacity", "1");
  })




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

d3.select("#g_death").on("mouseover", function() {
  d3.select("#death-2").style("opacity", "1");
  hash.style("opacity", "0.2");
  posts.style("opacity", "0.2");
  hashT.style("opacity", "0.2");
  d3.select("#targhette_grandi").style("opacity", "0");
});
d3.select("#g_death").on("mouseout", function() {
  d3.select("#death-2").style("opacity", "0");
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

  d3.select("#g_mementomori").on("mouseover", function() {
    d3.select("#mementomori").style("opacity", "1");
    hash.style("opacity", "0.2");
    posts.style("opacity", "0.2");
    hashT.style("opacity", "0.2");
    d3.select("#targhette_grandi").style("opacity", "0");
  });
  d3.select("#g_mementomori").on("mouseout", function() {
    d3.select("#mementomori").style("opacity", "0");
    hash.style("opacity", "1");
    posts.style("opacity", "1");
    hashT.style("opacity", "1");
    d3.select("#targhette_grandi").style("opacity", "1");
  });

  d3.select("#g_halloween").on("mouseover", function() {
    d3.select("#halloween-2").style("opacity", "1");
    hash.style("opacity", "0.2");
    posts.style("opacity", "0.2");
    hashT.style("opacity", "0.2");
    d3.select("#targhette_grandi").style("opacity", "0");
  });
  d3.select("#g_halloween").on("mouseout", function() {
    d3.select("#halloween-2").style("opacity", "0");
    hash.style("opacity", "1");
    posts.style("opacity", "1");
    hashT.style("opacity", "1");
    d3.select("#targhette_grandi").style("opacity", "1");
  });

  d3.select("#g_cemetery").on("mouseover", function() {
    d3.select("#cemetery").style("opacity", "1");
    hash.style("opacity", "0.2");
    posts.style("opacity", "0.2");
    hashT.style("opacity", "0.2");
    d3.select("#targhette_grandi").style("opacity", "0");
  });
  d3.select("#g_cemetery").on("mouseout", function() {
    d3.select("#cemetery").style("opacity", "0");
    hash.style("opacity", "1");
    posts.style("opacity", "1");
    hashT.style("opacity", "1");
    d3.select("#targhette_grandi").style("opacity", "1");
  });

  d3.select("#g_paranormal").on("mouseover", function() {
    d3.select("#paranormal").style("opacity", "1");
    hash.style("opacity", "0.2");
    posts.style("opacity", "0.2");
    hashT.style("opacity", "0.2");
    d3.select("#targhette_grandi").style("opacity", "0");
  });
  d3.select("#g_paranormal").on("mouseout", function() {
    d3.select("#paranormal").style("opacity", "0");
    hash.style("opacity", "1");
    posts.style("opacity", "1");
    hashT.style("opacity", "1");
    d3.select("#targhette_grandi").style("opacity", "1");
  });

  d3.select("#g_haunted").on("mouseover", function() {
    d3.select("#haunted").style("opacity", "1");
    hash.style("opacity", "0.2");
    posts.style("opacity", "0.2");
    hashT.style("opacity", "0.2");
    d3.select("#targhette_grandi").style("opacity", "0");
  });
  d3.select("#g_haunted").on("mouseout", function() {
    d3.select("#haunted").style("opacity", "0");
    hash.style("opacity", "1");
    posts.style("opacity", "1");
    hashT.style("opacity", "1");
    d3.select("#targhette_grandi").style("opacity", "1");
  });

  d3.select("#g_travel").on("mouseover", function() {
    d3.select("#travel-2").style("opacity", "1");
    hash.style("opacity", "0.2");
    posts.style("opacity", "0.2");
    hashT.style("opacity", "0.2");
    d3.select("#targhette_grandi").style("opacity", "0");
  });
  d3.select("#g_travel").on("mouseout", function() {
    d3.select("#travel-2").style("opacity", "0");
    hash.style("opacity", "1");
    posts.style("opacity", "1");
    hashT.style("opacity", "1");
    d3.select("#targhette_grandi").style("opacity", "1");
  });

  d3.select("#g_spooky").on("mouseover", function() {
    d3.select("#spooky").style("opacity", "1");
    hash.style("opacity", "0.2");
    posts.style("opacity", "0.2");
    hashT.style("opacity", "0.2");
    d3.select("#targhette_grandi").style("opacity", "0");
  });
  d3.select("#g_spooky").on("mouseout", function() {
    d3.select("#spooky").style("opacity", "0");
    hash.style("opacity", "1");
    posts.style("opacity", "1");
    hashT.style("opacity", "1");
    d3.select("#targhette_grandi").style("opacity", "1");
  });

  d3.select("#g_abandonedplaces").on("mouseover", function() {
    d3.select("#abandonedplaces").style("opacity", "1");
    hash.style("opacity", "0.2");
    posts.style("opacity", "0.2");
    hashT.style("opacity", "0.2");
    d3.select("#targhette_grandi").style("opacity", "0");
  });
  d3.select("#g_abandonedplaces").on("mouseout", function() {
    d3.select("#abandonedplaces").style("opacity", "0");
    hash.style("opacity", "1");
    posts.style("opacity", "1");
    hashT.style("opacity", "1");
    d3.select("#targhette_grandi").style("opacity", "1");
  });

  d3.select("#g_urbex").on("mouseover", function() {
    d3.select("#urbex").style("opacity", "1");
    hash.style("opacity", "0.2");
    posts.style("opacity", "0.2");
    hashT.style("opacity", "0.2");
    d3.select("#targhette_grandi").style("opacity", "0");
  });
  d3.select("#g_urbex").on("mouseout", function() {
    d3.select("#urbex").style("opacity", "0");
    hash.style("opacity", "1");
    posts.style("opacity", "1");
    hashT.style("opacity", "1");
    d3.select("#targhette_grandi").style("opacity", "1");
  });

  d3.select("#g_abandoned").on("mouseover", function() {
    d3.select("#abandoned").style("opacity", "1");
    hash.style("opacity", "0.2");
    posts.style("opacity", "0.2");
    hashT.style("opacity", "0.2");
    d3.select("#targhette_grandi").style("opacity", "0");
  });
  d3.select("#g_abandoned").on("mouseout", function() {
    d3.select("#abandoned").style("opacity", "0");
    hash.style("opacity", "1");
    posts.style("opacity", "1");
    hashT.style("opacity", "1");
    d3.select("#targhette_grandi").style("opacity", "1");
  });

  d3.select("#g_pripyat").on("mouseover", function() {
    d3.select("#pripyat").style("opacity", "1");
    hash.style("opacity", "0.2");
    posts.style("opacity", "0.2");
    hashT.style("opacity", "0.2");
    d3.select("#targhette_grandi").style("opacity", "0");
  });
  d3.select("#g_pripyat").on("mouseout", function() {
    d3.select("#pripyat").style("opacity", "0");
    hash.style("opacity", "1");
    posts.style("opacity", "1");
    hashT.style("opacity", "1");
    d3.select("#targhette_grandi").style("opacity", "1");
  });

  d3.select("#g_chernobyl").on("mouseover", function() {
    d3.select("#chernobyl").style("opacity", "1");
    hash.style("opacity", "0.2");
    posts.style("opacity", "0.2");
    hashT.style("opacity", "0.2");
    d3.select("#targhette_grandi").style("opacity", "0");
  });
  d3.select("#g_chernobyl").on("mouseout", function() {
    d3.select("#chernobyl").style("opacity", "0");
    hash.style("opacity", "1");
    posts.style("opacity", "1");
    hashT.style("opacity", "1");
    d3.select("#targhette_grandi").style("opacity", "1");
  });

  d3.select("#g_radioactive").on("mouseover", function() {
    d3.select("#radioactive").style("opacity", "1");
    hash.style("opacity", "0.2");
    posts.style("opacity", "0.2");
    hashT.style("opacity", "0.2");
    d3.select("#targhette_grandi").style("opacity", "0");
  });
  d3.select("#g_radioactive").on("mouseout", function() {
    d3.select("#radioactive").style("opacity", "0");
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
