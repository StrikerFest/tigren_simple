define([
  "jquery",
],
function($) {
  return (config) => {
  $(document).ready(function($){
          console.log("Hello from magen theme, this take title from phtml:",config.title);
      });
  }


});
