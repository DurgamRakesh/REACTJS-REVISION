// import React, { createContext, useState } from 'react';
// // import Contextapi from './components/Chaild/Contextapi';
// // import ChailComponent from './components/Chaild/chailComponent';
// // import { BrowserRouter,Routes, Route, Link } from 'react-router-dom';
// // import Home from '../src/components/routes/home'
// // import Student from '../src/components/routes/student'
// // import Contact from '../src/components/routes/contact'
// // import About from '../src/components/routes/about'
// // import Counter from './components/Chaild/counter';

// // export const store = createContext();

// const App = () => {


//   // let arr = ([
//   //   {
//   //     name:"rakesh",
//   //     email:'rak@gmail.com'
//   //   },
//   //   {
//   //     name:"vishnu",
//   //     email:'vishnu@gmail.com'
//   //   },
//   //   {
//   //     name:"anser",
//   //     email:'anser@gmail.com'
//   //   }
//   // ]);
//   // let newobj = {
//   //   name:"osoo",
//   //   loc:"hyd"
//   // }

//   // const [count,setCount] = useState(0)
//   // const [data,setData] = useState([
//   //   {
//   //     name:"rakesh"
//   //   },
//   //   {
//   //     name:"vishnu"
//   //   },
//   //   {
//   //     name:"anser"
//   //   }
//   // ])
//   return(
//     <>
//     {/* <BrowserRouter>
//     <h1>{count}</h1>
//     <button onClick={() => setCount(count+1)}>+</button>
//     <button onClick={() => setCount(count-1)}>-</button>
//     <div style={{backgroundColor:"pink",padding:"10px",color:"black"}}>
//       <ul style={{listStyleType:"none",padding:'10px',display:'flex',justifyContent:"space-evenly"}}>
//         <li><Link to={'/'}>home</Link></li>
//         <li><Link to={'/student'}>student</Link></li>
//         <li><Link to={'/contact'}>contact</Link></li>
//         <li><Link to={'/about'}>about</Link></li>
//       </ul>
//     </div>

//     <Routes>
//       <Route path='/' element={<Home/>}/>
//       <Route path='/student' element={<Student/>}/>
//       <Route path='/contact' element={<Contact/>}/>
//       <Route path='/about' element={<About/>}/>
//     </Routes>
//     </BrowserRouter> */}

//     {/* <ChailComponent val="hello" obj={newobj} details= {arr}/> */}
//     {/* <Counter counter={[count,setCount]}/> */}

//     {/* <store.Provider value={[data,setData]}>
//       <Contextapi/>
//     </store.Provider> */}
//     </>
//   )
// }
// export default App

// import React from 'react'
// // import Lazy from './components/Chaild/Lazy'
// import { lazy,Suspense } from 'react'

// const Lezycom = lazy(() =>import('./components/Chaild/Lazy'))

// const App = () => {
//   return (
//     <div>
//       <Suspense fallback='loading...'>
//         <Lezycom/>
//       </Suspense>
//     </div>
//   )
// }

// export default App


// import React, { useReducer } from 'react';

// const App = () => {
//   const initialState = {
//     count:0
//   }
//   const reduser = (state,action) => {
//     if(action.type === 'inc'){
//       return {count:state.count+1}
//     }
//     else if(action.type === 'dec'){
//       return {count:state.count-1}
//     }
//     else{
//       console.log('error');
//     }
//   }
//   const [state,dispatch] = useReducer(reduser,initialState);
//   return(
//     <>
//     <h1>{state.count}</h1>
//     <button onClick={() => dispatch({type:"inc"})}>+</button>
//     <button onClick={() => dispatch({type:"dec"})}>-</button>
//     </>
//   )
// }
// export default App


// import { Component } from 'react';

