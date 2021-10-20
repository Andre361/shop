interface CartItemProps {
  cartItem: {
    title: string;
    id: number;
    quantity: number;
    price: number;
  };
}

function CartItem({ cartItem }: CartItemProps) {
  return (
    <div className="m-2">
      <p className="text-gray-500">
        {cartItem.title}
        <span className="float-right">
          <i className="fa fa-arrow-circle-up" />{' '}
          <i className="fa fa-arrow-circle-down" />
        </span>
      </p>
      <span className="text-green-500">{cartItem.price} $ each</span>
      <span className="float-right font-thin text-gray-500">
        Quantity: {cartItem.quantity}
      </span>
    </div>
  );
}
export { CartItem };
