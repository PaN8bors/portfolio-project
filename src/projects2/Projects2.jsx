import ProfileHeader2 from './ProfileHeader2';
import ProjectPage2 from './ProjectPage2';
import PageNumber from './PageNumber2';

export default function Profile() {
  return (
      <div className='row4'>
        <div className='column'>
          <ProfileHeader2></ProfileHeader2>
        </div>
            <div className='column2'>
              <PageNumber></PageNumber>
            </div>
        <div className='row2'>
          <ProjectPage2></ProjectPage2>
        </div>
      </div>
  );
}