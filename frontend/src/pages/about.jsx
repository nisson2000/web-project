import React from 'react';
import profilePic from '../assets/profile.png';  // 確保路徑正確指向你的頭貼圖片

function About() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>關於我</h1>
      <img src={profilePic} alt="Profile" style={{ width: '150px', borderRadius: '75px' }} />
      <p>你好！我是盧玉隆，一位熱情的前端開發者。我專注於創建美觀且功能豐富的網頁應用。我喜歡學習最新的網絡技術並將它們應用到我的項目中。在我的空閒時間，我喜歡閱讀科技文章和參加開發者社群活動。</p>
      <p>感謝你訪問我的個人頁面，希望你能喜歡我的作品！</p>
    </div>
  );
}

export default About;

