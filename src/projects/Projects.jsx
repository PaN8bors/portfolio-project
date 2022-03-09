import ProfileHeader from './ProfileHeader';
import ProjectPage from './ProjectPage';
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
          <ProjectPage></ProjectPage>
        </div>
      </div>
  );
}