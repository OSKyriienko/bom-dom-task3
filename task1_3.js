
var navigatorMessageMap = {
	'mac': 'macos',
  'iphone': 'macos',
  'win': 'windows'
};

var platform = navigator.platform.toLowerCase();

for (var key in navigatorMessageMap) {
	key = key.toLowerCase();
	var version = navigatorMessageMap[key];
  
  if (platform.indexOf(key) >= 0){
  	if (version === 'windows') document.querySelector('div[data-version = windows]').style.display = 'block';
  	if (version === 'macos') document.querySelector('div[data-version = macos]').style.display = 'block';
    
	}
}