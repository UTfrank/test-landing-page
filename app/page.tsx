import Features from "@/components/layouts/Features";
import Footer from "@/components/layouts/Footer";
import GetStarted from "@/components/layouts/GetStarted";
import Header from "@/components/layouts/Header";
import Statistics from "@/components/layouts/Statistics";
import WhyChoose from "@/components/layouts/WhyChoose";

export default function Home() {
  return (
    <main className="flex flex-col w-full h-auto">
      <Header />
      <WhyChoose />
      <Features />
      <Statistics />
      <GetStarted />
      <Footer />
    </main>
  );
}
