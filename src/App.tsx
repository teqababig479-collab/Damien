/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  FileText, 
  Phone, 
  Mail, 
  Twitter, 
  ExternalLink,
  ChevronRight,
  Palette,
  Code,
  Clock,
  Maximize2,
  MessageCircle,
  X,
  Send,
  QrCode
} from 'lucide-react';

// --- Types ---
type Tab = '首页' | '作品' | '博客' | '关于我';

interface WorkItem {
  id: number;
  title: string;
  category: string;
  year: string;
  tag: string;
  imageUrl: string;
}

// --- Mock Data ---
const WORKS: WorkItem[] = [
  {
    id: 1,
    title: "供应链补货系统：从0到1搭建智能补货引擎",
    category: "业务项目",
    year: "2025",
    tag: "智能补货",
    imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 2,
    title: "雅诗兰黛集团：全国门店智能补货系统优化",
    category: "业务项目",
    year: "2023",
    tag: "效率提升",
    imageUrl: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 3,
    title: "蓄水池采购计划：精细化采购协同模型设计",
    category: "业务项目",
    year: "2024",
    tag: "协同模型",
    imageUrl: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 4,
    title: "B端产品方法论：理流程、定单据、填功能",
    category: "战略沉淀",
    year: "2023",
    tag: "方法论",
    imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 5,
    title: "B端产品规划：业务场景驱动",
    category: "战略沉淀",
    year: "2024",
    tag: "产品规划",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600"
  }
];

const BLOGS = [
  {
    title: "关于博客的想法",
    desc: "由于早期研究笔记本工具时花费的时间太多，导致我的笔记散落在各地。目前经过对比后，语雀的开放性和支持各种插入第三方工具的功能使我觉得目前是最适合作为我的知识库平台的。",
    link: "www.yuque.com/lisanqiu"
  },
  {
    title: "沉淀与输出",
    desc: "因此将来会一步一步将收集的素材整理起来，将来有时间将自己的网站开发出来的话，应该也会同步过来。一边收获，一边回顾，一边输出，一边沉淀。",
    link: "#"
  }
];

// --- Components ---

function Navbar({ activeTab, onTabChange }: { activeTab: Tab, onTabChange: (tab: Tab) => void }) {
  const tabs: Tab[] = ['首页', '作品', '博客', '关于我'];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-12 py-8 flex justify-between items-center bg-transparent">
      <div className="flex items-center gap-2">
        <div className="w-12 h-12 rounded-full overflow-hidden border border-white/20 shadow-lg bg-white/5">
           <img 
            src="/portrait.png" 
            alt="Logo" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="flex items-center">
        {tabs.map((tab, idx) => (
          <div key={tab} className="flex items-center">
            <button
              onClick={() => onTabChange(tab)}
              className={`text-sm tracking-widest transition-all ${activeTab === tab ? 'text-brand-accent font-bold scale-110' : 'text-gray-300 hover:text-white'}`}
            >
              {tab}
            </button>
            {idx < tabs.length - 1 && <span className="mx-6 text-gray-500 font-light">/</span>}
          </div>
        ))}
      </div>

      <div className="w-12"></div>
    </nav>
  );
}

