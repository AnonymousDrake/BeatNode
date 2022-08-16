import { SongList, MusicBox } from '@components';

const MusicPlayer = () => (
  <div className="flex flex-1 flex-col items-center py-[32px]">
    <MusicBox />
    <SongList />
  </div>
);

export default MusicPlayer;
