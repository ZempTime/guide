import { html } from '@polymer/lit-element';
import { PageViewElement } from '../components/page-view-element.js';

// These are the shared styles needed by this element.
import { SharedStyles } from '../components/shared-styles.js';

class SearchPage extends PageViewElement {
  render() {
    return html`
      ${SharedStyles}
      <section>
        <select>
          <option value="spanish"><i>your-icon</i>Spanish</option>
        </select>

        ${
          this.isTextArea
            ? html`
              <textarea name="query" rows="10" cols="30">${
                this.query
              }</textarea>
            `
            : html`
              <input type="text" max="160" name="query" value="${
                this.query
              }" required />
              `
        }

        <a href="/concept-matcher-page">▶️</a>
      </section>

      <form action="parse" method="post" enctype="multipart/form-data">
        <input id="file-input" type="file" accept="image/*" name="file" >
        <p @click="${this._handleSubmit}">submit</p>
      </form>
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

    const response = await fetch(`http://35.172.234.98/parse`, options);
    const json = await response.json();
    console.log(json.text);

    this.query = json.text;
    this.isTextArea = true;
  }
}

window.customElements.define('search-page', SearchPage);