// class App extends Component{
//   constructor(){
//     super()
//     this.state = {
//       count:0
//     }
//   }
//   componentDidMount(){
//     console.log('componentdidmount');
//   }
//   componentDidUpdate(){
//     console.log('comdidupdate');
//   }
//   componentWillUnmount(){
//     console.log('deletemount');
//   }
//   render(){
//     return(
//       <>
//       <div>{this.state.count}</div>
//       <button onClick={() =>this.setState({count:this.state.count+1})}>+</button>
//       </>
//     )
//   }
// }

// export default App

// import React from 'react'

// const App = () => {
//   return (
//     <div>App</div>
//   )
// }

// export default App

//--------------------------------------session-1--------------------------------------

// import React,{ Component } from 'react';

// class App extends Component{

//   render(){
//     return(
//       <div>App Component</div>
//     )
//   }
// }

// export default App;

// import React from 'react';

// const App = () => {
//   return(
//     <div>App Component FN</div>
//   )
// }

// export default App;

// import React, { Component } from 'react'

//  class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//        value:"rakesh"
//     }
//   }
//   render() {
//     return (
//       <div>App{this.state.value}</div>
//     )
//   }
// }
// export default App;

// import React, { useState } from 'react'
// import ChaildComponent from './components/session-1/ChaildComponent'
// const App = () => {

//   const [count,setCount] = useState(0);
// const state = [
//   {name:"rakesh"},{name:"sshiif"},{name:"sis"}
// ]

// let obj = {
//   name:"rakesh",age:23,id:5882
// }
//   return (
//     <div>App
//       <div>
//         <ChaildComponent value={'rakesh'} state={state} obj={obj} s ={[count,setCount]}/>
//       </div>
//     </div>
//   )
// }

// export default App


// import React, { createContext } from 'react'
// import AllRoutesFile from './components/session-1/routing/AllRoutesFile'

// export const store = createContext();
// const App = () => {
//   let data = [
//     {name:"rakesh",age:23,id:5882},{name:"adjji",age:25,id:100},{name:"djoso",age:26,id:101}
// ]
//   return (
//     <div>
//       <store.Provider value={data}>
//       <AllRoutesFile/>
//       </store.Provider>
//     </div>
//   )
// }

// export default App


// import React from 'react'
// import DataFetch from './components/session-1/api/DataFetch'

// const App = () => {
//   return (
//     <div>App
//       <DataFetch/>
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import StateUpLifting from './components/session-1/StateUpLifting';

// const App = () => {
//   const getdata = (data) => {
//     console.log("pinting data in parent component:",data);
//   }
//   return (
//     <div>App
//       <StateUpLifting getdata={getdata}/>
//     </div>
//   )
// }

// export default App

// import React, { Suspense, lazy } from 'react'
// const Lacom = lazy(() => import('./components/session-1/LazyComponent'))
// const App = () => {
//   return (
//     <div>
//       <div>
//         <Suspense fallback={<h1 style={{textAlign:"center",marginTop:"300px"}}>loading...</h1>}>
//           <Lacom/>
//         </Suspense>
//       </div>
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import { Provider } from 'react-redux'
// import { store } from './components/session-1/redux/store'
// import Counter from './components/session-1/redux/Counter'

// const App = () => {
//   return (
//     <Provider store={store}>
//     <div>App</div>
//     <Counter/>
//     </Provider>
//   )
// }

// export default App

// import React, { useRef, useState } from 'react'
// import SignUp from './components/session-1/Conditional/SignUp';
// import Login from './components/session-1/Conditional/Login';

// const App = () => {
//   const login = true;
//   const [change, setChange] = useState(false);
//   const [val, setVal] = useState('');
//   const [data, setData] = useState({
//     name: "",
//     email: "",
//     password: ""
//   })

