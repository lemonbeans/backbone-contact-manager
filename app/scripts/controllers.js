'use strict';

contactManager.factory('ContactService', function() {
  var contacts = [{
    id: 1,
    name: 'Terrence S. Hatfield',
    tel: '651-603-1723',
    email: 'TerrenceSHatfield@rhyta.com',
    avatar: 'images/faces/1.jpg'
  }, {
    id: 2,
    name: 'Chris M. Manning',
    tel: '513-307-5859',
    email: 'ChrisMManning@dayrep.com',
    avatar: 'images/faces/2.jpg'
  }, {
    id: 3,
    name: 'Ricky M. Digiacomo',
    tel: '918-774-0199',
    email: 'RickyMDigiacomo@teleworm.us',
    avatar: 'images/faces/3.jpg'
  }, {
    id: 4,
    name: 'Michael K. Bayne',
    tel: '702-989-5145',
    email: 'MichaelKBayne@rhyta.com',
    avatar: 'images/faces/4.jpg'
  }, {
    id: 5,
    name: 'John I. Wilson',
    tel: '318-292-6700',
    email: 'JohnIWilson@dayrep.com',
    avatar: 'images/faces/5.jpg'
  }, {
    id: 6,
    name: 'Rodolfo P. Robinett',
    tel: '803-557-9815',
    email: 'RodolfoPRobinett@jourrapide.com',
    avatar: 'images/faces/6.jpg'
  }];
  return contacts;
});

contactManager.controller('AppCtrl',
  function AppCtrl($scope, ContactService) {
    $scope.contacts = ContactService;
  });

contactManager.controller('InfoCtrl',
  function InfoCtrl($scope, $routeParams, ContactService) {
    $scope.contacts = ContactService;
    $scope.contact = $scope.contacts[$routeParams.id];
  });


contactManager.controller('AddCtrl',
  function AddCtrl($scope, $location, ContactService) {
    $scope.contacts = ContactService;
    $scope.contact = {};
    $scope.add = function() {
      $scope.contact.avatar = 'images/faces/1.jpg';      
      if ($scope.contact.name !== undefined || $scope.contact.tel !== undefined  || $scope.contact.email !== undefined ) {
        $scope.contacts.push($scope.contact);
      } else {
        $scope.contacts.push({
          name: 'Man with no name',
          tel: '000-000-000',
          email: 'johndoe@sample.com',
          avatar: 'images/faces/2.jpg'
        });
      }
      $location.url('/');
    };
  });

contactManager.controller('EditCtrl',
  function EditCtrl($scope, $routeParams, $location, ContactService) {
    $scope.contacts = ContactService;
    $scope.contact = $scope.contacts[$routeParams.id];
    $scope.edit = function() {
      console.log($routeParams.id);
      console.log($scope.contact);
      $scope.contacts[$routeParams.id] = $scope.contact;
      $location.url('/');
    };
  });

contactManager.controller('RemoveCtrl',
  function RemoveCtrl($scope, $routeParams, $location, ContactService) {
    $scope.contacts = ContactService;
    $scope.contact = $scope.contacts[$routeParams.id];
    $scope.remove = function() {
      $scope.contacts.splice($routeParams.id, 1);
      $location.url('/');
    };
    $scope.back = function() {
      $location.url('/');
    };
  });