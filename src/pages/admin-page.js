import { html } from '@polymer/lit-element';
import { PageViewElement } from '../components/page-view-element.js';

// These are the shared styles needed by this element.
import { SharedStyles } from '../components/shared-styles.js';

class AdminPage extends PageViewElement {
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
    </style>

    <div class="page">
      <div class="content">
        <h1>Admin Page</h1>
      </div>
    </div>
    `;
  }
}

window.customElements.define('admin-page', AdminPage);
