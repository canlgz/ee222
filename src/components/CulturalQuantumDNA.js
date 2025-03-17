import React, { useState, useEffect, useRef } from 'react';

const CulturalQuantumDNA = () => {
  const [activeNode, setActiveNode] = useState(null);
  const [hoverInfo, setHoverInfo] = useState(null);
  const [animation, setAnimation] = useState(true);
  const canvasRef = useRef(null);
  const requestIdRef = useRef(null);
  
  // 量子特性數據
  const quantumProperties = [
    {
      id: 'superposition',
      name: '量子疊加性',
      engName: 'Superposition',
      description: '同時存在於多重可能狀態',
      yPos: 150
    },
    {
      id: 'entanglement',
      name: '量子糾纏',
      engName: 'Entanglement',
      description: '非局域關聯，超越時空限制',
      yPos: 290
    },
    {
      id: 'uncertainty',
      name: '不確定性原理',
      engName: 'Uncertainty Principle',
      description: '測不準原理，相互排斥的精確性',
      yPos: 430
    },
    {
      id: 'observer',
      name: '觀測者效應',
      engName: 'Observer Effect',
      description: '觀測行為改變被觀測對象',
      yPos: 570
    },
    {
      id: 'tunneling',
      name: '量子隧穿',
      engName: 'Quantum Tunneling',
      description: '穿越不可逾越的能量屏障',
      yPos: 710
    },
    {
      id: 'coherence',
      name: '量子相干性',
      engName: 'Quantum Coherence',
      description: '維持相位關係，形成一致波動',
      yPos: 850
    },
    {
      id: 'field',
      name: '量子場論',
      engName: 'Quantum Field Theory',
      description: '場域中的激發與干涉',
      yPos: 990
    },
    {
      id: 'perturbation',
      name: '量子擾動理論',
      engName: 'Perturbation Theory',
      description: '微小變化產生巨大系統影響',
      yPos: 1130
    }
  ];
  
  // 文化藝術表現數據
  const culturalExpressions = [
    {
      id: 'performance',
      name: '行為藝術',
      description: '多元詮釋並存',
      example: '陳界仁《殘響世界》',
      detail: '作品結合影像裝置、行為藝術與歷史檔案重構，呈現多重疊加的文化意義',
      yPos: 150
    },
    {
      id: 'network',
      name: '網絡藝術',
      description: '非局域連結',
      example: '黃心健《呼吸》',
      detail: '互動裝置同時在台北、東京與紐約展出，透過網絡連結三地觀眾的呼吸數據',
      yPos: 290
    },
    {
      id: 'digital',
      name: '數位文學',
      description: '形式與意義張力',
      example: '陳黎《數位荒原》',
      detail: '運用超文本、動態字形與互動機制創造流動的閱讀體驗，每次點擊便重組為不同排列',
      yPos: 430
    },
    {
      id: 'participatory',
      name: '參與式藝術',
      description: '互動共構',
      example: '奇美博物館《你是我的畫布》',
      detail: '透過動作捕捉技術，將觀眾的肢體動作即時轉化為數位繪畫，投射於展場牆面',
      yPos: 570
    },
    {
      id: 'avant-garde',
      name: '前衛音樂',
      description: '美學突破',
      example: '林其蔚《跨界輻射》',
      detail: '將傳統南管音樂元素與電子噪音、田野錄音和人工智能生成聲響混合',
      yPos: 710
    },
    {
      id: 'transmedia',
      name: '跨媒體藝術',
      description: '整體性體驗',
      example: '王虹凱《記憶之網》',
      detail: '結合虛擬實境、聲音藝術、觸覺反饋與文本敘事，創造跨感官的沉浸體驗',
      yPos: 850
    },
    {
      id: 'immersive',
      name: '沉浸式劇場',
      description: '情感場域',
      example: '台北藝術節《記憶迷宮》',
      detail: '將整棟廢棄建築改造為表演空間，觀眾可自由穿行其中，與表演者互動',
      yPos: 990
    },
    {
      id: 'ai-art',
      name: 'AI藝術',
      description: '微小變異創新',
      example: '許哲瑜《輕擾之美》',
      detail: '使用生成對抗網絡技術，透過對訓練參數的微小調整，產生風格迥異的藝術作品',
      yPos: 1130
    }
  ];

  // 本體論層次
  const ontologyLevels = [
    {
      id: 'entity',
      name: '實體本體論',
      color: '#a8dadc'
    },
    {
      id: 'relational',
      name: '關係本體論',
      color: '#bde0fe'
    },
    {
      id: 'quantum',
      name: '量子存有論',
      color: '#c8b6ff'
    }
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let time = 0;
    let hoverX = 0;
    let hoverY = 0;
    
    // 畫面大小調整
    const handleResize = () => {
      const container = canvas.parentElement;
      const width = container.clientWidth;
      canvas.width = width;
      canvas.height = Math.max(1250, window.innerHeight - 100);
    };
    
    window.addEventListener('resize', handleResize);
    handleResize();
    
    // 滑鼠移動事件
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      hoverX = e.clientX - rect.left;
      hoverY = e.clientY - rect.top;
      
      // 檢查是否懸停在節點上
      let foundNode = null;
      
      // 檢查量子特性節點
      quantumProperties.forEach(prop => {
        const x = canvas.width * 0.2;
        const y = prop.yPos * canvas.height / 1250;
        const distance = Math.sqrt((x - hoverX) ** 2 + (y - hoverY) ** 2);
        if (distance < 40) {
          foundNode = {
            type: 'quantum',
            id: prop.id,
            title: prop.name,
            subTitle: prop.engName,
            description: prop.description,
            x: x,
            y: y
          };
        }
      });
      
      // 檢查文化表現節點
      if (!foundNode) {
        culturalExpressions.forEach(expr => {
          const x = canvas.width * 0.8;
          const y = expr.yPos * canvas.height / 1250;
          const distance = Math.sqrt((x - hoverX) ** 2 + (y - hoverY) ** 2);
          if (distance < 40) {
            foundNode = {
              type: 'cultural',
              id: expr.id,
              title: expr.name,
              subTitle: expr.description,
              description: expr.example,
              detail: expr.detail,
              x: x,
              y: y
            };
          }
        });
      }
      
      // 檢查中心節點
      if (!foundNode) {
        const centerX = canvas.width * 0.5;
        const centerY = canvas.height * 0.51;
        const distance = Math.sqrt((centerX - hoverX) ** 2 + (centerY - hoverY) ** 2);
        if (distance < 100) {
          foundNode = {
            type: 'center',
            title: '文化量子態',
            subTitle: 'Cultural Quantum State',
            description: '超越確定性/不確定性、主體/客體的二元對立',
            x: centerX,
            y: centerY
          };
        }
      }
      
      setHoverInfo(foundNode);
    };
    
    canvas.addEventListener('mousemove', handleMouseMove);
    
    // 點擊事件
    const handleClick = () => {
      if (hoverInfo) {
        setActiveNode(hoverInfo.id === activeNode ? null : hoverInfo.id);
      }
    };
    
    canvas.addEventListener('click', handleClick);
    
    // 動畫循環
    const render = () => {
      if (!animation) {
        requestIdRef.current = requestAnimationFrame(render);
        return;
      }
      
      time += 0.01;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // 繪製背景
      ctx.fillStyle = '#f8f9fa';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // 繪製標題
      ctx.fillStyle = '#333';
      ctx.font = `bold ${canvas.width * 0.028}px 'Noto Sans TC', sans-serif`;
      ctx.textAlign = 'center';
      ctx.fillText('文化量子態的DNA結構', canvas.width / 2, canvas.height * 0.04);
      
      ctx.font = `${canvas.width * 0.016}px 'Noto Sans TC', sans-serif`;
      ctx.fillStyle = '#555';
      ctx.fillText('從量子特性到藝術文化表現的系統性映射', canvas.width / 2, canvas.height * 0.06);
      
      // 繪製DNA雙螺旋結構
      const leftX = canvas.width * 0.2;
      const rightX = canvas.width * 0.8;
      const amplitude = canvas.width * 0.1;
      const frequency = 0.02;
      
      // 左側螺旋：量子特性
      ctx.beginPath();
      ctx.moveTo(leftX, canvas.height * 0.12);
      
      for (let y = canvas.height * 0.12; y <= canvas.height * 0.9; y += 5) {
        const normalizedY = y / canvas.height;
        const offsetX = Math.sin(normalizedY * Math.PI * 10 + time) * amplitude;
        ctx.lineTo(leftX + offsetX, y);
      }
      
      ctx.strokeStyle = '#3a86ff';
      ctx.lineWidth = 4;
      ctx.stroke();
      
      // 右側螺旋：文化表現
      ctx.beginPath();
      ctx.moveTo(rightX, canvas.height * 0.12);
      
      for (let y = canvas.height * 0.12; y <= canvas.height * 0.9; y += 5) {
        const normalizedY = y / canvas.height;
        const offsetX = Math.sin(normalizedY * Math.PI * 10 + time + Math.PI) * amplitude;
        ctx.lineTo(rightX + offsetX, y);
      }
      
      ctx.strokeStyle = '#ff9e00';
      ctx.lineWidth = 4;
      ctx.stroke();
      
      // 繪製連接橋
      quantumProperties.forEach((prop, i) => {
        const y = prop.yPos * canvas.height / 1250;
        const leftSideX = leftX + Math.sin(y / canvas.height * Math.PI * 10 + time) * amplitude;
        const rightSideX = rightX + Math.sin(y / canvas.height * Math.PI * 10 + time + Math.PI) * amplitude;
        
        ctx.beginPath();
        ctx.moveTo(leftSideX, y);
        ctx.lineTo(rightSideX, y);
        ctx.strokeStyle = '#8338ec';
        ctx.lineWidth = activeNode === prop.id || activeNode === culturalExpressions[i].id ? 5 : 3;
        ctx.stroke();
      });
      
      // 繪製中心節點：文化量子態
      const centerX = canvas.width * 0.5;
      const centerY = canvas.height * 0.51;
      const centerRadius = canvas.width * 0.1;
      
      ctx.beginPath();
      ctx.arc(centerX, centerY, centerRadius, 0, Math.PI * 2);
      ctx.fillStyle = hoverInfo && hoverInfo.type === 'center' ? '#ff006ebb' : '#ff006e77';
      ctx.fill();
      
      ctx.fillStyle = 'white';
      ctx.font = `bold ${canvas.width * 0.02}px 'Noto Sans TC', sans-serif`;
      ctx.fillText('文化量子態', centerX, centerY - 15);
      
      ctx.font = `${canvas.width * 0.012}px 'Noto Sans TC', sans-serif`;
      ctx.fillText('Cultural Quantum State', centerX, centerY + 10);
      ctx.fillText('跨越確定性/不確定性', centerX, centerY + 30);
      ctx.fillText('主體/客體二元對立', centerX, centerY + 50);
      
      // 繪製連接中心與各節點的放射狀連線
      quantumProperties.forEach((prop, i) => {
        const quantumY = prop.yPos * canvas.height / 1250;
        const culturalY = culturalExpressions[i].yPos * canvas.height / 1250;
        
        // 連接到量子特性
        ctx.beginPath();
        ctx.moveTo(centerX, centerY - centerRadius * 0.7 + i * 30);
        
        // 使用貝茲曲線創建平滑曲線
        const ctrlX1 = centerX - (centerX - leftX) * 0.3;
        const ctrlY1 = centerY - centerRadius * 0.7 + i * 30 - (centerY - quantumY) * 0.3;
        
        ctx.quadraticCurveTo(ctrlX1, ctrlY1, leftX, quantumY);
        
        ctx.strokeStyle = activeNode === prop.id ? '#ff006e' : '#ff006e77';
        ctx.lineWidth = 2;
        ctx.setLineDash([5, 3]);
        ctx.stroke();
        ctx.setLineDash([]);
        
        // 連接到文化表現
        ctx.beginPath();
        ctx.moveTo(centerX, centerY - centerRadius * 0.7 + i * 30);
        
        const ctrlX2 = centerX + (rightX - centerX) * 0.3;
        const ctrlY2 = centerY - centerRadius * 0.7 + i * 30 - (centerY - culturalY) * 0.3;
        
        ctx.quadraticCurveTo(ctrlX2, ctrlY2, rightX, culturalY);
        
        ctx.strokeStyle = activeNode === culturalExpressions[i].id ? '#ff006e' : '#ff006e77';
        ctx.lineWidth = 2;
        ctx.setLineDash([5, 3]);
        ctx.stroke();
        ctx.setLineDash([]);
      });
      
      // 繪製量子特性節點
      quantumProperties.forEach(prop => {
        const y = prop.yPos * canvas.height / 1250;
        
        ctx.beginPath();
        ctx.arc(leftX, y, 40, 0, Math.PI * 2);
        ctx.fillStyle = (hoverInfo && hoverInfo.id === prop.id) || activeNode === prop.id ? '#4cc9f0' : '#4cc9f0aa';
        ctx.fill();
        
        ctx.fillStyle = 'white';
        ctx.font = `bold ${canvas.width * 0.014}px 'Noto Sans TC', sans-serif`;
        ctx.fillText(prop.name, leftX, y - 5);
        
        ctx.font = `${canvas.width * 0.01}px 'Noto Sans TC', sans-serif`;
        ctx.fillText(prop.engName, leftX, y + 15);
      });
      
      // 繪製文化表現節點
      culturalExpressions.forEach(expr => {
        const y = expr.yPos * canvas.height / 1250;
        
        ctx.beginPath();
        ctx.arc(rightX, y, 40, 0, Math.PI * 2);
        ctx.fillStyle = (hoverInfo && hoverInfo.id === expr.id) || activeNode === expr.id ? '#ffbe0b' : '#ffbe0baa';
        ctx.fill();
        
        ctx.fillStyle = '#333';
        ctx.font = `bold ${canvas.width * 0.014}px 'Noto Sans TC', sans-serif`;
        ctx.fillText(expr.name, rightX, y - 5);
        
        ctx.font = `${canvas.width * 0.01}px 'Noto Sans TC', sans-serif`;
        ctx.fillText(expr.description, rightX, y + 15);
      });
      
      // 繪製底部本體論層次
      const bottomY = canvas.height * 0.95;
      
      // 分隔線
      ctx.beginPath();
      ctx.moveTo(canvas.width * 0.2, bottomY - 20);
      ctx.lineTo(canvas.width * 0.8, bottomY - 20);
      ctx.strokeStyle = '#333';
      ctx.lineWidth = 1;
      ctx.stroke();
      
      ctx.fillStyle = '#333';
      ctx.font = `bold ${canvas.width * 0.012}px 'Noto Sans TC', sans-serif`;
      ctx.fillText('本體論層次', canvas.width / 2, bottomY);
      
      // 三個本體論層次
      const boxWidth = canvas.width * 0.15;
      const boxHeight = canvas.height * 0.03;
      const boxSpacing = canvas.width * 0.06;
      
      ontologyLevels.forEach((level, i) => {
        const x = canvas.width * 0.25 + i * (boxWidth + boxSpacing);
        const y = bottomY + 30;
        
        ctx.beginPath();
        ctx.roundRect(x, y, boxWidth, boxHeight, 5);
        ctx.fillStyle = `${level.color}bb`;
        ctx.fill();
        
        ctx.fillStyle = '#333';
        ctx.font = `${canvas.width * 0.012}px 'Noto Sans TC', sans-serif`;
        ctx.fillText(level.name, x + boxWidth / 2, y + boxHeight / 2 + 5);
        
        // 繪製箭頭
        if (i < ontologyLevels.length - 1) {
          ctx.beginPath();
          ctx.moveTo(x + boxWidth + boxSpacing / 3, y + boxHeight / 2);
          ctx.lineTo(x + boxWidth + boxSpacing / 3 * 2, y + boxHeight / 2);
          ctx.lineTo(x + boxWidth + boxSpacing / 3 * 2, y + boxHeight / 2 - 7);
          ctx.lineTo(x + boxWidth + boxSpacing / 3 * 2 + 15, y + boxHeight / 2 + 5);
          ctx.lineTo(x + boxWidth + boxSpacing / 3 * 2, y + boxHeight / 2 + 17);
          ctx.lineTo(x + boxWidth + boxSpacing / 3 * 2, y + boxHeight / 2 + 10);
          ctx.lineTo(x + boxWidth + boxSpacing / 3, y + boxHeight / 2 + 10);
          ctx.closePath();
          ctx.fillStyle = '#333';
          ctx.fill();
        }
      });
      
      // 顯示懸停信息
      if (hoverInfo) {
        const infoX = hoverInfo.x + 50;
        const infoY = hoverInfo.y - 60;
        const infoWidth = canvas.width * 0.25;
        const infoHeight = hoverInfo.type === 'cultural' ? 120 : 100;
        
        // 信息框
        ctx.beginPath();
        ctx.roundRect(infoX, infoY, infoWidth, infoHeight, 10);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
        ctx.fill();
        ctx.strokeStyle = hoverInfo.type === 'quantum' ? '#3a86ff' : 
                         hoverInfo.type === 'cultural' ? '#ff9e00' : '#ff006e';
        ctx.lineWidth = 2;
        ctx.stroke();
        
        // 信息文字
        ctx.textAlign = 'left';
        ctx.fillStyle = '#333';
        ctx.font = `bold ${canvas.width * 0.014}px 'Noto Sans TC', sans-serif`;
        ctx.fillText(hoverInfo.title, infoX + 10, infoY + 25);
        
        ctx.font = `${canvas.width * 0.012}px 'Noto Sans TC', sans-serif`;
        ctx.fillText(hoverInfo.subTitle, infoX + 10, infoY + 50);
        
        ctx.font = `${canvas.width * 0.011}px 'Noto Sans TC', sans-serif`;
        ctx.fillText(hoverInfo.description, infoX + 10, infoY + 75);
        
        if (hoverInfo.type === 'cultural' && hoverInfo.detail) {
          ctx.font = `italic ${canvas.width * 0.01}px 'Noto Sans TC', sans-serif`;
          
          // 處理長文字換行
          const words = hoverInfo.detail.split(' ');
          let line = '';
          let y = infoY + 95;
          const maxWidth = infoWidth - 20;
          
          for (let i = 0; i < words.length; i++) {
            const testLine = line + words[i] + ' ';
            const metrics = ctx.measureText(testLine);
            const testWidth = metrics.width;
            
            if (testWidth > maxWidth && i > 0) {
              ctx.fillText(line, infoX + 10, y);
              line = words[i] + ' ';
              y += 20;
            } else {
              line = testLine;
            }
          }
          ctx.fillText(line, infoX + 10, y);
        }
      }
      
      // 繪製控制按鈕
      const buttonX = canvas.width - 60;
      const buttonY = 40;
      const buttonRadius = 20;
      
      ctx.beginPath();
      ctx.arc(buttonX, buttonY, buttonRadius, 0, Math.PI * 2);
      ctx.fillStyle = animation ? '#3a86ff' : '#ff9e00';
      ctx.fill();
      
      ctx.fillStyle = 'white';
      ctx.font = `bold ${canvas.width * 0.01}px 'Arial', sans-serif`;
      ctx.textAlign = 'center';
      ctx.fillText(animation ? '暫停' : '播放', buttonX, buttonY + 4);
      
      // 重置文字對齊
      ctx.textAlign = 'center';
      
      requestIdRef.current = requestAnimationFrame(render);
    };
    
    render();
    
    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('click', handleClick);
      cancelAnimationFrame(requestIdRef.current);
    };
  }, [activeNode, animation, hoverInfo]);
  
  const toggleAnimation = () => {
    setAnimation(!animation);
  };

  return (
    <div className="w-full bg-gray-50 p-4 rounded-lg shadow-lg">
      <div className="flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-bold text-gray-800">文化量子態的DNA結構視覺化</h1>
          <button 
            onClick={toggleAnimation} 
            className={`px-4 py-2 rounded-full ${animation ? 'bg-blue-500' : 'bg-orange-500'} text-white font-semibold flex items-center`}
          >
            {animation ? (
              <><span className="mr-2">■</span> 暫停動畫</>
            ) : (
              <><span className="mr-2">▶</span> 播放動畫</>
            )}
          </button>
        </div>
        
        <div className="w-full bg-white rounded-lg shadow overflow-hidden">
          <canvas 
            ref={canvasRef} 
            className="w-full cursor-pointer"
            style={{ minHeight: '600px' }}
          />
        </div>
        
        <div className="mt-4 text-sm bg-gray-100 p-4 rounded">
          <h2 className="font-bold text-gray-700 mb-2">互動說明</h2>
          <ul className="list-disc pl-4 space-y-1 text-gray-600">
            <li>懸停在節點上可查看詳細資訊</li>
            <li>點擊節點可突顯相關連接</li>
            <li>使用右上角按鈕可暫停/播放動畫</li>
            <li>DNA雙螺旋結構的左側代表量子特性，右側代表對應的文化藝術表現</li>
            <li>中心節點代表「文化量子態」的核心概念，連接各量子特性與文化表現</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CulturalQuantumDNA;