//   const hd = () => {
//     // const re = useRef()
//     if (val === '') {
//       alert('empoty')
//     }
//     console.log(val);
//   }
//   const Change = (e) => {
//     setData({ ...data, [e.target.name]: e.target.value })
//   }
//   const submit = () => {
//     console.log(name,email,passwords);
//   }
//   return (
//     <div>App
//       {/* <div>
//         {
//           // login ? <SignUp/> : <Login/>
//           // login&&<SignUp/> 
//           change ? <Login /> : <SignUp />
//         }
//         <button onClick={(() => setChange(!change))}>
//           {
//             change ? "gotosingup" : "login"
//           }
//         </button>
//         <input type='text' value={val} onChange={(e) => setVal(e.target.value)} />
//         <button onClick={hd}>submit</button>
//       </div> */}
//       <div>
//         <div>
//           <input type='text' name='name' onChange={Change} />
//           { name.length > 8 ? null : <p>length should be 8</p>}
//         </div>
//         <div>
//           <input type='email' name='email' onChange={Change} />
//           { name.length > 8 ? null : <p>email should be 8</p>}
//         </div>
//         <div>
//           <input type='password' name='password' onChange={Change} />
//           { password.length > 8 ? null : <p>length should be 8</p>}
//         </div>
//         <div><button onClick={submit}>submit</button></div>
//       </div>
//     </div>
//   )
// }

// export default App

// import React, { useState } from 'react'

// const App = () => {
//     const [values, setValues] = useState({
//         name: "",
//         email: "",
//         password: ""
//     })

//     const handleChange = (e) => {
//         setValues({ ...values, [e.target.name]: e.target.value });
//     }
//     const handleClick = (e) => {
//         e.preventDefault()
//         console.log(values);
//         let name_P = values.name.length > 0
//     }
//     return (
//         <div>App

//             <form onSubmit={handleClick}>
//             <div>
//                 <input type='text' name='name' onChange={handleChange} />
//                 {
//                     console.log(name_P)
//                 //    name_P ? null :<p>name length lessthen 0</p>
//                 }
//             </div>
//             <br/>
//             <div>
//                 <input type='email' name='email' onChange={handleChange} />
//             </div>
//             <br/>
//             <div>
//                 <input type='password' name='password' onChange={handleChange} />
//             </div>
//             <br/>
//             <div>
//                 <button type='submit'>submit</button>
//             </div>
//             </form>
//         </div>
//     )
// }

// export default App


// import React, { useEffect, useState } from 'react'

// const App = () => {
//     const [count,setCount] = useState(0)
//     const [count1,setCount1] = useState(0)

//     useEffect(() =>{
//         // console.log("com mount");
//         console.log("com willunmout");
//     },[])
//   return (
//     <div>App
//         <h1>{count1}</h1>
//         <button onClick={() => setCount(count+1)}>+</button>
//         <button onClick={() => setCount1(count1+1)}>+</button>
//     </div>
//   )
// }

// export default App

// import React, { useEffect, useReducer } from 'react'

// const App = () => {
//     const initialvalue = {
//         count:0
//     }
//     const reducer = (state,action) => {
//         if(action.type === 'inc'){
//             return {count:state.count+1}
//         }
//         else if(action.type === 'dec'){
//             return {count:state.count-1}
//         }

//     }
    
//     const [s,dispatch] = useReducer(reducer,initialvalue)
//     console.log(s);
//   return (
//     <div>App
//         <h1>{s.count}</h1>
//         <button onClick={() => dispatch({type:"inc"})}>+</button>
//         <button onClick={() => dispatch({type:"dec"})}>-</button>
//     </div>
//   )
// }

// export default App

// import React, { useRef } from 'react'

// const App = () => {
//     const inputRef = useRef();
//     const focus = () => {
//         inputRef.current.focus()
//         inputRef.current.value = "Hello World"
//     }
//   return (
//     <div>App

//         <input ref={inputRef} type='text'/>
//         <button onClick={focus}>focus</button>
//     </div>
//   )
// }

// export default App

// import React, { useMemo, useState } from 'react'

// const App = () => {
//     const [countA,setCountA] = useState(0)
//     const [countB,setCountB] = useState(0)
//     const result = useMemo(() => {
//         console.log('result...');
//         return (countA+countB)
//     },[countA,countB])
//   return (
//     <div>App
//         {/* <h1>{countA}</h1>
//         <h1>{countB}</h1> */}
//         <h1>{result}</h1>
//         <button onClick={() => setCountA(countA+1)}>countA</button>
//         <button onClick={() => setCountB(countB+1)}>countB</button>
//     </div>
//   )
// }

