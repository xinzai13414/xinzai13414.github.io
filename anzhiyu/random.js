var posts=["post/c6b2a2fd.html","post/f8f1fb54.html","post/74750b31.html","post/81b224e1.html","post/f5fba2c3.html","post/2e5216dd.html","post/6ac19130.html","post/f736596e.html","post/8212ff63.html","post/6f76074c.html","post/5bdb5548.html","post/e2246be5.html","post/9b06d854.html","post/7422213c.html","post/6271a51c.html","post/df718222.html","post/3b48d11a.html","post/804ae251.html","post/b70ae4e7.html","post/3ec1fd44.html","post/bec635c1.html","post/d20e58f5.html","post/2ec6e870.html","post/6c3f8114.html","post/cb87841d.html","post/5f6e69ef.html","post/79959306.html","post/1f293ccb.html","post/812d49a5.html","post/def84ee6.html","post/6a2c2bbd.html","post/75e75572.html","post/ca0fcd03.html","post/ded373.html","post/74955f2f.html","post/43a94ea1.html","post/6749388c.html","post/86a3300e.html","post/fe7ab1f0.html","post/a920af81.html","post/76fa8c0d.html","post/a24af109.html","post/3ccb602.html","post/8f9052f9.html","post/f1dbdc9f.html","post/5883a4af.html","post/3e1167ea.html","post/9e25cba9.html","post/26831432.html","post/fbc82303.html","post/1b3fd879.html","post/fbc0ae86.html","post/3cc3da73.html","post/c46a5cd3.html","post/4a789563.html","post/5c2f197a.html","post/b2041fc0.html","post/cf0c504a.html","post/66861d4a.html","post/2d17b932.html","post/8c9aed93.html","post/a0b1b02e.html","post/8212f318.html","post/17bf8c68.html","post/57da986d.html","post/ee96f7a4.html","post/72b1c7b1.html","post/df95841.html","post/a8259cf6.html","post/de801b7c.html","post/7821492f.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };