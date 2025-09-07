// FallbackLoader.jsx
import './IDisplayComponent.css';

export default function FallbackLoader() {
  return (
    <div className="fallback-container">
      <div className="glow-ring">
        <div className="ship-core"></div>
      </div>
      <p className="loading-text text-white z-5 font-PTSerif-Bold tex-2xl">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Loading...&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
    </div>
  );
}
