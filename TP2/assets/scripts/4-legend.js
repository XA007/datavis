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
  
// Add asquare to the legen
  var size = 15
  svg.selectAll("squares")
    .data(sources)
    .enter()
    .append("rect")
      .attr("x", 75)
      .attr("y", (s,i) => { return 10 + i*(size+10)})
      .attr("width", size)
      .attr("height", size)
      .style("fill", s => color(s.name))
      .attr("stroke","#000")

  svg.selectAll("labels")
    .data(sources)
    .enter()
    .append("text")
      .attr("x", 80 + size*1.2)
      .attr("y", (d,i) =>  10 + i*(size+10) + (size/2))
      .text(s => s.name)
      .attr("text-anchor", "left")
      .attr("font-size", "12px")
      .style("alignment-baseline", "middle")

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
