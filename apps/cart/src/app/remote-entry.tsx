import { random } from '@angular-with-react-micro-frontends-example/shared/data-access-products';

const RemoteEntry = () => {
  return (
    <div>
      <h1>Cart: {random}</h1>
    </div>
  );
};

export default RemoteEntry;
