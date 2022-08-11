import { UserProfile, SongList, MusicBox } from '@components';

const MusicPlayer = () => (
  <div className="flex flex-1 flex-col w-[100%] items-center">
    <UserProfile />
    <MusicBox />
    <SongList />
  </div>
);

export default MusicPlayer;
