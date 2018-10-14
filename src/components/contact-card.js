import { LitElement, html } from '@polymer/lit-element';

// These are the shared styles needed by this element.
import { SharedStyles } from '../components/shared-styles.js';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';

class ContactCard extends LitElement {
  render() {
    const phoneContact = this.phoneNumber
      ? html`<a href="tel:${
          this.phoneNumber
        }"><iron-icon icon="perm-phone-msg"></iron-icon> ${
          this.phoneNumber
        }</a>`
      : '';

    const emailContact = this.email
      ? html`<a href="mailto:${
          this.email
        }"><iron-icon icon="mail"></iron-icon> ${this.email}</a>`
      : '';

    const websiteContact =
      this.linkText && this.linkUrl
        ? html`<a href="${
            this.linkUrl
          }"><iron-icon icon="cloud-circle"></iron-icon> ${this.linkText}</a>`
        : '';

    return html`
      ${SharedStyles}
      <style>
        .card {
          border: 1px solid black;
          box-shadow: 0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08);
          border-radius: 5px;
          margin: 5px;
          padding: 10px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-areas: 
            "left right"
            "left right";
        }

        @media (max-width: 640px) {
          .card {
            grid-template-areas:
              "left left"
              "right right";
          }
        }

        .left {
          grid-area: left;
        }
        .right {
          grid-area: right;
        }

        a {
          text-decoration: none;
        }

        a:visited {
          color: blue;
        }
      </style>

      <div class="card">
        <div class="left">
          <h3>${this.name}</h3>
          <p>${phoneContact}</p>
          <p>${emailContact}</p>
          <p>${websiteContact}</p>
        </div>
        <div class="right">
          <p>${this.nativeBlurb}</p>
        </div>
      </div>
    `;
  }

  constructor() {
    super();
    this.nativeBlurb = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;
  }

  static get properties() {
    return {
      name: String,
      nativeBlurb: String,
      phoneNumber: String,
      linkText: String,
      linkUrl: String,
      email: String,
    };
  }
}

window.customElements.define('contact-card', ContactCard);
