import { html } from '@polymer/lit-element';
import { PageViewElement } from '../components/page-view-element.js';

// These are the shared styles needed by this element.
import { SharedStyles } from '../components/shared-styles.js';

import '../components/guide-accordion.js';
import '../components/guide-concept.js';

class ConceptsShowPage extends PageViewElement {
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
          <h2>Circumstances</h2>
          ${this.circumstances.map(circumstance => {
            return html`
              <guide-accordion title="${circumstance.title}" >
                <guide-concept
                  slot="content"
                  description="${circumstance.description}"
                  title="${circumstance.title}">
                </guide-concept>
              </guide-accordion>
            `;
          })}

          <h2>Related Concepts</h2>
            ${this.relatedConcepts.map(relatedConcept => {
              return html`
                <guide-accordion title="${relatedConcept.title}" >
                  <guide-concept
                    slot="content"
                    title="${relatedConcept.title}">
                  </guide-concept>
                </guide-accordion>
              `;
            })}
          </div>
        </div>
    `;
  }

  constructor() {
    super();
    this.circumstances = [
      {
        title: 'Health Insurance',
        description: 'El seguro de salud es un tipo de cobertura de seguro que cubre los gastos médicos y quirúrgicos incurridos por el asegurado. El seguro de salud puede reembolsar al asegurado por los gastos incurridos por enfermedad o lesión, o pagar directamente al proveedor de atención.',
      },
      {
        title: 'Car Insurance',
        description: 'El seguro de automóvil es un contrato entre usted y la compañía de seguros que lo protege contra pérdidas financieras en caso de un accidente o robo. A cambio de su pago de una tarifa, la compañía de seguros acepta pagar sus pérdidas como se describe en su póliza, como daños o robo de su automóvil.',
      },
    ];

    this.relatedConcepts = [
      { 
        title: 'Health Insurance', 
        description: 'Seguro de salud local se puede encontrar en estos contactos:'
      },
      { title: 'Car Insurance' },
      { title: 'Powers Insurance' },
    ];
  }

  static get properties() {
    return {
      circumstances: Array,
      relatedConcepts: Array,
    };
  }
}

window.customElements.define('concepts-show-page', ConceptsShowPage);
