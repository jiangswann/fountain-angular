import angular from 'angular';
import 'angular-mocks';
import {header} from './header';

describe('header component', () => {
  beforeEach(() => {
    angular
      .module('fountainHeader', [])
      .component('fountainHeader', header);
    angular.mock.module('fountainHeader');
  });

  it('should render \'Fountain Generator\'', angular.mock.inject(($rootScope, $compile) => {
    console.log("I'm here");
    const element = $compile('<fountain-header></fountain-header>')($rootScope);
    $rootScope.$digest();
    const header = element.find('a');
    expect(header.html().trim()).toEqual('Fountain Generator 1');
  }));
});
