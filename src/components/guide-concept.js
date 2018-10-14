import { html, LitElement } from '@polymer/lit-element';

// These are the shared styles needed by this element.
import { SharedStyles } from './shared-styles.js';

import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';

class GuideConcept extends LitElement {
  render() {
    return html`
      ${SharedStyles}
      <style>
        .concept {
          display: grid;
          padding-top: 40px;
          grid-template-columns: 2fr 12fr 2fr;
        }

        .content {
          border-radius: 0.6rem;
          box-shadow: 0 0 2px rgba(0,0,0,0.35), 0 1px 3px rgba(0,0,0,0.1);
          grid-column: 2 / span 1;
          display: grid;
          justify-items: center;
        }
      </style>

      <div class="concept">
        <div class="content">
          <h2>${this.englishTitle}</h2>
          <h2>${this.nativeTitle}</h2>
          <img src="${this.imageSrc}" />
          <p>${this.description}</p>
        </div>
      </div>
    `;
  }

  constructor() {
    super();
    this.englishTitle = 'Insurance';
    this.nativeTitle = 'Seguro';
    this.imageSrc = '../../images/insurance.png';
    this.description =
      'Una práctica o acuerdo mediante el cual una compañía o agencia gubernamental proporciona una garantía de compensación por pérdida, daño, enfermedad o muerte especificados a cambio de un pago de una prima.';
  }

  static get properties() {
    return {
      englishTitle: String,
      nativeTitle: String,
      imageSrc: String,
      description: String,
    };
  }
}

window.customElements.define('guide-concept', GuideConcept);
