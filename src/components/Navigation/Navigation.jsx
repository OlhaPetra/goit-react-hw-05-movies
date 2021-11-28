import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav>
      <NavLink to="/" className={({isActive})=> 'link ' + (isActive? 'active': '')} >Home</NavLink>
      <NavLink to="/movies" className={({isActive})=> 'link ' + (isActive? 'active': '')}>Movies</NavLink>
    </nav>
  );
};
export default Navigation;
