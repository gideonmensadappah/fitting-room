export default function ItemCard({ item, updated, onClick }) {
  return (
    <button className="item-card" onClick={onClick}>
      <img src={item.image} alt={item.name} />
      <div className="item-info">
        <h2>{item.name}</h2>
        <p className={updated ? 'updated-selection' : ''}>
          {item.selectedColor} / {item.selectedSize}
        </p>
        <p>${item.price.toFixed(2)}</p>
        <p>Qty: {item.qty}</p>
        <p className="status-dot">● {item.status}</p>
        {updated && <span className="updated-pill">UPDATED</span>}
      </div>
      <span className="card-arrow">›</span>
    </button>
  );
}
