// import './App.css';
import Profile from "./Profile/Profile";
import Statistics from "./Statistics/Statistics";
import FriendList from "./FriendList/FriendList";
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import user from "./user.json";
import data from "./data.json";
import friends from "./friends.json";
import transactions from "./transactions.json";

function App() {
  const isReceived = true;
  return (
    <div className="App">
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title={isReceived && "Upload stats"} stats={data} />
      <ul className="stat-list">
        {data.map((stat) => (
          // key={id},
          <li className="item">
            <span className="label">{stat.label}</span>
            <span className="percentage">{stat.percentage}</span>
          </li>
        ))}
      </ul>
      <FriendList friends={friends} />;
      <ul class="friend-list">
        {friends.map((friend) => (
          // key={friend.id}
          <li class="item">
            <span class="status">{friend.isOnline}</span>
            <img
              class="avatar"
              src={friend.avatar}
              alt="User avatar"
              width="48"
            />
            <p class="name">{friend.name}</p>
          </li>
        ))}
      </ul>
      <TransactionHistory items={transactions} />;
      {transactions.map((transaction) => (
        <table class="transaction-history">
          <thead>
            <tr>
              <th>Type </th>
              <th>Amount</th>
              <th>Currency</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Invoice {transaction.type}</td>
              <td>125 {transaction.amount}</td>
              <td>USD {transaction.currency}</td>
            </tr>
          </tbody>
        </table>
      ))}
    </div>
  );
}

export default App;
