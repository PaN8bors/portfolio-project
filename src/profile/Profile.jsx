import ProfileHeader from './ProfileHeader';
import ProfilePage from './ProfilePage';
import ProfPicture from './ProfPicture';
import PageNumber from './PageNumber';

export default function Profile() {
  return (
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
  );
}