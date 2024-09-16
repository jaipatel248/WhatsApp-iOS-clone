import { render } from '@testing-library/react';

import ConversationProfileUi from './conversation-profile-ui';

describe('ConversationProfileUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ConversationProfileUi />);
    expect(baseElement).toBeTruthy();
  });
});
