import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const List = () => {

    const [data,setData]=useState([])
    const [id,setID]=useState(0)

    useEffect(()=>{
        (async ()=>{
            const res=await axios.get("http://localhost:8000/api/posts")
            setData(res.data);
        })()
    },[id])

    const onDelete = async (id) => {
      let URL="http://localhost:8000/api/posts/"+id;
      await axios.delete(URL)
      setID(id);
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12">

                   <div className="table-responsive">
                       <table className="table table-bordered">
                           <thead>
                           <tr>                               
                               <th>Title</th>
                               <th>Content</th>
                               <th>Authors</th> 
                               <th>Action</th>
                           </tr>
                           </thead>
                           <tbody>
                           {
                               data.map((item,index)=>{
                                   return(
                                       <tr key={index}>
                                           
                                           <td>{item['title']}</td>
                                           <td>{item['content']}</td>
                                           <td>{item['author']}</td>
                                           <td>

                                              <Link to={"/post/"+item['_id']} className="btn btn-primary btn-sm">Details</Link>

                                               <Link to={"/edit/"+item['_id']} className="btn btn-success btn-sm mx-2 my-2">Edit</Link>
                                               <button onClick={async ()=>{await onDelete(item['_id'])}} className="btn btn-danger btn-sm">Delete</button>
                                           </td>
                                       </tr>
                                   )
                               })
                           }
                           </tbody>
                       </table>
                   </div>

                </div>
            </div>
        </div>
    );
};

export default List;