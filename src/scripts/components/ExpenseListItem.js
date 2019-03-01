import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ( {id, description, amount, createdAt} ) => (
  <div>
    <Link className="list-item" to={`/edit/${id}`}>
      <div>
        <h3 className="list-item__title">{description}</h3>
        <p className="list-item__sub-title">{moment(createdAt).format('MMMM Do, YYYY')}</p>
      </div>      
      <h3 className="list-item__data">
        {numeral(amount).format('($0,0)')}
      </h3>
    </Link>

  </div>
);

export default ExpenseListItem;
