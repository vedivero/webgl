const menuList = {
  profileTerrain: '지형단면 분석'
};

document.addEventListener('DOMContentLoaded', () => {
  const menuContainer = document.getElementById('menu');

  Object.entries(menuList).forEach(([key, value]) => {
    const item = document.createElement('div');
    item.textContent = value; 
    item.className = 'menu-item';
    item.id = key;
    menuContainer.appendChild(item);

    // 🟡 만약 profileTerrain이면 하단 분석 토글 UI 미리 생성
    if (key === 'profileTerrain') {
      const toggleContainer = document.createElement('div');
      toggleContainer.id = 'analysis-toggle';
      toggleContainer.style = 'display:none';

      // 자유선택 버튼 생성
      const freeBtn = document.createElement('button');
      freeBtn.textContent = '자유선택';
      freeBtn.id = 'free-select-btn';

      // 필지선택 버튼 생성
      const landBtn = document.createElement('button');
      landBtn.textContent = '필지선택';
      landBtn.id = 'land-select-btn';

      toggleContainer.appendChild(freeBtn);
      toggleContainer.appendChild(landBtn);
      document.body.appendChild(toggleContainer);

      // 클릭 이벤트로 토글 처리
      item.addEventListener('click', () => {
        const toggleBox = document.getElementById('analysis-toggle');
        if (toggleBox.style.display === 'none') {
          toggleBox.style.display = 'flex';
        } else {
          toggleBox.style.display = 'none';
        }
      });

      // 버튼 기능도 미리 정의
      freeBtn.addEventListener('click', () => {
        alert('자유선택 기능 실행');
      });

      landBtn.addEventListener('click', () => {
        alert('필지선택 기능 실행');
      });
    }
  });
});
