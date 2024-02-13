import React from 'react';
import './styles/cardUser.css';

const CardUser = ({user, deleteUser, setEditUser,setIsOpen }) => {

    //console.log(user)

    const handleDelete= ( )=>{
        deleteUser('/users', user.id);
    }
    const handleEdit = () => {
        setEditUser(user);
        setIsOpen(true);
    }
  
  return (
    <div className='article__container'>
        <h3>{user.first_name} {user.last_name}</h3>
        <ul>
            <li><span>correo</span><span>{user.email}</span></li>
            <li><span>cumpleaños</span><span>{user.birthday}</span></li>
        </ul>
        <hr/>
        <button onClick={handleDelete}className="delete-button"><box-icon type='solid' name='trash'></box-icon></button>
        <button onClick={handleEdit}className="edit-button"><box-icon type='solid' name='edit-alt'></box-icon></button>
    </div>
  )
}
export default CardUser;