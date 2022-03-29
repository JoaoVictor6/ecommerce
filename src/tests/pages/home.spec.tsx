import React from 'react';
import { render } from '@testing-library/react';
import Home from '@pages/index';

describe('Profile page', () => {
  it('should be render', () => {
    const view = render(<Home />);

    expect(view).not.toBeNull();
  });
});