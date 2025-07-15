import { useState } from "react"

export function NewTodoForm({onSubmit}) {
  

    const [newItem, setNewItem] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        if(newItem==="") return

       onSubmit(newItem)

        setNewItem("")
    }


    return <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
            <label htmlFor="item">What’s on your mind?</label>
            
        </div>
        <input value={newItem} onChange={e =>
                setNewItem(e.target.value)
            } type="text" id="item"  placeholder="Type your task here..."/>
        <button className="btn">Add</button>
    </form>
}