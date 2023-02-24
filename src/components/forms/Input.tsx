import {useState} from "react";

const Input = ({
  name,
  placeholder,
  type,
  value,
}: {
  name: string;
  placeholder?: string;
  type?: string;
  value?: string;
}): JSX.Element => {
  const [val, setVal] = useState(value);

  return (
    <div className={type === "hidden" ? "hidden" : "block"}>
      <label className="label">
        <span className="label-text">{placeholder}</span>
        <span className="label-text-alt"> </span>
      </label>
      <input
        type={type || "text"}
        placeholder={placeholder}
        className="inputx w-full max-w-md"
        name={name}
        value={val}
        onChange={(e): void => setVal(e.target.value)}
      />
      <label className="label">
        <span className="label-text-alt" />
        <span className="label-text-alt" />
      </label>
    </div>
  );
};
export default Input;
