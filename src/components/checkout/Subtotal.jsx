import React from 'react';
import CurrencyFormat from 'react-currency-format';
import './Subtotal.css';
import { useStateValue } from '../../StateProvider';
import { getBasketTotal } from '../../reducer';
import { useHistory } from 'react-router-dom';

function Subtotal() {
  const history = useHistory();

  const { basket } = useStateValue()[0];

  return (
    <div className="subtotal flex__col">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p className="subtotal__value">
              Subtotal ({basket?.length} items): <strong>{value}</strong>
            </p>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'XAF'}
      />

      <button className="btn" onClick={(event) => history.push('/payment')}>
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Subtotal;
