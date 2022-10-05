interface BannerProps {
  bannerUrl: string;
  title: string;
  adsCount: number;
}

export default function GameBanner({ title, bannerUrl, adsCount }: BannerProps) {
  return (
    <a href="" className="relative rounded-lg overflow-hidden">
      <img src={bannerUrl} alt="" />
      <div className="bg-card-gradient absolute bottom-0 w-full p-4">
        <strong className="block font-bold text-white">{title}</strong>
        <span className="block text-zinc-300">{`${adsCount} anúncio(s)`}</span>
      </div>
    </a>
  );
}