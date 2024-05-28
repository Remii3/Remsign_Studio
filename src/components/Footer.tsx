import { Separator } from "./ui/separator";

const Footer = () => {
  return (
    <footer className="pt-12 pb-16 bg-gradient-to-b from-white to-sky-500/10">
      <div className="max-w-screen-2xl mx-auto flex flex-col items-center gap-8">
        <h2 className="text-xl">Remsign Studio</h2>
        <Separator />
        <span className="text-zinc-800">
          Remsign 2024 © Wszystkie prawa zastrzeżone.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
