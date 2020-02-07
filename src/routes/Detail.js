import React from 'react'

class Detail extends React.Component{
    componentDidMount() {
        console.log(this.props)
        const { location, history } = this.props
        if(location.state === undefined){
            history.push("/")
        }
    }
    render() {
        return (
            <div>Hello</div>
        )
    }
}
export default Detail