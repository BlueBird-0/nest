import React, {Component} from 'react'

class ProjectWrite extends Component {
    // var handleSubmit = (e) => {
    //     e.preventDefault()
    //     this.props.onSaveData()
    //     this.setState({})
    // }
    state = {}

    handleChange = (e) =>{
        this.setState({
            [e.target.name] : e.target.value()
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log("wowowowwo")
        this.setState({})
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input placeholder="brdtitle" name="brdtitle" />
                    <input placeholder="brdgithub" name="brdgithub" />
                    <input placeholder="brbdcomment" name="brbdcomment" />
                    <button type="submit">Write</button>
                </form>
            </div>
        )
    }
}
export default ProjectWrite
