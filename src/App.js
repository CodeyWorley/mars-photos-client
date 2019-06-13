import React from "react";

import Landing from "./components/landing";
import Footer from "./components/footer";

export class App extends React.Component {
    render() {
      return (
        <div className='mars-search-app'>
          <Landing />
          <Footer />
        </div>
      );
    }
  }
  export default App;