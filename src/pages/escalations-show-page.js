import { html } from '@polymer/lit-element';
import { PageViewElement } from '../components/page-view-element.js';
import '../components/contact-card.js';

// These are the shared styles needed by this element.
import { SharedStyles } from '../components/shared-styles.js';

class EscalationsShowPage extends PageViewElement {
  render() {
    return html`
      ${SharedStyles}
      <h1>Powers Insurance</h1>
      <p>[translate this] Your question has been forwarded</p>
      <contact-card
        name="Wow!"
        description="This is a description"
        linkText="linkText"
        linkUrl="/"
        phoneNumber="555 555 5555"
        email="example@email.com"
      ></contact-card>
    `;
  }
}

window.customElements.define('escalations-show-page', EscalationsShowPage);
