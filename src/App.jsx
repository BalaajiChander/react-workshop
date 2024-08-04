import { useState } from "react";
import componentsImg from "./assets/components.png";
import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header/Header.jsx";
import CoreComponent from "./components/CoreConcepts/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";
import Card from "./components/Cardtest/Card.jsx";
import { CARDS_DATA } from "./components/Cardtest/Card.js";

function App() {
  const [selectedTopic, setSelectedTopic] = useState("Please click a button");

  let tabContent = "Please click a button";

  function onHandleClick(selectedButton) {
    // selectedButton => 'components', 'jsx', 'props', 'state';
    setSelectedTopic(selectedButton);
    tabContent = selectedButton;
    console.log("I am clicked  " + selectedButton);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreComponent {...CORE_CONCEPTS[0]} />
            <CoreComponent {...CORE_CONCEPTS[1]} />
            <CoreComponent {...CORE_CONCEPTS[2]} />
            <CoreComponent {...CORE_CONCEPTS[3]} />
          </ul>
        </section>

        <section id="examples">
          <h2>examples</h2>
          <menu>
            <TabButton
              onSelect={() => onHandleClick("Components")}
              label="Components"
            ></TabButton>
            <TabButton
              onSelect={() => onHandleClick("Jsx")}
              label="Jsx"
            ></TabButton>
            <TabButton
              onSelect={() => onHandleClick("Props")}
              label="Props"
            ></TabButton>
            <TabButton
              onSelect={() => onHandleClick("State")}
              label="State"
            ></TabButton>
          </menu>
          {selectedTopic}
        </section>

        {/* <section>
          <Card {...CARDS_DATA[0]}></Card>
        </section> */}
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
