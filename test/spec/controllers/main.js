'use strict';

describe('Controller: AppCtrl', function() {

  // load the controller's module
  beforeEach(module('contactManager'));

  var AppCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller, $rootScope, ContactService) {
    scope = $rootScope.$new();
    AppCtrl = $controller('AppCtrl', {
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

  it('should remove 2 contact from the contact list', function() {
    scope.contact = {
      name: 'My name is Universe',
      tel: '111-111-1111',
      email: 'universe@universe.com',
      avatar: 'images/faces/3.jpg'
    }
    scope.remove();
    scope.remove();
    expect(scope.contacts.length).toBe(4);
  });

   it('should remove then add a contact to the contact list', function() {
    scope.contact = {
      name: 'My name is Universe',
      tel: '111-111-1111',
      email: 'universe@universe.com',
      avatar: 'images/faces/3.jpg'
    }
    scope.remove();
    scope.add();
    expect(scope.contacts.length).toBe(6);
  });


});