// export default App

// import React, { Component } from 'react'

// export default class App extends Component {
//     constructor(props) {
//         console.log("constructor");
//       super(props)
    
//       this.state = {
//       }
//     }

//     static getDerivedStateFromProps(props, state){
//         console.log('getDerivedStateFromProps');
//     }
//     componentDidMount(){
//         console.log('componentDidMount');
//     }
//   render() {
//     console.log('render');
//     return (
//       <div>App</div>
//     )
//   }
// }

// import React, { Component } from 'react'

// export default class App extends Component {
//     constructor(props) {
//       super(props)
    
//       this.state = {
//          first:"rakesh"
//       }
//     }

//     static getDerivedStateFromProps(props, state){
//         console.log('getDerivedStateFromProps');
//         return null
//     }
//     shouldComponentUpdate() {
//         console.log('shouldComponentUpdate');
//         return true
//     }

//     getSnapshotBeforeUpdate(prevp,prevs) {
//         console.log('getSnapshotBeforeUpdate');
//         return 'new'
//     }
//     componentDidUpdate(p,s,n){
//         console.log('componentDidUpdate');
//         console.log('componentDidUpdate',n);
//     }
//     componentWillUnmount(){
//         console.log("componentWillUnmount");
//     }
//   render() {
//     console.log('render');
//     return (
//       <div>App
//         <h1>{this.state.first}</h1>
//         <button onClick={() => this.setState({first:this.state.first = 'hello'})}>change</button>
//       </div>
//     )
//   }
// }


//----------------------------------------------------session-2-----------------------------------------------

// import React , { Component } from 'react';

// class App extends Component{
//     render(){
//         return(
//             <div>App</div>
//         )
//     }
// }
// export default App


// import React from 'react';

// const App = () => {
//     return(
//         <div>App</div>
//     )
// }
// export default App

// import React, { Component } from 'react'

//  class App extends Component {
//     constructor(props) {
//       super(props)
    
//       this.state = {
//          count:0
//       }
//     }
//   render() {
//     return (
//       <div>App
//         <div>
//             <h1>{this.state.count}</h1>
//             <button onClick={() => this.setState({count:this.state.count+1})}>+</button>
//             <button onClick={() => this.setState({count:this.state.count-1})}>-</button>
//             <button onClick={() => this.setState({count:0})}>0</button>
//         </div>
//       </div>
//     )
//   }
// }
// export default App

// import React, { useState } from 'react'

// const App = () => {
//     const [count,setCount] = useState(0);
//   return (
//     <div>App
//         <div>
//             <h1>{count}</h1>
//             <button onClick={() => setCount(count+1)}>+</button>
//             <button onClick={() => setCount(count-1)}>-</button>
//             <button onClick={() => setCount(0)}>0</button>
//         </div>
//     </div>
//   )
// }

// export default App


// import React from 'react'
// import ChailComponent from './components/session-2/ChailComponent'

// const App = () => {
//     let name = 'rakesh'

//     let details = {
//         name:"rakesh",
//         age:23,
//         id:5882
//     }

//     let arr = [
//         {name:"rakesh",age:23,id:5882},{name:"durgam",age:24,id:100},{name:"dff",age:21,id:101}
//     ]
//   return (
//     <div>App
//         <div>
//             <ChailComponent name={name} details={details} arr={arr}/>
//         </div>
//     </div>
//   )
// }

// export default App

// import React, { createContext } from 'react'
// import { BrowserRouter, Link, NavLink, Route, Routes } from 'react-router-dom'
// import Home from './components/session-2/routing/Home'
// import Student from './components/session-2/routing/Student'
// import About from './components/session-2/routing/About'
// import UserDetails from './components/session-2/routing/UserDetails'
// import './components/session-2/routing/styles.css'
// import Help from './components/session-2/routing/Help'
// import Cus from './components/session-2/routing/Cus'
// export const store = createContext();
// const App = () => {

