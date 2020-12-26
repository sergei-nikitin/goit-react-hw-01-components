import UserProfile from './components/UserProfile';
import user from './user.json';
import Statistics from './components/Statistics';
import statatisticalAray from './statistical-data.json';
import Section from './components/Section'
import FriendList from './components/FriendList';
// import FriendListItem from './components/FriendListItem';
import friends from './friends.json';
import TransactionHistory from './components/TransactionHistory';
import transactions from './transactions.json';

export default function App() {
    return <div>
        <UserProfile
  avatar={user.avatar}
  tag={user.tag}
  location={user.location}
  name={user.name}
  followers={user.stats.followers}
  views={user.stats.views}
  likes={user.stats.likes}
        />

       
        <Section title="Upload stats">

            {statatisticalAray.map(s => (<Statistics
                 key={s.id}
                  label={s.label}
                percentage={s.percentage}
                />
            ))}
        </Section>

        <FriendList items={friends} />

        <TransactionHistory items={transactions} />
       
       
  
    </div>;
}