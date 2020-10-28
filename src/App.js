import React, { Component, Suspense } from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';

//import Posts from './containers/Posts';
import User from './containers/User';
import Welcome from './containers/Welcome';

const Posts = React.lazy(() => import('./containers/Posts'));

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        {/* trying out reac 16.6 wrapping just the same as AUX empty wrapper */}
        {/* does not render a real dom element so doesnt bother the elements */}
        <React.Fragment> 
          <nav>
            <NavLink to="/user">User Page</NavLink> |&nbsp;
            <NavLink to="/posts">Posts Page</NavLink>
          </nav>
          <Route path="/" component={Welcome} exact />
          <Route path="/user" component={User} />

          {/* newer react lazy loading */}
          <Route path="/posts" render={ () => (
            <Suspense fallback={<div>LOADING!!!!</div>}>
              <Posts />
            </Suspense>
          )} />
          {/* ..... */}

        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;



  // TRYING ANOTHER WAY*************
  // class App extends Component {
  // state = {
  //   showPosts: false
  // }

  // clickHandler = () => {
  //   this.setState(prevState => {
  //     return {
  //       showPosts: !prevState.showPosts
  //     };
  //   });
  // }

  // render() {
  //   return (

      // <React.Fragment>
      //   <button onClick={this.clickHandler}> CLICK ME TESTING </button>
      //   { this.state.showPosts ? (
      //     <Suspense fallback={<div>LOADING!!!!</div>}>
      //       <Posts />
      //     </Suspense>
      //   ) : (
      //     <User /> 
      //   ) };
      // );
      //   }
      // }
      // </React.Fragment>
  // OTHERWAY END ****************

// export default App;
