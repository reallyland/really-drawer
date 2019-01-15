import { LitElement } from 'lit-element';

import '../really-drawer.js';
import { stripExpressionDelimiters } from './test-helpers';

const assert = chai.assert;
let element: LitElement;

describe('really-drawer', () => {
  beforeEach(() => {
    element = document.createElement('really-drawer') as LitElement;
    document.body.appendChild(element);
  });

  afterEach(() => {
    document.body.removeChild(element);
  });

  it('renders initial content', async () => {
    await element.updateComplete;

    const h1El = element.shadowRoot!.querySelector('h1')!;
    assert.strictEqual(stripExpressionDelimiters(h1El.innerHTML), 'Hello, World!');
  });

  it(`has property 'name=Hello, World!'`, async () => {
    await element.updateComplete;

    assert.strictEqual((element as any).name, 'Hello, World!');
  });

});
