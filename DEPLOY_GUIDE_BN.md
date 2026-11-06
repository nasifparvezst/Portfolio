# Portfolio update — GitHub + Vercel (Bangla Guide)

এই ZIP-এ Portfolio-র **React + Vite** version আছে। এটি নতুন repository না বানিয়ে আগের GitHub `nasifparvezst/Portfolio` repository-তেই ব্যবহার করতে হবে, তাহলে আগের Vercel URL ব্যবহার করা যাবে।

## VS Code / Git দিয়ে update

1. আগের repository-র একটি backup রাখুন। চাইলে GitHub-এ branch তৈরি করে কাজ করুন।
2. VS Code-এ আগের `Portfolio` project folder খুলুন।
3. এই ZIP extract করে **ZIP-এর ভেতরের `Nasif-Parvez-Portfolio` folder-এর সব contents** আগের project-এর root folder-এ copy করুন। `src`, `public`, `package.json`, `index.html`, `README.md` এবং `vercel.json` root-এ থাকতে হবে।
4. আগের `style.css` এবং `script.js` ফাইল delete করুন। এগুলো আর এই version-এ ব্যবহার হয় না এবং পুরোনো অপ্রয়োজনীয় content রাখতে পারে। **আগের `ForCV.png` ফাইল delete করবেন না**—এটি original profile photo হিসেবে ব্যবহৃত হয়।
5. Terminal-এ চালান:

   ```bash
   npm install
   npm run dev
   ```

6. Browser-এ local portfolio দেখে নিন। এরপর:

   ```bash
   npm run build
   git add -A
   git commit -m "Update QA portfolio with React"
   git push origin main
   ```

7. Vercel Dashboard → `portfolio` → Deployments-এ গিয়ে নতুন build **Ready** হয়েছে কি না দেখুন। Production Branch `main` না হলে সেই branch অনুযায়ী push করুন।

## মনে রাখবেন

- নতুন Vercel project তৈরি করার দরকার নেই।
- Contact form ব্যবহার করতে **FormSubmit activation email** verify করতে হবে; প্রথমবার form test করে দেখুন। বিকল্প email-app link সবসময় আছে।
- আসল CV PDF না দেওয়ায় এখন `Request my CV` button আছে। আসল PDF `public/`-এ রেখে `src/data/site.js` ফাইলের `resumeUrl` update করলে `Download CV` হবে।
- Original profile picture GitHub-এর `ForCV.png` থেকে load হয়। পুরোনো repository-র root-এ থাকা `ForCV.png` delete করবেন না। সাইট পুরোপুরি self-contained করতে চাইলে `public/images/ForCV.png`-এ আসল ফাইল copy করে `photoUrl` local path দিন।
- Project documentation-এর আসল link পাওয়া গেলে `src/data/site.js`-এ `documentationUrl` update করুন। কোনো sample/fake evidence দেওয়া হয়নি।
- আগে `npm run build` সফল করে তারপর push করুন।


## Revised design and local preview

- The earlier NP / Nasif Parvez header, simpler original-style headings, and Inter typography have been restored. Scroll reveals, card hover motion and an animated learning timeline are included.
- The hero types Nasif Parvez repeatedly, leaves the complete name visible for 3 seconds, and respects reduced-motion preferences. The portrait remains a vertical 4:5 rectangle, with subtle orbit rings and floating QA badges around it.
- This is still a React + Vite project: do NOT use VS Code Live Server (port 5500). Use `npm run dev` and open the Vite URL (usually http://localhost:5173/).
- If `npm` works in Windows Command Prompt but not in VS Code, restart VS Code and choose Command Prompt as the terminal profile.
- Please preserve the original `ForCV.png` image in your GitHub repository or copy it to `public/images/ForCV.png` and switch `photoUrl` to `/images/ForCV.png` in `src/data/site.js`. No replacement portrait has been invented.


## Facebook ও Phone Contact
- Facebook: `https://www.facebook.com/nniloy732/` — Hero, Contact ও Footer-এ clickable link আছে।
- Phone: `+8801882461759` — Hero, Contact ও Footer-এ click-to-call link আছে।
- নম্বর পরিবর্তন করতে `src/data/site.js`-এর `profile.phone` value update করুন।


## November 2026 — Academic projects and interactive animations
- Academic & Technical Projects section-এ **University Management System (UMS)**, **Interactive 3D Smart Museum**, **FindBack** যোগ হয়েছে। আগের ভুল নামের প্রকল্পটি সরানো হয়েছে। Contact Book আগের মতো আছে।
- 3D Museum-এর **View on GitHub** button project source খুলবে; FindBack-এর **Earlier GitHub version** button পুরোনো public code খুলবে। UMS-এর কোনো verified repository link পাওয়া যায়নি বলে link দেওয়া হয়নি।
- FindBack এখন **Completed Full-Stack Project** হিসেবে প্রদর্শিত হয়। Next.js, React, TypeScript, Supabase এবং PostgreSQL tech stack যোগ হয়েছে। পুরোনো frontend-only description বাদ দেওয়া হয়েছে।
- FindBack-এর public GitHub repository-তে এখনো পুরোনো frontend version আছে, তাই card-এর GitHub link-এ **Earlier GitHub version** লেখা রয়েছে। Latest project code GitHub-এ push করার পর `src/data/site.js`-এ `sourceLabel` ও `sourceNote` পরিবর্তন করতে পারবেন।
- Profile photo আগের **4:5 rectangle** রাখা হয়েছে। Mouse move করলে subtle 3D tilt হবে; Scroll করলে QA এবং academic project numbers count-up হবে; Mouse-এর সঙ্গে হালকা spotlight effect চলবে। Mobile / reduced-motion preference-এ effects বন্ধ থাকবে।
- ZIP-এর সমস্ত content আগের GitHub-connected `Portfolio` folder-এ copy করে `npm install`, `npm run dev`, `npm run build` দিয়ে পরীক্ষা করুন। Vite project Live Server দিয়ে চালাবেন না।
