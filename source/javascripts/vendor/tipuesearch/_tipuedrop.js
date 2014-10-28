
/*
Tipue drop 4.0
Copyright (c) 2014 Tipue
Tipue drop is released under the MIT License
http://www.tipue.com/drop
*/


(function($) {

     $.fn.tipuedrop = function(options) {

          var set = $.extend( {

               'show'                   : 10,
               'speed'                  : 300,
               'newWindow'              : false,
               'mode'                   : 'static',
               'contentLocation'        : 'tipuedrop/tipuedrop_content.json'

          }, options);

          return this.each(function() {

               var tipuedrop_in = {
                    pages: []
               };
               $.ajaxSetup({
                    async: false
               });

               if (set.mode == 'json')
               {
                    $.getJSON(set.contentLocation,
                         function(json)
                         {
                              tipuedrop_in = $.extend({}, json);
                         }
                    );
               }
               if (set.mode == 'static')
               {
                    tipuedrop_in = $.extend({}, tipuedrop);
               }

               $(this).keyup(function(event)
               {
                    getTipuedrop($(this));
               });

               function getTipuedrop($obj)
               {
                  if ($obj.val())
                  {
                     var c = 0;
                    var results = {};
                    results["mastectomy"] = [];
                    results["surgical"] = [];
                    results["nonsurgical"] = [];
                     for (var i = 0; i < tipuedrop_in.pages.length; i++)
                     {
                        var pat = new RegExp($obj.val(), 'i');
                        if ((tipuedrop_in.pages[i].title.search(pat) != -1 || tipuedrop_in.pages[i].text.search(pat) != -1 || tipuedrop_in.pages[i].tags.search(pat) != -1) && c < set.show)
                        {
                          results[tipuedrop_in.pages[i].category].push('<a href="' + tipuedrop_in.pages[i].loc + '"><div class="tipue_drop_item"><div class="tipue_drop_left"><img src="' + tipuedrop_in.pages[i].thumb + '" class="tipue_drop_image"></div><div class="tipue_drop_right"><div class="tipue_drop_right_title">' + tipuedrop_in.pages[i].title + '</div><div class="tipue_drop_right_text">' + tipuedrop_in.pages[i].text + '</div></div></div></a>');
                          c++;
                        }
                     }
                     if (c != 0)
                     {
                        var elt = '<div id="tipue_drop_wrapper"><div class="tipue_drop_head"><div id="tipue_drop_head_text">RÉSULTATS DE VOTRE RECHERCHE</div></div>';
                        elt += render_category("mastectomy", results["mastectomy"]);
                        elt += render_category("surgical", results["surgical"]);
                        elt += render_category("nonsurgical", results["nonsurgical"]);
                        elt += '</div>';
                        $('#tipue_drop_content').html(elt);
                        $('#tipue_drop_content').fadeIn(set.speed);
                     }
                  }
                  else
                  {
                       $('#tipue_drop_content').fadeOut(set.speed);
                  }
               }

               function render_category(category, results)
               {
                  var elt = '<div id="' + category + '" class="search-' + category + '">';
                  for (var i = 0; i < results.length; i++)
                  {
                    if (i == 0)
                    {
                      elt += '<div class="category-title title-'+ category +'">' + category + '</div>';
                    }
                    elt += results[i];
                  }
                  elt += '</div>';
                  return elt;
               }

               $('html').click(function()
               {
                    $('#tipue_drop_content').fadeOut(set.speed);
               });

          });
     };

})(jQuery);
