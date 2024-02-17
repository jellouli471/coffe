import "./cartChop.css";

const CartChop = () => {
  return (
    
    <div className="forshop">
      <div className="plplplpl">
      <div className="order-chois">
        <div className="cardOrder">
          <div className="namecardor">
            <h1>Cart</h1>
          </div>
          <div className="idorder">
            <h3>Order #321</h3>
          </div>
        </div>
        <div className="btn-order">
          <button>Delivery</button>
          <button>Dine in</button>
          <button>Take away</button>
        </div>
      </div>
      <div className="dilvery-cont">
        <div className="card-sel">
          <div className="coverph">
            <div className="imgsel">
              <img
                src="https://i.ibb.co/k9G90Nt/Screenshot-2024-02-16-001305-removebg-preview.png"
                alt=""
              />
            </div>
          </div>
          <div className="detalsdel">
            <div className="namepr">
              <h2>Cappucino</h2>
              <div className="sizepr">
                <span>Small 200g</span>
              </div>
            </div>
            <div className="pricedet-cont">
              <div className="pricepee">
                <span>$14,94</span>
              </div>
              <div className="countpr">
                <div className="na9is">
                  <span>-</span>
                </div>
                <div className="natija">
                  <span>3</span>
                </div>
                <div className="za2id">
                  <span>+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="total-btn-ord">
        <div className="itemco">
          <div className="itemco-items">
            <div className="nameitems">
              <h3>items</h3>
            </div>
            <div className="total-items">
              <span>$ 20.92</span>
            </div>
          </div>
          <div className="disc">
          <div className="nameitems">
            <h3>Discounts</h3>
          </div>
          <div className="total-items">
            <span>$ -3.00</span>
          </div>
          </div>
        </div>
        <div className="item-total">
          <div className="totalNamme">
            <h3>Total</h3>
          </div>
          <div className="totalnumber">
            <span>$ 17.92</span>
          </div>
        </div>
        <div className="itm-btn">
          <button>Place an order</button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default CartChop;
