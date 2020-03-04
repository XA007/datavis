"use strict";

/**
 * File to process data from the CSV. 
 */


/**
 * Specifies the domain and the range of colors for the scale to distinguish the political parties. 
 *
 * @param color     Color scale.
 * @param parties   The information to use for the different parties. 
 */
function colorScale(color, parties) {
  // TODO: Specify the domain of the scale in y associating each of the parties passed as parameter
  //       Also, specify the range of colors by specifying the color used for each party. 
  const partiesList = parties.map(p => p.name)
  const colors = parties.map(p => p.color)
  color.domain(partiesList).range(colors)
}

/**
 * Converts each of the number from the CSV file to type "number"
 * @param data      Data from the CSV. 
 */
function convertNumbers(data) {
  // TODO: Convert the properties "id" and "votes" to type "number" for each of the elements in the list
  data.forEach(d => {
    d.id = Number(d.id)
    d.votes = Number(d.votes)
  })
}

/**
 * Reorganizes the data to combine the results for a given district 
 *
 * @param data      Data from the CSV. 
 * @return {Array}  The reorganized data to usee. The return element must be a table of objects with 338 entries, meaning
 *                  one entry per riding. Each entry must present the results for each candidate in decreasing order (from
 *                  the candidate with the most votes to the one with the least votes). The returned object must look like: 
 *
 *                  [
 *                    {
 *                      id: number              // The number of the district 
 *                      name: string,           // The number of the district 
 *                      results: [              // the table with the results for the candidates
 *                                              // *** This table must be sorted in decreasing order of votes. ***
 *                        {
 *                          candidate: string,  // The name of the candidate
 *                          votes: number,      // The number of votes for the candidate
 *                          percent: string,    // The percentage of votes for the candidate
 *                          party: string       // The political party of the candidate
 *                        },
 *                        ...
 *                      ]
 *                    },
 *                    ...
 *                  ]
 */
function createSources(data) {
  // TODO: Return the object with the format described above. Make sure to sort the table "results" for each entry 
  // in decreasing order of the votes (the winning candidate must be the first element of the table)
  const sources = []
  const ids = [...new Set(data.map(d=>d.id))]
 
  ids.forEach( id => {
    const results = []
    data.forEach( d => {
      if(d.id === id)
      {
        const result = {
          candidate: d.candidate,
          votes : d.votes,
          percent: d.percent,
          party: d.party,
        }
        results.push(result)
      }
    })
    const source = {
      id: id,
      name: data.find(d => d.id === id).name,
      results: results.reverse()
    }
    sources.push(source)
  })
  
  return sources
}