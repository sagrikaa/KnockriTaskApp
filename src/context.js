import  React , {Component} from 'react';
import axios from 'axios';

const Context = React.createContext();

const reducer = (state ,action) =>{


    switch(action.type){

        case 'ADD_COMMENT': return{
            ...state,
            contacts: [action.payload , ...state.contacts]
        };

        case 'FIND_APPLICATION' : return{
            application:state.applications.find(app=>app.id===action.payload)
        };

        default:
            return state;
    }
}
export default class Provider extends Component{

    state= {
        
        candidates:[],
        applications:[],
        application:{},
        questions:[],
        dispatch: action=>this.setState(state=>reducer(state,action))
    }

    componentDidMount() {

        axios.get(`http://localhost:3010/candidates`)
         .then(res => this.setState({ candidates:res.data }));
         axios.get(`http://localhost:3010/applications`)
         .then(res => this.setState({ applications:res.data }));
         axios.get(`http://localhost:3010/questions`)
         .then(res => this.setState({ questions:res.data }))

      }
    
render(){
   return( 
   < Context.Provider value={this.state} >

        {this.props.children}
    
    </Context.Provider>)
}
}

export const Consumer = Context.Consumer;