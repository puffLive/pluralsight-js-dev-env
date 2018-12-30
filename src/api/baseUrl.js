export default function getBaseUrl() {
  // const inDevelopment = window.location.hostname === 'localhost';
  // return inDevelopment ? 'http://localhost:3001/' : '/';
  return getQueryStringParameterByName('useMockApi') ? 'http://localhost:3001/' : '/';
}

// function getQueryStringParameterByName(name, url) {
//   if (!url) url = window.location.href;
//   console.log("~~~~~~~~~" +name+ "~~~~~~~~~~~~~~~~~"); // eslint-disable-line no-console
//   name = name.replace(/[\[\]]/g, "\\$&");
//   var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$"),
//     results = regex.exec(url);
//   if (!results) return null;
//   if (!results[2]) return '';
//   return decodeURIComponent(results[2].replace(/\+/g, " "));
// }


function getQueryStringParameterByName(name) {
  name = name.replace(/[[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
      results = regex.exec(window.location.href);
  return results === null ? null : decodeURIComponent(results[1].replace(/\+/g, " "));
}
