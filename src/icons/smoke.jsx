import icon from '../images/smoke.png';

import '../iconPlate.css';

function IconPlate() {
  return (
    <div className="outer">
      <img className="inImage" src={icon} alt="not found" />
    </div>
  );
}

export default IconPlate;