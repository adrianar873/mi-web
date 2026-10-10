const e={name:"kali linux",category:"distros",note:"the blue dragon, scanned now and then",cols:71,rows:27,fps:30,options:{scan:5},palette:["#287aff","#73a9ff","#bfd7ff","#287aff","#73a9ff","#bfd7ff"]},N=String.raw`

       ''''""""""^YYY0bqqqq___,
                          '""^Y88qq__
                ___________________"Y8p
       __,ooOYYY"""""""""""""""""""YY/b
  .'"'''                 .___pppp88888O,        .
                   __pp88PY"""'        8p,       ':-_
              ._pdP""'                 _888qqqqqq___'"~_
           _oY""                     p88P"""""""Y888qp_|Y_
        .""                        _88"             ""888qq,
                                   d8"                  "888_
                                  :88                    '"Y8q_
                                  '88,                       "P"
                                   88q,
                                    O88_,
                                     "888qq_______,
                                        ""Y888888888888qpq__,
                                                    ''"^88q/Y0q_
                                                          "Yq_ "Oq,
                                                            'Oq, 'O_
                                                              "q,  "(
                                                               "b   )
                                                                ),
                                                                 \
                                                                 |
                                                                  '

`,R=String.raw`

       ''''""""""^YYY0bqqqq___,
                          '""^Y88qq__
                ___________________"Y8p
       __,ooOYYY"""""""""""""""""""YY/b
  .'"'''                 .___pppp88888O,        .
                   __pp88PY"""'        8p,       ':-_
              ._pdP""'                 _888qqqqqq___'"~_
           _oY""                     p88P"""""""Y888qp_|Y_
        .""                        _88"             ""888qq,
                                   d8"                  "888_
                                  :88                    '"Y8q_
                                  '88,                       "P"
                                   88q,
                                    O88_,
                                     "888qq_______,
                                        ""Y888888888888qpq__,
                                                    ''"^88q/Y0q_
                                                          "Yq_ "Oq,
                                                            'Oq, 'O_
                                                              "q,  "(
                                                               "b   )
                                                                ),
                                                                 \
                                                                 |
                                                                  '

`,v=String.raw`

       000000000000000000000000
                          00000000000
                00000000000000000000000
       00000000000000000000000000000000
  000000                 000000000000000        0
                   000000000000        000       0000
              00000000                 00000000000000000
           00000                     000000000000000000000
        000                        0000             00000000
                                   000                  00000
                                  000                    000000
                                  0000                       000
                                   0000
                                    00000
                                     00000000000000
                                        000000000000000000000
                                                    000000000000
                                                          0000 0000
                                                            0000 000
                                                              000  00
                                                               00   0
                                                                00
                                                                 0
                                                                 0
                                                                  0

`,L=.5,w=2,Y=2,x=5,A="#$%&*+<=>?@[]{}",h=n=>n.slice(1,-1).split(`
`).map(o=>o.padEnd(e.cols));function j(n,o,a){let _=Math.imul(n,73856093)^Math.imul(o,19349663)^Math.imul(a,83492791);return _=Math.imul(_^_>>>13,1274126177),(_^_>>>16)>>>0}function D({scan:n=e.options.scan}={}){const{cols:o,rows:a,fps:_}=e,u=h(N),O=h(R),I=h(v),d=e.palette.length/6,m=n>0?Math.max(n,w+.5):0;let p=a,f=-1;for(const c of[u,O])c.forEach((l,q)=>{l.trim()&&(p=Math.min(p,q),f=Math.max(f,q))});const k=f-p+1+Y+x;return(c,{paper:l=!1,color:q}={})=>{const E=q?O:u,b=c-L,T=m&&b>=0?p+k*(b%m)/w:-1/0,y=Math.floor(c*_/2),M=[];for(let t=0;t<a;t++){const i=T-t,P=i>=0&&i<Y?2:i>=Y&&i<Y+x?1:0;let g="";for(let s=0;s<o;s++){let r=E[t][s];if(r!==" "){if(P===2){const S=j(s,t,y);S%4&&(r=A[(S>>>2)%A.length])}q&&(q[t*o+s]=(l?0:3*d)+P*d+parseInt(I[t][s],36))}g+=r}M.push(g)}return M.join(`
`)}}export{D as default,e as meta};
