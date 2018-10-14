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
          border: 1px solid black;
          display: flex;
          justify-content: space-between;
        }

        .title {
          font-size: 24px;
        }

        .content.opened {
          outline: 1px solid black;
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
