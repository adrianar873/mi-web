const P={name:"debian",category:"distros",note:"the red swirl, scanned now and then",cols:46,rows:28,fps:30,options:{scan:5},palette:["#a80030","#c65978","#e5b3c1","#c20037","#d7597d","#edb3c3"]},R=String.raw`

                 _pppqq____q__
             _pp888888888888888qpqp,
          _p888888888PPPPYP8888888888q,
        _p8888888P"            "Y888888q,
       p888888"                   "888888p
   _  q888P"                        Y88888p
    _p88P"                           )888"O
  ,_888"             ._pp0OOo(,       O888 :
  'd88P             q8"'      ''      "888,
  q88P            .pP                  888,
  |88P            qP             ,     888"
  q88|            8|                  '88P
  |88'            8b           _.     q88'
  d88.            )8p      __        q88'
  |88p           ~,"8q,            _p8Y
  '88b            ""("8q__    __pq8P"
   d88,              "YdPP88888P""'
   '8888p                '"^^'
    "888q
     "888p
      '888p
        "88q,
         'Y88q_
           'Y88q,
              "Y8qq_
                 '"YOo___,

`,k=String.raw`

                 __ppqq____q__
             _pp888888888888888qpqp,
          _p888888888PPPPYP8888888888q,
        _p8888888P"            "Y888888q,
       p888888"                   "888888p
   _  q8888"                        Y88888p
    _p888"                           )888"O
  ,_888"             ._pp0OOo(,       O888 :
  'd88P             q8"'      ''      "888,
  q888            .pP                  888,
  |88P            qP             ,     888"
  |88|            8|                  '88P
  |88'            8b           _.     q88'
  |88,            )8p      __        q88'
  |88p           ~,"8q,            _p8Y
  '88b            ""("8q__    __pq88"
   d88,              "YdPP88888PY"'
   '8888p                '"^^'
    "888q'
     "888p
      '888p
        "88q,
         'Y88q_
           'Y88q,
              "Y8qq_
                 '"YOo___,

`,v=String.raw`

                 0000000000000
             00000000000000000000000
          00000000000000000000000000000
        00000000000            0000000000
       00000000                   00000000
   0  000000                        0000000
    000000                           000000
  000000             0000000000       0000 0
  00000             0000      00      00000
  0000            000                  0000
  0000            00             0     0000
  0000            00                  0000
  0000            00           00     0000
  0000            000      00        0000
  0000           000000            0000
  0000            00000000    0000000
   0000              00000000000000
   000000                00000
    000000
     00000
      00000
        00000
         000000
           000000
              000000
                 000000000

`,j=.5,g=2,i=2,A=5,I="#$%&*+<=>?@[]{}",f=p=>p.slice(1,-1).split(`
`).map(_=>_.padEnd(P.cols));function D(p,_,q){let t=Math.imul(p,73856093)^Math.imul(_,19349663)^Math.imul(q,83492791);return t=Math.imul(t^t>>>13,1274126177),(t^t>>>16)>>>0}function H({scan:p=P.options.scan}={}){const{cols:_,rows:q,fps:t}=P,h=f(R),Y=f(k),x=f(v),O=P.palette.length/6,m=p>0?Math.max(p,g+.5):0;let c=q,r=-1;for(const e of[h,Y])e.forEach((l,o)=>{l.trim()&&(c=Math.min(c,o),r=Math.max(r,o))});const E=r-c+1+i+A;return(e,{paper:l=!1,color:o}={})=>{const T=o?Y:h,u=e-j,y=m&&u>=0?c+E*(u%m)/g:-1/0,N=Math.floor(e*t/2),M=[];for(let n=0;n<q;n++){const a=y-n,b=a>=0&&a<i?2:a>=i&&a<i+A?1:0;let w="";for(let s=0;s<_;s++){let d=T[n][s];if(d!==" "){if(b===2){const S=D(s,n,N);S%4&&(d=I[(S>>>2)%I.length])}o&&(o[n*_+s]=(l?0:3*O)+b*O+parseInt(x[n][s],36))}w+=d}M.push(w)}return M.join(`
`)}}export{H as default,P as meta};
