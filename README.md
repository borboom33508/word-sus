# Word Sus

Word Sus is a single-page party web game where every normal player receives the same secret word, while one hidden player becomes the Imposter.

---

## ภาษาไทย

### ภาพรวม

Word Sus เป็นเกมปาร์ตี้บนเว็บสำหรับเล่นกับเพื่อน แอดมินเลือกจำนวนผู้เล่นและหมวดหมู่คำ จากนั้นระบบจะสุ่มคำลับหนึ่งคำ และสุ่มให้ผู้เล่นหนึ่งคนเป็น `Imposter`

ผู้เล่นแต่ละคนกดดูบทบาทของตัวเองแบบส่วนตัว หลังจากทุกคนดูครบแล้ว ระบบจะจบหน้าที่ และให้ผู้เล่นพูดคุย ถามคำถาม และโหวตหา Imposter กันเอง

### วิธีเล่น

1. แอดมินเลือกจำนวนผู้เล่น สูงสุด 5 คน
2. เลือกหมวดหมู่คำ
3. กดปุ่มสุ่มคำสำหรับรอบนี้
4. ส่งอุปกรณ์ให้ผู้เล่นแต่ละคนกดดูคำของตัวเอง
5. ผู้เล่นปกติจะเห็นคำลับเดียวกัน
6. Imposter จะเห็นคำว่า `Imposter`
7. เมื่อทุกคนดูบทบาทครบแล้ว ให้เริ่มพูดคุยและหา Imposter

### ฟีเจอร์ UX/UI

- หน้าเว็บเป็นเกมหน้าเดียว เล่นได้ทันที
- มีขั้นตอนชัดเจนตั้งแต่ตั้งค่าเกม สุ่มคำ ไปจนถึงเปิดบทบาท
- แสดง Word Pool ของหมวดหมู่ที่เลือก
- แสดงจำนวนคำทั้งหมดในหมวดนั้น
- แอดมินสามารถเพิ่มคำใหม่ในหมวดที่เลือกได้
- เพิ่มคำได้หลายคำ โดยคั่นด้วย comma หรือขึ้นบรรทัดใหม่
- แอดมินสามารถลบคำในหมวดได้ ทั้งคำตั้งต้นและคำที่เพิ่มเอง
- คำที่เพิ่มหรือลบจะถูกเก็บไว้ในเบราว์เซอร์ด้วย `localStorage`
- กด Reset เพื่อเริ่มรอบใหม่ และคืนคำตั้งต้นที่เคยลบให้กลับมา
- ระบบไม่ควบคุมการคุยหรือการโหวตหลังจากแจกบทครบ

### หมวดหมู่คำ

| หมวดหมู่ | ตัวอย่าง |
| --- | --- |
| อาชีพ | พระ, ทหาร, ครู, มือปืน |
| เครื่องดนตรี | กลอง, กีตาร์, เปียโน |
| อาหาร | พิซซ่า, ซูชิ, กล้วย |
| ตัวละครการ์ตูน | ลูฟี่, ปิกาจู, เจอรี่ |
| กีฬา | บาส, ฟุตบอล, ว่ายน้ำ |
| สถานที่ | วัด, โรงพยาบาล, โรงเรียน |
| สัตว์ | สุนัข, แมว, ช้าง, เสือ |

---

## English

### Overview

Word Sus is a browser-based party game for small groups. The admin chooses the number of players and a word category, then the app randomly selects one secret word and assigns exactly one player as the `Imposter`.

Each player privately reveals their own role. After all players have seen their roles, the app stops controlling the game and players continue by discussing, asking questions, and voting to find the Imposter.

### How to Play

1. The admin selects the number of players, up to 5.
2. The admin chooses a word category.
3. The admin clicks the random word button.
4. Players take turns pressing their reveal button privately.
5. Normal players see the same secret word.
6. The Imposter only sees `Imposter`.
7. Once everyone has revealed their role, players discuss and try to identify the Imposter.

### UX/UI Features

- Single-page web game flow
- Clear stages for setup, random word generation, and private role reveal
- Visible Word Pool for the selected category
- Total word count for the current category
- Admin can add custom words to each category
- Multiple words can be added with commas or new lines
- Admin can remove words from a category, including default words
- Added and removed words are stored locally in the browser with `localStorage`
- Reset starts a new round and restores removed default words
- The app does not manage discussion or voting after roles are revealed

### Word Categories

| Category | Examples |
| --- | --- |
| Jobs | monk, soldier, teacher, hitman |
| Instruments | drum, guitar, piano |
| Food | pizza, sushi, banana |
| Cartoon Characters | Luffy, Pikachu, Jerry |
| Sports | basketball, football, swimming |
| Places | temple, hospital, school |
| Animals | dog, cat, elephant, tiger |

---

## Running Locally

Open `index.html` directly in a browser. No build step or local server is required.
