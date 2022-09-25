import { MagnifyingGlassPlus } from 'phosphor-react';
import './styles/main.css';

export default function App() {
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
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/image-1.png" alt="" />
          <div className='bg-card-gradient absolute bottom-0 w-full p-4'>
            <strong className='block font-bold text-white'>League of Legends</strong>
            <span className='block text-zinc-300'>4 anúncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/image-2.png" alt="" />
          <div className='bg-card-gradient absolute bottom-0 w-full p-4'>
            <strong className='block font-bold text-white'>League of Legends</strong>
            <span className='block text-zinc-300'>4 anúncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/image-3.png" alt="" />
          <div className='bg-card-gradient absolute bottom-0 w-full p-4'>
            <strong className='block font-bold text-white'>League of Legends</strong>
            <span className='block text-zinc-300'>4 anúncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/image-4.png" alt="" />
          <div className='bg-card-gradient absolute bottom-0 w-full p-4'>
            <strong className='block font-bold text-white'>League of Legends</strong>
            <span className='block text-zinc-300'>4 anúncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/image-5.png" alt="" />
          <div className='bg-card-gradient absolute bottom-0 w-full p-4'>
            <strong className='block font-bold text-white'>League of Legends</strong>
            <span className='block text-zinc-300'>4 anúncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/image-6.png" alt="" />
          <div className='bg-card-gradient absolute bottom-0 w-full p-4'>
            <strong className='block font-bold text-white'>League of Legends</strong>
            <span className='block text-zinc-300'>4 anúncios</span>
          </div>
        </a>
      </div>
      <div className="pt-1 bg-nwl-gradient self-stretch rounded-lg mt-8 overflow-hidden">
        <div className="flex justify-between items-center px-8 py-6 bg-[#2A2634]">
          <div>
            <strong className="block text-2xl text-white font-black">Não encontrou seu duo?</strong>
            <span className="block text-zinc-400">Publique um anúncio para encontrar novos players!</span>
          </div>
          <button type="button" className="py-3 px-4 text-white bg-violet-500 rounded-lg flex items-center gap-3">
            <MagnifyingGlassPlus size={23} />
            Publicar anúncio
          </button>
        </div>
      </div>
    </div>
  );
}
