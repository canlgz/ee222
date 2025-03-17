import React from 'react';
import CulturalQuantumDNA from './components/CulturalQuantumDNA';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="bg-gradient-to-r from-purple-600 to-blue-500 py-6 shadow-lg">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-bold text-white text-center">
            文化量子態的DNA結構
          </h1>
          <p className="text-white text-center mt-2 opacity-90">
            從量子特性到藝術文化表現的系統性映射
          </p>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8">
        <CulturalQuantumDNA />
        
        <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-gray-800 mb-4">關於此專案</h2>
          <p className="text-gray-700 mb-4">
            本視覺化模型借用DNA雙螺旋結構，展示量子物理特性與文化藝術表現之間的對應關係。
            這個互動式模型不僅呈現了量子疊加性、量子糾纏等特性如何映射到行為藝術、網絡藝術等領域，
            也體現了從實體本體論到量子存有論的認識論演化。
          </p>
          <p className="text-gray-700">
            通過這種跨學科的視覺化呈現，我們希望能夠為理解當代文化現象提供新的思考框架，
            特別是在面對數位時代複雜文化動態時。文化量子態作為一個整合性理論視角，
            幫助我們超越傳統二元對立，接納不確定性與多元可能性。
          </p>
        </div>
      </main>
      
      <footer className="bg-gray-800 text-white py-6 mt-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 文化量子態研究專案</p>
          <p className="mt-2 text-gray-400 text-sm">
            使用React與Canvas技術開發 | <a href="https://github.com/您的使用者名稱/ee222" className="underline hover:text-blue-300">GitHub倉庫</a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;