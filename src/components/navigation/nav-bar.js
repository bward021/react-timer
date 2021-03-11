import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <NavLink to="/stopwatch">StopWatch</NavLink>
      <NavLink to="/timer">Timer</NavLink>
    </div>
  );
}
