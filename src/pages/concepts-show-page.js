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
          ${this.circumstances.map(c => {
            return html`
              <guide-accordion title="${c.title}" >
                <div slot="content">
                  <guide-concept
                    title="${c.title}">
                  </guide-concept>
                </div>
              </guide-accordion>
            `;
          })}

          <h2>Related Concepts</h2>
            ${this.relatedConcepts.map(c => {
              return html`
                <guide-accordion title="${c.title}" >
                  <div slot="content">
                    <guide-concept
                      title="${c.title}">
                    </guide-concept>
                  </div>
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
      },
      {
        title: 'Car Insurance',
      },
    ];

    this.relatedConcepts = [
      { title: 'Health Insurance' },
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
