import Header from "@/components/Header";
import Benefits from "@/components/Benefits";
import FeedbackCarousel from "@/components/FeedbackCarousel";
import AudienceLab from "@/components/AudienceLab"; 

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center px-4 py-6 max-w-5xl mx-auto">
      <Header />
      <Benefits />
      <FeedbackCarousel />
      <AudienceLab />
      
    </main>
  );
}