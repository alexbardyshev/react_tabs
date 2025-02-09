import React from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App: React.FC = () => {
  return (
    <div className="section">
      <h1 className="title">
        Selected tab is&nbsp;Tab 1
      </h1>

      <div>
        <div className="tabs is-boxed">
          <ul>
            <li className="is-active">
              <a href="#tab-1">Tab 1</a>
            </li>

            <li className="">
              <a href="#tab-2">Tab 2</a>
            </li>

            <li className="">
              <a href="#tab-3">Tab 3</a>
            </li>
          </ul>
        </div>

        <div className="block" data-cy="tab-content">
          Some text 1
        </div>
      </div>
    </div>
  );
};

export default App;
