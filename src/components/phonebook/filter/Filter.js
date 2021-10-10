import s from "./Filter.module.css";
const filter = ({ value, onChange }) => {
  return (
    <label htmlFor="">
      <h3 className={s.title}>Find contact by name</h3>
      <input
        className={s.input}
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

export default filter;
