import React from 'react'

const NavBar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>Chat app</span>
      <div className='user'>
        <img src='https://images.pexels.com/photos/27140162/pexels-photo-27140162/free-photo-of-a-bride-is-holding-her-bouquet-in-her-hand.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load' alt='"'/>
        <span>Priti</span>
        <button>Logout</button>
       </div>
    </div>
  )
}

export default NavBar
