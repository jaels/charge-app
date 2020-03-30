

export const getLocations = () => {

  return fetch(' https://api.openchargemap.io/v3/poi/?output=json&countrycode=DE&maxresults=5000&compact=true&verbose=false').then(response => {
    return response.json();
  }).then(data => {
    console.log(data);
    return data;
  })
}