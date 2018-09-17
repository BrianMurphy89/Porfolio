const app = angular.module('portfolioApp', ['ngRoute']);

app.controller('mainController', ['$http', function($http){

    this.currentPage = 'home'

    this.showHome = () => {
        this.currentPage = 'home'
    }

    this.showAbout = () => {
        this.currentPage = 'about'
    }

    this.showProjects = () => {
        this.currentPage = 'projects'
    }
}])
