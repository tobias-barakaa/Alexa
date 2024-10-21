import React from 'react';
import './WriterPayment.css';  // We'll define the styles below

const WriterPayment = () => {
  const payments = [
    {
      id: 1,
      date: '2024-10-15',
      amount: 1250.00,
      status: 'Paid',
      description: 'Article: "10 Tips for Better Writing"',
      paymentMethod: 'Direct Deposit'
    },
    {
      id: 2,
      date: '2024-10-12',
      amount: 850.00,
      status: 'Processing',
      description: 'Technical Documentation Project',
      paymentMethod: 'PayPal'
    },
    {
      id: 3,
      date: '2024-10-08',
      amount: 675.00,
      status: 'Paid',
      description: 'Blog Series: "Content Strategy"',
      paymentMethod: 'Bank Transfer'
    },
    {
      id: 4,
      date: '2024-10-05',
      amount: 450.00,
      status: 'Pending',
      description: 'Product Description Writing',
      paymentMethod: 'Direct Deposit'
    }
  ];

  return (
    <div className="payments-container">
      <h1 className="payments-title">Payments</h1>
      
      <div className="summary-grid">
        <div className="summary-card">
          <h3>Total Earned</h3>
          <p className="amount earned">$3,225.00</p>
        </div>
        <div className="summary-card">
          <h3>Pending Payments</h3>
          <p className="amount pending">$450.00</p>
        </div>
        <div className="summary-card">
          <h3>Processing</h3>
          <p className="amount processing">$850.00</p>
        </div>
      </div>

      <div className="table-container">
        <table className="payments-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Amount</th>
              <th>Method</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment) => (
              <tr key={payment.id}>
                <td>{new Date(payment.date).toLocaleDateString()}</td>
                <td>{payment.description}</td>
                <td>${payment.amount.toFixed(2)}</td>
                <td>{payment.paymentMethod}</td>
                <td>
                  <span className={`status-badge ${payment.status.toLowerCase()}`}>
                    {payment.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// CSS styles
const styles = `
.payments-container {
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
}

.payments-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 24px;
  color: #333;
}

.summary-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 32px;
}

.summary-card {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.summary-card h3 {
  font-size: 14px;
  color: #666;
  margin: 0 0 8px 0;
}

.amount {
  font-size: 24px;
  font-weight: bold;
  margin: 0;
}

.amount.earned { color: #10B981; }
.amount.pending { color: #F59E0B; }
.amount.processing { color: #3B82F6; }

.table-container {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.payments-table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
}

.payments-table th {
  background: #F9FAFB;
  padding: 12px 24px;
  font-size: 14px;
  font-weight: 600;
  color: #666;
  border-bottom: 1px solid #E5E7EB;
}

.payments-table td {
  padding: 16px 24px;
  font-size: 14px;
  color: #333;
  border-bottom: 1px solid #E5E7EB;
}

.status-badge {
  display: inline-block;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
}

.status-badge.paid {
  background: #DEF7EC;
  color: #03543F;
}

.status-badge.processing {
  background: #DBEAFE;
  color: #1E40AF;
}

.status-badge.pending {
  background: #FEF3C7;
  color: #92400E;
}

@media (max-width: 768px) {
  .summary-grid {
    grid-template-columns: 1fr;
  }

  .payments-table {
    font-size: 12px;
  }

  .payments-table th,
  .payments-table td {
    padding: 12px;
  }
}
`;

// Create a style element and append it to the head
const styleSheet = document.createElement('style');
styleSheet.textContent = styles;
document.head.appendChild(styleSheet);

export default WriterPayment;