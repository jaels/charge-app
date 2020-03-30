// https://api.openchargemap.io/v3/poi/?output=kml&countrycode=GB



export const getLocations = () => {

  return fetch(' https://api.openchargemap.io/v3/poi/?output=json&countrycode=DE&maxresults=5000&compact=true&verbose=false').then(response => {
    console.log(response.body)
    return response.json();
  }).then(data => {
    console.log(data);
    return data;
  })
}