//     let data = [
//         {
//             name:"rakesh",age:23,id:5882
//         },
//         {
//             name:"durgam",age:24,id:100
//         },
//         {
//             name:"adff",age:25,id:101
//         }
//     ]
//   return (
//     <BrowserRouter>
//     <store.Provider value={data}>
//     {/* <Link to='/'>Home</Link>
//     <Link to='/student'>Student</Link>
//     <Link to='/about'>About</Link> */}
//     <NavLink activeclassname='active' to='/'>Home</NavLink>
//     <NavLink activeclassname='active' to='/student'>Student</NavLink>
//     <NavLink activeclassname='active' to='/about'>About</NavLink>
    
//     <div>App</div>
//     <Routes>
//         <Route path='/' element={<Home/>}/>
//         <Route path='/student' element={<Student/>}/>
//         <Route path='/student/:id' element={<UserDetails/>}/>
//         {/* <Route path='/about' element={<About/>}/> */}
//         <Route path='/about'>
//             <Route path='help' element={<Help/>}/>
//             <Route path='cus' element={<Cus/>}/>
//         </Route>
//     </Routes>
//     </store.Provider>
//     </BrowserRouter>
//   )
// }

// export default App

// import React, { useEffect, useState } from 'react'

// const App = () => {
//     const [data,setData] = useState([])
//     useEffect(() => {
//         fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json()).then((data) => setData(data))
//     },[])
//   return (
//     <div>App
//         <div>
//             {
//                 data.map((e) => {
//                     return(
//                         <div key={e.id}>
//                             <h1>{e.name}</h1>
//                             <h1>{e.email}</h1>
//                             <h1>{e.id}</h1>
//                         </div>
//                     )
//                 })
//             }
//         </div>
//     </div>
//   )
// }

// export default App

// import axios from 'axios'
// import React, { useEffect, useState } from 'react'

// const App = () => {
//     const [data,setData] = useState([])
//     useEffect(() => {
//         axios.get('https://jsonplaceholder.typicode.com/users').then((data) => setData(data.data))
//     },[])
//   return (
//     <div>App
//         <div>
//             {
//                 data.map((e) => {
//                     return(
//                         <div key={e.id}>
//                             <h1>{e.name}</h1>
//                             <h1>{e.email}</h1>
//                             <h1>{e.id}</h1>
//                         </div>
//                     )
//                 })
//             }
//         </div>
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import StateUpLifting from './components/session-2/routing/StateUpLifting'

// const App = () => {
//     const getdata = (data) => {
//         console.log("printing in parent component:",data);
//     }
//   return (
//     <div>App
//         <div>
//             <StateUpLifting getdata={getdata} />
//         </div>
//     </div>
//   )
// }

// export default App

// import React, { Suspense, lazy } from 'react'
// const LazyComponent = lazy(() => import('./components/session-2/routing/Lazy'))

// const App = () => {
//   return (
//     <div>
//         <Suspense fallback={<h1 style={{textAlign:"center",marginTop:"300px"}}>loading...</h1>}>
//             <LazyComponent/>
//         </Suspense>
//     </div>
//   )
// }

// export default App

// import React, { useState } from 'react'
// import Home from './components/session-2/routing/Home';
// import Cus from './components/session-2/routing/Cus';

// const App = () => {
//     // let user  = false;
//     const [user,setUser] = useState(false);
//   return (
//     <div>App
//         {
//             user ? <Home/> : <Cus/>
//         }
//         <button onClick={() => setUser(!user)}>
//             {
//                 user ? "goto-Cus" : "goto-Home"
//             }
//         </button>
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import { Store } from './components/session-2/redux/Store'
// import Counter from './components/session-2/redux/Counter'
// import { Provider } from 'react-redux'

// const App = () => {
//   return (
//     <Provider store={Store}>
//     <div>App
//         <div>
//             <Counter/>
//         </div>
//     </div>
//     </Provider>
//   )
// }

