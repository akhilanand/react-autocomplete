import Header from "./components/Header"
import Button from './components/Button'
import SearchBox from './components/SearchBox'


const App = () => {

  const onClick = (query) => {
    console.log('query',query)
  }

  const onSubmit = (event) => {
    event.preventDefault()
    let searchQuery = event.target.elements.search.value; 
    if(!searchQuery){
      alert('Please enter search text!');
      return
    }else{
      window.location.href = "https://www.google.com/search?q="+searchQuery;
    }
  }

  return (
    <div className="container">
      <Header/>
      <div className='form-control'>
        <form className='search-form' onSubmit={onSubmit}>
          <SearchBox name='search' placeholder='Search Here..'/>
          <Button title='Search' onClick={onClick}/>
        </form>
      </div>
    </div>
  );
}

// class App extends React.Component{
//   render() {
//     return <h1>Hellow from class App</h1>
//   }
// }




export default App
