import React from 'react'
import PropTypes from 'prop-types'

function Skill({url}) {
    return (
        <div>
            <img alt={"Crop"} src={url}/>
        </div>
    )
}
Skill.propTypes = {
    url: PropTypes.string.isRequired
}

export default Skill