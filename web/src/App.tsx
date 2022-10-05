import { useEffect, useState } from 'react';
import CreateAdBanner from './components/CreateAdBanner/CreateAdBanner';
import GameBanner from './components/GameBanner';
import './styles/main.css';

interface Game {
 id: string;
 title: string;
 bannerUrl: string;
 _count: {
  ads: number
 }
}

export default function App() {
  const [games, setGames] = useState<Game[]>([]);
  console.log(games);

  useEffect(() => {
    fetch('http://localhost:3333/games/').then(res => res.json()).then(data => setGames(data));
  }, []);

  return (
    <div className="max-w-7xl m-auto flex flex-col items-center my-20">
      <img src="/logo.png" alt="logo" />
      <h1 className="text-6xl text-white font-black mt-20">
        Seu
        {' '}
        <span className="bg-nwl-gradient bg-clip-text text-transparent">duo</span>
        {' '}
        está aqui.
      </h1>
      <div className="grid grid-cols-6 gap-6 mt-16">
        {
          games.map(({ id, title, bannerUrl, _count}) => (
            <GameBanner key={id} title={title} bannerUrl={bannerUrl} adsCount={_count.ads} />
          ))
        }
      </div>
      <CreateAdBanner />
    </div>
  );
}
