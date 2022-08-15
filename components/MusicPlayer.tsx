import { UserProfile, SongList, MusicBox } from '@components';

const MusicPlayer = () => (
  <div className="flex flex-1 flex-col items-center py-[32px]">
    <UserProfile />
    <MusicBox />
    <SongList />
  </div>
);

export default MusicPlayer;
