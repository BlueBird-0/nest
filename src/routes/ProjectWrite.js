import React from 'react'

function ProjectWrite() {
    return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <input placeholder="brdtitle" name="brdtitle" onChange={this.handleChange}/>
                <input placeholder="brdgithub" name="brdgithub" onChange={this.handleChange}/>
                <input placeholder="brbdcomment" name="brbdcomment" onChange={this.handleChange}/>
                <button type="submit">Write</button>
            </form>
        </div>
    )
}
