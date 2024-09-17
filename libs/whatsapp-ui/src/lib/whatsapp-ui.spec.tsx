import { render } from '@testing-library/react';

import WhatsappUi from './whatsapp-ui';

describe('WhatsappUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WhatsappUi />);
    expect(baseElement).toBeTruthy();
  });
});
