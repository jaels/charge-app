

export const getLocations = () => {

  return fetch(' https://api.openchargemap.io/v3/poi/?output=json&countrycode=DE&maxresults=80000&compact=true&verbose=false&latitude=52.5200&longitude=13.4050').then(response => {
    return response.json();
  }).then(data => {
    console.log(data);
    return data;
  })
}