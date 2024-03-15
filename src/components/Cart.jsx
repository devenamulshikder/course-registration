/* eslint-disable react/prop-types */
const Cart = ({carts}) => {
  return (
    <div className="card bg-base-100 shadow-2xl ml-5">
      <div className="p-4">
        <div>
          <h3>Credit Hour Remaining {carts.length} hr </h3>
        </div>
        <div className="divider"></div>
        <div>
          <h4>Course Name</h4>
          <div>
            <ul>
              {carts.map((c) => (
                <li key={c.id}>{c.name}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="divider"></div>
        <div>Total Credit Hour: {carts.reduce((p, c) => p + c.credit, 0)}</div>
        <div className="divider"></div>
        <div>Total Price: {carts.reduce((p, c) => p + c.price, 0)} USD</div>
        {/* <div className="divider"></div> */}
      </div>
    </div>
  );
};

export default Cart;
