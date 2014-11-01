
/*
Tipue drop 4.0
Copyright (c) 2014 Tipue
Tipue drop is released under the MIT License
http://www.tipue.com/drop
*/


(function($) {

     $.fn.tipuedrop = function(options) {

          var set = $.extend( {

               'show'                   : 6,
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
                    if ($(this).val().length > 2)
                    {
                      getTipuedrop($(this));
                    }
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
                    var pat = new RegExp($obj.val(), 'i');
                    var item;
                     for (var i = 0; i < tipuedrop_in.pages.length; i++)
                     {
                        item = tipuedrop_in.pages[i]
                        if ((item.title.search(pat) != -1 || item.tags.search(pat) != -1) && c < set.show)
                        {
                          results[item.category].push('<a href="' + item.loc + '"><div class="tipue_drop_item"><img src="' + compute_image_link(item.category, item.media) + '" class="tipue_drop_item_image pull-left"><div class="tipue_drop_item_title">' + item.title + '</div></div></a>');
                          c++;
                        }
                     }
                     if (c != 0)
                     {
                        var elt = '<div id="tipue_drop_wrapper"><div class="tipue_drop_head">RÉSULTATS DE VOTRE RECHERCHE</div>';
                        elt += render_category("mastectomy", results["mastectomy"]);
                        elt += render_category("surgical", results["surgical"]);
                        elt += render_category("nonsurgical", results["nonsurgical"]);
                        elt += '</div>';
                        $('#tipue_drop_content').html(elt);
                        $('#tipue_drop_content').fadeIn(set.speed);
                     }
                    else
                    {
                       $('#tipue_drop_content').fadeOut(set.speed);
                    }
                  }
                  else
                  {
                       $('#tipue_drop_content').fadeOut(set.speed);
                  }
               }
               function compute_image_link(category, media)
               {
                var link = "/images/tipuesearch/" + media + "_icon_" + category + ".png";
                return link;
               }

               function render_category(category, results)
               {
                  var elt = '<div class="search-' + category + '">';
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
