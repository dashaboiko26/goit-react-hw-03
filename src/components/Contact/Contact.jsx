import s from "./Contact.module.css";
import { RiPhoneFill } from "react-icons/ri";
import { MdManageAccounts } from "react-icons/md";

const Contact = ({ id, name, number, deleteContact }) => {
  return (
    <ul className={s.container}>
      <li className={s.item}>
        <span className={s.name}>
          <MdManageAccounts /> {name}:
        </span>
        <span className={s.number}>
          <RiPhoneFill /> {number}
        </span>
      </li>
      <button className={s.btn} onClick={() => deleteContact(id)}>
        Delete
      </button>
    </ul>
  );
};

export default Contact;
