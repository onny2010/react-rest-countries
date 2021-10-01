import './App.css';
import Countries from './components/Countries/Countries';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Countries></Countries>
      <Footer></Footer>
    </div>
  );
}
























/* 
function Countries() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {

    fetch('https://raw.githubusercontent.com/ProgrammingHero1/rest-countries-data/main/coutries.JSON?fbclid=IwAR05-UG2wXhFEh9XFBd_YMpD38qM5SqmcDHe9SbBnccatI69t4SJ8hxiZbA')
      .then(res => res.json())
      .then(data => setCountries(data));

  }, [])

  return (
    <div>
      <h2>Travelling around the world!!!</h2>
      <h4>Countries Available: {countries.length}</h4>
      {
        countries.map(country => <Country name={country.name}></Country>)
      }
    </div>
  )
}

function Country(props) {
  return (
    <div>
      <h3>Name: {props.name}</h3>
      <p>Capital: {props.capital}</p>
    </div>
  )
} */

export default App;
