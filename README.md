lms -frontend 
#### setup instructions ###
step1: setup
install the git in laptop /computer and open that application 

================================================================
step 2: ###install###
type this command :  npm create vite@latest

================================================
step 3:   #### select the name according to you.###
and select the React framework and javascript
> npx
> cva

|
o  Project name:
|  lms-frontend   
|
o  Select a framework:
|  React
|
o  Select a variant:
|  JavaScript
|
o  Scaffolding project in C:\Users\RAHUL SHARMA\lms-frontend...
|
—  Done. Now run:

  cd lms-frontend
  npm install
  npm run dev

================================================================
step 4 : after this all thing you need to check the file is created or not 
type this command :  cd lms-frontend
================================================
step 5 : if file is created then 
type this command : npm install
================================================
when you enter this command : npm install  then you see this 
----------------------------------------------------------------
added 150 packages, and audited 151 packages in 28s

30 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

================================================
step 6 : now type this command   :     npm run dev
then this command show this information and help to run the server 
----------------------------------------------------------------
> lms-frontend@0.0.0 dev
> vite


  VITE v6.2.3  ready in 1571 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help


and you want to open a new connection then click the local 
================================================
 now if your connnection is working that mean this is good to go 
================================================================
 step 7:  ctrl +c 
 this help to close the connection
================================================
step 8: open in vs code by the help of this command 
type this command : code .
----------------------------------------------------------------
and also  go to github and create a new repository
===================================================
step 9: after open vs code  go back to  git and 
type this command :  git init
----------------------------------------------------------------
after this  command you see this output 

Initialized empty Git repository in C:/Users/RAHUL SHARMA/lms-frontend/.git/

================================================
step 10:  after initialization
type this command : git add .
----------------------------------------------------------------
if this command is not working then do chatgpt and take help 
================================================
step 11: after add 
type this command : git commit -m "setting up plain vite project done"
----------------------------------------------------------------
then this command show this output
----------------------------------------------------------------
[master (root-commit) 6e00add] setting up plain vite project done
 12 files changed, 2879 insertions(+)
 create mode 100644 .gitignore
 create mode 100644 README.md
 create mode 100644 eslint.config.js
 create mode 100644 index.html
 create mode 100644 package-lock.json
 create mode 100644 package.json
 create mode 100644 public/vite.svg
 create mode 100644 src/App.css
 create mode 100644 src/App.jsx
 create mode 100644 src/index.css
 create mode 100644 src/main.jsx
 create mode 100644 vite.config.js

================================================================================
step 12:
type this command :  git checkout -b master
---------------------------------------------------------------- 
if output show like this :
fatal: a branch named 'master' already exists
then don't be Tremble that mean --------------------------------
means that you're trying to create a new branch (-b master), but a branch named master already exists in your repository.
================================================================================

step 13: use this command to check the master branch
type this command:   git checkout master
---
the output will look something like
Already on 'master'
================================================================================
step 14: use this command to this remote command is also available in your github when you crate the repository
type this command:  git remote add origin https://github.com/Rahu1007/lms-frontend.git
 ----------------------------------------------------------------
step 15: this command is also available in your github when you are using
type this command : git push origin master
---------------------------------------------------------------- the output look like this :
Enumerating objects: 15, done.
Counting objects: 100% (15/15), done.
Delta compression using up to 8 threads
Compressing objects: 100% (13/13), done.
Writing objects: 100% (15/15), 24.53 KiB | 3.50 MiB/s, done.
Total 15 (delta 0), reused 0 (delta 0), pack-reused 0 (from 0)
To https://github.com/Rahu1007/lms-frontend.git
 * [new branch]      master -> master

