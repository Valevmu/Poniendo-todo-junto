
import './App.css';
import PersonCard from './Component/PersonCard';
// import "../src/stylesheet/PersonCard.css"



function App(props) {
  return (
    <div classfirstName="App">
      <div classfirstName="contenedor-principal">
        <PersonCard
        firstName="Jane"
        lastName="Doe"
        age={45}
        hairColor="Black" />
        <PersonCard
        firstName="John"
        lastName="Smith"
        age={88}
        hairColor="Brown" />
        <PersonCard
        firstName="Millard"
        lastName="Fillmore"
        age={50}
        hairColor="Brown" />
        <PersonCard
        firstName="Maria"
        lastName="Smith"
        age={62}
        hairColor="Brown" />

      </div>
    </div>
  );
}

export default App;
