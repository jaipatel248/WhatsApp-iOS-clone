import { render } from '@testing-library/react';

import TestUtil from './test-util';

describe('TestUtil', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TestUtil />);
    expect(baseElement).toBeTruthy();
  });
});
