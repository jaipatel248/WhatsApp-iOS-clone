import { render } from '@testing-library/react';

import ConversationProfile from './ConversationProfile';

describe('ConversationProfile', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ConversationProfile />);
    expect(baseElement).toBeTruthy();
  });
});
