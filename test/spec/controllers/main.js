'use strict';

describe('Controller: AppCtrl', function() {

  // load the controller's module
  beforeEach(module('contactManager'));

  var AppCtrl, AddCtrl, EditCtrl, RemoveCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller, $rootScope, ContactService) {
    scope = $rootScope.$new();
    AppCtrl = $controller('AppCtrl', {
      $scope: scope
    });
    AddCtrl = $controller('AddCtrl', {
      $scope: scope
    });
    EditCtrl = $controller('EditCtrl', {
      $scope: scope
    });
    RemoveCtrl = $controller('RemoveCtrl', {
      $scope: scope
    });
  }));

  it('should have 6 contacts to start', function() {
    expect(scope.contacts.length).toBe(6);
  });

  it('should add a new contact to the list', function() {
    scope.contact = {
      name: 'My name is Universe',
      tel: '111-111-1111',
      email: 'universe@universe.com',
      avatar: 'images/faces/3.jpg'
    }
    scope.add();
    expect(scope.contacts.length).toBe(7);
  });

  it('should add then remove a contact from the contact list', function() {
    scope.contact = {
      name: 'Sathya',
      tel: '666-666-6666',
      email: 'test@sample.com',
      avatar: 'images/faces/4.jpg'
    }
    scope.add();
    scope.remove(0);
    expect(scope.contacts.length).toBe(6);
  });  

});