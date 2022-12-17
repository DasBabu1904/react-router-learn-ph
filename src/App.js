import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./component/Home/Home"
import Friends from "./component/Friends/Friends"
import About from './component/About/About';
import NotFound from './component/NotFound/NotFound';
import Header from "./component/Header/Header";
import FriendDetail from './component/FriendDetail/FriendDetail';
import Post from './component/Posts/Post';
import PostDetail from './component/PostDetail/PostDetail';
function App() {
  return (
    <div className="App">
      <h1>Router</h1>
      <Header></Header>
      <Routes>

        <Route path='/' element={<Home />}></Route>
        <Route path="/friends" element={<Friends></Friends>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/friend/:FriendId" element={<FriendDetail></FriendDetail>}></Route>
        <Route path="/posts" element={<Post></Post>}>
          <Route path=':postId' element={<PostDetail></PostDetail>}></Route>
        </Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
