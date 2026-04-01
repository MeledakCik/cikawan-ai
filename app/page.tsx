"use client";
import React, { useState, useEffect } from "react";
import { 
  Menu, Plus, Terminal, Sparkles, Send, 
  Image as ImageIcon, Mic, ShieldCheck, Zap,
  Activity, ArrowRight, FileText,
  Code, Shield, Cpu as CpuIcon, X,Lock,
  Fingerprint, Database, Eye, ShieldAlert
} from "lucide-react";

const translations = {
  id: {
    landingTitle: "Arsitektur AI Masa Depan",
    landingSub: "Platform terintegrasi untuk keamanan siber dan pengembangan sistem cerdas dengan enkripsi tingkat tinggi.",
    btnTry: "Coba AI Sekarang",
    btnDoc: "Dokumentasi",
    initialize: "Inisialisasi Inti",
    logs: "Log Neural",
    greeting: "Selamat Datang,",
    subGreeting: "Bagaimana kita akan merancang",
    future: "masa depan",
    today: "hari ini?",
    placeholder: "Masukkan perintah untuk Cikawan AI...",
    execute: "Eksekusi",
    secure: "Koneksi Aman Terjalin",
    suggestions: [
      { title: "Keamanan Berlapis", desc: "Audit header Next.js" },
      { title: "Sintesis Logika", desc: "Refactor scraper Python" },
      { title: "Skrip Taktis", desc: "Logika mouse Point Blank" },
      { title: "Tur Sistem", desc: "Perencana aktivitas outdoor" },
    ]
  },
  en: {
    landingTitle: "Future AI Architecture",
    landingSub: "Integrated platform for cybersecurity and intelligent system development with high-level encryption.",
    btnTry: "Try AI Now",
    btnDoc: "Documentation",
    initialize: "Initialize Core",
    logs: "Neural Logs",
    greeting: "Greetings,",
    subGreeting: "How shall we architect the",
    future: "future",
    today: "today?",
    placeholder: "Enter command for Cikawan AI...",
    execute: "Execute",
    secure: "Secure Connection Established",
    suggestions: [
      { title: "Hardened Security", desc: "Audit Next.js headers" },
      { title: "Logic Synthesis", desc: "Refactor Python scraper" },
      { title: "Tactical Scripting", desc: "Point Blank mouse logic" },
      { title: "System Touring", desc: "Outdoor activity planner" },
    ]
  }
};

