import React from 'react'

function ProjectWrite() {
    // var handleSubmit = (e) => {
    //     e.preventDefault()
    //     this.props.onSaveData()
    //     this.setState({})
    // }

    return (
        <div>
            {/*<form onSubmit={this.handleSubmit}>*/}
            <form>
                <input placeholder="brdtitle" name="brdtitle" />
                <input placeholder="brdgithub" name="brdgithub" />
                <input placeholder="brbdcomment" name="brbdcomment" />
                <button type="submit">Write</button>
            </form>
        </div>
    )
}
export default ProjectWrite
