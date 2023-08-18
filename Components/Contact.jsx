
import React, { useState } from 'react';
import './contact.css';

const Contact = () => {
  const [state, setState] = useState({
    name: '',
    email: '',
    number: '',
    img: '',
  });

  const [contactlist, setContactlist] = useState([]);

  const handleChange = (event) => {
    const { name, value, files } = event.target;
    setState((prevState) => ({...prevState,[name]: value,}));


 if (name === 'img') {

      setState((prevState) => ({

        ...prevState,

        img: files[0]   // Store the file object

      }));

    } else {

      setState((prevState) => ({

        ...prevState,

        [name]: value,

      }));

    }
  };

  const handleSave = () => {
    setContactlist([...contactlist, state]);
    setState({
      name: '',
      email: '',
      number: '',
      img: '',
    });
  };

  const deleteContact=(index)=>{
      contactlist.splice(index,1)
      setContactlist([...contactlist])
  }

  const editContact=(index)=>{
    setState(contactlist[index]);
    deleteContact(index)
  }

  return (
  <div className={"container"}>
      <div className={"row"}>
        <div className={"col-md-4"}>
          <h3 className='heading'>Add contact</h3>
      <form>
        <div>
          <label className="form-label">Contact Name</label>
          <input type="text" className="form-control" name="name" value={state.name} onChange={handleChange}/>
        </div>

        <div>
          <label className="form-label">Email address</label>
          <input type="email" className="form-control" name="email" value={state.email} onChange={handleChange} />
        </div>

        <div>
          <label className="form-label">Phone Number</label>
          <input type="number" className="form-control" name="number" value={state.number} onChange={handleChange}/>
        </div>

        <div>
          <label className="form-label">Upload Photo</label>
          <input type="file" className="form-control" name="img" accept="/.png"  onChange={handleChange}/>
        </div>

        <div>
          <button type="button" className="btn btn-primary" onClick={handleSave}> Save </button>
        </div>
      </form>
 </div>
      <div className="col-md-4">
      <h3 className='heading'>Contact-list</h3>

        <ul>
          {contactlist.map((item, index) => (
            <li key={index} className='contactName'>
              <div>
              <p>{item.name}</p>
              <p>{item.email}</p>
              <p>{item.number}</p>
              <p className='btn'>
                 {
                 item.img && (
                 <img src={URL.createObjectURL(item.img)} alt={item.name} style={{ maxWidth: '100px' }} />)
               }
               </p>
             
              </div>
              <div>
              <button type="button" className="btn btn-primary" onClick={()=>editContact(index)}>Edit</button>
              <button type="button" className="btn btn-primary" onClick={()=>deleteContact(index)}>Delete</button>

              </div>

            </li>
          ))}
        </ul>
      </div>
    </div>
    </div>
  );
};

export default Contact;
