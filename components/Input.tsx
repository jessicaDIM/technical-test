import { Label } from './Label';

interface IProps extends React.ComponentProps<'input'> {
  label: string;
  id: string;
  classnames?: string;
  register: any;
}

export const Input: React.FunctionComponent<IProps> = ({ label, id, classnames, register, ...inputProps }) => {
  return (
    <div className='flex flex-col'>
      <Label label={label} htmlFor={id} />
      <input id={id} className={`p-3.5 rounded border-lightGrey border-solid border-2 text-grey text-text font-light ${classnames}`} {...inputProps} />
    </div>
  );
};
