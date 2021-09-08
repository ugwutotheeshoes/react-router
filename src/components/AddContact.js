import React from 'react'

const AddContact = () => {
    return (
        <div className="main">
            <h2>Add Contact</h2>
            <form>
                <div className="field">
                    <label>Name</label>
                    <input type="text" name="name" placeholder="Name" />
                    <label>Email</label>
                    <input type="text" name="email" placeholder="Email" />
                    <button>Add</button>
                </div>
            </form>
        </div>
    )
}

export default AddContact