// export default App

// import React, { useReducer } from 'react'

// const App = () => {
//     const is = {
//         count:0
//     }
//     const reducer = (s,a) => {
//         if(a.type === 'inc'){
//             return {count:s.count+1}
//         }
//         if(a.type === 'dec'){
//             return {count:s.count-1}
//         }
//         if(a.type === 'res'){
//             return {count:0}
//         }
//     }
//     const [state,dispatch] = useReducer(reducer,is);
//   return (
//     <div>App
//         {state.count}
//         <button onClick={() => dispatch({type:"inc"})}>+</button>
//         <button onClick={() => dispatch({type:"dec"})}>-</button>
//         <button onClick={() => dispatch({type:"res"})}>0</button>
//     </div>
//   )
// }

// export default App

// import React, { useRef } from 'react'

// const App = () => {
//     let inputRef = useRef();
//     const hd = () => {
//         inputRef.current.focus()
//         inputRef.current.value = 'hello'
//     }
//   return (
//     <div>App
//         <input ref={inputRef}/>
//         <button onClick={hd}>focus</button>
//     </div>
//   )
// }

// export default App

// import React, { useState } from 'react'
// import { BrowserRouter, Link, Route, Routes, useNavigate } from 'react-router-dom';

// import Navigate from './components/session-2/redux/Navigate';
// const App = () => {
//     const [name,setName] = useState('');
//     let navigate = useNavigate();
//     const send = () => {
//         navigate('/Navigate')
//     }
//   return (
    
//         <BrowserRouter>
//         <Link to={'/Navigate'} onClick={send}>nav</Link>
//         <Routes>
//             <Route path='/Navigate' element={<Navigate/>}/>
            
//         </Routes>
//         <input type='text' onChange={(e) => setName(e.target.value)}/>
//         {/* <button onClick={send}>send</button> */}
//         </BrowserRouter>

//   )
// }

// export default App

// import React, { useState } from 'react'
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import DataPage from './components/session-2/redux/DataPage';

// const App = () => {
//     const [values,setValues] = useState({
//         name:"",
//         email:"",
//         password:""
//     })
//     const [errors,setErrors] = useState({});
//     const [dis,setDis] = useState(true);

//     const hc = (e) => {
//         setValues({...values,[e.target.name] : e.target.value})
//         if(values.name.length > 6 && values.email.length > 15 && values.password.length > 8 ){
//             setDis(false)
//         }else{
//             setDis(true)
//         }
//     }
//     const submit = (e) => {
//         e.preventDefault()
//         setErrors(validate(values))
//         console.log(values);
//     }
//     const validate = (values) => {
//         let errors = {}
//         const {name, email, password} = values;
//         if(name === ''){
//             errors.name = 'Name is Required!'
//         }
//         else if(name.length < 6){
//             errors.name = 'Length lessThen 6'
//         }
//         if(email === ''){
//             errors.email = 'Email is Required!'
//         }
//         else if(email.length < 15){
//             errors.email = 'Email Length lessThen 15'
//         }
//         if(password === ''){
//             errors.password = 'Password is Required!'
//         }
//         else if(password.length < 8){
//             errors.password = 'Pasword Length lessThen 8'
//         }
//         return errors;
//     }
    
//   return (
//     <BrowserRouter>
//     <div style={{display:"flex",alignItems:"center",justifyContent:"center",height:"100vh"}}>
//         <form onSubmit={submit} style={{border:"2px solid black",padding:"30px",height:"50vh",display:"grid",placeItems:"center"}}> 
//             <div>
//             <input type='text'name='name' onChange={hc}/>
//             {errors.name ? <p style={{color:"red"}}>{errors.name}</p> : null}
//             </div>
//             <div>
//             <input type='email'name='email' onChange={hc}/>
//             {errors.email ? <p style={{color:"red"}}>{errors.email}</p> : null}
//             </div>
//             <div>
//             <input type='password'name='password' onChange={hc}/>
//             {errors.password ? <p style={{color:"red"}}>{errors.password}</p> : null}
//             </div>
//             <div>
//             <input disabled={dis} type='submit' value='submit'/>
//             </div>
//         </form>
//     </div>
//     <Routes>
//         <Route path='/datapage' element={<DataPage/>}/>
//     </Routes>
//     </BrowserRouter>
//   )
// }

