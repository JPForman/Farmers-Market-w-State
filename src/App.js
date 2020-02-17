import React from 'react';
import Nav from './components/Nav';
import SeasonalProduceList from './components/SeasonalProduceList'
import NewProduceControl from './components/NewProduceControl';
import NewProduceForm from './components/NewProduceForm';
import Error404 from './components/Error404';
import './App.css';
import { Switch, Route } from 'react-router-dom';



class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterProduceList: []
    };
    this.handleAddingNewProduceToList = this.handleAddingNewProduceToList.bind(this);
  }

  handleAddingNewProduceToList(newProduce){
  var newMasterProduceList = this.state.masterProduceList.slice();
  newMasterProduceList.push(newProduce);
  this.setState({masterProduceList: newMasterProduceList});
}

  render() {
    return (
      <div className="App">
      <header className="App-header">
      <Nav/>
      </header>
      <div className="opening">
      <h1>Beanstalk Bazaar</h1>
      </div>
      <Switch>
      <Route exact path='/' render={()=><SeasonalProduceList SeasonalProduceList={this.state.masterProduceList} />} />
      <Route path='/newproduce' render={()=><NewProduceControl onNewProduceCreation={this.handleAddingNewProduceToList} />} />
      <Route component={Error404} />
      </Switch>
      </div>
    );
  }
}
export default App;
