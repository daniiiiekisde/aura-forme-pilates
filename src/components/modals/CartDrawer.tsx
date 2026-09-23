import React from 'react';
import { X, Trash2, ArrowRight } from 'lucide-react';
import { Product } from '../../data/productsData';
import { MagneticBtn } from '../common/MagneticBtn';

export interface CartItem extends Product {
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onRemoveItem: (id: string) => void;
  onCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onRemoveItem,
  onCheckout
}) => {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      <div
        className={`cart-drawer-overlay ${isOpen ? 'active' : ''}`}
        onClick={onClose}
      />
      <div className={`cart-drawer ${isOpen ? 'active' : ''}`}>
        <div className="cart-header">
          <h3>Tu Cesta de Bienestar</h3>
          <button
            onClick={onClose}
            className="cart-close-btn"
            aria-label="Cerrar cesta"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        <div className="cart-items-wrap">
          {cart.length === 0 ? (
            <p className="cart-empty-msg">Tu cesta de compras está vacía.</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="cart-item-row">
                <img src={item.img} alt={item.name} className="cart-item-img" />
                <div className="cart-item-details">
                  <h4>{item.name}</h4>
                  <span>{item.quantity} x {item.price}€</span>
                </div>
                <button
                  onClick={() => onRemoveItem(item.id)}
                  className="cart-item-remove"
                  aria-label={`Eliminar ${item.name}`}
                >
                  <Trash2 size={16} strokeWidth={1.5} />
                </button>
              </div>
            ))
          )}
        </div>

        <div className="cart-footer">
          <div className="cart-subtotal-row">
            <span>Subtotal</span>
            <span>{subtotal.toFixed(2)}€</span>
          </div>

          <MagneticBtn
            onClick={onCheckout}
            className="btn btn-gold"
            style={{ width: '100%' }}
            disabled={cart.length === 0}
          >
            <span>Tramitar Pedido Privado</span>
            <ArrowRight size={15} strokeWidth={1.5} />
          </MagneticBtn>
        </div>
      </div>
    </>
  );
};
