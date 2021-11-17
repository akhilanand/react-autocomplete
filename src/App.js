import Header from "./components/Header"
import Button from './components/Button'
import SearchBox from './components/SearchBox'


const App = () => {
  const onClick = (e) => {
    console.log('obj')
  }
  return (
    <div className="container">
      <Header/>
      <div className='form-control'>
        <SearchBox placeholder='Search Here..'/>
        <Button title='Search' onClick={onClick}/>
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
