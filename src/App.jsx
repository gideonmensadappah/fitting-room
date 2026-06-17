import { useSelector } from 'react-redux';
import FittingRoomList from './components/FittingRoomList';
import ProductDetail from './components/ProductDetail';

export default function App() {
  const screen = useSelector((state) => state.fittingRoom.screen);

  return (
  
        <div className="tablet-screen">
          <StatusBar />
          {screen === 'detail' ? <ProductDetail /> : <FittingRoomList />}
        </div>
   
  );
}

function StatusBar() {
  return (
    <div className="status-bar">
      <span>9:41 AM</span>
      <span className="tablet-label">FITTING ROOM TABLET</span>
      <span>Wi‑Fi · 100%</span>
    </div>
  );
}
