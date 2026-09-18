//! Link :
//  ● It is equivalent to an anchor tag. 
// ● At the end of the day, Link will be displayed as an anchor tag in the html document. 
// ● But it will not navigate, it will just change the path address.  
// ● to=” ” attribute equivalent to href attribute in html. Here we have to mention the path of the URL. 


import axios from "axios";
import  { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    async function fetchData() {
        let { data } = await axios("http://localhost:3030/users");
        setUser(data);
      }
    fetchData()
  }, []);

  async function handleClick(id) {
    let res = confirm("Are you sure ?")
    console.log(res)
    if(res){
      let res = await axios.delete(`http://localhost:3030/users/${id}`)
      location.reload()
    }
    
  }

return (

    <>

<h1>CRUD Operation</h1>


<Link to="/create">Create +</Link>
<br/>
<br/>
    <table border={1}>
      
      <thead>
        <tr>
          <th>ID</th>
          <th>UserName</th>
          <th>Phone</th>
          <th>Action</th>
        </tr>
      </thead>

      
        {
        user.map((val) => {
          const { id, username, phone 

          } = val;

          return (

            
            <tbody key={id}>
            <tr>
              <td>{id}</td>
              <td>{username}</td>
              <td>{phone}</td>
              <td>
                <button><Link to={`/update/${id}`}>UpDate</Link></button>
                <button><Link to={`/read/${id}`}>Read</Link></button>
                <button onClick={()=>handleClick(id)}>Delete</button>
              </td>
            </tr>
         
      </tbody>
          )
        })
      }
    </table>

    </>
  );
};

export default Home;
