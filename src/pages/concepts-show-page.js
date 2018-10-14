import { html } from '@polymer/lit-element';
import { PageViewElement } from '../components/page-view-element.js';

// These are the shared styles needed by this element.
import { SharedStyles } from '../components/shared-styles.js';

import '../components/guide-accordion.js';

class ConceptsShowPage extends PageViewElement {
  render() {
    return html`
      ${SharedStyles}

      <h2>Circumstances</h2>
      ${this.circumstances.map(c => {
        return html`
          <guide-accordion title="${c.title}" >
            <div slot="content">sdgalksjdglkasglasdkg</div>
          </guide-accordion>
        `;
      })}

      <h2>Related Concepts</h2>
        ${this.relatedConcepts.map(c => {
          return html`
            <guide-accordion title="${c.title}" >
              <div slot="content">sdgalksjdglkasglasdkg</div>
            </guide-accordion>
          `;
        })}
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
