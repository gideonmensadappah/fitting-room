import { useDispatch, useSelector } from 'react-redux';
import { hideConfirmation, openItem } from '../features/fittingRoom/fittingRoomSlice';
import ItemCard from './ItemCard';

export default function FittingRoomList() {
  const dispatch = useDispatch();
  const { items, confirmationVisible, lastUpdatedItemId } = useSelector(
    (state) => state.fittingRoom
  );

  return (
    <div className="screen list-screen">
      <header className="page-header">
        <div>
          <h1>My Fitting Room</h1>
          <p>{items.length} items in your fitting room</p>
        </div>
        <button className="icon-button" aria-label="Call fitting room assistant">🔔</button>
      </header>

      {confirmationVisible && (
        <div className="success-banner">
          <div className="success-icon">✓</div>
          <div>
            <strong>Updated item added to fitting room</strong>
            <p>We’ll bring it to you shortly.</p>
          </div>
          <button onClick={() => dispatch(hideConfirmation())} aria-label="Close update message">
            ×
          </button>
        </div>
      )}

      <button className="service-card" onClick={() => dispatch(openItem(items[0].id))}>
        <span className="service-icon">♧</span>
        <span>
          <strong>Need a different size or color?</strong>
          <small>Choose an item and our team will bring the update to your room.</small>
        </span>
        <span className="chevron">›</span>
      </button>

      <div className="items-grid">
        {items.map((item) => (
          <ItemCard
            key={item.id}
            item={item}
            updated={item.id === lastUpdatedItemId && confirmationVisible}
            onClick={() => dispatch(openItem(item.id))}
          />
        ))}
      </div>

      <footer className="room-note">
        <span>🛎️</span>
        <p>
          <strong>Our team will bring your updated items to you.</strong>
          <br />
          Please stay in the fitting room.
        </p>
      </footer>
    </div>
  );
}
