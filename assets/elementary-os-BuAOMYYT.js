const i={name:"elementary os",category:"distros",note:"the e in a ring, scanned now and then",cols:56,rows:28,fps:30,options:{scan:5},palette:["#64baff","#9ad2ff","#d1eaff","#64baff","#9ad2ff","#d1eaff"]},R=String.raw`

                  __pppq88888888qqqq__
              __p888PP"""''''''"""Y8888q_,
           _pp88P"'      _______     '"Y88qq,
         _p88P"      _pp8PP^^Y888q_      'Y88q,
       _p88"      _p88"'        'Y88_       "88q,
      _88P      _p8P"             "88p        "88_
     q88"      p88"                |88,        "88p
    q8P'     _p88"                  88|         '88p
   q88'     .888"                  .88'          '88p
  .88"      q88"                   q8P            "88,
  q8P      |88P                   q88            .p88p
  88|      d88|                  q8P'           _p8888
  88|      888'                _p8P            _88"|88
  88|      888,              _p8P"           _p88" |88
  88|      )88p            _p88"            q88P   |88
  d8b       888,         _p88"            _88P"    d8P
  '88,      '888_    ._p88P"           _p888"     \88'
   )88,      '888q_pp88P"           ._p88P"      .88(
    Y8q,   ___p888888_,         __pp888P'       .p8P
     Y88q888888P""O88888qqqqpp88888P"'         _88P
      "888"""       '"YP888888P""'            q88"
       'Y88_                                _88P'
         'Y88q_                          _p88P'
           '"888q_,                  __p888"'
              '"8888qq____________pp888P"'
                  '""Y888888888888P""'

`,k=String.raw`

                  __pppq88888888qqqq__
              __p888PP"""''''''"""Y8888q_,
           _pp88P"'      _______     '"Y88qq,
         _p88P"      _pp8PP^^Y888q_      'Y88q,
       _p88"      _p88"'        'Y88_       "88q,
      _88P      _p8P"             "88p        "88_
     q88"      p88"                |88,        "88p
    q8P'     _p88"                  88|         '88p
   q88'     .888"                  .88'          '88p
  .88"      q88"                   q8P            "88,
  q8P      |88P                   q88            .p88p
  88|      d88|                  q8P'           _p8888
  88|      888'                _p8P            _88"|88
  88|      888,              _p8P"           _p88" |88
  88|      )88p            _p88"            q88P   |88
  d8b       888,         _p88"            _88P"    d8P
  '88,      '888_    ._p88P"           _p888"     \88'
   )88,      '888q_pp88P"           ._p88P"      .88(
    Y8q,   ___p888888_,         __pp888P'       .p8P
     Y88q888888P""O88888qqqqpp88888P"'         _88P
      "888"""       '"YP888888P""'            q88"
       'Y88_                                _88P'
         'Y88q_                          _p88P'
           '"888q_,                  __p888"'
              '"8888qq____________pp888P"'
                  '""Y888888888888P""'

`,v=String.raw`

                  00000000000000000000
              0000000000000000000000000000
           00000000      0000000     00000000
         000000      00000000000000      000000
       00000      000000        00000       00000
      0000      00000             0000        0000
     0000      0000                0000        0000
    0000     00000                  000         0000
   0000     00000                  0000          0000
  0000      0000                   000            0000
  000      0000                   000            00000
  000      0000                  0000           000000
  000      0000                0000            0000000
  000      0000              00000           00000 000
  000      0000            00000            0000   000
  000       0000         00000            00000    000
  0000      00000    0000000           000000     0000
   0000      000000000000           0000000      0000
    0000   000000000000         000000000       0000
     000000000000000000000000000000000         0000
      0000000       00000000000000            0000
       00000                                00000
         000000                          000000
           00000000                  00000000
              0000000000000000000000000000
                  00000000000000000000

`,j=.5,y=2,c=2,A=5,I="#$%&*+<=>?@[]{}",Y=t=>t.slice(1,-1).split(`
`).map(n=>n.padEnd(i.cols));function D(t,n,s){let _=Math.imul(t,73856093)^Math.imul(n,19349663)^Math.imul(s,83492791);return _=Math.imul(_^_>>>13,1274126177),(_^_>>>16)>>>0}function H({scan:t=i.options.scan}={}){const{cols:n,rows:s,fps:_}=i,h=Y(R),d=Y(k),b=Y(v),m=i.palette.length/6,u=t>0?Math.max(t,y+.5):0;let o=s,f=-1;for(const e of[h,d])e.forEach((r,P)=>{r.trim()&&(o=Math.min(o,P),f=Math.max(f,P))});const x=f-o+1+c+A;return(e,{paper:r=!1,color:P}={})=>{const E=P?d:h,M=e-j,T=u&&M>=0?o+x*(M%u)/y:-1/0,N=Math.floor(e*_/2),g=[];for(let p=0;p<s;p++){const a=T-p,S=a>=0&&a<c?2:a>=c&&a<c+A?1:0;let w="";for(let q=0;q<n;q++){let l=E[p][q];if(l!==" "){if(S===2){const O=D(q,p,N);O%4&&(l=I[(O>>>2)%I.length])}P&&(P[p*n+q]=(r?0:3*m)+S*m+parseInt(b[p][q],36))}w+=l}g.push(w)}return g.join(`
`)}}export{H as default,i as meta};
