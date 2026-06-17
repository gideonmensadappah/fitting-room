import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { goToList, updateItemSelection } from '../features/fittingRoom/fittingRoomSlice';

export default function ProductDetail() {
  const dispatch = useDispatch();
  const { items, activeItemId } = useSelector((state) => state.fittingRoom);
  const item = useMemo(
    () => items.find((product) => product.id === activeItemId),
    [items, activeItemId]
  );

  const [selectedColor, setSelectedColor] = useState(item?.selectedColor ?? '');
  const [selectedSize, setSelectedSize] = useState(item?.selectedSize ?? '');

  if (!item) return null;

  const handleUpdate = () => {
    dispatch(
      updateItemSelection({
        id: item.id,
        color: selectedColor,
        size: selectedSize
      })
    );
  };

  return (
    <div className="screen detail-screen">
      <header className="detail-header">
        <button className="back-button" onClick={() => dispatch(goToList())}>‹ Back</button>
        <button className="icon-button" aria-label="Save item">♡</button>
      </header>

      <div className="detail-layout">
        <section className="product-preview">
          <img src={item.image} alt={item.name} />
          <div className="image-dots" aria-hidden="true">
            <span className="active" />
            <span />
            <span />
            <span />
          </div>
        </section>

        <section className="product-panel">
          <p className="eyebrow">{item.category}</p>
          <h1>{item.name}</h1>
          <p className="price">${item.price.toFixed(2)}</p>

          <div className="selection-block">
            <div className="selection-title">
              <span>Color</span>
              <strong>{selectedColor}</strong>
            </div>
            <div className="swatches">
              {item.colors.map((color) => (
                <button
                  key={color.name}
                  className={color.name === selectedColor ? 'swatch selected' : 'swatch'}
                  style={{ '--swatch-color': color.hex }}
                  aria-label={`Select ${color.name}`}
                  onClick={() => setSelectedColor(color.name)}
                />
              ))}
            </div>
          </div>

          <div className="selection-block">
            <div className="selection-title">
              <span>Size</span>
              <strong>{selectedSize}</strong>
            </div>
            <div className="size-grid">
              {item.sizes.map((size) => (
                <button
                  key={size}
                  className={size === selectedSize ? 'size-button selected' : 'size-button'}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="request-summary">
            <strong>Request from fitting room</strong>
            <p>
              Bring {item.name} in {selectedColor}, size {selectedSize}.
            </p>
          </div>

          <button className="primary-button" onClick={handleUpdate}>Update Item</button>
        </section>
      </div>
    </div>
  );
}
