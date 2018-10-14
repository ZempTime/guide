import { html } from '@polymer/lit-element';
import { PageViewElement } from '../components/page-view-element.js';

// These are the shared styles needed by this element.
import { SharedStyles } from '../components/shared-styles.js';

import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';
import '@vaadin/vaadin-text-field/vaadin-text-field.js';
import '@vaadin/vaadin-upload/vaadin-upload.js';

class SearchPage extends PageViewElement {
  render() {
    const validQuery = this.query !== '';

    return html`
      ${SharedStyles}
      <style>
        .page {
          display: grid;
          grid-template-columns: 2fr 12fr 2fr;
          padding-top: 40px;
        }
        .searchbox-container {
          align-self: center;
          grid-column: 2 / span 1;
          width: 100%;
          display: flex;
        }
        .searchbox {
          font-size: 24px;
          width: calc(100% - 40px);
        }
        .search-button {
          display: inline;
        }
        vaadin-text-field {
          width: 100%;
        }
        a:visited {
          color: black;
        }
        iron-icon {
          height: 36px;
          width: 36px;
          border: 1px solid #8c8c8c;
          border-radius: 5px;
          margin-left: 2px;
        }
        .isDisabled {
          color: currentColor;
          cursor: not-allowed;
          opacity: 0.5;
          text-decoration: none;
        }
        .uploader {
          grid-column: 2 / span 1;
          text-align: center;
        }
        .divider {
          text-align: center;
          grid-column: 2 / span 1;
        }
        .camera-prompt {
          width: 50px;
          height: 50px;
        }
      </style>

      <div class="page">
        <div class="searchbox-container">
          <vaadin-text-field max="160" name="query" autofocus="true" required
          @input="${this._handleInput}"
          @keyup="${this._handleKeyup}">
          <a slot="suffix" 
            ?disabled="${this.query.length > 0}"
            class="searchbutton ${validQuery ? '' : 'isDisabled'}"
            href="/concept-matcher-page">
            <iron-icon icon="search"></iron-icon>
          </a>
          </vaadin-text-field>
        </div>
        <br/>
        <p class="divider">
          ___
        </p>
        <br/>
        <div class="uploader">
          <vaadin-upload 
            capture="camera"
            accept="image/*"
            nodrop
            max-files="1"
            target="https://guide-ocr.herokuapp.com/parse"
            @upload-response="${this._populateForm}">
            <iron-icon class="camera-prompt" slot="add-button" icon="camera-enhance"></iron-icon>
          </vaadin-upload>
        </div>
      </div>
    `;
  }

  constructor() {
    super();
    this.query = '';
    this.isTextArea = false;
  }

  static get properties() {
    return {
      query: String,
      isTextArea: Boolean,
    };
  }

  _handleInput(e) {
    this[e.target.name] = e.target.value;
  }

  _handleKeyup(e) {
    if (e.keyCode == 13 && this.query !== '') {
      window.location = '/concept-matcher-page';
    }
  }

  _populateForm(e) {
    const text = JSON.parse(e.detail.xhr.response).text;
    this.shadowRoot.querySelector('vaadin-text-field').value = text;
  }

  _handleCamera() {
    this.shadowRoot.querySelector('vaadin-upload').click();
  }

  async _handleSubmit() {
    const fileInput = this.shadowRoot.querySelector('#file-input');
    const formData = new FormData();

    formData.append('image', fileInput.files[0]);

    const options = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: formData,
    };

    const response = await fetch(
      `https://guide-ocr.herokuapp.com/parse`,
      options
    );
    const json = await response.json();
    console.log(json.text);

    this.query = json.text;
    this.isTextArea = true;
  }
}

window.customElements.define('search-page', SearchPage);
