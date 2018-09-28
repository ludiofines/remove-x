frame = document.getElementById('html5video');
if (frame !== null)
{
	frame.style.display = '';
	console.log('removed content x');
}
function stringifyCookie(cookie)
{
  var c = cookie.name
    + '='
    + cookie.value
    + ';path='
    + cookie.path
    + ';samesite='
    + cookie.samesite;
  if (cookie.secure)
    c += ';secure';
  return c;
}
var a = {
  name: 'splashWeb-3071026-42',
  value: '1001',
  path: '/',
  samesite: 'strict',
  secure: true
};
var b = {
  name: 'prerollAdsSeenVideos',
  value: '1',
  path: '/',
  samesite: 'strict',
  secure: true
};
var c = {
  "version": 2,
  "vendorPreferences": {
    "comscore": false,
    "google": false,
    "nielsen": false,
    "salesforce_dmp": false
  }   
};
window.localStorage.setItem('twilight.gdpr.preferences', JSON.stringify(c));
console.log('removed content x');
window.setInterval(function(){
  if (window.localStorage.getItem('scrollPagePosition') != null);
    window.localStorage.setItem('scrollPagePosition', "");
}, 1000);
console.log('removed content x');
document.cookie = stringifyCookie(a);
document.cookie = stringifyCookie(b);
console.log('removed content x');
