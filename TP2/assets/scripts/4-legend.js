"use strict";

/**
 * File used for generating the legend and controlling the interactions with it.
 */


/**
 * Create a legend from the given source.
 *
 * @param svg       SVG element to use in order to create the legend.
 * @param sources   Data sorted by street name and by date.
 * @param color     The 10-color scale to use.
 */
function legend(svg, sources, color) {
  // TODO: Create the legend that supplements the graphic.
  const xTranslation = 60
  const yTranslation = 30
  const legendBoxFontSize = "12px"

  legend = svg.append("g")
  .attr("class","legend")
  .attr("transform","translate(" + xTranslation + "," + yTranslation + ")")
  .style("font-size",legendBoxFontSize)

  // Legned background
  const width = 180
  const height = 250
  const opacity = 0
  
  legend.append("rect")
  .attr("width", width)
  .attr("height", height)
  .attr("opacity", opacity)

  legend = legend.selectAll(".oneLegend")
  .data(color.domain())
  .enter()

  const padding = 10
  const squareSize = 15
  const legendOffset = 10
  const strokeColor = "#000"

  //append legend elements
  legend.append("rect")
  .attr("x", legendOffset)
  .attr("y", function(d,i){ return i*(squareSize + padding)})
  .attr("class", "oneLegend")
  .attr("width", squareSize)
  .attr("height", squareSize)
  .attr("stroke", strokeColor)
  .attr("fill", function(d){ return color(d)})
  .on("click", function (d) {
    
    const clickedSquareColor = "#ffffff"
    let e = d3.select(this)

    if (e.attr("fill") == clickedSquareColor) 
    {
      e.attr("fill",e.attr("originalColor"))
      .attr("originalColor",null);
    }
    else
    {
      e.attr("originalColor",e.attr("fill"))
      .attr("fill",clickedSquareColor);
    }
    
    displayLine(e,color);
  })
  .on("mouseover", function (d) {
    d3.select(this).attr("opacity",0.5)
  })
  .on("mouseout", function (d) {
    d3.select(this).attr("opacity",1)
  });

  //append legend texts
  const topOffset = 10

  legend.append("text")
  .attr("x", legendOffset + squareSize + padding)
  .attr("y", (d,i) => { return i * (squareSize + padding) + topOffset})
  .attr("class", "legend_element")
  .text(function(d) {
    return d;
  });

}

/**
 * Allows for show/hide whether the line that corresponding to the clicked square.
 *
 * By clicking on a square, we display/hide the corresponding line and the square's interior becomes white/goes back to its original color.
 *
 * @param element   The square that was clicked
 * @param color     The 10-color scale
 */
function displayLine(element, color) {
  // TODO: Complete the code to show or hide a line depending on the selected item
  
}
