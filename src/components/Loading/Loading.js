import Loader from 'react-loader-spinner';
import './Loading.css';

const Loading = () => (
  <Loader
    type="Oval"
    color="#c25555"
    height={150}
    width={150}
    className="Loader"
  />
);

export default Loading;
