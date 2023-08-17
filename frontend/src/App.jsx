import {BrowserRouter, Route, Routes} from "react-router-dom";
import Read from "./page/read.jsx";
import Create from "./page/create.jsx";
import Edit from "./page/edit.jsx";
import BlogPost from "./page/post.jsx";


function App() {
  return (
	<div>
        <BrowserRouter>
            <Routes>                
                <Route element={<Read/>} path="/"/>
                <Route element={<Create/>} path="/create"/>
                <Route element={<Edit/>} path="/edit/:id"/>
                <Route element={<BlogPost/>} path="/post/:id"/>
            </Routes>
        </BrowserRouter>
        
    </div>
  );
}

export default App;
