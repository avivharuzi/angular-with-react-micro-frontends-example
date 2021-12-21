import './app.module.scss';

import RemoteEntry from './remote-entry';

export function App() {
  return (
    <div>
      <RemoteEntry
        linkClicked={() => {
          return;
        }}
      />
    </div>
  );
}

export default App;
