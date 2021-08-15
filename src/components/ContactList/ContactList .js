import PropTypes from 'prop-types'

const ContactList = ({visibleName, onClick}) =>{

    return(
    <ul>
        {visibleName.map(({name, id, number})=><li key={id}>{name}:{number} <button onClick={()=>onClick(id)}>Delete</button> </li>)}
    </ul>
    )
}


ContactList.propTypes = {
    visibleName: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired,
    // visibleName: PropTypes.shape(
    //         {
    //             id: PropTypes.string.isRequired,
    //             name:  PropTypes.string.isRequired,
    //             number: PropTypes.string.isRequired,
    //         }    
    // ).isRequired,
}

export default ContactList