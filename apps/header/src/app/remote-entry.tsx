import { HeaderProps } from '@angular-with-react-micro-frontends-example/shared/data-access-header';
import Main from '@angular-with-react-micro-frontends-example/header/feature-main';

const RemoteEntry = (props: HeaderProps) => {
  return <Main {...props} />;
};

export default RemoteEntry;
