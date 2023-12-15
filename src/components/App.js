import React from "react";
import { Header } from "./layout/Header";
import { Content } from "./layout/Content";
import { ProjectsProvider, SelectedProjectProvider } from "../context";
export const App = () => {

    
    return (
      <SelectedProjectProvider>
        <ProjectsProvider>
          <div className="App">
            <Header />
            <Content />
          </div>
        </ProjectsProvider>
      </SelectedProjectProvider>
    );
  }

export default App;
