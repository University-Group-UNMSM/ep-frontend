import Image from 'next/image';
import './auth-background.scss';

export default function AuthBackground({ src }: { src: string }) {
  return (
    <div className="background">
      <Image src={src} alt={src} width={100} height={100} layout="responsive"></Image>
    </div>
  );
}
