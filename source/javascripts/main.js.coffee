#= require vendor/_modernizr-2.8.3
#= require vendor/_jquery-2.1.1.min
#= require vendor/_jquery-ui.min
#= require bootstrap-sprockets
#= require vendor/tipuesearch/_tipuesearch_set
#= require vendor/tipuesearch/_tipue_content
#= require vendor/tipuesearch/_tipuedrop
#= require vendor/_imagesloaded.pkgd
#= require vendor/video-js/_video
#= require vendor/video-js/lang/_fr
#= require vendor/_bigvideo
#= require vendor/_video-image-loader
#= require vendor/jquery.tinycircleslider
#= require_tree .

videojs.options.flash.swf = "/javascripts/vendor/video-js/video-js.swf"
$.BV = new $.BigVideo
  useFlashForFirefox:false
  controls: true
