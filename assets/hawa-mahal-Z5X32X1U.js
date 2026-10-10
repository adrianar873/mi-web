const S={name:"hawa mahal",category:"objects",note:"jaipur's palace of winds at night, lamps behind the jali",cols:61,rows:24,fps:10},p=String.raw`
                        '
                       .^.
                 '   .-' '-.   '
                .^.  (+++++)  .^.
              __|_|__|+++++|__|_|__
              .-^-..^..-^-..^..-^-.
          '   (+++)(+)(+++)(+)(+++)   '
         .^.  |+++||+||+++||+||+++|  .^.
        _|_|__|___________________|__|_|_
        .^..^..-^-..^..-^-..^..-^-..^..^.
   '    (+)(+)(+++)(+)(+++)(+)(+++)(+)(+)    '
  .^.   |+||+||+++||+||+++||+||+++||+||+|   .^.
__|_|___|_______________________________|___|_|__
.^..-^-..^..^..-^-..^..-^-..^..-^-..^..^..-^-..^.
(+)(+++)(+)(+)(+++)(+)(+++)(+)(+++)(+)(+)(+++)(+)
|+||+++||+||+||+++||+||+++||+||+++||+||+||+++||+|
=================================================
.-..---..-..-..---..-..---..-..---..-..-..---..-.
(+)(+++)(+)(+)(+++)(+)(+++)(+)(+++)(+)(+)(+++)(+)
|+||+++||+||+||+++||+||+++||+||+++||+||+||+++||+|
/^\/'^'\/^\/^\/'^'\/^\/'^'\/^\/'^'\/^\/^\/'^'\/^\
|+||+++||+||+||+++||+||+++||+||+++||+||+||+++||+|
|+||+++||+||+||+++||+||+++||+||+++||+||+||+++||+|
|_||___||_||_||___||_||___||_||___||_||_||___||_|`.slice(1).split(`
`),$=[[0,4,.9,0],[1,15,1.3,2],[3,8,.7,4],[6,2,1.1,1],[0,53,1.2,3],[2,45,.8,5],[4,57,1,.5],[7,52,1.4,2.5]],b=.3,y=.3,A=1.8,F=[["·",":"],[":","+"],["+","#"]];function I(r){let a=r|0;return()=>{a=a+1831565813|0;let n=Math.imul(a^a>>>15,1|a);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296}}const R=(r,a)=>{let n=Math.imul(r+1,668265261)^Math.imul(a+1,374761393);return n=Math.imul(n^n>>>15,2246822507),((n^n>>>13)>>>0)/4294967296};function k(){const{cols:r,rows:a}=S,n=Math.floor((r-49)/2),f=I(8),d=Array.from({length:a},(o,_)=>{const t=[...(" ".repeat(n)+(p[_]??"")).padEnd(r)];if(_===a-1)for(let e=0;e<r;e++)t[e]===" "&&(t[e]="_");return t}),w=p.findIndex(o=>o.startsWith("="));d[w][n-1]=d[w][n+49]="=";const x=[],M=new Map;let l=0;p.forEach((o,_)=>{for(const t of o.matchAll(/\++/g)){const e=M.get(`${_-1},${t.index}`)??l++;M.set(`${_},${t.index}`,e);for(let s=0;s<t[0].length;s++)x.push([_,n+t.index+s,e,t.index+s+_&1])}});const i=new Array(l).fill(!1);for(let o=Math.round(b*l);o>0;){const _=f()*l|0;i[_]||(i[_]=!0,o--)}const u=new Float64Array(l).fill(-99);for(let o=3;o>0;){const _=f()*l|0;!i[_]&&u[_]<-9&&(u[_]=-A*(.3+.5*f()),o--)}let m=.2,h=0;const E=o=>{for(;m<=o;){const _=i.filter(Boolean).length/l,t=f()<.5+(b-_)*3,e=[];for(let c=0;c<l;c++)i[c]!==t&&e.push(c);const s=e[f()*e.length|0];s!==void 0&&(i[s]=t,u[s]=m),m+=.3+f()*.5}},j=o=>{const _=h-u[o];return i[o]?_<y||R(o,Math.floor(h*10+1e-6))<.03?1:2:_<.2?2:_<A?1:0};return o=>{h+=Math.min(Math.max(o-h,0),1),E(h);const _=d.map(t=>t.slice());for(const[t,e,s,c]of x)_[t][e]=F[j(s)][c];for(const[t,e,s,c]of $){const g=Math.sin(s*h+c);_[t][e]=g>.85?"*":g>-.3?"·":"."}return _.map(t=>t.join("")).join(`
`)}}export{k as default,S as meta};
