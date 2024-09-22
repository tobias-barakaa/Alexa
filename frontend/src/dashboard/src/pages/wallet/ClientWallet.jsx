import { useGetUserTransactionsQuery } from '../../../../slices/wallet/userWalletApiSlice';
import './ClientWallet.css';

const ClientWallet = () => {
  const { data: transactionsDetails, error, isLoading } = useGetUserTransactionsQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching data</div>;
  }

  // Check if transactionsDetails is an array and take the first element if it exists
  const userTransaction = transactionsDetails && transactionsDetails.length > 0 ? transactionsDetails[0] : null;

  if (!userTransaction) {
    return <div>No transactions found</div>;
  }

  // Replace dummy writerData with real data
  const balance = userTransaction.paypal_amount; // Assuming you want to show PayPal amount as balance
  const username = userTransaction.username || "N/A";
  const email = userTransaction.payer_email || "N/A";
  const profile_pic = userTransaction?.profile_pic;
  console.log(profile_pic, 'profile');
  
  const handleDeposit = () => {
    alert("Deposit button clicked!");  // Replace with actual deposit logic
  };

  return (
    <div className="wallet-container">
      {/* User Info Section */}
      <div className="wallet-card user-info">
        <div className="user-details">
          <img src={profile_pic} alt={username} className="user-avatar" />
          <div>
            <h2>{username}</h2>
            <p>@{username}</p>
            <p>{email}</p>
          </div>
        </div>
        <div className="balance-info">
          <h3>${parseFloat(balance).toFixed(2)}</h3>
          <p>Current Balance</p>
          <button className="deposit-button" onClick={handleDeposit}>
            Deposit
          </button>
        </div>
      </div>

      {/* User Stats Section */}
      <div className="wallet-card stats">
        <div className="stat-item">
          <h4>{transactionsDetails.length}</h4> {/* Number of transactions */}
          <p>Transactions Made</p>
        </div>
        <div className="stat-item">
          <h4>{parseFloat(balance).toFixed(2)}</h4>
          <p>Total Balance</p>
        </div>
        <div className="stat-item">
          <h4>${(parseFloat(balance) / transactionsDetails.length).toFixed(2)}</h4> {/* Avg per transaction */}
          <p>Avg. Earnings/Transaction</p>
        </div>
      </div>

      {/* Transactions Section */}
      <div className="wallet-card transactions">
        <h3>Recent Transactions</h3>
        <ul>
          {transactionsDetails.map((transaction) => (
            <li key={transaction.id} className="transaction-item">
              <div>
                <p className="transaction-description">
                  {transaction.description || `Transaction ID: ${transaction.paypal_transaction_id}`}
                </p>
                <p className="transaction-date">{new Date(transaction.created_at).toLocaleDateString()}</p>
              </div>
              <div>
                <span className="transaction-amount">
                  ${parseFloat(transaction.paypal_amount).toFixed(2)}
                </span>
                <span className={`transaction-status ${transaction.status.toLowerCase()}`}>
                  {transaction.status}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ClientWallet;
