

	const nButton = document.getElementById('night');
	const dButton = document.getElementById('day');
	const code = document.getElementById('code');
	const buttons = [nButton, dButton];
	const rootStyle = document.documentElement.style;
	let vars = [];


	// Set Vars
	// This will loop over the variables and set them
	const setVars = function(variables) {
		'use strict';

		variables.forEach(function(prop) {
			rootStyle.setProperty(prop.name, prop.value);
		});
	};

	// Get Vars
	// This will fetch the variables on the root and then
	// put them in the UI to show their current values
	const getVars = function(variables) {
		'use strict';

		let text = '';
		variables.forEach(function(prop) {
			text += `${prop.name}: ${rootStyle.getPropertyValue(prop.name)}`;
			text += '\n';
		});

		code.textContent = text;
	};

	// Feature Detect Float in noCalc
	// This will determine if you support floats inside of calc
	const featureDetectFloatCalc = function() {
		'use strict';

		const fd = document.getElementById('feature-detection');
		const noCalc = document.getElementsByClassName('no-rgb-calc')[0];
		const bc = window.getComputedStyle(fd).getPropertyValue('background-color');

		if (bc === 'rgba(0, 0, 0, 0)' || bc === 'transparent') {
			noCalc.style.display = 'block';
		}
	};

		// Change custom props to night
	const night = function() {
		'use strict';

		nButton.setAttribute('aria-selected', 'true');
		dButton.setAttribute('aria-selected', 'false');
		vars = [
		{name: '--sky-start', value: 'rgb(100, 75, 128)'},
		{name: '--sky-end', value: 'rgb(45, 45, 81)'},
		{name: '--light-r-mod', value: '-17.5'},
		{name: '--light-g-mod', value: '25'},
		{name: '--light-b-mod', value: '110'},
		{name: '--show-stars', value: 'block'},
		{name: '--building-r-mod', value: '-.25'},
		{name: '--building-g-mod', value: 0},
		{name: '--building-b-mod', value: '.15'},
		{name: '--park-r-mod', value: '-.30'},
		{name: '--park-g-mod', value: '-.20'},
		{name: '--park-b-mod', value: '-.08'},
		{name: '--light-source', value: 'url(#moon)'}
		];
		setVars(vars);
		getVars(vars);
		return;
	};

	// Change custom props to day
	const day = function() {
		'use strict';

		nButton.setAttribute('aria-selected', 'false');
		dButton.setAttribute('aria-selected', 'true');
		vars = [
		{name: '--dog-coat-r-mod', value: 0},
		{name: '--dog-coat-g-mod', value: 0},
		{name: '--dog-coat-b-mod', value: 0},
		{name: '--park-r-mod', value: 0},
		{name: '--park-g-mod', value: 0},
		{name: '--park-b-mod', value: 0},
		{name: '--building-r-mod', value: 0},
		{name: '--building-g-mod', value: 0},
		{name: '--building-b-mod', value: 0},
		{name: '--sky-start', value: 'rgb(95, 171, 217)'},
		{name: '--sky-end', value: 'rgb(216, 150, 115)'},
		{name: '--light-r-mod', value: 0},
		{name: '--light-g-mod', value: 0},
		{name: '--light-b-mod', value: 0},
		{name: '--show-stars', value: 'none'},
		{name: '--light-source', value: 'rgb(245, 169, 95)'}
		];
		setVars(vars);
		getVars(vars);
		return;
	};

	document.addEventListener('DOMContentLoaded', function() {
		'use strict';

		for (let i = 0; i < buttons.length; i++) {
			buttons[i].addEventListener('click', function() {
				if (buttons[i].id === 'night') {
					night();
				}				else {
					day();
				}
			});
		}

	// Do feature detection for custom props and float support in calc()
		featureDetectFloatCalc();
	});