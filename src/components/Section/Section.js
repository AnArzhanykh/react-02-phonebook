import PropTypes from 'prop-types'

const Section =(props)=>{
    return(
        <div>
            {props.children}
        </div>
    )
}

Section.propTypes = {
    children: PropTypes.array.isRequired,
}
export default Section