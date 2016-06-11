window.onload = function(){
	var capabilitiesHeading = document.querySelector('.capabilities-heading');
	capabilitiesHeading.addEventListener('click', activateCapabilitiesHeading);

	function activateCapabilitiesHeading(e){
		var target = e.target;
		var td = target.closest('.capabilities-heading__item_disable');
		if (!td)
			return;
		// if (!this.contains(td))
		// 	return;
		var tr = td.parentElement.querySelector('.capabilities-heading__item_active');
		tr.classList.remove('capabilities-heading__item_active');
		tr.classList.add('capabilities-heading__item_disable');
		var aa = document.querySelector('.capabilities-items_active');
		aa.classList.remove('capabilities-items_active');
		aa.classList.add('capabilities-items_hidden');
		var lal = td.classList;
		var color;
		for (var i = 0; i < lal.length; i++){
			if (~lal[i].indexOf('capabilities-heading__item_color_')){
				color = lal[i].slice(33);
				// alert(color);
			}
		}
		var next = aa.parentElement.querySelector('.capabilities-items_color_' + color);
		next.classList.remove('capabilities-items_hidden');
		next.classList.add('capabilities-items_active');
		td.classList.remove('capabilities-heading__item_disable');
		td.classList.add('capabilities-heading__item_active');
		// lal.filter(function(class){
		// 	return (~class.indexOf('capabilities-heading__item_color_'));
		// })
	}
}