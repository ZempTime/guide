import { html } from '@polymer/lit-element';
import { PageViewElement } from '../components/page-view-element.js';

// These are the shared styles needed by this element.
import { SharedStyles } from '../components/shared-styles.js';

import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';

class ConceptMatcherPage extends PageViewElement {
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


        iron-icon:hover {
          cursor: pointer;
        }

        .check {
          color: green;
          width: 75px;
          height: 75px;
        }

        .close{
          color: red;
          width: 75px;
          height: 75px;
        }

      </style>

      <div class="concept">
        <div class="content">
          <h1>"${this.query}"</h1>

          <h2>${this.englishTitle}</h2>
          <h2>${this.nativeTitle}</h2>
          <img src="${this.imageSrc}" />
          <p>${this.description}</p>

          <div class="decision">
            <iron-icon class="check" icon="check"
              @click="${this._handleYes}"
            ></iron-icon>
            <iron-icon class="close" icon="close"
              @click="${this._handleNo}"></iron-icon>
          </div>
        </div>
      </div>
    `;
  }

  constructor() {
    super();
    this.query = 'insurance';
    this.englishTitle = 'Insurance';
    this.nativeTitle = 'Seguro';
    this.imageSrc = '../../images/insurance.png';
    this.description = 'TODO';
  }

  static get properties() {
    return {
      query: String,
      englishTitle: String,
      nativeTitle: String,
      imageSrc: String,
      description: String,
    };
  }

  _handleYes() {
    window.location = 'concepts/:id';
  }

  _handleNo() {
    window.location = 'escalations/new';
  }
}

window.customElements.define('concept-matcher-page', ConceptMatcherPage);
