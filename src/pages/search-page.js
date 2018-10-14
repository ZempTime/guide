import { html } from '@polymer/lit-element';
import { PageViewElement } from '../components/page-view-element.js';

// These are the shared styles needed by this element.
import { SharedStyles } from '../components/shared-styles.js';

import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';

class SearchPage extends PageViewElement {
  render() {
    const _fileInput = html`
      <form action="parse" method="post" enctype="multipart/form-data">
        <input id="file-input" type="file" accept="image/*" name="file" >
        <p @click="${this._handleSubmit}">submit</p>
      </form>`;

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
      </style>

      <div class="page">
        <div class="searchbox-container">
          <input class="searchbox" type="text" max="160" name="query" autofocus="true" required />
          <a class="searchbutton" href="/concept-matcher-page">
            <iron-icon icon="search"></iron-icon>
          </a>
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
