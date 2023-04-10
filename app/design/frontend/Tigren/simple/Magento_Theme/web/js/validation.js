define([
   'jquery'
], function ($, _) {
   'use strict';

   $.widget('mage.validation',{

       _create: function(config,element) {

           this._case = $(this.element);
           $(this._case).keyup(function () {
               var max = 20;
               var len = this.value.length;
//               var len = $(this.element).val().length;
               console.log("len1233",this.value.length);
               if (len >= max) {
               var char = len-max;
                   $('#charNum').text('Limit reached! ' + char + ' characters too much');
               } else {
                   var char = max - len;
                  $('#charNum').text(char + ' characters left');
               }
           });
       }
   });

    return $.mage.validation;

});
