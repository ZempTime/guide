import { html } from '@polymer/lit-element';
import { PageViewElement } from '../components/page-view-element.js';

// These are the shared styles needed by this element.
import { SharedStyles } from '../components/shared-styles.js';

class CircumstancesShowPage extends PageViewElement {
  render() {
    return html`
      ${SharedStyles}
      <h2>Health Insurance</h2>
      <p>Native handle/explanation</p>
      <img src="../../images/insurance.png"/>
      <p>Curated description on what insurance is</p>

    `;
  }
}

window.customElements.define('circumstances-show-page', CircumstancesShowPage);
