import PropTypes from "prop-types";
import css from "./ContactList.module.css"

const ContactList = ({ contacts, onClick }) => {

    return (
        <ul className={css.list}>
            {contacts.map(contact => (
                <li className={css.name} key={contact.id}>
                    {contact.name} - {contact.number}
                    <button className={css["btn-delete"]} type="button" onClick={() => onClick(contact.id)}>
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    );
};

ContactList.propTypes = {
contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired
        })
    ).isRequired,
    onClick: PropTypes.func.isRequired
}
export default ContactList;