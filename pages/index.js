import Image from "next/image";
import HeroImage from "../public/hero.webp";
import { Logo } from '../components/Logo';
import Link from "next/link";

export default function Home() {

  return (
    <div className="w-screen h-screen overflow-hidden flex justify-center items-center relative">
      <Image src={HeroImage} alt="La Bloguera" fill className="absolute" />
      <div className="relative z-10 text-white px-10 py-5 text-center max-w-screen-sm bg-slate-900/90 rounded-md backdrop-blur-sm">
        <Logo/>
        <p>
          La solución de SAAS con inteligencia artificial para generar entradas de blog optimizadas para SEO en minutos. Obtenga contenido de alta calidad sin sacrificar su tiempo.
        </p>
        <Link href="/post/new" className="btn my-2">Comienza</Link>
      </div>
    </div>
  );
}
