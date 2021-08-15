import PropTypes from 'prop-types'

const Filter = ({onChange}) =>{
    return(
        <div>
            <p>find contacts by name</p>
            <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                required
                onChange={onChange}
            />
        </div>
    )
}

Filter.propTypes = {
    onChange: PropTypes.func.isRequired,
}

export default Filter 