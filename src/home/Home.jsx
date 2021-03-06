import FolderImage from './FolderImage'
import CoverHeader from './CoverHeader';
import NameClass from './NameClass';
import Menu from './Menu';
import SocMedia from './SocMedia';

export default function Home() {
  return (
      <>
    <div>
      <FolderImage></FolderImage>
      <div className='row'>
        <CoverHeader></CoverHeader>
      </div>

      <div className='row1'>
        <div className='column'>
          <NameClass></NameClass>
        </div>
        <div className='column2'>
          <Menu></Menu>
        </div>
      </div>

      <div className='row1'>
        <div className='column'>
          <SocMedia></SocMedia>
        </div>
        <div className='column3'>
        </div>
      </div>
    </div>
    </>
  );
}
