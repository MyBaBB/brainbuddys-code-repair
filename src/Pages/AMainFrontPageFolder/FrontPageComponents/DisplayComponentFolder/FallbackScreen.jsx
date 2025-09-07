// FallbackLoader.jsx
import './IDisplayComponent.css';

export default function FallbackLoader() {
  return (
    <div className="fallback-container">
      <div className="glow-ring">
        <div className="ship-core"></div>
      </div>
      <p className="loading-text text-white z-[5000]">Assembling your experience...</p>
    </div>
  );
}
