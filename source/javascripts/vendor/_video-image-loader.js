  function initVideoImageLoader(player) {
    player.on('loadeddata', function() {
      onVideoLoaded();
    });
    $('.loader-image').imagesLoaded(adjustImagePositioning);
    $(window).on('resize', adjustImagePositioning);
  }

  function onVideoLoaded() {
    $('.loader-image').transit({'opacity':0},2000);
  }

  function adjustImagePositioning() {
    var img = new Image();
    img.src = $('.loader-image').attr('src');
    var windowWidth = $(window).width(),
      windowHeight = $(window).height(),
      r_w = windowHeight / windowWidth,
      i_w = img.width,
      i_h = img.height,
      r_i = i_h / i_w,
      new_w, new_h, new_left, new_top;
    if( r_w > r_i ) {
      new_h   = windowHeight;
      new_w   = windowHeight / r_i;
    }
    else {
      new_h   = windowWidth * r_i;
      new_w   = windowWidth;
    }
    $('.loader-image').css({
      width   : new_w,
      height  : new_h,
      left    : ( windowWidth - new_w ) / 2,
      top     : ( windowHeight - new_h ) / 2
    })
  }
