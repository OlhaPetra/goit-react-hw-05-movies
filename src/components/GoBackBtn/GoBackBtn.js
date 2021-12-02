import { Link, useLocation } from 'react-router-dom';
import './GoBackBtn.css';

function GoBackBtn() {
  const location = useLocation();
  const pathname = location.state?.from?.pathname;
  const search = location.state?.from?.search;

  return (
    <Link to={pathname ? `${pathname}${search}` : '/'} className="btnBack">
      Go back
    </Link>
  );
}

export default GoBackBtn;
