import Primary from "@/components/sections/Primary";

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="h-screen w-full relative max-w-screen-2xl rounded-3xl mx-auto mt-16 pt-80 px-32 flex gap-16">
        <div className="bg-gradient-to-tr from-blue-200 to-pink-100 w-full animate-breathing-custom absolute h-full inset-0 -z-10 rounded-3xl"></div>
        <Primary />
      </section>
      <section id="o-nas" className="h-screen w-full"></section>
      <section id="oferta" className="h-screen bg-red-400 w-full"></section>
      <section
        id="standard-stron"
        className="h-screen bg-blue-400 w-full"
      ></section>
      <section id="faq" className="h-screen bg-green-400 w-full"></section>
      <section id="kontakt" className="h-screen  w-full"></section>
    </main>
  );
}