export default function CikawanArchitectUI() {
  const [view, setView] = useState<"landing" | "chat" | "docs" | "security">("landing");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [input, setInput] = useState("");
  const [isChatting, setIsChatting] = useState(false);
  const [messages, setMessages] = useState<{role: string, text: string}[]>([]);
  const [lang, setLang] = useState<"id" | "en">("id");
  
  useEffect(() => {
    const browserLang = navigator.language.split("-")[0];
    setLang(browserLang === "id" ? "id" : "en");
  }, []);

  const t = translations[lang];

  const handleExecute = () => {
    if (!input.trim()) return;
    setIsChatting(true);
    setMessages([...messages, { role: "user", text: input }]);
    setInput("");
    setTimeout(() => {
      setMessages(prev => [...prev, { role: "assistant", text: "Sistem Cikawan sedang memproses permintaan Anda secara aman..." }]);
    }, 1000);
  };
  const FloatingNavbar = () => (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl z-50 flex justify-between items-center bg-black/40 backdrop-blur-xl border border-white/10 px-8 py-4 rounded-full shadow-2xl">
      <div className="flex items-center gap-2 cursor-pointer" onClick={() => setView("landing")}>
        <div className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center font-black italic text-white shadow-[0_0_15px_rgba(6,182,212,0.5)]">C</div>
        <span className="font-bold text-xl tracking-tighter">Cikawan<span className="text-cyan-500">.AI</span></span>
      </div>
      <div className="hidden md:flex gap-10 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
        <span onClick={() => setView("landing")} className={`hover:text-white cursor-pointer transition-all ${view === 'landing' ? 'text-white border-b border-cyan-500' : ''}`}>Home</span>
        <span onClick={() => setView("docs")} className={`hover:text-white cursor-pointer transition-all ${view === 'docs' ? 'text-white border-b border-cyan-500' : ''}`}>Docs</span>
        <span onClick={() => setView("security")} className={`hover:text-white cursor-pointer transition-all ${view === 'security' ? 'text-white border-b border-cyan-500' : ''}`}>Security</span>
      </div>
      <button 
        onClick={() => setView("chat")}
        className="bg-white text-black px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-cyan-400 transition-all active:scale-95 shadow-lg"
      >
        Luncurkan AI
      </button>
    </nav>
  );
  const VisualMockup = () => (
    <div className="relative mt-24 max-w-5xl w-full mx-auto group perspective-1000 animate-in slide-in-from-bottom-12 duration-1000">
      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/50 to-blue-600/50 rounded-[40px] blur-2xl opacity-20 group-hover:opacity-40 transition duration-1000"></div>
      <div className="relative bg-[#050505] border border-white/10 rounded-[35px] overflow-hidden shadow-2xl">
        <div className="h-10 bg-white/5 border-b border-white/5 flex items-center px-6 gap-2">
          <div className="w-2 h-2 rounded-full bg-white/20"></div>
          <div className="w-2 h-2 rounded-full bg-white/20"></div>
          <div className="w-2 h-2 rounded-full bg-white/20"></div>
          <div className="flex-1 text-center text-[10px] font-bold text-white/20 uppercase tracking-[0.3em]">Cikawan Sentinel Terminal</div>
        </div>
        <div className="p-10 flex flex-col md:flex-row gap-8 items-center bg-gradient-to-br from-cyan-500/5 to-transparent">
          <div className="flex-1 space-y-6">
            <div className="h-2 w-24 bg-cyan-500/40 rounded-full"></div>
            <div className="space-y-3">
              <div className="h-2 w-full bg-white/5 rounded-full"></div>
              <div className="h-2 w-5/6 bg-white/5 rounded-full"></div>
              <div className="h-2 w-4/6 bg-white/5 rounded-full"></div>
            </div>
            <div className="flex gap-3 pt-4">
              <div className="w-12 h-12 bg-white/5 rounded-2xl border border-white/10"></div>
              <div className="w-12 h-12 bg-white/5 rounded-2xl border border-white/10"></div>
            </div>
          </div>
          <div className="w-full md:w-[350px] aspect-video bg-black rounded-3xl border border-white/10 shadow-inner flex items-center justify-center relative overflow-hidden">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-500/10 to-transparent"></div>
             <Activity className="w-12 h-12 text-cyan-500 animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
  if (view === "landing") {
    return (
      <div className="min-h-screen bg-black text-white font-sans flex flex-col items-center relative overflow-x-hidden">
        <FloatingNavbar />
        <div className="absolute top-[-15%] left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-cyan-600/10 rounded-full blur-[180px] pointer-events-none opacity-60"></div>
        <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="pt-48 px-6 text-center z-10 max-w-5xl">
          <div className="mb-10 inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-cyan-400 text-[11px] font-black uppercase tracking-[0.3em] shadow-xl">
            <Shield className="w-4 h-4" /> Trusted by Sentinel-ID
          </div>
          
          <h1 className="text-6xl md:text-[90px] font-black tracking-tight mb-8 leading-[0.95] bg-gradient-to-b from-white via-white to-white/30 bg-clip-text text-transparent">
            {t.landingTitle}
          </h1>
          
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
            {t.landingSub}
          </p>
          
          <div className="flex flex-col md:flex-row gap-5 justify-center">
            <button 
              onClick={() => setView("chat")} 
              className="group flex items-center gap-3 px-12 py-5 bg-cyan-600 hover:bg-cyan-500 text-white rounded-full font-black uppercase tracking-widest transition-all shadow-[0_0_40px_rgba(8,145,178,0.3)] active:scale-95"
            >
              {t.btnTry} <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => setView("docs")} 
              className="flex items-center gap-3 px-12 py-5 bg-white/5 border border-white/10 hover:bg-white/10 text-white rounded-full font-black uppercase tracking-widest transition-all backdrop-blur-md active:scale-95"
            >
              <FileText className="w-5 h-5" /> {t.btnDoc}
            </button>
          </div>

          <VisualMockup />
          <div className="grid md:grid-cols-3 gap-6 mt-32 text-left">
            {[
              { icon: <Lock className="w-5 h-5"/>, title: "Secure Audit", desc: "Analisis kerentanan header dan infrastruktur secara real-time." },
              { icon: <Terminal className="w-5 h-5"/>, title: "Tactical Script", desc: "Automasi tugas kompleks dengan engine Cikawan AI." },
              { icon: <Zap className="w-5 h-5"/>, title: "Fast Execution", desc: "Pemrosesan log neural dengan latensi minimal di cloud." }
            ].map((f, i) => (
              <div key={i} className="p-8 bg-white/[0.02] border border-white/5 rounded-[32px] hover:bg-white/[0.04] transition-all">
                <div className="w-10 h-10 bg-cyan-500/10 rounded-xl flex items-center justify-center text-cyan-400 mb-6">{f.icon}</div>
                <h3 className="font-black text-sm uppercase tracking-widest mb-3">{f.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed font-medium">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <footer className="w-full border-t border-white/5 py-16 mt-32 bg-[#050505]">
          <div className="max-w-5xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="font-bold text-lg tracking-tighter">Cikawan<span className="text-cyan-500">.AI</span></div>
            <div className="text-[10px] text-slate-700 font-bold uppercase tracking-[0.5em]">
              Powered by Cikawan // Next.js 2026
            </div>
            <div className="flex gap-8 text-[10px] font-black uppercase text-slate-500 tracking-widest">
              <span className="hover:text-white cursor-pointer">Security</span>
              <span className="hover:text-white cursor-pointer">Privacy</span>
            </div>
          </div>
        </footer>
      </div>
    );
  }
  if (view === "security") {
    return (
      <div className="min-h-screen bg-black text-white font-sans flex flex-col">
        <FloatingNavbar />
        <main className="flex-1 pt-48 px-6 pb-24 max-w-5xl mx-auto w-full animate-in fade-in duration-700">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
            <div>
              <div className="flex items-center gap-3 text-cyan-400 mb-4">
                <ShieldCheck className="w-8 h-8" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em]">Sentinel Security Core</span>
              </div>
              <h1 className="text-5xl font-black tracking-tighter italic">Infrastruktur <span className="text-cyan-500">Hardened</span></h1>
            </div>
            <div className="bg-white/5 border border-white/10 px-6 py-4 rounded-[24px] flex items-center gap-4 shadow-2xl">
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
              <div className="text-xs font-bold uppercase tracking-widest">Sistem Terenkripsi: AES-256</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            {[
              { label: "Uptime", val: "99.99%", color: "text-white" },
              { label: "Active Nodes", val: "14 Nodes", color: "text-cyan-400" },
              { label: "Traffic Status", val: "Secure", color: "text-green-500" },
              { label: "SSL Status", val: "Active", color: "text-cyan-400" },
            ].map((stat, i) => (
              <div key={i} className="p-6 bg-white/[0.03] border border-white/5 rounded-3xl">
                <p className="text-[9px] font-black uppercase tracking-widest text-slate-500 mb-2">{stat.label}</p>
                <p className={`text-2xl font-black ${stat.color}`}>{stat.val}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-10 bg-[#050505] border border-white/10 rounded-[40px] space-y-8 shadow-inner">
               <h3 className="text-xl font-black italic border-l-4 border-cyan-500 pl-4 uppercase tracking-tighter">Protokol Keamanan</h3>
               {[
                 { icon: <Fingerprint className="w-5 h-5 text-cyan-400"/>, title: "Zero Trust Architecture", desc: "Verifikasi identitas ketat untuk setiap permintaan akses ke terminal." },
                 { icon: <Database className="w-5 h-5 text-cyan-400"/>, title: "Database Hardening", desc: "Data sensitif dilindungi dengan rotasi kunci enkripsi harian." },
                 { icon: <Eye className="w-5 h-5 text-cyan-400"/>, title: "Real-time Monitoring", desc: "Deteksi anomali pada log sistem untuk mencegah infiltrasi." }
               ].map((p, i) => (
                 <div key={i} className="flex gap-6 items-start group">
                   <div className="p-3 bg-white/5 rounded-2xl border border-white/10 group-hover:border-cyan-500/50 transition-all">{p.icon}</div>
                   <div>
                     <h4 className="font-black text-sm uppercase tracking-widest mb-1">{p.title}</h4>
                     <p className="text-xs text-slate-500 leading-relaxed">{p.desc}</p>
                   </div>
                 </div>
               ))}
            </div>

            <div className="p-10 bg-white/[0.02] border border-white/10 rounded-[40px] flex flex-col">
              <h3 className="text-xl font-black italic border-l-4 border-white pl-4 uppercase tracking-tighter mb-8 text-white/40">Keamanan Berkas</h3>
              <div className="flex-1 flex flex-col justify-center items-center text-center space-y-6">
                <div className="relative">
                   <div className="absolute inset-0 bg-cyan-500/20 blur-3xl rounded-full"></div>
                   <ShieldAlert className="w-20 h-20 text-cyan-500 relative" />
                </div>
                <div className="space-y-2">
                  <p className="font-black uppercase tracking-widest text-sm">Cikawan Secret Sniffer</p>
                  <p className="text-xs text-slate-500 max-w-[250px]">Extension otomatis untuk mendeteksi hardcoded credentials di kode Anda.</p>
                </div>
                <button className="px-8 py-3 bg-white text-black rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-cyan-400 transition-all">Aktifkan Sniffer</button>
              </div>
            </div>
          </div>
          
          <button onClick={() => setView("landing")} className="mt-16 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-slate-600 hover:text-cyan-400 transition-all">
            <ArrowRight className="w-4 h-4 rotate-180" /> Kembali ke Beranda
          </button>
        </main>
      </div>
    );
  }
  if (view === "docs") {
    return (
      <div className="min-h-screen bg-black text-white font-sans flex flex-col">
        <FloatingNavbar />
        <main className="flex-1 pt-48 px-6 pb-24 max-w-5xl mx-auto w-full animate-in fade-in duration-700">
          <div className="mb-16">
            <h1 className="text-5xl font-black mb-4 tracking-tighter italic">Documentation</h1>
            <p className="text-slate-500 text-lg font-medium leading-relaxed">Pusat kontrol dan panduan teknis operasional AI Cikawan.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: <Shield className="w-6 h-6"/>, title: "Security Core", desc: "Integrasi enkripsi AES-256 untuk setiap transmisi data antara terminal dan core." },
              { icon: <Code className="w-6 h-6"/>, title: "Next.js Integration", desc: "Cara memasang SDK Cikawan pada project Next.js Anda dalam hitungan detik." },
              { icon: <CpuIcon className="w-6 h-6"/>, title: "Neural Engine", desc: "Dokumentasi model pembelajaran mesin yang menggerakkan logika otomatisasi." },
              { icon: <Terminal className="w-6 h-6"/>, title: "CLI Reference", desc: "Daftar lengkap perintah eksekusi untuk terminal arsitek Cikawan." }
            ].map((item, idx) => (
              <div key={idx} className="p-10 bg-white/5 border border-white/10 rounded-[35px] hover:border-cyan-500/50 transition-all group">
                <div className="text-cyan-400 mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
                <h3 className="font-black uppercase tracking-widest text-xs mb-3">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
          <button onClick={() => setView("landing")} className="mt-16 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-slate-600 hover:text-cyan-400 transition-all">
            <ArrowRight className="w-4 h-4 rotate-180" /> Kembali ke Beranda
          </button>
        </main>
      </div>
    );
  }
  return (
    <div className="flex h-screen bg-[#020617] text-slate-200 font-sans overflow-hidden animate-in fade-in duration-700">
      <aside className={`${isSidebarOpen ? 'w-[280px]' : 'w-[72px]'} transition-all duration-500 ease-in-out bg-[#030816] border-r border-slate-800/50 flex flex-col p-4 relative`}>
        <div className="flex items-center gap-3 mb-8 overflow-hidden cursor-pointer" onClick={() => setView("landing")}>
          <button onClick={(e) => { e.stopPropagation(); setIsSidebarOpen(!isSidebarOpen); }} className="p-2.5 hover:bg-slate-800 rounded-xl transition-all border border-transparent hover:border-slate-700">
            <Menu className="w-5 h-5 text-cyan-400" />
          </button>
          {isSidebarOpen && <span className="font-black tracking-tighter text-lg uppercase italic">Cikawan<span className="text-cyan-500">.AI</span></span>}
        </div>
        <button onClick={() => { setIsChatting(false); setMessages([]); }} className={`flex items-center gap-3 p-3 mb-6 transition-all group ${isSidebarOpen ? 'bg-cyan-600/10 border border-cyan-500/20 rounded-xl pr-6' : 'rounded-xl'} hover:bg-cyan-600/20`}>
          <Plus className="w-5 h-5 text-cyan-400 group-hover:rotate-90 transition-transform" />
          {isSidebarOpen && <span className="text-xs font-black uppercase tracking-widest text-cyan-500">{t.initialize}</span>}
        </button>
        <div className="flex-1 overflow-y-auto space-y-1 custom-scrollbar">
          {isSidebarOpen && <p className="px-2 text-[10px] font-black text-slate-600 uppercase tracking-[0.2em] mb-4">{t.logs}</p>}
          <div className="flex items-center gap-3 p-3 hover:bg-slate-800/50 rounded-xl cursor-pointer group border border-transparent hover:border-slate-700/50 transition-all">
            <div className="min-w-[20px] flex justify-center"><Activity className="w-3 h-3 text-cyan-500" /></div>
            {isSidebarOpen && <span className="text-xs font-medium text-slate-400 group-hover:text-slate-200 truncate">Sentinel-ID Audit</span>}
          </div>
        </div>
        <button onClick={() => setView("landing")} className="mt-4 flex items-center gap-3 p-3 text-slate-600 hover:text-slate-300">
          <X className="w-5 h-5" />
          {isSidebarOpen && <span className="text-xs font-bold uppercase tracking-widest text-left">Close Terminal</span>}
        </button>
      </aside>

      <main className="flex-1 flex flex-col relative">
        <header className="h-16 flex items-center justify-between px-8 bg-[#020617]/50 backdrop-blur-sm z-10">
          <div className="flex items-center gap-3 bg-slate-900/50 border border-slate-800 px-4 py-1.5 rounded-full shadow-lg">
            <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></div>
            <span className="text-xs font-bold tracking-widest uppercase italic text-cyan-400">Architect v2.6.4</span>
          </div>
          <div className="w-9 h-9 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center font-black text-[10px] text-cyan-500">KK</div>
        </header>

        <section className="flex-1 overflow-y-auto px-6 relative z-10 custom-scrollbar">
          <div className="max-w-[850px] mx-auto h-full pt-16">
            {!isChatting ? (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                <div className="mb-14">
                  <h1 className="text-6xl font-black tracking-tighter mb-4">
                    {t.greeting} <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">Kakang.</span>
                  </h1>
                  <p className="text-2xl text-slate-500 font-bold leading-tight max-w-xl italic">
                    "{t.subGreeting} <span className="text-slate-300">{t.future}</span> {t.today}"
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                  {t.suggestions.map((card, i) => (
                    <div key={i} onClick={() => setInput(card.desc)} className="group bg-[#030816]/80 p-5 rounded-2xl border border-slate-800 hover:border-cyan-500/50 transition-all cursor-pointer backdrop-blur-xl">
                      <div className="mb-4 p-2 bg-slate-900 w-fit rounded-lg text-cyan-400">
                         {i === 0 && <ShieldCheck className="w-5 h-5"/>}
                         {i === 1 && <Terminal className="w-5 h-5"/>}
                         {i === 2 && <Zap className="w-5 h-5"/>}
                         {i === 3 && <Sparkles className="w-5 h-5"/>}
                      </div>
                      <h3 className="text-sm font-black uppercase tracking-wider mb-1 group-hover:text-cyan-400 transition-colors">{card.title}</h3>
                      <p className="text-xs text-slate-500 leading-relaxed font-medium">{card.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-8 pb-10 animate-in fade-in duration-500">
                {messages.map((msg, i) => (
                  <div key={i} className={`flex gap-4 ${msg.role === 'user' ? 'justify-end' : ''}`}>
                    {msg.role !== 'user' && <div className="w-8 h-8 rounded-lg bg-cyan-600 flex items-center justify-center text-[10px] font-bold">C</div>}
                    <div className={`max-w-[80%] p-4 rounded-2xl border ${msg.role === 'user' ? 'bg-slate-800 border-slate-700 text-slate-100' : 'bg-[#030816] border-slate-800 text-slate-300'}`}>
                      <p className="text-sm leading-relaxed">{msg.text}</p>
                    </div>
                    {msg.role === 'user' && <div className="w-8 h-8 rounded-lg bg-slate-700 flex items-center justify-center text-[10px] font-bold">KK</div>}
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        <footer className="pb-10 px-6 z-20">
          <div className="max-w-[850px] mx-auto">
            <div className="bg-[#030816]/90 border border-slate-800 rounded-2xl p-3 shadow-2xl focus-within:border-cyan-500/50 transition-all ring-1 ring-slate-800/50 backdrop-blur-xl">
              <div className="flex flex-col gap-2">
                <textarea value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && (e.preventDefault(), handleExecute())} placeholder={t.placeholder} className="w-full bg-transparent border-none outline-none resize-none text-sm py-2 px-3 min-h-[60px]" />
                <div className="flex items-center justify-between px-2 pt-2 border-t border-white/5">
                  <div className="flex gap-1">
                    <button className="p-2.5 hover:bg-slate-800 rounded-xl transition-all text-slate-500 hover:text-cyan-400"><ImageIcon className="w-4 h-4" /></button>
                    <button className="p-2.5 hover:bg-slate-800 rounded-xl transition-all text-slate-500 hover:text-purple-400"><Mic className="w-4 h-4" /></button>
                  </div>
                  <button onClick={handleExecute} disabled={!input} className={`flex items-center gap-2 px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${input ? 'bg-cyan-600 text-white' : 'bg-slate-800 text-slate-500 opacity-50'}`}>
                    {t.execute} <Send className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center mt-4 px-4">
              <p className="text-[9px] text-slate-600 font-black uppercase tracking-[0.3em]">{t.secure} // TLS 1.3</p>
              <p className="text-[9px] text-slate-700 font-mono italic uppercase">Powered by Cikawan</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}