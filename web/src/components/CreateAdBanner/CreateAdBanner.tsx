import { MagnifyingGlassPlus } from 'phosphor-react';

export default function CreateAdBanner() {
  return (
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
  );
}
