import { LitElement, html } from '@polymer/lit-element';

// These are the shared styles needed by this element.
import { SharedStyles } from '../components/shared-styles.js';

class ContactCard extends LitElement {
  render() {
    return html`
      ${SharedStyles}
      <div>
        <p>${this.name}</p>
        <p>${this.description}</p>
        <p>${this.phoneNumber}</p>
        <a href="${this.linkUrl}">${this.linkText}</a>
        <p>${this.email}</p>
      </div>
    `;
  }

  static get properties() {
    return {
      name: String,
      description: String,
      phoneNumnber: String,
      linkText: String,
      linkUrl: String,
      email: String,
    };
  }
}

window.customElements.define('contact-card', ContactCard);
