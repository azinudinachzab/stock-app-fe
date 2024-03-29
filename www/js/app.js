// Dom7
var $ = Dom7;

// Theme
var theme = 'md';
if (document.location.search.indexOf('theme=') >= 0) {
  theme = document.location.search.split('theme=')[1].split('&')[0];
}

// install plugin first
Framework7.use(debugPlugin);

// Init App
var app = new Framework7({
  id: 'io.framework7.bagas-stock',
  root: '#app',
  theme: theme,
  view : {
	pushState: true
  },
  debugger: false,
  cache: false,
  data: function () {
    return {
      baseApiUrl: 'http://localhost:3000',
      user: {
        firstName: 'Koperasi',
        lastName: 'Baitul Qur`an',
      },
    };
  },
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
    tesSimpan: function(key, value) {
      window.localStorage.setItem(key, value)
    },
    tesBaca: function(key) {
      return window.localStorage.getItem(key)
    },
    tesHapus: function(key) {
      return window.localStorage.removeItem(key)
    },
    getURL: function() {
        return "https://be.siskeubq.my.id/"
        // return "http://localhost:8080/"
    }
  },
  routes: routes,
  popup: {
    closeOnEscape: true,
  },
  sheet: {
    closeOnEscape: true,
  },
  popover: {
    closeOnEscape: true,
  },
  actions: {
    closeOnEscape: true,
  },
  vi: {
    placementId: 'pltd4o7ibb9rc653x14',
  },
});

setTimeout(function () {
    $('.loader-screen').hide();
}, 1500);

// Option 1. Using one 'page:init' handler for all pages
$(document).on('page:init', function (e) {
  app.panel.close();
}); 

//document.addEventListener("backbutton", onBackKeyDown, false);

var opened = 0;
function exitApp(){
	if (opened > 0) {
		return false;
	} else {
		app.dialog.confirm('Are you sure you want to exit?', 'Exit App', 
		  function () {
			navigator.app.exitApp();
		  },
		  function () {
			opened = 0;  
			return false;
		  }
		);
		opened = 1;
	}
}

		
function onBackKeyDown() {
	// Handle the back button
	if(app.views.main.history.length == 1){
		exitApp();
		e.preventDefault();
	} else {
		app.dialog.close();
		app.views.main.router.back();
		return false;
	}
}

document.addEventListener("backbutton", onBackKeyDown, false);




