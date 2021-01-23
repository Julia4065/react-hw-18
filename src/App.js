import logo from './logo.svg';
import './App.css';
import React from 'react';
import Main from './components/Main/Main.js';
import Post from './components/Post/Post.js';
import Contracts from './components/Contacts/Contracts.js';
import Image from './components/Image/Image.js';
import ironManImg from "./components/Post/iron-man.jpg";
import ironManBigImg from "./components/Post/iron-man-big-pict.jpg";
import notFoundImg from "./components/404_Error.jpg";
import { BrowserRouter, HashRouter as Router, MemoryRouter, Route, Link, NavLink, Switch, Redirect } from 'react-router-dom';
import Publication from './components/Post/Publication';
import Contact from './components/Contacts/Contact';
import OneContact from './components/Contacts/OneContact';

const ANAKIN_IMAGE = "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg";
const RAY_IMAGE = "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale";

const pictures = ['./components/Image/image-1.jpg', './components/Image/image-2.jpg',
  './components/Image/image-3.jpg', './components/Image/image-4.jpg'];

const postsArray = [{
  title: "Post about Star Wars",
  id: "1",
  author: {
    name: "Anakin Skywalker",
    photo: ANAKIN_IMAGE,
    nickname: "@dart_vader"
  },
  content: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
  image: RAY_IMAGE,
  date: "26 февр."
},
{
  title: "Post about Iron Man",
  id: "2",
  author: {
    name: "Iron Man",
    photo: ironManImg,
    nickname: "@iron_man"
  },
  content: "I did you a big favor. I have successfully privatized world peace. What more do you want?",
  image: ironManBigImg,
  date: "08 октяб."
}];

const NotFound = () => {
  return (
    <div>
      <div>Not found</div>
      <img src={notFoundImg} ></img>
    </div>
  )
}

const OnePost = (props) => {
  const filteredPost = postsArray.find((p) => p.id.toString() === props.match.params.id);
  return (
    <div>
      <h3>Post number {props.match.params.id}</h3>
      <Publication {...filteredPost} />
    </div>
  )
}

const PostList = (props) => {
  return (
    <div>
      {postsArray.map((post) => (
        <p>
          <Link to={`${props.match.path}/${post.id}`}>{post.title}</Link>
        </p>
      ))}
    </div>
  )
}

const Posts = (props) => {
  return (
    <div>
      <Switch>
        <Route path={`${props.match.path}`} exact component={PostList} />
        <Route path={`${props.match.path}/:id`} component={OnePost} />
      </Switch>
    </div>
  )
}


const Photos = () => {
  return (
    <div>
      < Image />
    </div>
  )
}

function App() {
  return (
    <div className="testing">
      <Router>
        <NavLink className="link" to="/main" activeClassName="active-link">Main</NavLink>
        <NavLink className="link" to="/posts" activeClassName="active-link">PostList</NavLink>
        <NavLink className="link" to="/photos" activeClassName="active-link">Photos</NavLink>
        <NavLink className="link" to="/contacts" activeClassName="active-link">Contacts</NavLink>
        <Switch>
          <Route path="/main" component={Main}></Route>
          <Route path="/posts" component={Posts}></Route>
          <Route path="/photos" component={Photos}></Route>
          <Route path="/contacts" component={Contracts} exact></Route>
          <Route path={'/contacts/:name'} component={OneContact} />
          <Route path="/" exact render={() => <Redirect to="/main" />} />
          <Route path="*" component={NotFound}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
