import { html } from '@polymer/lit-element';
import { PageViewElement } from '../components/page-view-element.js';

// These are the shared styles needed by this element.
import { SharedStyles } from '../components/shared-styles.js';

class EscalationsNewPage extends PageViewElement {
  render() {
    return html`
      ${SharedStyles}
      <form action="newEscalation" method="post">
        <label for="query">?</label>
        <input type="text" name="query" value="insurance" />

        <label for="note">📝</label>
        <input type="textarea" name="note"/>

        <a href="escalations/:id">➡️</a>
      </form>
    `;
  }
}

window.customElements.define('escalations-new-page', EscalationsNewPage);
