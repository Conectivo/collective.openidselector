/*
	Simple OpenID Plugin
	http://code.google.com/p/openid-selector/
	
	This code is licensed under the New BSD License.
*/

var providers_large = {
	google : {
		name : 'Google',
		url : 'https://www.google.com/accounts/o8/id'
	},
	yahoo : {
		name : 'Yahoo',
		url : 'http://me.yahoo.com/'
	},
	aol : {
		name : 'AOL',
		label : 'Ingrese su nombre de pantalla de AOL.',
		url : 'http://openid.aol.com/{username}'
	},
	myopenid : {
		name : 'MyOpenID',
		label : 'Ingrese su nombre de usuario de MyOpenID.',
		url : 'http://{username}.myopenid.com/'
	},
	openid : {
		name : 'OpenID',
		label : 'Ingrese su OpenID.',
		url : null
	}
};

var providers_small = {
	livejournal : {
		name : 'LiveJournal',
		label : 'Ingrese su nombre de usuario de Livejournal.',
		url : 'http://{username}.livejournal.com/'
	},
	/* flickr: {
		name: 'Flickr',        
		label: 'Ingrese su nombre de usuario de Flickr.',
		url: 'http://flickr.com/{username}/'
	}, */
	/* technorati: {
		name: 'Technorati',
		label: 'Ingrese su nombre de usuario de Technorati.',
		url: 'http://technorati.com/people/technorati/{username}/'
	}, */
	wordpress : {
		name : 'Wordpress',
		label : 'Ingrese su nombre de usuario de Wordpress.com.',
		url : 'http://{username}.wordpress.com/'
	},
	blogger : {
		name : 'Blogger',
		label : 'Su cuenta de Blogger',
		url : 'http://{username}.blogspot.com/'
	},
	verisign : {
		name : 'Verisign',
		label : 'Su nombre de usuario de Verisign',
		url : 'http://{username}.pip.verisignlabs.com/'
	},
	/* vidoop: {
		name: 'Vidoop',
		label: 'Su nombre de usuario de Vidoop',
		url: 'http://{username}.myvidoop.com/'
	}, */
	/* launchpad: {
		name: 'Launchpad',
		label: 'Su nombre de usuario de Launchpad',
		url: 'https://launchpad.net/~{username}'
	}, */
	claimid : {
		name : 'ClaimID',
		label : 'Su nombre de usuario de ClaimID',
		url : 'http://claimid.com/{username}'
	},
	clickpass : {
		name : 'ClickPass',
		label : 'Ingrese su nombre de usuario de ClickPass',
		url : 'http://clickpass.com/public/{username}'
	},
	google_profile : {
		name : 'Google Profile',
		label : 'Ingrese su nombre de usuario de Google Profile',
		url : 'http://www.google.com/profiles/{username}'
	}
};

openid.locale = 'es';
openid.sprite = 'en'; // use same sprite as english localization
openid.demo_text = 'En el modo de demostración de cliente. Normalmente se han presentado OpenID:';
openid.signin_text = 'Iniciar sesión';
openid.image_title = 'iniciado con {provider}';
