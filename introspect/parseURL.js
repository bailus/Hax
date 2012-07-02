(function (window, undefined) {

	window.parseURL = window.parseURL || function (url, m) {
		var temp = document.createElement('a');
		temp.href = url || '/';
		var modifyObject = function (object, modifications) {
			if (!(modifications instanceof Array)) modifications = [modifications];
			$.each(modifications, function (i, modification) {
				if (modification instanceof Function) modification.apply(object);
				else if (modification instanceof Array) object = modifyObject(object, modification);
				else $.extend(object, modification);
			});
			return object;
		};
		if (m) temp = modifyObject(temp, m);
		return temp.href;
	};
	
})(window);
