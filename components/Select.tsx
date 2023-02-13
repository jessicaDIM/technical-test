import { Label } from './Label';

interface IProps extends React.ComponentProps<'select'> {
  label: string;
  id: string;
  placeholder: string;
  options: { label: string; value: string }[];
  classnames?: string;
}

export const Select: React.FunctionComponent<IProps> = ({ label, id, placeholder, options, classnames, ...selectProps }) => {
  return (
    <select
      name={id}
      id={id}
      className={`p-3.5 rounded border-lightGrey border-solid border-2 text-grey text-text font-light ${classnames}`}
      {...selectProps}
    >
      <option value='' selected>
        {placeholder}
      </option>
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
