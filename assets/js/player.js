
var player = videojs('content_video');

var options = {
  id: 'content_video',
  adTagUrl: 'http://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/47485983/video_player&ciu_szs&impl=s&gdfp_req=1&env=vp&output=xml_vast2&unviewed_position_start=1&url=[referrer_url]&description_url=[description_url]&correlator=[timestamp]'
};

player.ima(options);
player.ima.requestAds();
// On mobile devices, you must call initializeAdDisplayContainer as the result
// of a user action (e.g. button click). If you do not make this call, the SDK
// will make it for you, but not as the result of a user action. For more info
// see our examples, all of which are set up to work on mobile devices.
// player.ima.initializeAdDisplayContainer();
player.play();