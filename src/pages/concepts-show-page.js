import { html } from '@polymer/lit-element';
import { PageViewElement } from '../components/page-view-element.js';

// These are the shared styles needed by this element.
import { SharedStyles } from '../components/shared-styles.js';

class ConceptsShowPage extends PageViewElement {
  render() {
    return html`
      ${SharedStyles}
      <h2>Circumstances</h2>
      <ul>
        <li><a href="circumstances/:id">Health Insurance</a></li>
        <li>Car Insurance</li>
      </ul>

      <h2>Related Concepts</h2>
      <ul>
        <li>Health Insurance</li>
        <li>Car Insurance</li>
        <li>Powers Insurance</li>
      </ul>
    `;
  }
}

window.customElements.define('concepts-show-page', ConceptsShowPage);
