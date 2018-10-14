import { html } from '@polymer/lit-element';
import { PageViewElement } from '../components/page-view-element.js';

// These are the shared styles needed by this element.
import { SharedStyles } from '../components/shared-styles.js';

class CircumstancesShowPage extends PageViewElement {
  render() {
    return html`
      ${SharedStyles}
      <h2>Health Insurance</h2>
      <p>Seguro de salud / 
      El seguro de salud es un tipo de cobertura de seguro que cubre los gastos médicos y quirúrgicos incurridos por el asegurado. El seguro de salud puede reembolsar al asegurado por los gastos incurridos por enfermedad o lesión, o pagar directamente al proveedor de atención.</p>
      <img src="../../images/insurance.png"/>
      <p>Curated description on what insurance is</p>
    `;
  }
}

window.customElements.define('circumstances-show-page', CircumstancesShowPage);
