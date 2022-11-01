import logo from './logo.svg';
import './App.css';
// import { ProfileCard, NavBar, HeroLayout1, SideBar } from './ui-components';
import Home from "./Pages/Home/index";
import { AmplifyProvider, useTheme  } from '@aws-amplify/ui-react'
import "@aws-amplify/ui-react/styles.css";

function App() {
  const { tokens } = useTheme();
  return (
    <div className="App">
      <AmplifyProvider>
        <Home />
      </AmplifyProvider>
    </div>

  );
}

export default App;
