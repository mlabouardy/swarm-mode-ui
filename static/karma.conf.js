module.exports = function(config){
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files:[
      './lib/angular/angular.min.js',
      './lib/angular-route/angular-route.min.js',
      './node_modules/angular-mocks/angular-mocks.js',
      "./lib/restangular/dist/restangular.min.js",
      "./js/services/services.module.js",
      "./js/controllers/controllers.module.js",
      "./js/app.js",
      './js/**/*.spec.js'
    ],
    exclude:[],
    preprocessors:{
      'js/**/*.js': ['coverage']
    },
    coverageReporter : {
      type: 'html',
      dir : 'coverage/'
    },
    reporters: ['progress','coverage'],
    port: 9876,
    colors:true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers:['Chrome'],
    singleRun: false,
    concurrency: Infinity
  })
}
