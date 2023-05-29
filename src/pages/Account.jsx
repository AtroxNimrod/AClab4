import React from 'react';
import { useParams } from 'react-router-dom';

const Account = () => {
  let params = useParams();

  return (
    <div>
      <h1>Account Item information</h1>
      <p>AccountId: {params.accountId}</p>
      {/* <div className="account">
        <div className="account__content">
            <strong>{props.account.id}. {props.account.title}</strong>
            <div>
                {props.account.balance} {props.account.currency}
            </div>
        </div>
        <div className="account__btns">
            <Button onClick={() => navigate(`/accounts/${props.account.id}`)}>Details</Button>
        </div>
      </div> */}
    </div>
  );
};

export default Account;