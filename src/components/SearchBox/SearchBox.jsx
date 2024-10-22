import s from "./SearchBox.module.css";

const SearchBox = ({ filter, change }) => {
  return (
    <div className={s.wrapp}>
      <p className={s.text}>Find contacts by name</p>
      <input
        className={s.input}
        type="text"
        value={filter}
        onChange={change}
        placeholder="Enter name..."
      />
    </div>
  );
};

export default SearchBox;
