import Features from "@/components/layouts/Features";
import Header from "@/components/layouts/Header";
import WhyChoose from "@/components/layouts/WhyChoose";

export default function Home() {
  return (
    <main className="flex flex-col w-full h-auto">
      <Header />
      <WhyChoose />
      <Features />
    </main>
  );
}
