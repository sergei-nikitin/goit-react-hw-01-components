import UserProfile from './components/UserProfile';
import user from './user.json';
import Statistics from './components/Statistics';
import statisticalData from './statistical-data.json';


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

        
        {statisticalData.map(data => <Statistics
  key={data.id}
  label={data.label}
  percentage={data.percentage}
            />)}
        
    </div>;
}