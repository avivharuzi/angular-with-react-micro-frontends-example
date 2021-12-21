import { render } from '@testing-library/react';

import Item from './item';

describe('Item', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Item
        image=""
        price={100}
        title=""
        quantity={1}
        itemRemoved={() => {
          return;
        }}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
