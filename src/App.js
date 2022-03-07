import CoverHeader from './CoverHeader';
import NameClass from './NameClass';
import Menu from './Menu';
import SocMedia from './SocMedia';
import ProfileHeader from './ProfileHeader';
import ProfilePage from './ProfilePage';
import ProfPicture from './ProfPicture';
import PageNumber from './PageNumber';
import './App.css';

function App() {
  return (
    <div className='wrapper'>
      <div className='row'>
        <CoverHeader></CoverHeader>
      </div>
{/* end of row one */}

      <div className='row2'>
        <div className='column'>
          <NameClass></NameClass>
        </div>
        <div className='column2'>
          <Menu></Menu>
        </div>
      </div>
{/* end of row two */}

      <div className='row2'>
        <div className='column'>
          <SocMedia></SocMedia>
        </div>
        <div className='column3'>
        </div>
      </div>
{/* end of row 3  and cover page*/}

      <div className='row4'>
        <div className='column'>
          <ProfileHeader></ProfileHeader>
        </div>
            <div className='column2'>
              <PageNumber></PageNumber>
            </div>
        <div className='row2'>
          <ProfilePage></ProfilePage>
        </div>
        <div className='row3'>
          <ProfPicture></ProfPicture>
        </div>
      </div>

    </div>

  );
}

export default App;
