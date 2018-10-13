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
          <option value="spanish">Spanish</option>
        </select>

        <input type="text" max="160" name="query" required />
        <button>-></button>
      </section>
    `;
  }
}

window.customElements.define('search-page', SearchPage);
