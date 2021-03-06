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
import '../components/contact-card.js';

class EscalationsNewPage extends PageViewElement {
  render() {
    const contactCard = this._submitted
      ? html`<contact-card
          name="Tu pregunta ha sido enviada."
          nativeBlurb="Para más información: La Red de Proveedores de Servicios para Inmigrantes (ISPN) apoya a los nacidos en el extranjero y sus familias en la región de St. Louis aumentando los recursos de la comunidad, abogando por políticas y servicios inclusivos y educando a residentes y proveedores."
          linkText="Sitio Web"
          linkUrl="http://www.mira-mo.org/contact-us/"
          phoneNumber="314-669-1288"
          email="email@mira-mo.org"
        ></contact-card>`
      : '';

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

        iron-icon {
          color: green;
        }
      </style>

      <div class="page">
        <div class="content">
          <form action="newEscalation" method="post">
            <vaadin-text-field ?readonly="${
              this._submitted
            }" label="Question / ?"></vaadin-text-field>
            <br />
            <vaadin-text-area ?readonly="${
              this._submitted
            }" label="Note"></vaadin-text-area>
            <br />

            <vaadin-button
              ?disabled="${this._submitted}"
              @click="${this._handleSubmit}">
              ${
                this._submitted
                  ? html`<iron-icon icon="check"></iron-icon>`
                  : html`${outlineContactSupport}`
              }
            </vaadin-button>
          </form>

          ${contactCard}

        </div>
      </div>
    `;
  }

  constructor() {
    super();
    this.submitted = false;
  }

  static get properties() {
    return {
      _submitted: Boolean,
    };
  }

  _handleSubmit() {
    this._submitted = true;
  }
}

window.customElements.define('escalations-new-page', EscalationsNewPage);
