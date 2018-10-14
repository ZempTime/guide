import { LitElement, html } from '@polymer/lit-element';

import { SharedStyles } from '../components/shared-styles.js';

import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';

class GuideAccordion extends LitElement {
  render() {
    return html`
      ${SharedStyles}
      <style>
        .accordion-header {
          display: flex;
          justify-content: space-between;
          box-shadow: 0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08);
          border-radius: 5px;
          padding: 5px;
        }

        .title {
          font-size: 24px;
        }

        .content.opened {
          box-shadow: 0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08);
          border-top: 0px;
          border-radius: 5px;
        }
      </style>

      <div class="accordion-header" @click="${this._handleToggle}">
        <span class="title">${this.title}</span>
        <span class="icon">
          ${
            this.opened
              ? html`<iron-icon icon="expand-less"></iron-icon>`
              : html`<iron-icon icon="expand-more"></iron-icon>`
          }
        </span>
      </div>

      <div class="content ${this.opened ? 'opened' : ''}">
        ${this.opened ? html`<slot id="content" name="content"></slot>` : ''}
      </div>
    `;
  }

  static get properties() {
    return {
      title: String,
      opened: Boolean,
    };
  }

  _handleToggle() {
    this.opened = !this.opened;
  }
}

window.customElements.define('guide-accordion', GuideAccordion);
