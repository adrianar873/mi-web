const q={name:"java",category:"logos",note:"the steaming cup, glinting now and then",cols:42,rows:28,fps:30,options:{shine:5},palette:["#ef2e2f","#0077c1","#f57778","#59a7d7","#fac0c1","#b3d6ec","#ef2e2f","#0077c1","#f57778","#59a7d7","#fac0c1","#b3d6ec"]},b=String.raw`

                          \
                          dp
                         .8P
                        _p8
                      _p8P'
                    _p88"    __-
                 _p88P"  __pP"
               _p88P'  _p8"'
              \888"  _p8P
              d88'   d88,
              "88,   888q,
               "8p   '8888,
                 Yq,   Y888
                  'Y(   d8"
        .__p=^'        )P'       ^""Oqq,
      q888__________________pp='     "88
       '""""^YYYYYYY^"""""''         q8P
          _p/              _       _p8"
          "888qqqqqqqppq88888=  _)P""
              '""""""""''
           .pq____,..______,
        _,  "88888888888888P"
  ._pd^"''       ''''''             _p
  8888qq_______,......_________ppod^"  _
     '"""""^YYPPPPPPPPPPY^""""' ___pp0"'
         '^^==ooooooooooood00OPP"""'

`,j=String.raw`

                          \
                          dp
                         .8P
                        _p8
                      _p8P'
                    _p88"    __-
                 _p88P"  __pP"
               _p88P'  _p8"'
              \888"  _p8P
              d88'   d88,
              "88,   888q,
               "8p   '8888,
                 Yq,   Y888
                  'Y(   d8"
        .__p=^'        )P'       ^""Oqq,
      q888__________________pp='     "88
       '""""^YYYYYYY^"""""''         q8P
          _p/              _       _p8"
          "888qqqqqqqppq88888=  _)P""
              '""""""""''
           .pq____,..______,
        _,  "88888888888888P"
  ._pd^"''       ''''''             _p
  8888qq_______,......_________ppod^"  _
     '"""""^YYPPPPPPPPPPY^""""' ___pp0"'
         '^^==ooooooooooood00OPP"""'

`,v=String.raw`

                          0
                          00
                         000
                        000
                      00000
                    00000    000
                 000000  00000
               000000  00000
              00000  0000
              0000   0000
              0000   00000
               000   000000
                 000   0000
                  000   000
        1111111        000       1111111
      11111111111111111111111111     111
       111111111111111111111         111
          111              1       1111
          11111111111111111111  11111
              11111111111
           11111111111111111
        11  11111111111111111
  11111111       111111             11
  11111111111111111111111111111111111  1
     11111111111111111111111111 11111111
         111111111111111111111111111

`,E=.5,I=2,a=5,f=.9,L="8dbqpPYOo0",l=s=>s.slice(1,-1).split(`
`).map(P=>P.padEnd(q.cols));function N({shine:s=q.options.shine}={}){const{cols:P,rows:x}=q,r=l(b),h=l(j),y=l(v),g=q.palette.length/6,m=s>0?Math.max(s,I+.5):0;let c=1/0,i=-1/0;for(const Y of[r,h])Y.forEach((d,p)=>{for(let _=0;_<P;_++)d[_]!==" "&&(c=Math.min(c,_+f*p),i=Math.max(i,_+f*p))});const A=i-c+2*a;return(Y,{paper:d=!1,color:p}={})=>{const _=p?h:r,u=Y-E,M=m&&u>=0?c-a+A*(u%m)/I:-1/0,O=[];for(let t=0;t<x;t++){let S="";for(let n=0;n<P;n++){let e=_[t][n];if(e!==" "){const w=Math.abs(n+f*t-M);let o=w<a?1-w/a:0;o=o*o*(3-2*o),o>.55&&L.includes(e)&&(e="/"),p&&(p[t*P+n]=(d?0:3*g)+(o>.6?2:o>.25?1:0)*g+parseInt(y[t][n],36))}S+=e}O.push(S)}return O.join(`
`)}}export{N as default,q as meta};
