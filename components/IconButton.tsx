import { PropsWithChildren } from 'react';

interface IProps extends React.ComponentProps<'button'>{
  classnames?: string;
  selected?: boolean;
}

export const IconButton: React.FunctionComponent<PropsWithChildren<IProps>> = ({classnames, selected = false, children }) => {
  return (
    <button className={`w-12 h-12 my-6 flex justify-center items-center rounded-xl ${selected ? 'bg-blue' : 'bg-grey'} ${classnames}`}>
      {children}
    </button>
  );
};
