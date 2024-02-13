import { useEffect, useState } from 'react';
import './App.css'
import useCrud from './hooks/useCrud';
import FormUser from './components/FormUser';
import CardUser from './components/CardUser';

function App() {


  const [editUser, setEditUser] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const url = 'https://users-crud.academlo.tech/';
  const [users, getUsers, createUser, deleteUser, updateUser] = useCrud(url);
  useEffect(() => {
      getUsers('/users/');
  }, []);
   //console.log(users);

  const handleOpen = () => {
    setIsOpen(true);
  }
    
  return (
    <div className='container__app'>
      <div className='navbar'>
      <h1>Usuarios</h1>
      <button onClick={handleOpen}>+ crear usuario</button>
      </div>
     
      <FormUser
        createUser={createUser}
        editUser={editUser}
        updateUser={updateUser}
        setEditUser={setEditUser}
        isOpen = {isOpen}
        setIsOpen = {setIsOpen}
      />
      <div>
        {
          users?.map(user =>(
            <CardUser
              key={user.id}
              user={user}
              deleteUser={deleteUser}
              setEditUser={setEditUser}
              setIsOpen= {setIsOpen}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App;
