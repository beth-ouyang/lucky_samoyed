# 幸運狗狗占卜
隨機的薩摩耶來幫大家占卜今日運勢！


## 特色
1. 使用 Dog API 作為照片來源
2. 隨機產生文字（占卜結果）
3. 漂亮的頁面（由Colorlib的[模板](https://colorlib.com/wp/template/landerz/ "Landerz")改造而來）
4. 日文字體(Shirokuma)＋手繪對話框，營造出狗狗的可愛氛圍！


## 遇到的困難
1. 使用API時，一開始不確定要如何把抓下來的圖片網址丟進<img>裡面，所以參考了很多網友的做法，才慢慢了解那些function的用法。
2. 起初，明明隨機文字的段落都沒有bug、也能單獨獨立運作，但只要和 dog api 一起用時，就沒辦法出現文字、只有狗狗圖片。後來才知道原來是strict模式造成的。雖然它可以避免編寫時的壞習慣，但卻會讓我的占卜結果跑不出來。只要把放進個別的function中，就可以解決原本的問題了。
3. 為了使用上的方便性和簡易性，我設定了API，讓使用者無法自行選擇品種，而是只能得到薩摩耶。<br>一方面，如果是「所有種類」的狗，會有一些不清楚的照片，所以我簡單查看了台灣人熟悉的一些狗狗種類，發現薩摩耶有較多的清楚照片！另一方面，若讓使用者利用下拉選單的方式自行選擇品種的話，我擔心會讓這個占卜程式變得會太複雜（種類是英文、而且超多種），無法讓使用者馬上得到回饋，進而降低使用頻率。


## 參考資料
1. [Dog API](https://dog.ceo/dog-api/)
2. [Fetch API example](https://codepen.io/kkoutoup/pen/wjZXPw)
3. [fetch() - Working With Data & APIs in JavaScript](https://www.youtube.com/watch?v=tc8DU14qX6I)
4. [JSON - Working with Data and APIs in JavaScript](https://www.youtube.com/watch?v=uxf0--uiX0I)
5. [Select Random Item from an Array](https://css-tricks.com/snippets/javascript/select-random-item-array/)
6. [CSS字型嵌入方式](https://www.iware.com.tw/qa-CSS字型嵌入方式.html)
