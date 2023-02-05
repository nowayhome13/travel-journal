import './App.css';
import data from './data';
import Card from './components/Card';
import Header from './components/Header';


function App() {
  const compo = data.map(item => {
    return <Card 
              imageUrl={item.imageUrl} 
              title={item.title}
              location={item.location.toUpperCase()}
              googleMapUrl={item.googleMapUrl}
              startDate={item.startDate}
              endDate={item.endDate}
              description={item.description}
            />
  })
  return (
    <div className="App">
    <Header />
    {compo}
    </div>
  );
}

export default App;
