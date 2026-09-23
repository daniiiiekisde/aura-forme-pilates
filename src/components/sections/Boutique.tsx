import React from 'react';
import { Sparkles, Plus } from 'lucide-react';
import { PRODUCTS_DATA, Product } from '../../data/productsData';

interface BoutiqueProps {
  onAddToCart: (product: Product) => void;
}

export const Boutique: React.FC<BoutiqueProps> = ({ onAddToCart }) => {
  return (
    <section className="boutique-section" id="boutique">
      <div className="container">
        <div className="text-center">
          <div className="section-tag">
            <Sparkles size={12} strokeWidth={1.5} className="tag-sparkle" />
            <span>Tienda Exclusiva</span>
          </div>
          <h2 className="section-title">Esenciales del Atelier</h2>
          <p className="section-subtitle">
            Piezas curadas con esmero para elevar tu práctica diaria en el estudio y en casa.
          </p>
        </div>

        <div className="boutique-grid">
          {PRODUCTS_DATA.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-thumb">
                <img src={product.img} alt={product.name} loading="lazy" />
                <span className="product-badge">{product.badge}</span>
              </div>

              <div className="product-details">
                <div>
                  <h4>{product.name}</h4>
                  <p>{product.desc}</p>
                </div>

                <div className="product-footer">
                  <span className="product-price">{product.price}€</span>
                  <button
                    onClick={() => onAddToCart(product)}
                    className="btn-add-cart"
                    aria-label={`Añadir ${product.name} a la bolsa`}
                  >
                    <Plus size={13} strokeWidth={2} style={{ display: 'inline', marginRight: '4px' }} />
                    Añadir
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
