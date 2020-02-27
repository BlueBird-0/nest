import React from 'react'

function ProjectWrite() {
    return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <input placeholder="title" name="brdtitle" onChange={this.handleChange}/>
                <input placeholder="name" name="brdwriter" onChange={this.handleChange}/>
                <button type="submit">Save</button>
            </form>
        </div>
    )
}
