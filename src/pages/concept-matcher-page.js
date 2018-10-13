import { html } from '@polymer/lit-element';
import { PageViewElement } from '../components/page-view-element.js';

// These are the shared styles needed by this element.
import { SharedStyles } from '../components/shared-styles.js';

class ConceptMatcherPage extends PageViewElement {
  render() {
    return html`
      ${SharedStyles}
      <h1>Seguro</h1>
      <img src="../../images/insurance.png"></img>
      <p>Curated description on what insurance is</p>

      <p><a href="concepts/:id">✔️</a> / <a href="escalations/new">❌</a></p>
    `;
  }
}

window.customElements.define('concept-matcher-page', ConceptMatcherPage);
