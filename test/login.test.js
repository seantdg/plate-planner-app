// Attach chai's assert interface to global for convenience
window.assert = window.chai.assert;

describe('Login screen ', function() {
	var parentScope;
	var scope;
	var element;
	var httpBackend;

	//this feature is a work in progress
	before(function() {
		this.skip();
	});

	beforeEach(function() {
		var injector = angular.injector(['stopwatch', 'ngMockE2E']);

		injector.invoke(function($rootScope, $compile, $httpBackend) {
			parentScope = $rootScope.$new();
			httpBackend = $httpBackend;

			parentScope.onSaved = function(time) {
				parentScope.onSaved.calls.push(time);
			};
			parentScope.onSaved.calls = [];

			var html = '<timer on-time-saved="onSaved(time);"></timer>';
			element = $compile(html)(parentScope);
			parentScope.$apply();

			// Use the directive's top-level scope, since the directive creates a
			// new one.
			scope = parentScope.$$childHead;
		});
	});

	it('allows a user to enter their email address.');
		//assert scope.email is null
		//check email element is present and visible
		//enter email address
		//check that scope.email is populated correctly
	});
	it('allows a user to enter their password.');
		//assert scope.password is null
		//check password element is present and visible
		//enter password 
		//check that scope.password is populated correctly

	});
	it('allows a user to authorize with facebook.');
		//enter email
		//enter password
		//find submit button
		//click
		//ensure that /authorize call is sent
		//validate that response is a redirect to facebook
	it('allows an existing user to successfully log in.');
	//enter email
	//enter password
	//click submit button
	//ensure authorize call is sent
	//follow redirect
	//accept permissions
	//redirect back to the app
	//ensure that the token call is made
	//ensure that the token call is successful and has the correct fields populated
	//ensure that the token is stored in the scope
	//the home screen should be displayed

	it('displays a suitable error when an invalid email address is used.');
	//enter example.com as email
	//click submit
	//validate error

	it('displays a suitable error when an incorrect email address is used.');
	//enter an email that isn't registered on facebook
   	//click submite
	//validate error	

	it('displays a suitable error when an incorrect password is used.');
	//enter valid email
	//enter incorrect password
	//click submit
	//validate error

	it('displays a suitable error when the required facebook permissions are not granted');
	//enter a valid email for new test user
	//enter correct password
	//reject permissions
	//validate error

	it('displays a suitable error when an unexpected error occurs');
	//send a malformed authorization request
	//validate error message
});
