import React, {useState} from "react"
import axios from "axios"

const Form = ({ list, setList, projects, setProjects, old, submit}) => {
    // const [likeId, setLikeId] = useState('')
    const [item, setItem] = useState( 
        (old && old.hasOwnProperty('node_id')) 
        ? 
        {gitId: old.id, name: old.name.replace("-", " ").replace("_", " "), language: old.language, desc: old.description, categories: old.topics, gitUrl: old.html_url, url: old.homepage} //gitUrl: old.git_url used to be
        :
        (old)
        ?
        old
        : 
        {gitId: '', name: '', language: '', desc: '', categories: [], gitUrl: '', url: ''} )
    const[success, setSuccess] = useState(false);

    const handleUpdate = e => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/project/${item._id}`, item)
            .then( res => {setSuccess(true)} )
            .catch( res => console.log(res.data.errors))
    }

    const createProj = e => {
        e.preventDefault()
        // USE LIKE TO CREATE PROJECT

        console.log('create2', e)
        axios.post('http://localhost:8000/api/project/create', item)
            .then( res => { 
                console.log('created:', res.data)
                setProjects( [...projects, res.data._id] ) 
            } )
            .catch( res => console.log(res.data))
        }  

    
    return(
        <div>
            <form class="form-inline" onSubmit={(submit) ?  createProj : handleUpdate} key={(old) ? old._id : null}>        
                    {success && <span className='accent'>Success!<br/></span>}
                <div class="form-group" className="lick">
                <label>Github ID:</label>
                <input class="form-control" type="number" value={item.gitId} onChange={ e => setItem({...item, gitId: e.target.value}) }/>
                
                </div>
                <div class="form-group" className="lick">
                    <label>Name:</label>
                    <input class="form-control" type="text" value={item.name} onChange={ e => setItem({...item, name: e.target.value}) } />
                    
                </div>
                <div class="form-group" className="lick">
                    <label>Language:</label>
                    <input class="form-control" type="text" value={item.language} onChange={ e => setItem({...item, language: e.target.value}) } />
                    
                </div>
                <div class="form-group" className="lick">
                    <label>Description:</label>
                    <input class="form-control" type="text" value={item.desc} onChange={ e => setItem({...item, desc: e.target.value}) } />
                
                </div>
                <div class="form-group" className="lick">
                    <label>Url:</label>
                    <input class="form-control" type="text" value={item.gitUrl} onChange={ e => setItem({...item, gitUrl: e.target.value}) }/>
                
                </div>
                <div class="form-group" className="lick">
                    <label>Deploy Url:</label>
                    <input class="form-control" type="text" value={item.url} onChange={ e => setItem({...item, url: e.target.value}) }/>
                
                </div>
                <div class="form-group" className="lick">
                    <label>Categories:</label>
                    <input class="form-control" type="text" value={item.categories.join(',').replaceAll('-', ' ').replaceAll('_', ' ')} onChange={ e => setItem({...item, categories : e.target.value.split(',')}) }/>
                
                </div>
                
                <input type="submit" value={(submit) ? "create":"update"}/>
            </form>
        </div>
    )
}

export default Form
