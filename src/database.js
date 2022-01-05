const products = [
  {
      'name':'converse',
      'detail':'コンバース オールスター HI CANVAS ALL STAR HI ブラック',
      'data1':{
           'platform':'amazon',
           'price':5280,
           'link':'https://www.amazon.co.jp/%E3%82%B3%E3%83%B3%E3%83%90%E3%83%BC%E3%82%B9-%E3%82%AD%E3%83%A3%E3%83%B3%E3%83%90%E3%82%B9-%E3%82%AA%E3%83%BC%E3%83%AB%E3%82%B9%E3%82%BF%E3%83%BC-%E3%83%8F%E3%82%A4%E3%82%AB%E3%83%83%E3%83%88-24-5cm%EF%BC%88USA6%EF%BC%89/dp/B07WRZN82L/ref=asc_df_B07WRZN82L/?tag=jpgo-22&linkCode=df0&hvadid=385769710993&hvpos=&hvnetw=g&hvrand=9970550090460371613&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1009314&hvtargid=pla-894497729517&psc=1',
           'imgfile':'https://m.media-amazon.com/images/I/417VP3B5n2S._AC_.jpg'},
      'data2':{
           'platform':'mercari',
           'price':3000,
           'link':'https://jp.mercari.com/item/m40051551065?mtm_source=ssc_reg&gclid=Cj0KCQiA_JWOBhDRARIsANymNOZHlZKcQBLpZ5laitkr4YrM4aGDMAXpTbeMK6DxK4dan--tGdDA8MEaApZjEALw_wcB',
           'imgfile':'https://static.mercdn.net/item/detail/orig/photos/m66149952021_1.jpg?1638000241'},
      'data3':{
           'platform':'楽天',
           'price':5280,
           'link':'https://item.rakuten.co.jp/esports/9185030090500/?scid=af_pc_etc&sc2id=af_113_0_10001868&gclid=Cj0KCQiA5OuNBhCRARIsACgaiqVBezNj1wvf0ca2drNaQ7bm89g5nZbHCi00m7SYSjoEjpvLFD3ncycaAtVOEALw_wcB&icm_acid=255-776-8501&icm_agid=128181086045&icm_cid=15280932236&rafct=i_1',
          'imgfile':'https://thumbnail.image.rakuten.co.jp/@0_mall/esports/cabinet/9185-3/9185030090500.jpg'},
   },
   {
      'name':'ari force',
      'detail':'supreme air force 1 flax',
      'data1':{
           'platform':'amazon',
           'price':29800,
           'link':'https://www.amazon.co.jp/%E3%83%8A%E3%82%A4%E3%82%AD-SUPREME- %E3%82%B7%E3%83%A5%E3%83%97%E3%83%AA%E3%83%BC%E3%83%A0-DN1555-200-measurement_29_point_0_centimeters/dp/B09MCTNTY9/ref=sr_1_3_sspa?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&keywords=Air+force&qid=1639723373&sr=8-3-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFNWENZUTVLWk9TTzkmZW5jcnlwdGVkSWQ9QTA2NTk5MDJPUFRFRkE3OFM5MUwmZW5jcnlwdGVkQWRJZD1BMTNVOFZaUEtGVkZERCZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=',
           'imgfile':'https://m.media-amazon.com/images/I/51SRzvy4OVL._AC_UL1200_.jpg'},
      'data2':{
           'platform':'mercari',
           'price':35900,
           'link':'https://jp.mercari.com/item/m58326315889',
           'imgfile':'https://static.mercdn.net/item/detail/orig/photos/m58326315889_1.jpg?1636635028'},
      'data3':{
           'platform':'rakuten',
           'price':31000,
           'link':'https://item.rakuten.co.jp/mememori/itk-sup-nike-af1-2021-brown/',
           'imgfile':'https://image.rakuten.co.jp/mememori/cabinet/toppage/07264268/075476001/imgrc0108910541.jpg'}
   },
   {
      'name':'air max',
      'detail':'air max 270 react bauhaus',
      'data1':{
           'platform':'amazon',
           'price':10000,
           'link':'https://www.amazon.co.jp/ナイキ-ランニング-Bauhaus-Phantom-BQ0102-001/dp/B07VD4GXBQ',
           'imgfile':'https://m.media-amazon.com/images/I/61C4UdZX3BL._AC_UL1500_.jpg'},
      'data2':{
           'platform':'mercari',
           'price':7300,
           'link':'https://jp.mercari.com/item/m28719521308',
           'imgfile':'https://static.mercdn.net/item/detail/orig/photos/m28719521308_1.jpg?1623853121'},
      'data3':{
           'platform':'rakuten',
           'price':26800,
           'link':'https://item.rakuten.co.jp/jordan23/19_61043753_5/?scid=af_pc_etc&sc2id=af_113_0_10001868&rafct=i_1&icm_agid=61447687168&icm_acid=834-739-7270&icm_cid=1423253501&gclid=Cj0KCQiA5OuNBhCRARIsACgaiqWvHxuLqbQffWYwNHa7BUi7b9outRQFHIfKKHcQJCsoRQ-rISsHbUEaAiL4EALw_wcB',
           'imgfile':'https://shop.r10s.jp/jordan23/cabinet/19_1/18/19_61043753_1_1.jpg'}
    },
    {
            'name':'ADIDAS',
            'detail':'STAN SMITH FX5501',
            'data3':{
               'platform':'楽天',
                 'price':8480,
                 'link':'https://item.rakuten.co.jp/kutsu-collection/10020260/',
                 'imgfile':'https://image.rakuten.co.jp/kutsu-collection/cabinet/1/10/1002a/10020260-1.jpg'},
            'data1':{
              'platform':'amazon',
            'price':11900,
            'link':'https://www.amazon.co.jp/%E3%82%A2%E3%83%87%E3%82%A3%E3%83%80%E3%82%B9-%E3%82%B9%E3%82%BF%E3%83%B3%E3%82%B9%E3%83%9F%E3%82%B9-STANSMITH-FX7519-24-5cm/dp/B09MK7DFV6/ref=sr_1_1_sspa?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&keywords=%E3%82%B9%E3%83%8B%E3%83%BC%E3%82%AB%E3%83%BC&qid=1639724619&refinements=p_89%3Aadidas(%E3%82%A2%E3%83%87%E3%82%A3%E3%83%80%E3%82%B9)&rnid=2321255051&s=shoes&sr=1-1-spons&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFZUDFDT09DM1VSTlImZW5jcnlwdGVkSWQ9QTAyNzA3NTFaM0hJSkRGVDJIOFcmZW5jcnlwdGVkQWRJZD1BMkFRUTk0TjZMWlg4NyZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU&th=1&psc=1',
            'imgfile':'https://m.media-amazon.com/images/I/51yVTu-cujL._AC_UL1000_.jpg'},
            'data2':{
              'platform':'メルカリ',
            'price':7200,
            'link':'https://jp.mercari.com/item/m44597529449',
            'imgfile':'https://static.mercdn.net/item/detail/orig/photos/m44597529449_1.jpg?1639525018'},
    },
    {
          'name':'瞬足',
          'detail':'瞬足 SK2310',
          'data3':{
               'platform':'楽天',
                 'price':3300,
                 'link':'https://item.rakuten.co.jp/achilles-shop/skf2310-nb/',
                 'imgfile':'https://shop.r10s.jp/achilles-shop/cabinet/19aw-0712/skf2310-nb-1.jpg',
               },
            'data1':{
              'platform':'amazon',
            'price':3000,
            'link':'https://www.amazon.co.jp/%E3%82%B7%E3%83%A5%E3%83%B3%E3%82%BD%E3%82%AF-%E7%9E%AC%E8%B6%B3-15-22cm-SKF-2310/dp/B07NQV2SDD/ref=sr_1_1_sspa?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&keywords=%E3%82%B9%E3%83%8B%E3%83%BC%E3%82%AB%E3%83%BC&qid=1639725261&rnid=2321255051&s=shoes&sr=1-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFIMzJWRFBET1ZGSlMmZW5jcnlwdGVkSWQ9QTEwMDEwMzIzRVE5OElIVTJVQkkzJmVuY3J5cHRlZEFkSWQ9QTJISlg3SjFaSERQSU8md2lkZ2V0TmFtZT1zcF9hdGYmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl',
            'imgfile':'https://m.media-amazon.com/images/I/61sh5q8CsAL._AC_UL1500_.jpg',
          },
            'data2':{
              'platform':'メルカリ',
            'price':1600,
            'link':'https://jp.mercari.com/item/m56944683654',
            'imgfile':'https://static.mercdn.net/item/detail/orig/photos/m56944683654_1.jpg?1632658466'
          },
    }
]

export {products}
