import s from "./ContactList.module.css";
export default function ContactList(prop) {
  return (
    <ul className={s.contacts}>
      {prop.data.map((contact) => {
        return (
          <li className={s.listItem} key={contact.id}>
            {contact.name}: {contact.number}
            <button
              className={s.buttom}
              type="button"
              onClick={() => {
                prop.onDeleteButton(contact.id);
              }}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}
