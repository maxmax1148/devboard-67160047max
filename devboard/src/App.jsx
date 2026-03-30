import Navbar from "./components/Navbar";
import PostCard from "./components/PostCard";

function App() {
  return (
    <div>
      <Navbar />
      <PostCard title="ทดสอบ" body="นี่คือเนื้อหา" />
    </div>
  );
}

export default App;
