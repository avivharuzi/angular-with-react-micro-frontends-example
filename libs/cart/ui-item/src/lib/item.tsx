import './item.module.scss';

export interface ItemProps {
  image: string;
  title: string;
  quantity: number;
  price: number;
  itemRemoved: () => void;
}

export const Item = (props: ItemProps): JSX.Element => {
  return (
    <div className="col-12 my-3">
      <div className="row">
        <div className="col-6">
          <div className="d-flex align-items-center">
            <img
              className="me-5"
              height="100px"
              src={props.image}
              alt={props.title}
            />
            <p className="text-truncate m-0">{props.title}</p>
          </div>
        </div>
        <div className="col-2 align-self-center text-muted">
          ${props.price * props.quantity}
        </div>
        <div className="col-2 align-self-center">{props.quantity}</div>
        <div className="col-2 align-self-center">
          <button className="btn btn-link" onClick={() => props.itemRemoved()}>
            <img alt="Trash" src="assets/icons/trash.svg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
