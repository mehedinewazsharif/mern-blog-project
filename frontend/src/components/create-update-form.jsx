import {useEffect, useRef, useState} from "react";
import axios from "axios";
import {useNavigate,useParams} from "react-router-dom";


const CreateUpdateForm = () => {

    let {id} = useParams();
    let [FormValue,SetFormValue] = useState({title:"",content:"",author:""});
    let navigate = useNavigate();


    useEffect(()=>{

        (async ()=>{
           let res=await axios.get("http://localhost:8000/api/posts/"+id);
           SetFormValue(res.data);
        })()

    },[])


    const InputOnChange = (property,value) => {
        SetFormValue({...FormValue,[property]:value});
    }

    const onSubmit = async () => {
        
        if(id){
            URL="http://localhost:8000/api/posts/"+id;
            let res= await axios.put(URL, FormValue);
            
            if(res.status===200){
              alert("Save Changes");
              navigate('/');
            }

        }else{
            let URL="http://localhost:8000/api/posts";
            let res= await axios.post(URL, FormValue);
        
            if(res.status===200){
              alert("Save Changes");
              navigate('/');
            }
        }   

    }


    return (
        <div className="container">

            <div className="row">
                <div className="col-md-6 p-2">
                    <label>Title</label>
                    <input className="form-control" value={FormValue.title} onChange={(e)=>{InputOnChange('title',e.target.value)}} type="text" placeholder=""/>
                </div>
                <div className="col-md-6">
                    <label>Content</label>
                    <input className="form-control"  value={FormValue.content} onChange={(e)=>{InputOnChange('content',e.target.value)}} type="text" placeholder=""/>
                </div>
                <div className="col-md-6">
                    <label>Author</label>
                    <input className="form-control form-control-sm"  value={FormValue.author} onChange={(e)=>{InputOnChange('author',e.target.value)}} type="text" placeholder=""/>
                </div>

            </div>
            <div className="row">
               <div className="col-3">
                   <button onClick={onSubmit} className="btn my-2  w-100 btn-danger">Submit</button>
               </div>
            </div>
        </div>
    );
};

export default CreateUpdateForm;