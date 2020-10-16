/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

import renderer from 'react-test-renderer';
import Home from '../src/screens/Home';
import {render, fireEvent} from '@testing-library/react-native';

test('Home - Test Button', () => {
  const {getByText} = render(<Home />);

  fireEvent.press(getByText('Entrar'));
});