// export default App


// import React, { useMemo, useState } from 'react'

// const App = () => {
//     const [countA,setCountA] = useState(0)
//     const [countB,setCountB] = useState(0)

//     let res = useMemo(() => {
//         console.log('shhieh');
//         return countA+countB
//     },[countA,countB])
//   return (
//     <div>
//         <h1>{res}</h1>
//         {countA}
//         <button onClick={() => setCountA(countA+1)}>A</button>
//         {countB}
//         <button onClick={() => setCountB(countB+1)}>B</button>
//     </div>
//   )
// }

// export default App


// import React from 'react'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import DataPage from './components/session-2/redux/DataPage'
// import Navigate from './components/session-2/redux/Navigate'

// const App = () => {
//   return (
//     <BrowserRouter>
//     <Routes>
//         <Route path='/datapage' element={<DataPage/>}/>
//         <Route path='/navigate' element={<Navigate/>}/>
//     </Routes>
//     </BrowserRouter>

//   )
// }

// export default App

// import React from 'react'
// import Hoc from './components/session-2/Hoc'

// const App = () => {
//   return (
//     <div>App</div>
//   )
// }

// export default Hoc(App)

// import React from 'react'
// import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
// import LoginPage from './components/session-2/LoginPage'
// import DetailsPage from './components/session-2/DetailsPage'

// const App = () => {
//   return (
//     <BrowserRouter>
//     {/* <Link to={'/login'}>Login</Link>
//     <Link to={'/detailspage'}>Details</Link> */}
//     <Routes>
//         <Route path='/login' element={<LoginPage/>}/>
//         <Route path='/detailspage' element={<DetailsPage/>}/>
//     </Routes>
//     </BrowserRouter>
//   )
// }

// export default App

// import React, { useMemo, useState } from 'react'

// const App = () => {
//     const [a,setA] = useState(0);
//     const [b,setB] = useState(0);
//    let mul = useMemo(() => {
//         console.log('usememo...');
//         return a*10
//    },[a])
//   return (
//     <div>App
//         <h1>{mul}</h1>
//         <button onClick={() => setA(a+1)}>+{a}</button>
//         <button onClick={() => setB(b+1)}>-{b}</button>
//     </div>
//   )
// }

// export default App

// import React, { useCallback, useState } from 'react'
// import A from './components/session-2/A';

// const App = () => {
//     const [count,setCount] = useState(0);
//     const fun = useCallback(() => {

//     },[])
//   return (
//     <div>App`
//         <h1>{count}</h1>
//         <A fun={fun}/>
//         <button onClick={() => setCount(count+1)}>+</button>
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
// import Login from './components/session-2/Login'
// import Projects from './components/session-2/Projects'
// import Blog from './components/session-2/Blog'
// import Todo from './components/session-2/Todo'

// const App = () => {
//   return (
//     <BrowserRouter>
//     <Link to={'/login'} style={{margin:'50px'}}>Login</Link>
//     <Link to={'/projects'} style={{margin:'50px'}}>projects</Link>
//     <Routes>
//         <Route path='/login' element={<Login/>}/>
//         <Route path='/projects' element={<Projects/>}>
//             <Route path='blog' element={<Blog/>}/>
//             <Route path='todo' element={<Todo/>}/>
//         </Route>
//     </Routes>
//     </BrowserRouter>
//   )
// }

// export default App

import React, { useState } from 'react'
import Login from './components/session-2/Login'

const App = () => {
    const [count,setCount] = useState(true)

  return (
    <div>App
        {
            count && <Login/>
        }
        <button onClick={() => setCount(!count)}>Toggle</button>
    </div>
  )
}

export default App





