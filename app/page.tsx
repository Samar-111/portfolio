import BackgroundCanvas from '@/components/BackgroundCanvas';
import Sidebar from '@/components/Sidebar';
import MainContent from '@/components/MainContent';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#050811] text-white selection:bg-cyan-400 selection:text-slate-950 overflow-hidden py-8 sm:py-12">
      <BackgroundCanvas />

      <div className="fixed inset-0 bg-grid-pattern opacity-30 pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4 sticky top-8">
            <Sidebar />
          </div>

          <div className="lg:col-span-8">
            <MainContent />
          </div>
        </div>
      </div>
    </main>
  );
}
