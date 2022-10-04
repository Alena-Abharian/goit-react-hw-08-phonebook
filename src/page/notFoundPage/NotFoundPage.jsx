import { FcFinePrint } from 'react-icons/fc';
import s from './NotFoundPage.module.css'

const NotFoundPage = () => {
  return (
    <div className={s.wrap}>
      <h1 style={{ marginBottom: '20px' }}>404 Sorry, page not found</h1>
      <FcFinePrint size='100px' />
    </div>
  );
};

export default NotFoundPage;
