import Product from "./Product";
import Profile from "./Profile/Profile";
import userData from "../userData.json";

// export default function App() {
//   const stats = {
//     likes: 1000,
//     views: 200,
//     followers: 120,
//   };
//   return (
//     <div>
//       <Profile
//         stats={stats}
//         tag="tag"
//         name="John"
//         location="San Francisco"
//       ></Profile>
//     </div>
//   );
// }

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
    </>
  );
};

export default App;
