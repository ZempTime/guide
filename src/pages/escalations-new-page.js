import { html } from '@polymer/lit-element';
import { PageViewElement } from '../components/page-view-element.js';
import { outlineContactSupport } from '../components/my-icons.js';

// These are the shared styles needed by this element.
import { SharedStyles } from '../components/shared-styles.js';
import '@vaadin/vaadin-text-field/vaadin-text-field.js';
import '@vaadin/vaadin-text-field/vaadin-text-area.js';
import '@vaadin/vaadin-button/vaadin-button.js';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';

class EscalationsNewPage extends PageViewElement {
  render() {
    return html`
      ${SharedStyles}
      <style>
        .page {
          display: grid;
          grid-template-columns: 2fr 12fr 2fr;
          padding-top: 40px;
        }

        .content {
          align-self: center;
          grid-column: 2 / span 1;
          width: 100%;
        }

        vaadin-text-field, vaadin-text-area {
          width: 100%;
        }

        form {
          display: grid;
        }

        vaadin-button {
          justify-self: center;
          width: 400px;
          height: 100px;
        }
      </style>

      <div class="page">
        <div class="content">
          <form action="newEscalation" method="post">
            <vaadin-text-field label="Question / ?"></vaadin-text-field>
            <br />
            <vaadin-text-area label="Note"></vaadin-text-area>
            <br />
            <vaadin-button @click="${this._handleSubmit}">
              ${outlineContactSupport}
            </vaadin-button>
          </form>
        </div>
      </div>
    `;
  }

  _handleSubmit() {
    window.location = '/escalations/:id';
  }
}

window.customElements.define('escalations-new-page', EscalationsNewPage);
