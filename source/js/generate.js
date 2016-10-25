(function(GUI) {

	var module = {};

	//------------------------------------------------------------------------
	// private function: module internal stuff
	//
	// @param   input1  [string]  Description of input1
	// @param   input2  [array]   Description of input2
	//
	// @return  [string]  Description of output
	//------------------------------------------------------------------------
	function dostuff( input1, input2 ) {
		App.debugging( 'generate: Running dostuff with ' + input1, 'report' );

		// YOUR CODE
	}


	//------------------------------------------------------------------------
	// Initiate method to add event handlers
	//------------------------------------------------------------------------
	module.init = function() {
		GUI.debugging( 'generate: Running init', 'report' );

		$('.js-generate').on('click', function() {
			GUI.debugging( 'generate: init: clicked generate button', 'interaction' );

			var content = []; //this array is used to build the content to be passed to the tabcordion method

			$('.js-filter').each(function() {
				if( this.checked ) { //checkbox checked?
					content.push( $(this).attr('name') ); //adding the content to array
				}
			});

			GUI.generate.tabcordion( content );
		});
	};


	//------------------------------------------------------------------------
	// Generate the tabcordion with the content we selected
	//
	// @param  content  [array]  The content tabs to be added to the tabcordion, Format: [ 'somecontent', 'othercontent' ]
	//------------------------------------------------------------------------
	module.tabcordion = function( content ) {
		GUI.debugging( 'generate: Running tabcordion', 'report' );

		var OPTIONS = { //the options you can select. EG This can come from the server
			'personal-card1': {
				header: 'Low Rate credit card',
				body: '<span class="generate-icon icon icon-size-lg icon-atm" data-grunticon-embed></span><br>' +
					'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus amet necessitatibus provident, officia atque consequatur! Quaerat labore' +
					'iure animi debitis, rem blanditiis deleniti sint facilis ullam hic et consequatur optio.',
			},
			'personal-card2': {
				header: 'Rewards credit cards',
				body: '<span class="generate-icon icon icon-size-lg icon-calculator" data-grunticon-embed></span><br>' +
					'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis architecto eum officiis corrupti autem beatae dolor non ut sed dolorum' +
					'minima, quod repudiandae temporibus dignissimos, voluptate qui, fugit consectetur unde.',
			},
			'personal-card3': {
				header: 'Low Annual Fee credit cards',
				body: '<span class="generate-icon icon icon-size-lg icon-calendar" data-grunticon-embed></span><br>' +
					'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora velit dolore expedita assumenda odio quos asperiores dolorem, nobis fuga,' +
					'hic officia cupiditate sapiente repudiandae. Nam explicabo doloribus incidunt suscipit dicta.',
			},
			'business-card1': {
				header: 'Altitude Business Platinum',
				body: '<span class="generate-icon icon icon-size-lg icon-quick-balance" data-grunticon-embed></span><br>' +
					'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa a doloribus accusantium consequatur esse. Accusamus deserunt animi eos,' +
					'sunt ea omnis architecto velit aut veniam officiis, reprehenderit, alias temporibus. Atque!',
			},
			'business-card2': {
				header: 'Altitude Business Gold',
				body: '<span class="generate-icon icon icon-size-lg icon-to-mobile" data-grunticon-embed></span><br>' +
					'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero molestiae hic dolore ab eius dolorum, voluptate similique nisi delectus.' +
					'Repellendus ut rem praesentium nulla quae quo, officiis, voluptatibus quaerat recusandae.',
			},
		};

		//simple HTML template
		var header = '<div class="tabcordion tabcordion-lego">' +
			'	<ul class="tabcordion-tabs tabcordion-tabs-justified">';
		var headerList = '';
		var middle = '	</ul>';
		var bodyList = '';
		var footer = '</div>';
		var HTML = ''; //eventually all HTML will be assembled in here

		//options for the tabcordions toggled tabs
		var headerClass = ' is-active';
		var bodyClass = ' is-open';
		var bodyHidden = 'false';

		//iterate over the array
		for(var i = 0; i < content.length; i++) {
			//building HTML for each content area
			headerList += '' +
				'		<li class="tabcordion-tab js-collapsible-tab' + headerClass + '">' +
				'			<a class="js-collapsible" href="#' + content[ i ] + '">' +
				'				' + OPTIONS[ content[ i ] ].header +
				'				<span class="tabcordion-tab-helper" aria-hidden="true">' +
				'					Use the arrow keys to select a tab.' +
				'				</span>' +
				'			</a>' +
				'		</li>';

			bodyList += '' +
				'	<div class="tabcordion-body-header js-collapsible-tab' + headerClass + '">' +
				'		<a href="#' + content[ i ] + '" class="tabcordion-body-headline js-collapsible">' + OPTIONS[ content[ i ] ].header + '</a>' +
				'	</div>' +
				'	<div id="' + content[ i ] + '" class="collapsible-body' + bodyClass + '" aria-hidden="' + bodyHidden + '" tabindex="-1">' +
				'		<div class="tabcordion-body">' +
				'			' + OPTIONS[ content[ i ] ].body +
				'		</div>' +
				'	</div>';

			//reset the tabcordions open state so only the very first one is open
			headerClass = '';
			bodyClass = '';
			bodyHidden = 'true';
		};

		HTML = header + headerList + middle + bodyList + footer; //assemble the HTML

		$('#js-content').html( HTML ); //add HTML to DOM
		GUI.tabcordion.render(); //render the tabcordion
		grunticon.embedIcons( grunticon.getIcons( grunticon.getCSS( grunticon.href ) ) );
	};


	GUI.generate = module;
	GUI.generate.init();

}(GUI));