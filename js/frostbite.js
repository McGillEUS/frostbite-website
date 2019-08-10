var frostbite = angular.module('frostbite', []);

frostbite.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
	$scope.flavours = [
			{
				alt: 'baby monkey',
				flavId:'baby_monkey.jpg',
				description: 'No monkeys were harmed in the making of this ice cream',
				modalID: '1',
				modalHeader:'f',
				modalDescription: 'f',
				type: 'f'
			},
			{
				alt: 'black cherry',
				flavId:'black_cherry.jpg',
				description: 'Black Cherry gives me wings...'
			},
			{
				alt: 'butterscotch ripple',
				flavId:'butterscotch_ripple.jpg',
				description: 'Grandmas butterscotch pie has stiff competition'
			},
			{
				alt: 'chocolate peanut butter',
				flavId:'c_pb.jpg',
				description: 'The best party in your mouth, you already know'
			},
			{
				alt: 'chocolate rasberry',
				flavId:'c_ras.jpg',
				description: 'Kinda tastes like chocolate and rasberries, yoloswag'
			},
			{
				alt: 'cookies and cream',
				flavId:'cookies_cream.jpg',
				description: 'Eating cookies just got a lot better'
			},
			{
				alt: 'green tea',
				flavId:'green_tea.jpg',
				description: 'Irrelevant opinon: Green tea isnt the best flavour'
			},
			{
				alt: 'guava grapefruit',
				flavId:'guava_grapefruit.jpg',
				description: 'Equivalent to the recommended 3 servings of fruit per day'
			},
			{
				alt: 'chocolate chip cookie dough',
				flavId:'cc_cookie_dough.jpg',
				description: 'The perfect remedy for cookie cravings'
			},
			{
				alt: 'chocolate',
				flavId:'just_choco.jpg',
				description: 'Doesnt get much better than classic chocolate'
			},
			{
				alt: 'coconut',
				flavId:'just_coconut.jpg',
				description: 'Im in love with the COCO'
			},
			{
				alt: 'expresso',
				flavId:'just_expresso.jpg',
				description: 'Makes me wanna run through the 6 w/ my woes'
			},
			{
				alt: 'smores',
				flavId:'just_mores.jpg',
				description: 'Guaranteed to have you singing campfire songs'
			},
			{
				alt: 'pistachio',
				flavId:'just_pistach.jpg',
				description: 'its the bomb.com'
			},
			{
				alt: 'strawberry',
				flavId:'just_straberry.jpg',
				description: 'Gets the whole squad going #squadup'
			},
			{
				alt: 'vanilla',
				flavId:'just_vanilla.jpg',
				description: 'Vanilla ice ice baby'
			},
			{
				alt: 'maple walnut',
				flavId:'maple_walnut.jpg',
				description: 'This ones for all you walnut lovers out there'
			},
			{
				alt: 'mint chocolate chip',
				flavId:'mint_choco.jpg',
				description: 'Bruuuuuuuuhhhhh, stayin real gucci with this flavour'
			},
			{
				alt: 'mint oreo',
				flavId:'mint_oreo.jpg',
				description: 'Keeps me hella fresh'
			},
			{
				alt: 'new york cheesecake',
				flavId:'ny_cheecake.jpg',
				description: 'NEW YOOOORRK, concrete jungle wet dream tomatoooo'
			},
			{
				alt: 'pralines and cream',
				flavId:'pralines_cream.jpg',
				description: 'Makes me wake up in a new bugatti'
			},
			{
				alt: 'rolo',
				flavId:'rolo_yolo.jpg',
				description: '25 sittin on 25 mil'
			},
			{
				alt: 'rum and raison',
				flavId:'rum_raison.jpg',
				description: 'Does anyone even like this flavour for the raisins?'
			},
			{
				alt: 'lemon',
				flavId:'s_just_lemon.jpg',
				description: 'When life gives you lemons, make ice cream'
			},
			{
				alt: 'litchi',
				flavId:'s_just_litchi.jpg',
				description: 'Better than actual litchi mmmmm'
			},
			{
				alt: 'mango',
				flavId:'s_just_mango.jpg',
				description: 'The Beyonce of ice creams... cant hate on mango ya feel?'
			},
			{
				alt: 'mojito',
				flavId:'s_just_mojito.jpg',
				description: 'Why bother even going to a bar?'
			},
			{
				alt: 'strawberry daquiri',
				flavId:'s_str_dq.jpg',
				description: '10/10 say this is the best daquiri theyve ever tasted'
			},
			{
				alt: 'triple chocolate',
				flavId:'triple_choco.jpg',
				description: 'Triple the swag and triple the fun'
			},
			{
				alt: 'tornado',
				flavId:'triple_tornado.jpg',
            	description: 'Hipsters only please'
			}

		];

	$.ajax({
		'async': false,
		'global': false,
		'url': "tubtracker/tubs/opentubs.json",
		'dataType': "json",
		'success': function (data) {
			$scope.openTubs = [];
			angular.forEach(data, function(entry) {
				$scope.openTubs.push(entry.flavour.flavour);
			});
		}
	});

}]);
	
