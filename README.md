# Frontend Mentor - REST Countries API 搭配明暗主題選鈕

這是我對 Frontend Mentor 的挑戰單元 [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca)
，所提出的回應。

# 挑戰

網頁應用應有下述功能:

- 在首頁看見來自 API 的所有國家
- 經由輸入欄位搜尋特定國家
- 以地理區域（region) 篩選國家
- 點擊國家卡片即可在單獨網頁顯示詳細資訊
- 點擊詳細網頁的鄰國按鈕即可顯示該國卡片
- 可手動選擇淺色或深色模式 （非必要）

# 連結

- Live Demo: [https://fmrestcountriesapi.netlify.app/]

# 打造工具

- HTML5/CSS
- Tailwind
- Typescript/JavaScript
- React
- React Router

# 學有所得

第三版 捨棄 useFetch, 增加兩個 helpers，並稍微嘗試 React Query，總算達到預期效果，成功解決一，二版所遇到的問題。

第二版 因初版 App.tsx 的程式碼太過雜亂，捨棄增加 useState 的做法，採用自製鉤子 useFetch, 重新安排路由，程式碼變得乾淨許多，但每次返回首頁，都會重新取得資料，並重新渲染，嚴重影響使用者體驗。

第一版 本次遇到最大的難題都跟 React Router 有關，特別是返回上一頁時，如何不啟動 React 的元件更新機制，讓我卡關了好久。後來我採取增加 useState 的辦法，最後大致成功了，但仍留下一個不影響主要功能的小缺陷：同樣是跟返回上一頁有關。我感到應該有個簡明的解決之道，但我目前毫無頭緒，甚至不知該如何 Google 起。只能先記下了，繼續學習，有待來日。

# 持續加強

我開始體會到事先規劃元件結構的必要性，或者該說是必然性。這應該代表我終於不再對 React 感到完全陌生了。React Docs Beta 值得再三翻閱。

# 作者

朱濤萍
