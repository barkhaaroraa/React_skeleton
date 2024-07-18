import "./drawer.css";
import { Outlet, Link } from "react-router-dom";

const Drawer = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/input">Input</Link>
          </li>
          <li>
            <Link to="/report">Report</Link>
          </li>
          <li>
            <Link to="/analysis">Analysis</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};
export default Drawer;
