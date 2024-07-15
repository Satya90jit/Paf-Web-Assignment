import { useField } from "formik";

const TextInput = ({ label, ...props }: any) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col mb-4">
      <label htmlFor={props.id || props.name} className="mb-2">
        {label}
      </label>
      <input className="p-2 border rounded" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="text-red-500">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default TextInput;