function HomeView({ onTabChange }: { onTabChange: (tab: Tab) => void }) {
  const [isMessageOpen, setIsMessageOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      setSubmitted(true);
    }
  };

  const capabilities = [
    { category: '业务领域', items: ['供应链产品经理', '电商零售', '补货/采购', '库存管理'] },
    { category: '从0到1', items: ['补货系统', '采购计划', '全渠道库存管理'] },
    { category: '核心引擎', items: ['业务建模', '流程设计', '落地实施', '数据驱动'] },
    { category: '通用能力', items: ['跨团队协同', '复杂场景拆解', 'PM方法论'] }
  ];

  const articles = [
    "《从0到1搭建零售行业的供应链补货模型：逻辑、流程与落地》",
    "《全渠道模式下，如何设计多渠道库存同步规则？》",
    "《产品经理如何用数据驱动业务决策：以缺货率分析为例》"
  ];

  return (
    <div className="min-h-screen bg-brand-bg relative flex flex-col items-center pt-20">
      {/* Hero Section */}
      <section className="w-full max-w-[1400px] px-12 py-20 min-h-[80vh] flex items-center relative">
        {/* Giant Outline Watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
          <h1 className="text-[25vw] font-black outline-text tracking-widest opacity-20">SERGIO</h1>
        </div>

        <div className="w-full grid grid-cols-12 items-center relative z-10 gap-12">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="col-span-12 lg:col-span-5 flex flex-col gap-8 order-2 lg:order-1"
          >
            <div className="space-y-4">
               <h2 className="text-5xl font-bold flex items-center gap-3">
                 你好👋，
               </h2>
               <h2 className="text-7xl font-extrabold text-white">
                 我是<span className="text-brand-accent">袁德晴</span>
               </h2>
               <h3 className="text-2xl font-medium text-brand-secondary opacity-90">
                 专注供应链领域的产品经理
               </h3>
            </div>
            <div className="space-y-6 max-w-md">
              <p className="text-gray-200 text-xl leading-relaxed font-light">
                一个在产品设计界努力攀登的新生
              </p>
              <p className="text-gray-300 text-lg leading-relaxed font-light border-l-2 border-brand-accent pl-6 bg-white/5 py-4 rounded-r-xl">
                以用户价值为核心，用产品创造业务价值
              </p>
            </div>
          </motion.div>

          {/* Center Portrait - Visual Anchor */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="col-span-12 lg:col-span-4 flex justify-center order-1 lg:order-2 relative"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-[10px] border-white/5 shadow-2xl bounce-soft bg-white/5">
              <img 
                src="/portrait.png"
                alt="Portrait"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-bg/60 via-transparent to-brand-accent/20"></div>
            </div>
            <div className="absolute inset-0 bg-brand-accent/5 blur-[100px] rounded-full scale-150 -z-10"></div>
          </motion.div>

          {/* Right Action Buttons - Module 1 */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="col-span-12 lg:col-span-3 flex flex-col gap-5 order-3"
          >
            <h4 className="text-gray-400 font-medium text-sm tracking-widest uppercase mb-2">快速行动</h4>
            <button 
              onClick={() => onTabChange('作品')}
              className="w-full bg-brand-accent hover:bg-red-600 text-white px-8 py-5 rounded-2xl text-base font-bold transition-all shadow-xl active:scale-95 flex items-center justify-between group"
            >
              <span>查看我的作品集</span>
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <a 
              href="/resume.pdf" 
              download="袁德晴_产品经理_简历.pdf"
              className="w-full bg-white/5 hover:bg-white/10 text-white px-8 py-5 rounded-2xl text-base font-medium transition-all border border-white/10 flex items-center justify-between group"
            >
              <span>下载我的简历</span>
              <FileText size={20} className="text-gray-400 group-hover:text-white transition-colors" />
            </a>
            <button 
              onClick={() => setIsMessageOpen(true)}
              className="w-full bg-white/5 hover:bg-white/10 text-white px-8 py-5 rounded-2xl text-base font-medium transition-all border border-white/10 flex items-center justify-between group"
            >
              <span>联系我</span>
              <Mail size={20} className="text-gray-400 group-hover:text-white transition-colors" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Capability Matrix - Module 2 */}
      <section className="w-full max-w-[1400px] px-12 py-24 border-t border-white/5">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-4">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold">我的核心能力</h2>
            <p className="text-gray-400 tracking-widest uppercase text-xs">Core Capability Matrix</p>
          </div>
          <div className="px-4 py-2 bg-brand-accent/10 border border-brand-accent/20 rounded-full">
            <span className="text-brand-accent text-xs font-bold font-mono">SUPPLY CHAIN EXPERT</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {capabilities.map((cap, i) => (
            <motion.div 
              key={cap.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 rounded-3xl p-8 border border-white/5 hover:border-brand-accent/30 transition-all group"
            >
              <h3 className="text-brand-accent font-bold text-sm uppercase tracking-widest mb-6 border-b border-white/10 pb-4">
                {cap.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cap.items.map(item => (
                  <span key={item} className="px-3 py-1.5 bg-brand-bg border border-white/10 rounded-lg text-xs text-gray-300 group-hover:border-white/20 transition-all">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Industry Thinking - Module 4 */}
      <section className="w-full max-w-[1400px] px-12 py-24">
        <div className="bg-[#1e1f44] rounded-[4rem] p-16 md:p-24 border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-20 opacity-[0.03] select-none pointer-events-none">
             <Code size={400} />
          </div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-16">
              <h2 className="text-4xl font-bold tracking-tight">我的行业思考</h2>
              <div className="h-px flex-grow bg-white/10"></div>
            </div>
            
            <div className="grid grid-cols-1 gap-6">
              {articles.map((title, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ x: 10 }}
                  className="group cursor-pointer bg-white/5 p-8 rounded-3xl border border-white/5 hover:border-brand-accent/50 hover:bg-brand-accent/5 transition-all flex items-center justify-between"
                >
                  <div className="flex items-center gap-8">
                    <span className="text-3xl font-black text-white/5 italic">0{idx + 1}</span>
                    <h3 className="text-xl font-medium text-gray-200 group-hover:text-white transition-colors">
                      {title}
                    </h3>
                  </div>
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-brand-accent group-hover:border-transparent transition-all">
                    <ExternalLink size={18} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Module 5 */}
      <footer className="w-full max-w-[1400px] px-12 py-20 border-t border-white/5 mt-20 flex flex-col items-center gap-10">
        <p className="text-gray-300 text-xl font-light italic text-center max-w-2xl leading-relaxed">
          「以用户价值为核心，用产品创造业务价值」
        </p>
        <div className="flex flex-col md:flex-row items-center gap-8 text-gray-500 text-sm font-mono tracking-widest uppercase">
          <div className="flex items-center gap-3">
             <Mail size={16} className="text-brand-accent" />
             <span>联系我: 1390278459@qq.com</span>
          </div>
          <div className="hidden md:block w-px h-4 bg-white/10"></div>
          <div className="flex items-center gap-3">
             <Phone size={16} className="text-brand-accent" />
             <span>微信：16601720350</span>
          </div>
        </div>
        <div className="text-[10px] text-gray-700 tracking-[0.5em] mt-10">
          © 2024 YUAN DEQING / BUILT FOR SUPPLY CHAIN VALUE
        </div>
      </footer>

      {/* Message Modal */}
      <AnimatePresence>
        {isMessageOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMessageOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-md bg-[#1a1b3a] border border-white/10 rounded-3xl overflow-hidden shadow-2xl"
            >
              <div className="p-8">
                <div className="flex justify-between items-center mb-8">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <MessageCircle className="text-brand-accent" />
                    给我留言
                  </h3>
                  <button 
                    onClick={() => setIsMessageOpen(false)}
                    className="p-2 hover:bg-white/10 rounded-full transition-colors"
                  >
                    <X size={20} className="text-gray-400" />
                  </button>
                </div>

                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-xs text-gray-500 uppercase tracking-widest px-1">留言内容</label>
                      <textarea 
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="想对点什么？"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-sm h-32 focus:outline-none focus:border-brand-accent transition-colors resize-none"
                        required
                      />
                    </div>
                    <button 
                      type="submit"
                      className="w-full bg-brand-accent hover:bg-red-600 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all active:scale-95"
                    >
                      <Send size={18} />
                      提交留言
                    </button>
                  </form>
                ) : (
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-center py-8 space-y-6"
                  >
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <QrCode className="text-green-500" size={32} />
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-xl font-bold">留言已录入！</h4>
                      <p className="text-gray-400 text-sm leading-relaxed text-center">
                        我已收到您的消息，会尽快给您回复。<br/>您也可以直接添加微信：16601720350
                      </p>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

function WorksView() {
  const [activeCategory, setActiveCategory] = useState('业务项目');

  const filteredWorks = WORKS.filter(work => work.category === activeCategory);

  return (
    <div className="min-h-screen pt-40 pb-20 px-12 flex flex-col items-center">
      <div className="bg-[#1f2045] p-1.5 rounded-2xl border border-white/5 flex mb-20 shadow-2xl">
        {['业务项目', '战略沉淀'].map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-10 py-3.5 rounded-xl transition-all text-sm font-medium ${activeCategory === cat ? 'bg-[#3b3d8c] text-white border border-white/10 shadow-xl' : 'text-gray-500 hover:text-gray-300'}`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="max-w-[1400px] w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <AnimatePresence mode="wait">
          {filteredWorks.map((work) => (
            <motion.div
              key={work.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-[#1e1f44] rounded-[2.5rem] p-7 border border-white/5 hover:border-white/20 transition-all group relative overflow-hidden"
            >
              <div className="aspect-[4/3] rounded-[1.5rem] overflow-hidden mb-8 relative shadow-2xl">
                <img 
                  src={work.imageUrl} 
                  alt={work.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
              </div>
              <h3 className="text-xl font-medium mb-6 leading-relaxed">
                {work.title}
              </h3>
              <div className="flex">
                <span className="px-5 py-2 bg-[#333575] rounded-full text-xs font-medium text-white/90 border border-white/10">
                  {work.tag}
                </span>
              </div>
              
              <div className="absolute bottom-6 right-8 pointer-events-none opacity-[0.05]">
                <span className="text-7xl font-black italic tracking-tighter">{work.year}</span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

function BlogsView() {
  return (
    <div className="min-h-screen pt-40 pb-20 px-12 flex flex-col items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-4xl w-full bg-[#1e1f44] rounded-[3rem] p-16 md:p-24 border border-white/5 relative overflow-hidden shadow-2xl flex flex-col items-center justify-center min-h-[400px]"
      >
        <h2 className="text-4xl font-bold tracking-[0.2em] text-white/50 mb-4 italic">COMING SOON</h2>
        <h3 className="text-2xl font-bold tracking-widest text-white underline decoration-brand-accent underline-offset-8">敬请期待</h3>
        <p className="text-gray-500 mt-8 font-mono text-sm uppercase tracking-[0.5em]">Knowledge base is under construction</p>
      </motion.div>
    </div>
  );
}

function AboutView() {
  return (
    <div className="min-h-screen pt-40 pb-20 px-12 flex flex-col items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-5xl w-full bg-[#1e1f44] rounded-[3rem] p-16 md:p-24 border border-white/5 text-center shadow-2xl"
      >
        <h2 className="text-3xl font-bold tracking-widest mb-16">关于我</h2>
        
        <div className="space-y-8 mb-20">
          <p className="text-gray-200 text-2xl leading-relaxed font-light">
            定义未来，驱动价值
          </p>
          <p className="text-gray-400 text-lg font-light text-center max-w-2xl">
            我热衷于挖掘用户痛点，沉溺于逻辑推演，致力于将复杂的业务场景拆解为优雅的产品方案。
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 w-full">
          <div className="flex flex-col items-center gap-4 group">
            <Phone size={32} className="text-gray-600 group-hover:text-white transition-all transform group-hover:scale-110" />
            <span className="text-[10px] text-gray-500 tracking-tighter">16601720350</span>
          </div>
          <div className="flex flex-col items-center gap-4 group">
            <Mail size={32} className="text-gray-600 group-hover:text-white transition-all transform group-hover:scale-110" />
            <span className="text-[10px] text-gray-500 tracking-tighter">1390278459@qq.com</span>
          </div>
          <div className="flex flex-col items-center gap-4 group">
            <MessageCircle size={32} className="text-gray-600 group-hover:text-white transition-all transform group-hover:scale-110" />
            <span className="text-[10px] text-gray-500 tracking-tighter">16601720350 (微信)</span>
          </div>
        </div>
      </motion.div>

      <div className="mt-20">
        <p className="text-gray-600 text-sm tracking-[0.4em] font-light">探索极致供应链价值</p>
      </div>
    </div>
  );
}

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('首页');

  return (
    <div className="min-h-screen bg-brand-bg text-white selection:bg-brand-accent/50 selection:text-white selection:bg-opacity-50">
      <Navbar activeTab={activeTab} onTabChange={setActiveTab} />
      
      <main>
        <AnimatePresence mode="wait">
          {activeTab === '首页' && (
            <motion.div key="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <HomeView onTabChange={setActiveTab} />
            </motion.div>
          )}
          {activeTab === '作品' && (
            <motion.div key="works" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <WorksView />
            </motion.div>
          )}
          {activeTab === '博客' && (
            <motion.div key="blogs" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <BlogsView />
            </motion.div>
          )}
          {activeTab === '关于我' && (
            <motion.div key="about" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <AboutView />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <div className="fixed bottom-0 left-0 p-8 z-50">
        <button className="w-10 h-10 bg-black/40 hover:bg-black/80 rounded flex items-center justify-center transition-all group backdrop-blur-md border border-white/5">
          <ChevronRight size={20} className="text-gray-400 group-hover:text-white" />
        </button>
      </div>
    </div>
  );
}
