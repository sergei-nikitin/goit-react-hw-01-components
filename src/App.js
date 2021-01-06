import UserProfile from "./components/UserProfile/UserProfile";
import user from "./user.json";
import Statistics from "./components/UploadStats/Statistics";
import statatisticalAray from "./statistical-data.json";
import UploadStats from "./components/UploadStats/UploadStats";
import FriendsList from "./components/Friends/FriendsList";
import friends from "./friends.json";
import TransactionHistory from "./components/Transactions/TransactionHistory";
import transactions from "./transactions.json";

export default function App() {
  return (
    <div>
      <UserProfile
        avatar={user.avatar}
        tag={user.tag}
        location={user.location}
        name={user.name}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />

      <UploadStats title="Upload stats">
        {statatisticalAray.map((s) => (
          <Statistics key={s.id} label={s.label} percentage={s.percentage} />
        ))}
      </UploadStats>

      <FriendsList items={friends} />

      <TransactionHistory items={transactions} />
    </div>
  );
}
