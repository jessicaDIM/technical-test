interface IProps extends React.ComponentProps<'label'> {
  label: string;
  htmlFor: string;
  classnames?: string;
}

export const Label: React.FunctionComponent<IProps> = ({ label, htmlFor, classnames, ...labelProps }) => {
  return (
    <label htmlFor={htmlFor} className={`mb-2 text-smallText text-lightGrey font-semibold tracking-1 uppercase ${classnames}`} {...labelProps}>
      {label}
    </label>
  );
};
