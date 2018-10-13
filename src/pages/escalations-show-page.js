import { html } from '@polymer/lit-element';
import { PageViewElement } from '../components/page-view-element.js';

// These are the shared styles needed by this element.
import { SharedStyles } from '../components/shared-styles.js';

class EscalationsShowPage extends PageViewElement {
  render() {
    return html`
      ${SharedStyles}
      <h1>Powers Insurance</h1>
      <p>[translate this] Your question has been forwarded</p>
      <p>contact card (TODO)</p>
    `;
  }
}

window.customElements.define('escalations-show-page', EscalationsShowPage);
