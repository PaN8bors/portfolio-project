import ProfileHeader from './ProfileHeader';
import ProjectPage from './ProjectPage';
import PageNmber from './PageNmber';

export default function Profile() {
  return (
      <div className='row4'>
        <div className='column'>
          <ProfileHeader></ProfileHeader>
        </div>
            <div className='column2'>
              <PageNmber></PageNmber>
            </div>
        <div className='row2'>
          <ProjectPage></ProjectPage>
        </div>
      </div>
  );
}