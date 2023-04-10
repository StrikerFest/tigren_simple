define([
  "jquery",
],
function($) {
  return (config) => {
  $(document).ready(function($){
          console.log("Hello from magento theme, this take title from phtml:",config.title);
      });
  }


});
