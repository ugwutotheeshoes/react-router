import React from 'react'
import Data from './Data';
import { FaTrash } from 'react-icons/fa'

const ContactList = () => {
    const renderList = Data.map((list) => {
        return(
                <div className="item">
                <div className="item-content">
                    <h4 className="name">{list.name}</h4>
                    <p className="email">{list.email}</p>
                </div>
                <button
                type='button'
                className='delete-btn'
              >
                <FaTrash />
                </button>
                
            </div>
            
        )
    })
    return (
        <div className="contact-list">
            {renderList}
        </div>
    )
}

export default ContactList
