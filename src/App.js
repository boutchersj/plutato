import Login from './Login';
import { signOutOfGoogle } from './Firebase';

function App() {
  return (
    <div className="flex justify-center items-center bg-green-700 h-[100vh]">
      <Login />
      <button onClick={signOutOfGoogle}>Sign Out</button>
    </div>
  );
}

export default App;
