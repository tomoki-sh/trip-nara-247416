/* =========================================================================
   奈良ドライブ 2026.8.2（おふさ観音 風鈴まつり・谷瀬は当日判断）  ―  データ & レンダリング
   情報の追加・変更は基本このファイルの DATA を編集すればOK。
   ========================================================================= */

/* ---------- 定数 ---------- */
const TYPE_LABELS = { spot: "スポット", restaurant: "レストラン", cafe: "カフェ" };
const TYPE_ICONS  = { spot: "🌿", restaurant: "🍽", cafe: "☕" };
const CAT_LABELS  = { confirmed: "確定", backup: "予備", warning: "要確認" };

/* ---------- データ ---------- */
const DATA = {
  /* === スポット === */
  spots: [
    {
      name: "近鉄八尾駅（集合・解散）",
      area: "大阪府八尾市",
      coords: [34.6297913, 135.6033559],
      category: "confirmed",
      images: ["images/yao.jpg", "images/yao_2.jpg"],
      gmapsPlaceId: "ChIJ08SWbqkgAWARSpZ3KxbU75o",
      badges: [
        { text: "起終点", cls: "priority-top" }
      ],
      ratings: {
        google: "3.6",
        googleReviews: "254"
      },
      desc: "11:00ピックアップ・20:00までに送り届ける地点の参照点。正確な乗降場所は当日調整。",
      meta: [
        ["役割", "集合・解散の参照点"],
        ["出発", "11:00（体調・飲み物・忘れ物を確認）"],
        ["帰着目標", "19:00〜19:30（上限20:00）"],
        ["備考", "乗車前に車内を冷やしておく"]
      ],
      maps: "近鉄八尾駅"
    },
    {
      name: "おふさ観音（風鈴まつり）",
      area: "橿原市小房町",
      coords: [34.503246, 135.79712],
      category: "confirmed",
      images: ["images/ofusa.jpg", "images/ofusa_2.jpg", "images/ofusa_3.jpg", "images/ofusa_4.jpg"],
      gmapsPlaceId: "ChIJi0N6hy4zAWAR8ht26iV3PpQ",
      links: [
        { label: "風鈴まつり", url: "https://www.ofusa.jp/highlights/windbell" },
        { label: "交通アクセス", url: "https://www.ofusa.jp/access" }
      ],
      badges: [
        { text: "今回の主目的地", cls: "priority-top" }
      ],
      ratings: {
        google: "4.1",
        googleReviews: "1702"
      },
      desc: "境内に3,000個を超える風鈴が下がる夏の名物。正式には高野山真言宗 別格本山 観音寺。",
      meta: [
        ["風鈴まつり", "7月1日〜9月30日"],
        ["入場", "8:30〜16:30（閉門17:00）"],
        ["料金", "境内無料／本堂内拝観500円"],
        ["滞在目安", "30〜50分（猛暑日は短縮）"],
        ["駐車", "西5台・南5台・第2駐車場12台。通常無料、イベント時500円の場合あり"]
      ],
      notes: "<strong>ナビは「おふさ観音第2駐車場」で検索:</strong> 寺名だけで指定すると狭い道へ誘導される恐れ。小房交差点では曲がらず、縄手町交差点側から進入する公式案内に従う。",
      maps: "おふさ観音第2駐車場"
    },
    {
      name: "谷瀬の吊り橋",
      area: "十津川村上野地",
      coords: [34.101336, 135.762785],
      category: "warning",
      images: ["images/tanize.jpg", "images/tanize_2.jpg", "images/tanize_3.jpg", "images/tanize_4.jpg"],
      gmapsPlaceId: "ChIJeyNmSm_vBmARHDQ4Zup5Qxw",
      links: [
        { label: "十津川村観光", url: "https://www.vill.totsukawa.lg.jp/traveling_guide/spot/view/" },
        { label: "奈良県道路情報", url: "https://www3.pref.nara.jp/road/" }
      ],
      badges: [
        { text: "14:15に判断", cls: "priority-warn" }
      ],
      ratings: {
        google: "4.3",
        googleReviews: "5851"
      },
      desc: "長さ297m・高さ54mの生活用吊り橋。当日の体力・天候・道路状況が揃ったときだけ向かう遠距離スポット。",
      meta: [
        ["渡橋", "無料"],
        ["駐車", "村営駐車場60台・普通車800円"],
        ["滞在", "30〜40分（橋の往復と写真のみ）"],
        ["撤収", "16:30出発厳守"],
        ["おふさ観音から", "約1時間50分〜2時間"]
      ],
      notes: "<strong>必ず当日朝に道路確認:</strong> 国道168号（十津川村平谷）が2026年6月29日から崩土で通行止め・復旧未定。平谷は上野地より南のため五條側からの往復には影響しない見込みだが、<strong>確定情報が出ていない</strong>。出発前とおふさ観音出発時に奈良県道路情報とナビを再確認する。屋外・高所・揺れがあり、同行者の体調と暑さを最優先。",
      maps: "谷瀬の吊り橋"
    },
    {
      name: "道の駅 吉野路大塔",
      area: "五條市大塔町阪本",
      coords: [34.214188, 135.732953],
      category: "backup",
      images: ["images/michinoeki.png", "images/michinoeki_2.jpg", "images/michinoeki_3.jpg", "images/michinoeki_4.jpg"],
      gmapsPlaceId: "ChIJn2SWVB_dBmARE8zepaWSl-4",
      links: [
        { label: "五條市の案内", url: "https://www.city.gojo.lg.jp/soshiki/kankoshinko/2_1/19359.html" }
      ],
      badges: [
        { text: "谷瀬ルートの休憩", cls: "priority-alt" }
      ],
      ratings: {
        google: "3.4",
        googleReviews: "1956"
      },
      desc: "谷瀬へ向かう途中のトイレ・飲み物・運転休憩地点。食事の主目的にはしない。",
      meta: [
        ["営業", "9:00〜17:00"],
        ["定休", "水曜（8/2は日曜のため営業）"],
        ["再開", "観光物産2026/5/1・飲食6/20に営業再開"],
        ["谷瀬まで", "約35分"]
      ],
      notes: "<strong>要確認:</strong> 飲食店舗は再開直後に営業日が限定されていた。立ち寄る場合も休憩地点として想定し、食事はあてにしない。",
      maps: "道の駅 吉野路大塔"
    },
    {
      name: "キトラ古墳壁画体験館 四神の館",
      area: "明日香村阿部山",
      coords: [34.45177, 135.805092],
      category: "backup",
      images: ["images/shijin.jpg", "images/shijin_2.jpg", "images/shijin_3.jpg", "images/shijin_4.jpg"],
      gmapsPlaceId: "ChIJ0Z9WRkHMBmARhxMzB6jvgTw",
      links: [
        { label: "明日香村観光", url: "https://asukamura.com/sightseeing/kitora-shijin-no-yakata/" }
      ],
      badges: [
        { text: "冷房・無料", cls: "priority-alt" }
      ],
      ratings: {
        google: "4.5",
        googleReviews: "719"
      },
      desc: "キトラ古墳の原寸大石室レプリカや四神の映像展示。冷房が効いて無料、疲労時の切替先の本命。",
      meta: [
        ["営業", "9:30〜17:00"],
        ["料金", "無料"],
        ["駐車", "あり"],
        ["休室", "1階保存管理施設は水曜（8/2は日曜のため開室）"],
        ["おふさ観音から", "約20分"]
      ],
      notes: "実物壁画の公開は特別公開時のみ・要申込。通常はレプリカと映像の展示。",
      maps: "キトラ古墳壁画体験館 四神の館"
    },
    {
      name: "橿原考古学研究所附属博物館",
      area: "橿原市畝傍町",
      coords: [34.492125, 135.791457],
      category: "backup",
      images: ["images/kashikoken.jpg", "images/kashikoken_2.jpg", "images/kashikoken_3.jpg", "images/kashikoken_4.jpg"],
      gmapsPlaceId: "ChIJK32pwdXMBmAROqmYO8QS1e4",
      links: [
        { label: "利用案内", url: "https://www.kashikoken.jp/museum/info/info.html" }
      ],
      badges: [
        { text: "おふさ観音から近い", cls: "priority-alt" }
      ],
      ratings: {
        google: "4.4",
        googleReviews: "860"
      },
      desc: "奈良の発掘資料をまとめて見られる県立博物館。おふさ観音から車で10分ほどの屋内代替。",
      meta: [
        ["営業", "9:00〜17:00（入館16:30まで）"],
        ["休館", "月曜（祝日は翌日）。8/2は日曜のため開館"],
        ["料金", "一般400円"],
        ["設備", "休憩室あり"],
        ["おふさ観音から", "約10分"]
      ],
      maps: "奈良県立橿原考古学研究所附属博物館"
    },
    {
      name: "奈良県立万葉文化館",
      area: "明日香村飛鳥",
      coords: [34.477404, 135.822966],
      category: "backup",
      images: ["images/manyo.jpg", "images/manyo_2.jpg", "images/manyo_3.jpg", "images/manyo_4.jpg"],
      gmapsPlaceId: "ChIJbZh9xobMBmARGm0Wli34kWw",
      links: [
        { label: "公式サイト", url: "https://www.manyo.jp/" }
      ],
      badges: [
        { text: "要・開館確認", cls: "priority-warn" }
      ],
      ratings: {
        google: "4.1",
        googleReviews: "1225"
      },
      desc: "万葉集をテーマにした県立施設。明日香の屋内代替候補で、ことだま・夢市茶屋とも近い。",
      meta: [
        ["おふさ観音から", "約20分"],
        ["駐車", "あり（無料）"]
      ],
      notes: "<strong>要確認:</strong> 開館時間・展示内容・駐車条件は旅行日に公式サイトで確認する（展示替え休館の可能性）。",
      maps: "奈良県立万葉文化館"
    }
  ],

  /* === レストラン === */
  restaurants: [
    {
      name: "イタリアンtoちょこっと和食En",
      area: "橿原市葛本町",
      coords: [34.520115, 135.79852],
      category: "backup",
      images: ["images/en.jpg", "images/en_2.jpg", "images/en_3.jpg", "images/en_4.jpg"],
      gmapsPlaceId: "ChIJJX114gYzAWARm7-1a2051HI",
      links: [
        { label: "公式サイト", url: "https://italian-en.owst.jp/" },
        { label: "ランチメニュー", url: "https://italian-en.owst.jp/lunches" },
        { label: "食べログ", url: "https://tabelog.com/nara/A2903/A290302/29014545/" }
      ],
      badges: [
        { text: "ランチ本命候補", cls: "priority-top" }
      ],
      ratings: {
        tabelog: "3.05",
        tabelogReviews: "5",
        google: "4.7",
        googleReviews: "97"
      },
      desc: "和×伊の創作料理。ルート・予算・デート感のバランスが今回の候補中で最良。",
      meta: [
        ["ランチ", "11:30〜15:00（料理L.O.14:00）"],
        ["価格", "A 1,980円／B 2,480円／C 3,580円"],
        ["おすすめ", "Bコース（スープ・前菜・パスタ・デザート・コーヒー・パン付）"],
        ["定休", "不定休（要確認）"],
        ["駐車", "あり"],
        ["ノンアル", "オールフリー・ソフトドリンクあり"]
      ],
      notes: "<strong>不定休のため当日朝に営業確認を。</strong> 前菜・スープ・パスタは日替わりなので、予約時にコース内容を聞いておくとスムーズ。谷瀬を残すなら滞在時間も相談する。",
      maps: "イタリアンtoちょこっと和食En 橿原"
    },
    {
      name: "ビストロラタトゥイユ La cuisine de まほろば",
      area: "橿原市常盤町（JAまほろばキッチン内）",
      coords: [34.521868, 135.817801],
      category: "backup",
      images: ["images/ratatouille.jpg", "images/ratatouille_2.jpg", "images/ratatouille_3.jpg", "images/ratatouille_4.jpg"],
      gmapsPlaceId: "ChIJa009Ha4zAWARKm7md4T_onk",
      links: [
        { label: "公式サイト", url: "https://la-ratatouille.com/nara/" },
        { label: "食べログ", url: "https://tabelog.com/nara/A2903/A290302/29012930/" }
      ],
      badges: [
        { text: "予算超過ぎみ", cls: "priority-alt" }
      ],
      ratings: {
        tabelog: "3.30",
        tabelogReviews: "45",
        google: "4.6",
        googleReviews: "65"
      },
      desc: "全国最大級の農産物直売所内のフレンチ。地元契約農家の野菜が主役で、無料駐車場が広い。",
      meta: [
        ["ランチ", "土日祝 11:00〜15:00（L.O.14:00）"],
        ["価格", "昼 3,850／4,400／6,600円"],
        ["定休", "8/2は日曜のため営業"],
        ["駐車", "無料・大型駐車場"],
        ["おふさ観音から", "約15分"]
      ],
      notes: "最安でも希望予算を上回り、コース時間も長め。<strong>谷瀬を外して食事とおふさ観音を丁寧に楽しむ日</strong>に向く。直売所併設で駐車が楽なのは利点。",
      maps: "ビストロラタトゥイユ まほろばキッチン橿原"
    },
    {
      name: "農村レストラン 夢市茶屋",
      area: "明日香村島庄（石舞台近く）",
      coords: [34.467211, 135.824597],
      category: "backup",
      images: ["images/yumeichi.jpg", "images/yumeichi_2.jpg", "images/yumeichi_3.jpg", "images/yumeichi_4.jpg"],
      gmapsPlaceId: "ChIJZ9pkv3nMBmARQGtEJdjAy2s",
      links: [
        { label: "公式サイト", url: "https://www.asukadeasobo.jp/visit/yumeichi/" },
        { label: "食べログ", url: "https://tabelog.com/nara/A2903/A290303/29000796/" }
      ],
      badges: [
        { text: "手頃・予約なし可", cls: "priority-alt" }
      ],
      ratings: {
        tabelog: "3.39",
        tabelogReviews: "143",
        google: "4.0",
        googleReviews: "385"
      },
      desc: "明日香産の野菜と古代米が主役の農村レストラン。石舞台古墳のすぐ近くでご当地感が高い。",
      meta: [
        ["営業", "土日祝 11:00〜17:00"],
        ["価格", "1,000〜2,000円程度"],
        ["定休", "年末年始のみ（8/2は営業）"],
        ["駐車", "19台"],
        ["名物", "古代米御膳・黒米カレー"]
      ],
      notes: "四神の館・ことだまと同じ明日香エリアなので、<strong>谷瀬を外す日は「ここで昼食→周辺の屋内施設」</strong>とまとめやすい。予約なしで入りやすく、短時間で済ませられる。",
      maps: "農村レストラン 夢市茶屋 明日香村"
    },
    {
      name: "五條 源兵衛",
      area: "五條市本町（新町通り）",
      coords: [34.349099, 135.693542],
      category: "backup",
      images: ["images/genbei.jpg", "images/genbei_2.jpg", "images/genbei_3.jpg", "images/genbei_4.jpg"],
      gmapsPlaceId: "ChIJy2AqOyLRBmARjtOrORXpLHM",
      links: [
        { label: "公式サイト", url: "https://genbei.info/" },
        { label: "ご予約", url: "https://genbei.info/reservation/" },
        { label: "お料理", url: "https://genbei.info/cuisine/" },
        { label: "食べログ", url: "https://tabelog.com/nara/A2905/A290501/29006074/" }
      ],
      badges: [
        { text: "ご当地感・目的地性が高い", cls: "priority-top" }
      ],
      ratings: {
        tabelog: "3.40",
        tabelogReviews: "58",
        google: "4.5",
        googleReviews: "175"
      },
      desc: "朝採れ五條野菜を軸にした町家レストラン。目的地性が高く、谷瀬ルートの途中にある。",
      meta: [
        ["ランチ", "11:00〜12:30／12:30〜14:00の2部・予約優先"],
        ["価格", "五條野菜コース5,500円〜／厳選8,500円〜"],
        ["定休", "火曜（8/2は日曜のため営業）"],
        ["おふさ観音まで", "約45分"],
        ["谷瀬まで", "約1時間15分"]
      ],
      notes: "朝採れ五條野菜と地元の醤油・味噌を軸にした町家レストラン。<strong>希望予算は上回る</strong>ので、谷瀬を外して食事を主役にする日向き。昼は2部制・予約優先。",
      maps: "五條 源兵衛"
    },
    {
      name: "柿の葉ずしヤマト 五條本店 大和鮨 夢宗庵",
      area: "五條市五條",
      coords: [34.352924, 135.700107],
      category: "backup",
      images: ["images/yamato.jpg", "images/yamato_2.jpg", "images/yamato_3.jpg", "images/yamato_4.jpg"],
      gmapsPlaceId: "ChIJp53d2BvRBmARxxh27gfeX6U",
      links: [
        { label: "公式サイト", url: "https://kakinoha.com/stores/gojo/" },
        { label: "食べログ", url: "https://tabelog.com/nara/A2905/A290501/29006336/" }
      ],
      badges: [
        { text: "予約なしで入りやすい", cls: "priority-alt" }
      ],
      ratings: {
        tabelog: "3.08",
        tabelogReviews: "101",
        google: "4.0",
        googleReviews: "583"
      },
      desc: "奈良名物・柿の葉ずしの本店併設食事処。通し営業・駐車35台で谷瀬ルートの時間調整に強い。",
      meta: [
        ["営業", "11:00〜21:30（L.O.21:00）"],
        ["価格", "1,000〜2,000円程度"],
        ["定休", "年中無休"],
        ["駐車", "普通車35台"],
        ["谷瀬まで", "約1時間10分"]
      ],
      notes: "<strong>通し営業（11:00〜21:30）・年中無休・駐車35台。</strong> 谷瀬ルートで時間が読めないときでも合わせやすい。奈良名物の柿の葉ずしはサバ・サケが主。",
      maps: "柿の葉ずしヤマト 五條本店"
    },
    {
      name: "ホテル 奈良さくらいの郷",
      area: "桜井市高家",
      coords: [34.488483, 135.840544],
      category: "backup",
      images: ["images/sakurai.jpg", "images/sakurai_2.jpg", "images/sakurai_3.jpg", "images/sakurai_4.jpg"],
      gmapsPlaceId: "ChIJi-guSlPLBmARFrBSxVsM-a8",
      links: [
        { label: "公式サイト", url: "https://hotelnarasakurai.com/" },
        { label: "食べログ", url: "https://tabelog.com/nara/A2903/A290302/29013349/" },
        { label: "カフェ・レストラン", url: "https://hotelnarasakurai.com/cafe" },
        { label: "館内案内", url: "https://hotelnarasakurai.com/guide" }
      ],
      badges: [
        { text: "予約不要・低負担", cls: "priority-alt" }
      ],
      ratings: {
        tabelog: "3.06",
        tabelogReviews: "11",
        google: "4.4",
        googleReviews: "213"
      },
      desc: "予約不要で入れるホテルランチ。冷房・トイレ・休憩環境が整い、疲労時の実用性は高い。",
      meta: [
        ["ランチ", "11:30〜15:30（L.O.14:30）"],
        ["価格", "1,800〜2,750円中心"],
        ["予約", "一般利用は不要"],
        ["定休", "木曜（8/2は日曜のため営業）"],
        ["駐車", "28台"]
      ],
      notes: "<strong>予約不要で確実に入れる</strong>のが最大の利点。冷房・トイレ・休憩環境が整うので、暑さで消耗した日の切り札になる。ヤマトポーク・黒毛和牛ハンバーグ2,100円、九重御膳2,750円など。",
      maps: "ホテル奈良さくらいの郷"
    },
    {
      name: "天如 ランチ☆おばんざい処",
      area: "磯城郡田原本町",
      coords: [34.551273, 135.790588],
      category: "warning",
      images: ["images/tennyo.jpg", "images/tennyo_2.jpg", "images/tennyo_3.jpg", "images/tennyo_4.jpg"],
      gmapsPlaceId: "ChIJ3_14MnA1AWAR0w1spLsruM0",
      links: [
        { label: "公式Instagram", url: "https://www.instagram.com/tawaramoto_tennnyo/" }
      ],
      badges: [
        { text: "情報が少ない", cls: "priority-warn" }
      ],
      ratings: {
        google: "5.0",
        googleReviews: "6"
      },
      desc: "田原本のおばんざい店。ノンアルでも楽しみやすいが、口コミが少なく情報の確実性が低い。",
      meta: [
        ["ランチ", "11:40〜15:00（要確認）"],
        ["定休", "火・水（要確認）"],
        ["駐車", "条件不明"],
        ["位置", "谷瀬へ南下するルートでは北寄り"]
      ],
      notes: "<strong>要確認:</strong> 営業時間・価格・駐車場が公式に確定できない。複数の小鉢・出汁の内容は当日確認。",
      maps: "天如 田原本"
    }
  ],

  /* === カフェ === */
  cafes: [
    {
      name: "茶房おふさ",
      area: "橿原市小房町（おふさ観音境内）",
      coords: [34.503808, 135.79706],
      category: "confirmed",
      images: ["images/sabo_ofusa.jpg", "images/sabo_ofusa_2.jpg", "images/sabo_ofusa_3.jpg", "images/sabo_ofusa_4.jpg"],
      gmapsPlaceId: "ChIJV6v0ii4zAWARWHnheAIx-I0",
      links: [
        { label: "公式サイト", url: "https://www.ofusa.jp/highlights/tearoom" }
      ],
      badges: [
        { text: "カフェ本命", cls: "priority-top" }
      ],
      ratings: {
        google: "4.3",
        googleReviews: "69"
      },
      desc: "境内奥の大正4年築の建物で、日本庭園「円空庭」を眺めながら休憩できる。移動ゼロが最大の利点。",
      meta: [
        ["営業", "10:00〜16:30（L.O.16:00）"],
        ["定休", "不定休"],
        ["夏季限定", "ふわふわのかき氷"],
        ["予約", "不可（先着）"],
        ["移動", "おふさ観音の境内＝移動ゼロ"]
      ],
      notes: "<strong>混雑・不定休なら無理に待たない。</strong> 待ちが長ければ四神の館・橿原考古学研究所附属博物館へ切り替える。移動ゼロで休めるのが最大の利点。",
      maps: "茶房おふさ 橿原"
    },
    {
      name: "caféことだま",
      area: "明日香村岡",
      coords: [34.469752, 135.822663],
      category: "backup",
      images: ["images/kotodama.jpg", "images/kotodama_2.jpg", "images/kotodama_3.jpg", "images/kotodama_4.jpg"],
      gmapsPlaceId: "ChIJ00ew3_jMBmARbxIlz3tsNnw",
      links: [
        { label: "公式サイト", url: "https://www.cafe-kotodama.com/" },
        { label: "予約について", url: "https://www.cafe-kotodama.com/about/reservation.html" },
        { label: "食べログ", url: "https://tabelog.com/nara/A2903/A290303/29000670/" }
      ],
      badges: [
        { text: "古民家・デート感", cls: "priority-alt" }
      ],
      ratings: {
        tabelog: "3.55",
        tabelogReviews: "325",
        google: "3.9",
        googleReviews: "950"
      },
      desc: "築約200年の元造り酒屋を改装した古民家カフェ。地元果物のパフェ・かき氷が夏の看板。",
      meta: [
        ["営業", "土日祝 10:00〜18:00（L.O.17:30）"],
        ["ランチ", "11:00〜13:30（90分制）"],
        ["定休", "火曜・第3水曜（8/2は日曜のため営業）"],
        ["駐車", "15台（入口が狭い）"],
        ["おふさ観音から", "約20分"]
      ],
      notes: "喫茶（14時以降）は予約不可・来店順。ランチは90分制で、席予約ができるのは11:00・11:30開始のみ。四神の館・夢市茶屋と同じ明日香エリアでまとめやすい。",
      maps: "caféことだま 明日香村"
    }
  ],

  /* === プラン例 === */
  plans: [
    {
      title: "プランA：谷瀬なし・最もゆったり（推奨基本形）",
      featured: true,
      route: "八尾 → 橿原でランチ → おふさ観音 → 茶房おふさ／屋内施設 → 八尾",
      items: [
        ["11:00", "八尾で同行者をピックアップ（体調・飲み物・忘れ物を確認）", "確定"],
        ["12:00", "橿原・明日香エリア到着", "確定"],
        ["12:15", "ランチ（Enなど。13:30までに退店）", "未確定"],
        ["13:45", "おふさ観音「風鈴まつり」（屋外30〜50分）", "確定"],
        ["14:35", "茶房おふさで休憩（混雑・不定休なら省略）", "未確定"],
        ["15:30", "四神の館／橿原考古学研究所附属博物館など冷房のある屋内", "未確定"],
        ["17:00", "大阪方面へ出発（渋滞があれば追加スポットを省略）", "確定"],
        ["18:15", "八尾帰着・同行者宅へ送る", "確定"],
        ["20:00", "送迎完了（ユーザーは姫路へ。眠気・疲労を再確認）", "確定"]
      ]
    },
    {
      title: "プランB：谷瀬の吊り橋を追加",
      route: "八尾 → 短めランチ → おふさ観音 → 14:15判断 → 道の駅 → 谷瀬 → 八尾",
      items: [
        ["11:00", "八尾でピックアップ", "確定"],
        ["12:00", "短めのランチ（13:10までに退店できる内容）", "未確定"],
        ["13:20", "おふさ観音（茶房は原則省略）", "確定"],
        ["14:10", "谷瀬へ行くか最終判断", "確定"],
        ["14:15", "条件を満たす場合のみ出発", "未確定"],
        ["15:10", "道の駅「吉野路大塔」でトイレ・飲み物・運転休憩", "未確定"],
        ["15:45", "谷瀬の吊り橋（橋の往復と写真で30〜40分）", "未確定"],
        ["16:30", "谷瀬を出発（厳守。追加観光は入れない）", "確定"],
        ["18:30", "八尾へ帰着（渋滞時は20時に近づく）", "確定"]
      ]
    },
    {
      title: "プランC：食事を主役にする日",
      route: "八尾 → 五條 源兵衛など予約ランチ → おふさ観音 → 茶房おふさ → 八尾",
      items: [
        ["11:00", "八尾でピックアップ", "確定"],
        ["12:30", "五條 源兵衛など目的地性の高い店で昼食", "未確定"],
        ["14:00", "橿原方面へ北上", "確定"],
        ["14:45", "おふさ観音", "確定"],
        ["15:35", "茶房おふさ又は短い休憩", "未確定"],
        ["16:20", "八尾へ出発", "確定"],
        ["17:30", "八尾帰着（最も余裕がある）", "確定"]
      ]
    },
    {
      title: "プランD：店の営業・対応が読めない場合",
      route: "八尾 → 確実に入れる店で軽食 → おふさ観音 → 屋内施設 → 八尾",
      items: [
        ["11:00", "八尾でピックアップ", "確定"],
        ["12:15", "確実に入れる店か、車内・休憩場所で軽く済ませる", "未確定"],
        ["13:45", "おふさ観音を中心にゆっくり", "確定"],
        ["15:00", "四神の館／博物館で涼む", "未確定"],
        ["17:00", "八尾へ出発", "確定"],
        ["18:15", "八尾帰着", "確定"]
      ]
    }
  ],

  branches: [
    {
      cls: "sun",
      title: "☀️ 猛暑・晴れ",
      text: "屋外はおふさ観音だけに限定し、30〜40分で切り上げる。谷瀬は中止して四神の館・橿原考古学研究所附属博物館へ。こまめに車内で冷やし、水分を切らさない。"
    },
    {
      cls: "rain",
      title: "🌧 雨・雷・強風",
      text: "谷瀬は中止（高所・揺れ・山道のため強行しない）。おふさ観音は状況により短縮し、茶房おふさ→四神の館／博物館の屋内中心に切り替える。国道168号の規制情報も併せて確認。"
    },
    {
      cls: "tired",
      title: "😪 疲れ気味",
      text: "即座にプランAへ。谷瀬を外し、おふさ観音＋茶房おふさだけにして早めに帰路へ。助手席で休んでもらい、乗降回数を減らす。谷瀬を断念するのは失敗ではなく正しい判断。"
    },
    {
      cls: "fun",
      title: "😊 余裕がある",
      text: "14:15時点で全条件を満たしていれば谷瀬へ。満たさなければ明日香（四神の館・ことだま・万葉文化館）を足す。いずれも19:00〜19:30の八尾帰着を最優先し、無理に詰め込まない。"
    }
  ],

  /* === 移動ルート === */
  legs: [
    { from: "近鉄八尾駅", to: "橿原（おふさ観音・En周辺）", time: "約50〜60分", note: "南阪奈道路〜大和高田バイパス経由。乗車前に車内を冷やす。" },
    { from: "ランチ（橿原）", to: "おふさ観音", time: "約10〜15分", note: "ナビは「おふさ観音第2駐車場」で指定。小房交差点では曲がらない。" },
    { from: "おふさ観音", to: "四神の館・明日香エリア", time: "約20分", note: "谷瀬を外した場合の本命。ことだま・万葉文化館・夢市茶屋も同エリア。" },
    { from: "おふさ観音", to: "道の駅 吉野路大塔", time: "約1時間10分", note: "谷瀬へ行く場合のみ。京奈和道〜国道168号。トイレ・運転休憩に使う。" },
    { from: "道の駅 吉野路大塔", to: "谷瀬の吊り橋", time: "約35分", note: "国道168号の山間部。出発前に道路規制を再確認。" },
    { from: "谷瀬の吊り橋", to: "近鉄八尾駅", time: "約2時間15分", note: "16:30出発厳守。渋滞時は20時に近づくため休憩を1回に絞る。" },
    { from: "明日香・橿原", to: "近鉄八尾駅", time: "約50〜60分", note: "会計・出庫込み。17:00出発で18:15前後の帰着目安。" }
  ],

  /* === 持ち物 === */
  packing: [
    {
      group: "必須",
      items: ["運転免許証", "財布", "スマートフォン", "充電ケーブル", "モバイルバッテリー", "ETCカード", "現金（駐車料金・小銭）"]
    },
    {
      group: "念のため",
      items: ["常備薬", "軽食（ゼリー飲料・パンなど）", "保冷バッグ", "健康保険証"]
    },
    {
      group: "猛暑対策",
      items: ["冷たい水／無糖茶 2本以上", "経口補水系飲料（予備）", "冷感シート", "携帯扇風機・扇子", "日傘または帽子", "日焼け止め", "汗拭きシート", "タオル"]
    },
    {
      group: "雨・谷瀬対策",
      items: ["折りたたみ傘", "歩きやすい靴（吊り橋は揺れる）", "濡れ物用の袋", "駐車料金の小銭（谷瀬 800円）"]
    },
    { group: "車内", items: ["ティッシュ", "ウェットティッシュ", "ゴミ袋", "サンシェード", "酔い止め（山道用）"] }
  ],

  /* === 注意・要確認 === */
  info: [
    {
      warn: true,
      title: "国道168号の通行止め（谷瀬へ行くなら必読）",
      text: "国道168号（十津川村平谷）が2026年6月29日から崩土で通行止め・復旧未定。平谷は谷瀬の吊り橋（上野地）より南のため、五條側からの往復には影響しない見込みだが確定情報が出ていない。**当日朝と、おふさ観音を出る前に必ず奈良県道路情報とナビで再確認する。**不明なら谷瀬は中止。"
    },
    {
      warn: true,
      title: "谷瀬の Go / No-Go 判断（14:15）",
      text: "**Go（全て満たす）:** 14:15までにおふさ観音を出発できる／ナビの谷瀬到着予想が16:15以前／同行者が元気で行きたい／雨・雷・強風の懸念なし／国道168号に支障なし／八尾帰着予想が19:30前後まで。**No-Go（1つでも該当）:** 14:25を過ぎても出発できない／到着予想16:30以降／同行者が疲れている／悪天候／通行止め・大幅遅延／帰着20:00超。切替先は茶房おふさ・四神の館・博物館・早めの帰路。"
    },
    {
      warn: true,
      title: "おふさ観音の駐車とナビ",
      text: "**ナビは「おふさ観音第2駐車場」で検索する。**寺名だけで指定すると狭い道へ誘導される恐れがある。小房交差点では曲がらず、縄手町交差点側から進入する公式案内に従う。西5台・南5台・第2駐車場12台。通常無料だがイベント時500円の場合あり。入場は16:30まで・閉門17:00。"
    },
    {
      warn: false,
      title: "8/2（日）の営業状況",
      text: "主要候補の定休日は日曜と重ならない（五條源兵衛=火休／ことだま=火・第3水休／道の駅大塔=水休／橿原考古学研究所附属博物館=月休／夢市茶屋=無休）。ただし**Enは不定休、茶房おふさも不定休**のため、当日朝に営業を確認する。万葉文化館は展示替え休館の可能性があり公式確認を。"
    },
    {
      warn: false,
      title: "帰着時間の設計",
      text: "上限は20:00だが、**実務上の目標は19:00〜19:30の八尾帰着**。ユーザーは解散後さらに姫路まで運転するため、眠気があればサービスエリアで必ず休む。時間より安全を優先。"
    },
    {
      warn: false,
      title: "前日・当日の確認",
      text: "天候（橿原・五條・十津川の気温／降水／雷／風）、道路（国道168号・奈良県道路情報）、店舗（営業・駐車場）、おふさ観音の特別案内、車（燃料・ETC・タイヤ・サンシェード）、持ち物（飲料・保冷バッグ・軽食・モバイルバッテリー）。"
    },
    {
      warn: false,
      title: "今回見送り・別日に残す候補",
      text: "なら燈花会（8/5〜14・19:00点灯のため20時帰着と両立せず）／京都水族館「くらげと傘と風鈴と」／貴船神社・川床／伊根の舟屋／白崎海洋公園・生石高原（ススキは秋）／姫路城・姫路市立美術館／竹生島・メタセコイア並木。星のブランコは大雨被害で閉鎖中。"
    }
  ],

  /* 天気を取得する代表地点 */
  weatherPoint: { lat: 34.5032, lon: 135.7971, label: "橿原・おふさ観音周辺", tripDate: "2026-08-02" }
};

/* ---------- ユーティリティ ---------- */
const $  = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const mapsUrl = (q) => "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(q);
// place_id があれば検索結果ではなく「その地点そのもの」を開く（同名店の取り違えを防ぐ）
const placeMapsUrl = (p) => mapsUrl(p.maps || p.name) +
  (p.gmapsPlaceId ? "&query_place_id=" + encodeURIComponent(p.gmapsPlaceId) : "");
// 食べログURLは links から引く（DATAに二重で持たせない＝食い違いが起きない）
const tabelogUrl = (p) => ((p.links || []).find(l => /食べログ|tabelog/i.test(l.label)) || {}).url || null;

/* 全場所をフラットに（type 付き） */
function allPlaces() {
  return [
    ...DATA.spots.map(p => ({ ...p, type: "spot" })),
    ...DATA.restaurants.map(p => ({ ...p, type: "restaurant" })),
    ...DATA.cafes.map(p => ({ ...p, type: "cafe" }))
  ];
}
const placeId = (type, name) => `${type}:${name}`;
function getPlaceById(id) {
  const i = id.indexOf(":");
  const type = id.slice(0, i), name = id.slice(i + 1);
  return allPlaces().find(p => p.type === type && p.name === name) || null;
}
// 名前から placeId を逆引き（スケジュール項目とカードの紐付け用。名前は一意）
function placeIdByName(name) {
  const p = allPlaces().find(x => x.name === name);
  return p ? placeId(p.type, p.name) : null;
}

/* =========================================================================
   確定/未確定ステート（全タブ共有・localStorage）
   スケジュール・カード・マップが同じ状態を参照し、どのタブで変えても全タブに反映する。
   「共有用に書き出す」で STATUS_DEFAULT に貼り替え＋STATUS_VERSION を +1 すれば全員反映。
   ========================================================================= */
const STATUS_KEY = "nara-trip-status";
const STATUS_VERSION = 2;   // STATUS_DEFAULT を更新したら必ず +1 する
// 全員に配る初期状態。空なら DATA の category から生成（confirmed→確定 / それ以外→未確定）。
const STATUS_DEFAULT = {};
function baseStatusMap() {
  const o = {};
  allPlaces().forEach(p => { o[placeId(p.type, p.name)] = p.category === "confirmed" ? "confirmed" : "tentative"; });
  return { ...o, ...STATUS_DEFAULT };
}
function loadStatusMap() {
  try {
    const raw = JSON.parse(localStorage.getItem(STATUS_KEY));
    if (raw && raw.v === STATUS_VERSION && raw.map) return { ...baseStatusMap(), ...raw.map };
  } catch (e) {}
  return baseStatusMap();
}
let statusMap = loadStatusMap();
function saveStatusMap() { localStorage.setItem(STATUS_KEY, JSON.stringify({ v: STATUS_VERSION, map: statusMap })); fbPush("status", statusToArray()); }
function getStatus(id) { return statusMap[id] === "confirmed" ? "confirmed" : "tentative"; }
function setStatus(id, s) { statusMap[id] = (s === "confirmed" ? "confirmed" : "tentative"); saveStatusMap(); rerenderStatus(); }
function toggleStatus(id) { setStatus(id, getStatus(id) === "confirmed" ? "tentative" : "confirmed"); }
const STATUS_LABEL = { confirmed: "確定", tentative: "未確定" };
// status に依存する全ビューを再描画（カード・マップのピン・スケジュール）
function rerenderStatus() {
  renderAllCards();
  if (typeof map !== "undefined" && map) refreshMarkers();
  if ($("#sched-list")) renderScheduleEditor();
}
function renderAllCards() {
  renderCards("#cards-spots", DATA.spots, "spot");
  renderCards("#cards-restaurants", DATA.restaurants, "restaurant");
  renderCards("#cards-cafes", DATA.cafes, "cafe");
}

/* =========================================================================
   カードレンダリング
   ========================================================================= */
function renderImageBlock(p) {
  const imgs = p.images || [];
  if (!imgs.length) return `<div class="card-imgwrap"><div class="card-noimg">${TYPE_ICONS[p.type] || "🖼"}</div>${catRibbon(p)}</div>`;
  const data = esc(JSON.stringify(imgs));
  const main = `<button class="card-img-btn" data-images='${data}' data-index="0" aria-label="拡大">
      <img class="card-img" src="${esc(imgs[0])}" alt="${esc(p.name)}" loading="lazy"></button>`;
  let thumbs = "";
  if (imgs.length > 1) {
    thumbs = `<div class="card-thumbs">` + imgs.slice(1, 4).map((src, k) =>
      `<button class="thumb-btn" data-images='${data}' data-index="${k + 1}" aria-label="拡大"><img class="thumb" src="${esc(src)}" alt="" loading="lazy"></button>`
    ).join("") + `</div>`;
  }
  return `<div class="card-imgwrap">${main}${catRibbon(p)}</div>${thumbs}`;
}
function catRibbon(p) {
  const id = placeId(p.type, p.name);
  const st = getStatus(id);
  return `<button type="button" class="cat-ribbon status-${st}" data-status-toggle="${esc(id)}" title="タップで確定／未確定を切替">${STATUS_LABEL[st]}</button>`;
}
function ratingChips(p) {
  if (!p.ratings) return "";
  const r = p.ratings, chips = [];
  const rev = (n) => n ? `（${esc(n)}件）` : "";
  // 点数チップはタップで出典へ飛ぶ。食べログは links の食べログURL、Googleは place_id 付きマップURL。
  // URLが無い地点は <span> のまま（リンク切れを作らない）。
  const chip = (cls, label, url) => url
    ? `<a class="rating-chip ${cls} is-link" href="${esc(url)}" target="_blank" rel="noopener">${label}</a>`
    : `<span class="rating-chip ${cls}">${label}</span>`;
  // 飲食店は食べログ・Googleの両点数を件数つきで併記（§8-2）。google は Places API で取得。
  if (r.tabelog) chips.push(chip("tabelog", `🍴 食べログ ${esc(r.tabelog)}${rev(r.tabelogReviews || r.reviews)}`, tabelogUrl(p)));
  if (r.google)  chips.push(chip("google",  `⭐ Google ${esc(r.google)}${rev(r.googleReviews)}`, placeMapsUrl(p)));
  return chips.length ? `<div class="ratings">${chips.join("")}</div>` : "";
}
function linkPills(p) {
  const pills = [`<a class="pill maps" href="${placeMapsUrl(p)}" target="_blank" rel="noopener">📍 Googleマップ</a>`];
  (p.links || []).forEach(l => {
    const cls = /食べログ|tabelog/i.test(l.label) ? "pill tabelog" : "pill";
    const icon = /食べログ/.test(l.label) ? "🍴" : "🔗";
    pills.push(`<a class="${cls}" href="${esc(l.url)}" target="_blank" rel="noopener">${icon} ${esc(l.label)}</a>`);
  });
  pills.push(`<button class="pill add-route" data-add="${esc(placeId(p.type, p.name))}">＋ ルートに追加</button>`);
  return `<div class="card-links">${pills.join("")}</div>`;
}
function renderCard(p) {
  const badges = (p.badges || []).map(b => `<span class="badge ${esc(b.cls)}">${esc(b.text)}</span>`).join("");
  const meta = (p.meta || []).map(m => `<li><b>${esc(m[0])}</b><span>${esc(m[1])}</span></li>`).join("");
  return `<article class="card">
    ${renderImageBlock(p)}
    <div class="card-body">
      <h3 class="card-title">${esc(p.name)}</h3>
      <div class="card-area">${esc(p.area)}</div>
      ${badges ? `<div class="badges">${badges}</div>` : ""}
      ${ratingChips(p)}
      <p class="card-desc">${esc(p.desc)}</p>
      ${meta ? `<ul class="card-meta">${meta}</ul>` : ""}
      ${p.notes ? `<div class="card-notes">${p.notes}</div>` : ""}
      ${linkPills(p)}
    </div>
  </article>`;
}
function renderCards(targetId, items, type) {
  $(targetId).innerHTML = items.map(p => renderCard({ ...p, type })).join("");
}

/* =========================================================================
   スケジュール / ルート / 持ち物 / 注意
   ========================================================================= */
function planCardHtml(pl, opts = {}) {
  const isUser = opts.kind === "user";
  const tl = pl.items.map(([t, b, s]) =>
    `<li><span class="tl-time">${esc(t)}</span><span class="tl-body">${esc(b)}${s ? `<span class="tl-sub">${esc(s)}</span>` : ""}</span></li>`
  ).join("");
  const tag = isUser
    ? `<span class="tag user">保存</span>`
    : (pl.tag ? `<span class="tag top">${esc(pl.tag)}</span>` : (pl.featured ? '<span class="tag top">本命</span>' : '<span class="tag alt">別案</span>'));
  const exportBtn = isUser ? `<button class="plan-export" data-key="${esc(opts.key)}">共有用に書き出す</button>` : "";
  const actions = `<div class="plan-actions">
      <button class="plan-copy" data-key="${esc(opts.key)}">コピー</button>
      ${exportBtn}
      <button class="plan-del" data-key="${esc(opts.key)}" aria-label="このプランを削除">削除</button>
    </div>`;
  return `<div class="plan-card ${pl.featured ? "featured" : ""} ${isUser ? "userplan" : ""}" data-key="${esc(opts.key)}">
      <div class="plan-head"><span class="plan-handle" title="ドラッグで並び替え">≡</span><h3>${esc(pl.title)}</h3>${tag}${actions}</div>
      ${pl.route ? `<p class="plan-route">${esc(pl.route)}</p>` : ""}
      <ol class="timeline">${tl}</ol>
    </div>`;
}

/* 組込(DATA.plans)＋保存プランを安定キー付きで統合 */
function masterPlans() {
  return [
    ...DATA.plans.map(p => ({ plan: p, key: "b:" + p.title, kind: "builtin" })),
    ...userPlans.map(p => ({ plan: p, key: "u:" + p.id, kind: "user" }))
  ];
}
function findPlanByKey(key) { return masterPlans().find(e => e.key === key); }
function orderedPlans() {
  const list = masterPlans().filter(e => !planView.hidden.includes(e.key));
  const rank = k => { const i = planView.order.indexOf(k); return i < 0 ? Infinity : i; };
  return list.map((e, i) => ({ e, i }))
    .sort((a, b) => (rank(a.e.key) - rank(b.e.key)) || (a.i - b.i))
    .map(x => x.e);
}

function renderSchedule() {
  const cards = orderedPlans().map(e => planCardHtml(e.plan, { key: e.key, kind: e.kind })).join("");
  const hiddenN = planView.hidden.length;
  const reset = (planView.order.length || hiddenN)
    ? `<div class="plan-list-tools"><button class="btn-ghost" id="plan-view-reset">並び順・表示をリセット${hiddenN ? `（非表示 ${hiddenN} 件）` : ""}</button></div>`
    : "";
  const branches = `<h3 style="color:var(--ai);margin:1.4rem 0 .6rem;">当日の調整方針</h3>
    <div class="branch-grid">${DATA.branches.map(b =>
      `<div class="branch ${b.cls}"><h4>${esc(b.title)}</h4><p>${esc(b.text)}</p></div>`).join("")}</div>`;
  $("#schedule-content").innerHTML =
    `<div class="plan-list" id="plan-list">${cards || '<p class="muted">表示できるプランがありません。</p>'}</div>${reset}${branches}`;
  $$("#plan-list .plan-copy").forEach(b => b.addEventListener("click", () => copyPlan(b.dataset.key, b)));
  $$("#plan-list .plan-del").forEach(b => b.addEventListener("click", () => deletePlanByKey(b.dataset.key)));
  $$("#plan-list .plan-export").forEach(b => b.addEventListener("click", () => exportUserPlanToData(+b.dataset.key.slice(2))));
  const rb = $("#plan-view-reset");
  if (rb) rb.addEventListener("click", () => { planView = { order: [], hidden: [] }; savePlanView(); renderSchedule(); });
  setupPlanSortable();
}

/* プラン例のドラッグ並び替え（ハンドル ≡） */
function setupPlanSortable() {
  const el = $("#plan-list");
  if (!el || typeof Sortable === "undefined") return;
  Sortable.create(el, {
    animation: 150, handle: ".plan-handle", draggable: ".plan-card",
    ghostClass: "sortable-ghost", chosenClass: "sortable-chosen",
    onEnd: () => {
      planView.order = $$("#plan-list .plan-card").map(c => c.dataset.key);
      savePlanView();
    }
  });
}

/* プラン内容をテキストでコピー（LINE等に貼れる形式） */
function copyPlan(key, btn) {
  const e = findPlanByKey(key); if (!e) return;
  const pl = e.plan;
  const text = `【${pl.title}】` + (pl.route ? `\n${pl.route}` : "") + "\n" +
    pl.items.map(([t, b, s]) => `${t}  ${b}${s ? `（${s}）` : ""}`).join("\n");
  const done = () => { if (btn) { const o = btn.textContent; btn.textContent = "コピー済"; setTimeout(() => { btn.textContent = o; }, 1200); } };
  if (navigator.clipboard) navigator.clipboard.writeText(text).then(done, () => window.prompt("コピーしてください:", text));
  else window.prompt("コピーしてください:", text);
}

/* 削除: 保存プランは実削除、組込プランはこの端末で非表示（リセットで復活） */
function deletePlanByKey(key) {
  const e = findPlanByKey(key); if (!e) return;
  if (e.kind === "user") {
    if (!window.confirm(`「${e.plan.title}」を削除しますか？`)) return;
    const id = +key.slice(2);
    userPlans = userPlans.filter(p => p.id !== id);
    saveUserPlans();
    planView.order = planView.order.filter(k => k !== key);
  } else {
    if (!window.confirm(`「${e.plan.title}」を非表示にしますか？（「並び順・表示をリセット」で戻せます）`)) return;
    if (!planView.hidden.includes(key)) planView.hidden.push(key);
  }
  savePlanView();
  renderSchedule();
}

/* 保存プランを DATA.plans 用のオブジェクトとして書き出す（commitで全員に共有） */
function exportUserPlanToData(id) {
  const pl = userPlans.find(p => p.id === id); if (!pl) return;
  const items = pl.items.map(([t, b, s]) => `    [${JSON.stringify(t)}, ${JSON.stringify(b)}, ${JSON.stringify(s || "")}]`).join(",\n");
  const out = `{
  title: ${JSON.stringify(pl.title)},
  featured: false,
  route: "",
  items: [
${items}
  ]
},`;
  if (navigator.clipboard) navigator.clipboard.writeText(out).catch(() => {});
  window.prompt("この内容を app.js の DATA.plans 配列に追加して commit すると、全員のプラン例に表示されます（クリップボードにもコピー済み）:", out);
}

/* ---- 保存プラン＆プラン例の表示状態（この端末に保存） ---- */
const USERPLAN_KEY = "nara-trip-userplans";
const PLANVIEW_KEY = "nara-trip-planview";
function loadUserPlans() {
  try { const s = JSON.parse(localStorage.getItem(USERPLAN_KEY)); if (Array.isArray(s)) return s; } catch (e) {}
  return [];
}
function saveUserPlans() { localStorage.setItem(USERPLAN_KEY, JSON.stringify(userPlans)); }
function loadPlanView() {
  try { const s = JSON.parse(localStorage.getItem(PLANVIEW_KEY)); if (s && typeof s === "object") return { order: Array.isArray(s.order) ? s.order : [], hidden: Array.isArray(s.hidden) ? s.hidden : [] }; } catch (e) {}
  return { order: [], hidden: [] };
}
function savePlanView() { localStorage.setItem(PLANVIEW_KEY, JSON.stringify(planView)); }
let userPlans = loadUserPlans();
let planView = loadPlanView();

function addCurrentScheduleAsPlan() {
  if (!schedule.length) { window.alert("スケジュールが空です。先に予定を入れてください。"); return; }
  const def = "保存プラン " + (userPlans.length + 1);
  const title = (window.prompt("プラン名を入力してください:", def) || "").trim();
  if (!title) return;
  const items = schedule.map(it => [it.time || "—", it.text || "", it.status === "confirmed" ? "確定" : "未確定"]);
  const id = (userPlans.reduce((m, p) => Math.max(m, p.id || 0), 0) + 1);
  userPlans.push({ id, title, items });
  saveUserPlans();
  renderSchedule();
  window.alert(`「${title}」をプラン例に追加しました。`);
}

/* ---- 編集できるスケジュール（ドラッグ並び替え・時刻入力・確定切替・localStorage保存） ----
   ★共有の初期表示（A仕様）: 下の SCHED_DEFAULT が「全員に配られる初期スケジュール」。
     並びを確定したら「共有用に書き出す」ボタンの出力を SCHED_DEFAULT に貼り替え、
     必ず SCHED_VERSION を +1 して commit すること。
     → 各端末は保存済みバージョンが古いと自動で新しい初期表示に更新される。 */
const SCHED_KEY = "nara-trip-schedule";
const SCHED_VERSION = 2;   // SCHED_DEFAULT を更新したら必ず +1 する
// ref: 地点カードの placeId（"種別:名前"）。付けるとカード/マップと確定状態・並び順が連動する。
const SCHED_DEFAULT = [
  { time: "11:00", text: "八尾でピックアップ（体調・飲み物・忘れ物を確認）", status: "confirmed", ref: "spot:近鉄八尾駅（集合・解散）" },
  { time: "12:00", end: "12:15", text: "橿原エリア到着", status: "confirmed" },
  { time: "12:15", end: "13:30", text: "ランチ（Enなど。13:30までに退店）", status: "tentative", ref: "restaurant:イタリアンtoちょこっと和食En" },
  { time: "13:45", end: "14:35", text: "おふさ観音「風鈴まつり」（屋外30〜50分）", status: "confirmed", ref: "spot:おふさ観音（風鈴まつり）" },
  { time: "14:15", text: "【判断】谷瀬へ行くか最終決定（Go/No-Goは「注意」タブ）", status: "confirmed" },
  { time: "14:35", end: "15:15", text: "茶房おふさで休憩（混雑・不定休なら省略）", status: "tentative", ref: "cafe:茶房おふさ" },
  { time: "15:30", end: "16:45", text: "四神の館など冷房のある屋内スポット", status: "tentative", ref: "spot:キトラ古墳壁画体験館 四神の館" },
  { time: "17:00", text: "大阪方面へ出発（渋滞があれば追加スポットを省略）", status: "confirmed" },
  { time: "18:15", text: "八尾帰着・同行者宅へ送る（目標19:00〜19:30）", status: "confirmed" },
  { time: "20:00", text: "送迎完了（ユーザーは姫路へ。眠気・疲労を再確認）", status: "confirmed" }
];
let schedule = loadSchedule();
function loadSchedule() {
  try {
    const raw = JSON.parse(localStorage.getItem(SCHED_KEY));
    // 保存バージョンが現行と一致する場合のみローカル編集を採用。
    // 古い／無い場合は新しい共有初期表示(SCHED_DEFAULT)に更新する。
    if (raw && raw.v === SCHED_VERSION && Array.isArray(raw.items)) return raw.items;
  } catch (e) {}
  return SCHED_DEFAULT.map(x => ({ ...x }));
}
function saveSchedule() { localStorage.setItem(SCHED_KEY, JSON.stringify({ v: SCHED_VERSION, items: schedule })); fbPush("schedule", schedule); }
// 候補名から予定行を作る。地点カードに一致すれば ref を付け、確定状態を引き継ぐ。
function schedItemFromName(name) {
  const ref = placeIdByName(name) || undefined;
  return { time: "", text: name, status: ref ? getStatus(ref) : "tentative", ref };
}
// スケジュールの地点項目（ref）の並び順を、マップのルートに反映する（片方向連動）
function syncRouteFromSchedule() {
  const seen = new Set(), ordered = [];
  schedule.forEach(it => {
    if (it.ref && getPlaceById(it.ref) && !seen.has(it.ref)) { seen.add(it.ref); ordered.push(it.ref); }
  });
  routeIds = ordered;
  saveRoute();
  if ($("#route-list")) renderRouteEditor();
  if (typeof map !== "undefined" && map) { refreshMarkers(); drawRouteLine(); applyFilters(); }
}

/* 現在の並びを SCHED_DEFAULT 用のコード片として書き出す（A仕様の更新を簡単に） */
function exportSchedule() {
  // ① スケジュール（ref付き。status は連動項目なら共通ステートの現状を出力）
  const lines = schedule.map(it => {
    const st = it.ref ? getStatus(it.ref) : (it.status || "tentative");
    const parts = [`time: ${JSON.stringify(it.time || "")}`, `text: ${JSON.stringify(it.text || "")}`, `status: ${JSON.stringify(st)}`];
    if (it.end !== undefined && it.end !== null) parts.push(`end: ${JSON.stringify(it.end)}`);
    if (it.ref) parts.push(`ref: ${JSON.stringify(it.ref)}`);
    return `  { ${parts.join(", ")} }`;
  }).join(",\n");
  const schedOut = `const SCHED_DEFAULT = [\n${lines}\n];`;
  // ② 確定/未確定の状態（カード・マップ・スケジュールで変更した分を全員へ）
  const statusLines = Object.keys(statusMap).sort().map(id =>
    `  ${JSON.stringify(id)}: ${JSON.stringify(getStatus(id))}`
  ).join(",\n");
  const statusOut = `const STATUS_DEFAULT = {\n${statusLines}\n};`;
  const out =
    `/* ① app.js の SCHED_DEFAULT に貼り替え、SCHED_VERSION を +1 */\n${schedOut}\n\n` +
    `/* ② app.js の STATUS_DEFAULT に貼り替え、STATUS_VERSION を +1 */\n${statusOut}`;
  if (navigator.clipboard) navigator.clipboard.writeText(out).catch(() => {});
  window.prompt("下記を app.js に貼り替え、SCHED_VERSION と STATUS_VERSION をそれぞれ +1 して commit すると、並び順・確定状態が全員に反映されます（クリップボードにもコピー済み）:", out);
}

function renderScheduleEditor() {
  const list = $("#sched-list");
  if (!list) return;
  if (!schedule.length) {
    list.innerHTML = `<li class="sched-empty">予定がありません。「＋ 空の行」や「候補から追加」で作成できます。</li>`;
  } else {
    // 効果的な確定状態: refがあれば共通ステート、なければ項目ローカルの status
    const eff = it => it.ref ? getStatus(it.ref) : (it.status === "confirmed" ? "confirmed" : "tentative");
    list.innerHTML = schedule.map((it, i) => {
      const st = eff(it);
      const linked = it.ref ? ` <span class="sched-linked" title="地点カード・マップと連動">📍</span>` : "";
      // 終了時間はオプション。未設定なら「＋終了」ボタン、設定済みなら「〜 終了時刻 ×」
      const endUi = (it.end === undefined || it.end === null)
        ? `<button class="sched-addend" data-i="${i}" title="終了時間を追加">＋終了</button>`
        : `<span class="sched-tilde">〜</span><input class="sched-endtime" type="time" value="${esc(it.end)}" data-i="${i}" aria-label="終了時刻"><button class="sched-rmend" data-i="${i}" title="終了時間を消す">×</button>`;
      return `
      <li class="sched-item ${st}" data-i="${i}">
        <span class="sched-handle" aria-label="ドラッグして並び替え" title="ドラッグで並び替え">≡</span>
        <input class="sched-time" type="time" value="${esc(it.time || "")}" data-i="${i}" aria-label="開始時刻">${endUi}
        <input class="sched-text" type="text" value="${esc(it.text || "")}" data-i="${i}" placeholder="予定を入力" aria-label="予定">${linked}
        <button class="sched-status st-chip ${st}" data-i="${i}" title="確定／未確定を切替${it.ref ? "（カード・マップと連動）" : ""}">${STATUS_LABEL[st]}</button>
        <button class="sched-rm" data-i="${i}" aria-label="この行を削除">✕</button>
      </li>`;
    }).join("");
  }
  // 入力・操作イベント（textはinputで都度保存、フォーカス維持のため再描画しない）
  $$("#sched-list .sched-time").forEach(el => el.addEventListener("change", e => { schedule[+e.currentTarget.dataset.i].time = e.currentTarget.value; saveSchedule(); }));
  $$("#sched-list .sched-endtime").forEach(el => el.addEventListener("change", e => { schedule[+e.currentTarget.dataset.i].end = e.currentTarget.value; saveSchedule(); }));
  $$("#sched-list .sched-addend").forEach(el => el.addEventListener("click", e => { schedule[+e.currentTarget.dataset.i].end = ""; saveSchedule(); renderScheduleEditor(); }));
  $$("#sched-list .sched-rmend").forEach(el => el.addEventListener("click", e => { delete schedule[+e.currentTarget.dataset.i].end; saveSchedule(); renderScheduleEditor(); }));
  $$("#sched-list .sched-text").forEach(el => el.addEventListener("input", e => { schedule[+e.currentTarget.dataset.i].text = e.currentTarget.value; saveSchedule(); }));
  $$("#sched-list .sched-status").forEach(el => el.addEventListener("click", e => {
    const it = schedule[+e.currentTarget.dataset.i];
    if (it.ref) { toggleStatus(it.ref); }   // 連動: 共通ステート更新 → rerenderStatus が全タブ再描画
    else { it.status = it.status === "confirmed" ? "tentative" : "confirmed"; saveSchedule(); renderScheduleEditor(); }
  }));
  $$("#sched-list .sched-rm").forEach(el => el.addEventListener("click", e => {
    schedule.splice(+e.currentTarget.dataset.i, 1); saveSchedule(); syncRouteFromSchedule(); renderScheduleEditor();
  }));
}

function populateSchedAddSelect() {
  const sel = $("#sched-add-place"); if (!sel) return;
  const groups = [["spots", "🌿 スポット"], ["restaurants", "🍽 レストラン"], ["cafes", "☕ カフェ"]];
  sel.innerHTML = `<option value="">＋ 候補から追加…</option>` + groups.map(([key, label]) =>
    `<optgroup label="${label}">` + DATA[key].map(p => `<option value="${esc(p.name)}">${esc(p.name)}</option>`).join("") + `</optgroup>`
  ).join("");
  sel.addEventListener("change", () => {
    if (!sel.value) return;
    schedule.push(schedItemFromName(sel.value));
    saveSchedule(); syncRouteFromSchedule(); renderScheduleEditor(); sel.value = "";
  });
}

/* 右側の候補リスト（スポット/レストラン/カフェ）を描画。ドラッグまたは⊕で左へ追加。
   filter: "all" | "spots" | "restaurants" | "cafes" */
function renderSchedCandidates(filter = "all") {
  const el = $("#sched-candidates"); if (!el) return;
  const groups = [["spots", "🌿 スポット", "spot"], ["restaurants", "🍽 レストラン", "restaurant"], ["cafes", "☕ カフェ", "cafe"]];
  const shown = filter === "all" ? groups : groups.filter(g => g[0] === filter);
  const withHead = filter === "all";  // 「すべて」のときだけ見出しを挟む
  el.innerHTML = shown.map(([key, label, emoji]) => {
    const head = withHead ? `<li class="sched-cand-head">${label}</li>` : "";
    const items = DATA[key].map(p =>
      `<li class="sched-cand-item" data-name="${esc(p.name)}">
        <span class="type-emoji">${TYPE_ICONS[emoji]}</span>
        <span class="nm">${esc(p.name)}</span>
        <button class="cand-add" data-name="${esc(p.name)}" aria-label="左に追加">⊕</button>
      </li>`).join("");
    return head + items;
  }).join("");
  $$("#sched-candidates .cand-add").forEach(b => b.addEventListener("click", () => {
    schedule.push(schedItemFromName(b.dataset.name));
    saveSchedule(); syncRouteFromSchedule(); renderScheduleEditor();
  }));
}

/* 候補リストのサブタブ（すべて／スポット／レストラン／カフェ）切替 */
function setupSchedCandTabs() {
  const bar = $("#sched-cand-tabs"); if (!bar) return;
  $$(".sched-cand-tab", bar).forEach(t => t.addEventListener("click", () => {
    $$(".sched-cand-tab", bar).forEach(x => x.classList.remove("active"));
    t.classList.add("active");
    renderSchedCandidates(t.dataset.filter);
  }));
}

let schedSortInit = false;
function setupScheduleSortable() {
  if (schedSortInit || typeof Sortable === "undefined" || !$("#sched-list")) return;
  schedSortInit = true;
  // タイムスケジュール: 内部並び替え＋候補からの受け入れ
  Sortable.create($("#sched-list"), {
    group: { name: "sched-shared", pull: false, put: true },
    animation: 150, handle: ".sched-handle", draggable: ".sched-item",
    ghostClass: "sortable-ghost", chosenClass: "sortable-chosen",
    onAdd: (evt) => {
      // 候補リストから落ちてきた要素を予定に変換
      const name = evt.item.dataset.name;
      const at = Array.prototype.indexOf.call($("#sched-list").children, evt.item);
      evt.item.remove();
      if (name != null) {
        schedule.splice(at < 0 ? schedule.length : at, 0, schedItemFromName(name));
        saveSchedule(); syncRouteFromSchedule(); renderScheduleEditor();
      }
    },
    onUpdate: () => {
      const order = $$("#sched-list .sched-item").map(li => +li.dataset.i);
      schedule = order.map(i => schedule[i]);
      saveSchedule(); syncRouteFromSchedule(); renderScheduleEditor();
    }
  });
  // 候補リスト: クローンを引き出すだけ
  Sortable.create($("#sched-candidates"), {
    group: { name: "sched-shared", pull: "clone", put: false },
    sort: false, animation: 150, draggable: ".sched-cand-item"
  });
}

function renderRoutes() {
  $("#routes-content").innerHTML = DATA.legs.map(l =>
    `<div class="leg">
      <div class="leg-route"><b>${esc(l.from)}</b><span class="leg-arrow">→</span><b>${esc(l.to)}</b></div>
      <div class="leg-time">${esc(l.time)}</div>
      ${l.note ? `<div class="leg-note">${esc(l.note)}</div>` : ""}
    </div>`).join("");
}
function renderPacking() {
  const KEY = "nara-trip-packing";
  const saved = JSON.parse(localStorage.getItem(KEY) || "{}");
  $("#packing-content").innerHTML = DATA.packing.map(g =>
    `<div class="pack-group"><h3>${esc(g.group)}</h3><ul class="pack-list">${
      g.items.map(it => {
        const id = g.group + "::" + it;
        return `<li><label><input type="checkbox" data-pack="${esc(id)}" ${saved[id] ? "checked" : ""}><span>${esc(it)}</span></label></li>`;
      }).join("")
    }</ul></div>`).join("");
  $$("#packing-content input[data-pack]").forEach(cb => {
    cb.addEventListener("change", () => {
      saved[cb.dataset.pack] = cb.checked;
      localStorage.setItem(KEY, JSON.stringify(saved));
    });
  });
}
/* ===== 注意・要確認（ブラウザから編集できる。誤タップ防止に編集モード制） ===== */
const INFO_KEY = "nara-trip-info";
const INFO_VERSION = 1;   // INFO_DEFAULT を更新したら必ず +1 する
const INFO_DEFAULT = DATA.info;
let infoItems = loadInfo();
// 編集モードは保存しない：読み込み直後は必ず閲覧モード＝誤タップで書き換わらない
let infoEditing = false;
let infoSortable = null;

function loadInfo() {
  try {
    const raw = JSON.parse(localStorage.getItem(INFO_KEY));
    if (raw && raw.v === INFO_VERSION && Array.isArray(raw.items)) return raw.items;
  } catch (e) {}
  return INFO_DEFAULT.map(x => ({ ...x }));
}
function saveInfo() {
  localStorage.setItem(INFO_KEY, JSON.stringify({ v: INFO_VERSION, items: infoItems }));
  fbPush("info", infoItems);
}
// 本文は **囲むと太字** だけ使える軽量記法。
// 先にHTMLをエスケープしてから変換するので、利用者が < > を打っても壊れない／XSSにもならない。
const infoText = (s) => esc(s).replace(/\*\*([^*\n]+)\*\*/g, "<strong>$1</strong>");

function renderInfo() {
  const box = $("#info-content"); if (!box) return;
  const panel = $("#panel-info");
  if (panel) panel.classList.toggle("editing", infoEditing);
  const btn = $("#info-edit-toggle");
  if (btn) {
    btn.textContent = infoEditing ? "✓ 編集を終える" : "✏️ 編集する";
    btn.classList.toggle("on", infoEditing);
  }

  if (!infoEditing) {
    box.innerHTML = infoItems.length
      ? infoItems.map(i =>
          `<div class="info-card ${i.warn ? "warn" : ""}"><h3>${esc(i.title)}</h3><p>${infoText(i.text)}</p></div>`).join("")
      : `<p class="muted">項目がありません。「✏️ 編集する」→「＋ 項目を追加」で作成できます。</p>`;
    if (infoSortable) { infoSortable.destroy(); infoSortable = null; }
    return;
  }

  box.innerHTML = infoItems.map((it, i) => `
    <div class="info-card edit ${it.warn ? "warn" : ""}" data-i="${i}">
      <div class="info-edit-head">
        <span class="info-handle" title="ドラッグで並び替え" aria-label="ドラッグして並び替え">≡</span>
        <input class="info-title" type="text" data-i="${i}" value="${esc(it.title || "")}" placeholder="見出し" aria-label="見出し">
        <button class="info-warn ${it.warn ? "on" : ""}" data-i="${i}" title="重要マーク（左の線が赤くなります）">${it.warn ? "⚠️ 重要" : "重要にする"}</button>
        <button class="info-del" data-i="${i}" aria-label="この項目を削除" title="削除">✕</button>
      </div>
      <textarea class="info-text" data-i="${i}" rows="4" placeholder="内容を入力（**で囲むと太字）" aria-label="内容">${esc(it.text || "")}</textarea>
    </div>`).join("")
    || `<p class="muted">項目がありません。「＋ 項目を追加」で作成できます。</p>`;

  // 入力中は再描画しない（カーソル位置とIME変換が飛ぶため）
  $$("#info-content .info-title").forEach(el => el.addEventListener("input", e => {
    infoItems[+e.currentTarget.dataset.i].title = e.currentTarget.value; saveInfo();
  }));
  $$("#info-content .info-text").forEach(el => el.addEventListener("input", e => {
    infoItems[+e.currentTarget.dataset.i].text = e.currentTarget.value; saveInfo();
  }));
  $$("#info-content .info-warn").forEach(el => el.addEventListener("click", e => {
    const it = infoItems[+e.currentTarget.dataset.i]; it.warn = !it.warn; saveInfo(); renderInfo();
  }));
  $$("#info-content .info-del").forEach(el => el.addEventListener("click", e => {
    const i = +e.currentTarget.dataset.i;
    if (!confirm(`「${infoItems[i].title || "（無題）"}」を削除しますか？`)) return;
    infoItems.splice(i, 1); saveInfo(); renderInfo();
  }));
  setupInfoSortable();
}

function setupInfoSortable() {
  if (typeof Sortable === "undefined" || !$("#info-content")) return;
  if (infoSortable) infoSortable.destroy();
  infoSortable = Sortable.create($("#info-content"), {
    animation: 150, handle: ".info-handle", draggable: ".info-card",
    ghostClass: "sortable-ghost", chosenClass: "sortable-chosen",
    onEnd: () => {
      infoItems = $$("#info-content .info-card").map(el => infoItems[+el.dataset.i]);
      saveInfo(); renderInfo();
    }
  });
}

/* 現在の注意項目を INFO_DEFAULT 用のコード片として書き出す */
function exportInfo() {
  const lines = infoItems.map(it =>
    `  {\n    warn: ${it.warn ? "true" : "false"},\n    title: ${JSON.stringify(it.title || "")},\n    text: ${JSON.stringify(it.text || "")}\n  }`
  ).join(",\n");
  const out = `/* app.js の DATA.info に貼り替え、INFO_VERSION を +1 */\ninfo: [\n${lines}\n],`;
  if (navigator.clipboard) navigator.clipboard.writeText(out).catch(() => {});
  window.prompt("下記を app.js の DATA.info に貼り替え、INFO_VERSION を +1 して commit すると、全員の初期表示が更新されます（クリップボードにもコピー済み）:", out);
}

/* =========================================================================
   ライトボックス
   ========================================================================= */
const lb = { images: [], index: 0 };
function openLightbox(images, index) {
  lb.images = images; lb.index = index;
  $("#lightbox").classList.remove("hidden");
  $("#lightbox").setAttribute("aria-hidden", "false");
  updateLightbox();
}
function updateLightbox() {
  $("#lb-img").src = lb.images[lb.index];
  $("#lb-counter").textContent = `${lb.index + 1} / ${lb.images.length}`;
  const multi = lb.images.length > 1;
  $("#lb-prev").style.display = multi ? "" : "none";
  $("#lb-next").style.display = multi ? "" : "none";
}
function closeLightbox() {
  $("#lightbox").classList.add("hidden");
  $("#lightbox").setAttribute("aria-hidden", "true");
}
function lbNext() { lb.index = (lb.index + 1) % lb.images.length; updateLightbox(); }
function lbPrev() { lb.index = (lb.index - 1 + lb.images.length) % lb.images.length; updateLightbox(); }
function setupLightbox() {
  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".card-img-btn, .thumb-btn");
    if (btn) {
      const imgs = JSON.parse(btn.dataset.images);
      openLightbox(imgs, parseInt(btn.dataset.index, 10) || 0);
    }
  });
  $("#lb-close").addEventListener("click", closeLightbox);
  $("#lb-next").addEventListener("click", lbNext);
  $("#lb-prev").addEventListener("click", lbPrev);
  $("#lightbox").addEventListener("click", (e) => { if (e.target.id === "lightbox") closeLightbox(); });
  document.addEventListener("keydown", (e) => {
    if ($("#lightbox").classList.contains("hidden")) return;
    if (e.key === "Escape") closeLightbox();
    else if (e.key === "ArrowRight") lbNext();
    else if (e.key === "ArrowLeft") lbPrev();
  });
}

/* =========================================================================
   ルート状態（localStorage）
   ========================================================================= */
const ROUTE_KEY = "nara-trip-route";
const DEFAULT_ROUTE = [
  "spot:近鉄八尾駅（集合・解散）",
  "restaurant:イタリアンtoちょこっと和食En",
  "spot:おふさ観音（風鈴まつり）",
  "cafe:茶房おふさ",
  "spot:キトラ古墳壁画体験館 四神の館"
];
let routeIds = loadRoute();
function loadRoute() {
  try {
    const s = JSON.parse(localStorage.getItem(ROUTE_KEY));
    if (Array.isArray(s)) return s.filter(getPlaceById);
  } catch (e) {}
  return DEFAULT_ROUTE.slice();
}
function saveRoute() { localStorage.setItem(ROUTE_KEY, JSON.stringify(routeIds)); fbPush("route", routeIds); }
function addToRoute(id) { if (!routeIds.includes(id)) { routeIds.push(id); syncRoute(); } }
function removeFromRoute(id) { routeIds = routeIds.filter(x => x !== id); syncRoute(); }
function routeIndex(id) { return routeIds.indexOf(id); }

/* =========================================================================
   地図（Leaflet）
   ========================================================================= */
let map, markerLayer, routeLine;
const markers = {}; // id -> marker

function makeIcon(p, id) {
  const idx = routeIndex(id);
  let ring = "";
  if (idx >= 0) ring = "ring-route";
  else if (getStatus(id) === "confirmed") ring = "ring-confirmed";
  const num = idx >= 0 ? `<span class="pin-num">${idx + 1}</span>` : "";
  return L.divIcon({
    className: "",
    html: `<div class="pin pin-${p.type} ${ring}"><span>${TYPE_ICONS[p.type]}</span>${num}</div>`,
    iconSize: [30, 30], iconAnchor: [15, 28], popupAnchor: [0, -28]
  });
}
function popupHtml(p, id) {
  const img = (p.images && p.images[0]) ? `<img src="${esc(p.images[0])}" alt="">` : "";
  return `<div class="popup-card">
    ${img}
    <h4>${esc(p.name)}</h4>
    <div class="p-area">📍 ${esc(p.area)}</div>
    <p class="p-desc">${esc(p.desc)}</p>
    <div class="p-actions">
      <button class="p-btn add" data-add="${esc(id)}">＋ルートに追加</button>
      <a class="p-btn maps" href="${placeMapsUrl(p)}" target="_blank" rel="noopener">📍マップ</a>
    </div>
  </div>`;
}
function currentFilters() {
  const get = g => $$(`.filter-group[data-group="${g}"] input:checked`).map(i => i.value);
  return { type: get("type"), status: get("status"), routeOnly: $(`.filter-group[data-group="route"] input`).checked };
}
function applyFilters() {
  const f = currentFilters();
  allPlaces().forEach(p => {
    const id = placeId(p.type, p.name);
    const m = markers[id];
    if (!m) return;
    const inRoute = routeIndex(id) >= 0;
    const show = f.type.includes(p.type) && f.status.includes(getStatus(id)) && (!f.routeOnly || inRoute);
    if (show) { if (!markerLayer.hasLayer(m)) m.addTo(markerLayer); }
    else { if (markerLayer.hasLayer(m)) markerLayer.removeLayer(m); }
  });
}
function routeCoords() {
  return routeIds.map(getPlaceById).filter(Boolean).map(p => p.coords);
}
// 現在のルート（経由地の順）をGoogleマップのナビURLにする。スマホではGoogleマップアプリが起動する。
function googleMapsDirUrl() {
  const pts = routeIds.map(getPlaceById).filter(Boolean);
  if (!pts.length) return null;
  const c = p => `${p.coords[0]},${p.coords[1]}`;
  if (pts.length === 1) return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(c(pts[0]))}`;
  const origin = c(pts[0]), destination = c(pts[pts.length - 1]);
  // 経由地はURL仕様上ほどほどに（先頭=出発, 末尾=目的地, 中間=waypoints）
  const mid = pts.slice(1, -1).map(c).slice(0, 9);
  let url = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(destination)}&travelmode=driving`;
  if (mid.length) url += `&waypoints=${encodeURIComponent(mid.join("|"))}`;
  return url;
}
function drawRouteLine() {
  const coords = routeCoords();
  if (routeLine) map.removeLayer(routeLine);
  routeLine = L.polyline(coords, { color: "#1f9c9c", weight: 3, dashArray: "7 7", opacity: .85 }).addTo(map);
}
function refreshMarkers() {
  allPlaces().forEach(p => {
    const id = placeId(p.type, p.name);
    if (markers[id]) markers[id].setIcon(makeIcon(p, id));
  });
}
function setupMap() {
  map = L.map("map", { scrollWheelZoom: false });
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18, attribution: '© OpenStreetMap contributors'
  }).addTo(map);
  markerLayer = L.layerGroup().addTo(map);

  const pts = [];
  allPlaces().forEach(p => {
    const id = placeId(p.type, p.name);
    const m = L.marker(p.coords, { icon: makeIcon(p, id) });
    m.bindPopup(popupHtml(p, id));
    markers[id] = m;
    m.addTo(markerLayer);
    pts.push(p.coords);
  });
  drawRouteLine();
  applyFilters();
  map.fitBounds(L.latLngBounds(pts).pad(0.15));

  // フィルタ
  $$("#map-filters input").forEach(i => i.addEventListener("change", applyFilters));

  // ポップアップ内「追加」
  map.on("popupopen", (e) => {
    const btn = e.popup._contentNode.querySelector("[data-add]");
    if (btn) btn.addEventListener("click", () => { addToRoute(btn.dataset.add); map.closePopup(); });
  });
}

/* =========================================================================
   ルート編集 UI（SortableJS）
   ========================================================================= */
function renderRouteEditor() {
  const list = $("#route-list");
  if (!routeIds.length) {
    list.innerHTML = `<li class="route-empty">ルートが空です。候補から追加してください。</li>`;
  } else {
    list.innerHTML = routeIds.map(id => {
      const p = getPlaceById(id); if (!p) return "";
      return `<li class="route-item" data-id="${esc(id)}">
        <span class="num"></span>
        <span class="type-emoji">${TYPE_ICONS[p.type]}</span>
        <span class="nm">${esc(p.name)}</span>
        <button class="rm" data-rm="${esc(id)}" aria-label="削除">✕</button>
      </li>`;
    }).join("");
  }
  const cand = $("#candidates-list");
  cand.innerHTML = allPlaces().map(p => {
    const id = placeId(p.type, p.name);
    const inRoute = routeIndex(id) >= 0;
    return `<li class="cand-item ${inRoute ? "in-route" : ""}" data-id="${esc(id)}">
      <span class="type-emoji">${TYPE_ICONS[p.type]}</span>
      <span class="nm">${esc(p.name)}</span>
      <button class="add" data-addcand="${esc(id)}" aria-label="追加">⊕</button>
    </li>`;
  }).join("");

  $$("#route-list .rm").forEach(b => b.addEventListener("click", () => removeFromRoute(b.dataset.rm)));
  $$("#candidates-list .add").forEach(b => b.addEventListener("click", () => addToRoute(b.dataset.addcand)));

  // Googleマップでルートを開くボタンのリンクを更新（空なら無効化）
  const g = $("#route-gmaps");
  if (g) {
    const url = googleMapsDirUrl();
    if (url) { g.href = url; g.classList.remove("disabled"); g.removeAttribute("aria-disabled"); }
    else { g.removeAttribute("href"); g.classList.add("disabled"); g.setAttribute("aria-disabled", "true"); }
  }
}

/* ルート全体の再同期 */
function syncRoute() {
  saveRoute();
  renderRouteEditor();
  refreshMarkers();
  if (map) { drawRouteLine(); applyFilters(); }
}

/* ドラッグ&ドロップ（並び替え + 候補→ルート追加）。
   コンテナに一度だけバインドすればよい（innerHTML差し替え後も有効）。 */
let sortableInited = false;
function setupSortableCross() {
  if (sortableInited || typeof Sortable === "undefined") return;
  sortableInited = true;
  // ルートリスト: 並び替え可・候補からの受け入れ可
  Sortable.create($("#route-list"), {
    group: { name: "shared", pull: true, put: true },
    animation: 150, ghostClass: "sortable-ghost", chosenClass: "sortable-chosen",
    draggable: ".route-item",
    onAdd: (evt) => {
      const id = evt.item.dataset.id;
      evt.item.remove();          // 落ちてきたクローンを除去（モデルから再描画）
      addToRoute(id);             // syncRoute 内で再描画される
    },
    onUpdate: () => {
      routeIds = $$("#route-list .route-item").map(li => li.dataset.id).filter(Boolean);
      syncRoute();
    }
  });
  // 候補リスト: クローンを引き出すだけ（並び替え・受け入れなし）
  Sortable.create($("#candidates-list"), {
    group: { name: "shared", pull: "clone", put: false },
    sort: false, animation: 150,
    draggable: ".cand-item"
  });
}

/* =========================================================================
   天気（Open-Meteo, APIキー不要）
   ========================================================================= */
const WX_ICONS = { 0:"☀️",1:"🌤",2:"⛅",3:"☁️",45:"🌫",48:"🌫",51:"🌦",53:"🌦",55:"🌧",61:"🌧",63:"🌧",65:"🌧",71:"🌨",80:"🌦",81:"🌧",82:"⛈",95:"⛈",96:"⛈",99:"⛈" };
async function loadWeather() {
  const wp = DATA.weatherPoint;
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${wp.lat}&longitude=${wp.lon}` +
    `&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max&timezone=Asia%2FTokyo&forecast_days=7`;
  const box = $("#weather-content"), alert = $("#weather-alert");
  try {
    const r = await fetch(url);
    const d = await r.json();
    const dl = d.daily;
    const dows = ["日","月","火","水","木","金","土"];
    box.innerHTML = dl.time.map((iso, i) => {
      const dt = new Date(iso + "T00:00:00+09:00");
      const isTrip = iso === wp.tripDate;
      return `<div class="wx-day ${isTrip ? "is-trip" : ""}">
        <div class="wx-dow">${dows[dt.getDay()]}${isTrip ? " ★" : ""}</div>
        <div class="wx-date">${dt.getMonth()+1}/${dt.getDate()}</div>
        <div class="wx-icon">${WX_ICONS[dl.weather_code[i]] || "❔"}</div>
        <div class="wx-temp"><span class="hi">${Math.round(dl.temperature_2m_max[i])}°</span> / <span class="lo">${Math.round(dl.temperature_2m_min[i])}°</span></div>
        <div class="wx-pop">☔ ${dl.precipitation_probability_max[i] ?? "–"}%</div>
      </div>`;
    }).join("");

    // 旅行当日の表示ラベルは weatherPoint.tripDate から生成する（日付をハードコードしない）
    const tripDt = new Date(wp.tripDate + "T00:00:00+09:00");
    const tripLabel = `${tripDt.getMonth()+1}/${tripDt.getDate()}（${dows[tripDt.getDay()]}）`;

    const tripI = dl.time.indexOf(wp.tripDate);
    if (tripI >= 0) {
      const pop = dl.precipitation_probability_max[tripI];
      const wc = dl.weather_code[tripI];
      const hi = Math.round(dl.temperature_2m_max[tripI]);
      const rain = wc >= 51 || (pop ?? 0) >= 50;
      const hot  = hi >= 35;
      const advice = rain
        ? "雨寄り。<b>谷瀬の吊り橋は中止</b>（高所・揺れ・山道）。おふさ観音は状況により短縮し、茶房おふさ→四神の館／橿原考古学研究所附属博物館の屋内中心に切り替える。国道168号の規制情報も併せて確認。"
        : hot
          ? "猛暑寄り。屋外は<b>おふさ観音の30〜40分に限定</b>し、日陰・水分休憩を挟む。谷瀬は中止して冷房のある四神の館・博物館へ。同行者の消耗を最優先に判断する。"
          : "屋外は動きやすい見込み。おふさ観音は30〜50分で切り上げ、<b>14:15の谷瀬 Go/No-Go 判断</b>（「注意」タブ）に間に合わせる。八尾帰着は19:00〜19:30を目標に。";
      alert.innerHTML = `<div class="alert-box ${rain || hot ? "" : "ok"}">
        <b>${tripLabel}・旅行当日の見込み:</b> ${WX_ICONS[wc] || ""} 最高${hi}° / 最低${Math.round(dl.temperature_2m_min[tripI])}° ・ 降水${pop ?? "–"}%。
        ${advice}
      </div>`;
    } else {
      alert.innerHTML = `<div class="alert-box ok">${tripLabel}はまだ7日予報の範囲外です。出発が近づいたら再確認を（このページを開くだけで自動更新されます）。</div>`;
    }
  } catch (e) {
    box.innerHTML = `<p class="muted">天気情報を取得できませんでした（オフライン時など）。Open-Meteoに接続できる環境で再読み込みしてください。</p>`;
  }
}

/* =========================================================================
   タブ切替
   ========================================================================= */
function setupTabs() {
  let weatherLoaded = false, mapReady = false;
  $$("#tabs .tab").forEach(tab => {
    tab.addEventListener("click", () => {
      $$("#tabs .tab").forEach(t => t.classList.remove("active"));
      $$(".panel").forEach(p => p.classList.remove("active"));
      tab.classList.add("active");
      const name = tab.dataset.tab;
      $("#panel-" + name).classList.add("active");
      if (name === "map") {
        if (!mapReady) { setupMap(); setupSortableCross(); mapReady = true; }
        setTimeout(() => map && map.invalidateSize(), 60);
      }
      if (name === "weather" && !weatherLoaded) { loadWeather(); weatherLoaded = true; }
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
}

/* =========================================================================
   初期化
   ========================================================================= */
/* =========================================================================
   Firebase リアルタイム同期（スケジュール・確定状態・ルートを全員で共有）
   ・Firebase未接続でも localStorage で通常どおり動く（オフラインファースト）
   ・window.FB は index.html の module スクリプトが用意する
   ========================================================================= */
let fbReady = false, applyingRemote = false;
function fbPush(key, value) {
  if (!fbReady || applyingRemote || !window.FB) return;
  // JSON往復で undefined プロパティを除去（Firebaseは undefined を拒否する）
  // set() は Promise を返すため .catch() が必須。同期 try/catch だけだと
  // permission denied（旅行終了後にDBルールで deny したとき）が未処理拒否になる。
  try {
    window.FB.set(window.FB.ref(window.FB.db, "nara-trip/" + key), JSON.parse(JSON.stringify(value ?? null)))
      .catch(e => console.warn("Firebase 書き込み失敗（ローカル保存は成功）:", e.code || e));
  } catch (e) { console.warn("Firebase 書き込み失敗:", e); }
}
// Firebaseのキーは "." 等を使えないため、status は配列 [{id, s}] にして id を値側に持たせる
function statusToArray() { return Object.keys(statusMap).map(id => ({ id, s: getStatus(id) })); }
// リモート（DB）の変更をローカルへ反映
function applyRemote(d) {
  if (!d) return;
  applyingRemote = true;
  let changed = false;
  if (d.schedule && JSON.stringify(d.schedule) !== JSON.stringify(schedule)) {
    schedule = d.schedule; localStorage.setItem(SCHED_KEY, JSON.stringify({ v: SCHED_VERSION, items: schedule })); changed = true;
  }
  if (Array.isArray(d.status)) {
    const incoming = {};
    d.status.forEach(x => { if (x && x.id) incoming[x.id] = (x.s === "confirmed" ? "confirmed" : "tentative"); });
    if (JSON.stringify(incoming) !== JSON.stringify(statusMap)) {
      statusMap = incoming; localStorage.setItem(STATUS_KEY, JSON.stringify({ v: STATUS_VERSION, map: statusMap })); changed = true;
    }
  }
  if (d.route && JSON.stringify(d.route) !== JSON.stringify(routeIds)) {
    routeIds = d.route; localStorage.setItem(ROUTE_KEY, JSON.stringify(routeIds)); changed = true;
  }
  if (Array.isArray(d.info) && JSON.stringify(d.info) !== JSON.stringify(infoItems)) {
    infoItems = d.info; localStorage.setItem(INFO_KEY, JSON.stringify({ v: INFO_VERSION, items: infoItems })); changed = true;
  }
  applyingRemote = false;
  if (changed) rerenderAll();
}
// status/並び順/ルートに依存する全ビューを再描画
function rerenderAll() {
  renderAllCards();
  if ($("#info-content")) renderInfo();
  if (typeof renderSchedule === "function") renderSchedule();
  if ($("#sched-list")) renderScheduleEditor();
  if ($("#route-list")) renderRouteEditor();
  if (typeof map !== "undefined" && map) { refreshMarkers(); drawRouteLine(); applyFilters(); }
}
// 匿名ログイン完了後に module から呼ばれる
window.startFirebaseSync = async function () {
  if (!window.FB || fbReady) return;
  fbReady = true;
  try {
    const tripRef = window.FB.ref(window.FB.db, "nara-trip");
    const snap = await window.FB.get(tripRef);
    const d = snap.val();
    // コード側の初期バージョンが新しい（SCHED_DEFAULT/STATUS_DEFAULT を更新した）ら、
    // DB を現在のコードの初期値で作り直す（＝全員に配る初期表示の更新）。
    if (!d || (d.schedVersion || 0) < SCHED_VERSION || (d.statusVersion || 0) < STATUS_VERSION
           || (d.infoVersion || 0) < INFO_VERSION) {
      await window.FB.set(tripRef, JSON.parse(JSON.stringify({
        schedule, schedVersion: SCHED_VERSION,
        status: statusToArray(), statusVersion: STATUS_VERSION,
        route: routeIds,
        info: infoItems, infoVersion: INFO_VERSION
      })));
    }
    window.FB.onValue(tripRef, s => applyRemote(s.val()));
    console.log("Firebase 同期を開始しました");
  } catch (e) { console.warn("Firebase 同期の開始に失敗:", e); fbReady = false; }
};

function init() {
  renderSchedule();
  renderScheduleEditor();
  renderSchedCandidates();
  setupSchedCandTabs();
  populateSchedAddSelect();
  setupScheduleSortable();
  renderCards("#cards-spots", DATA.spots, "spot");
  renderCards("#cards-restaurants", DATA.restaurants, "restaurant");
  renderCards("#cards-cafes", DATA.cafes, "cafe");
  renderRoutes();
  renderPacking();
  renderInfo();
  syncRouteFromSchedule();   // スケジュールの地点順を初期ルートに反映（片方向連動）
  renderRouteEditor();
  setupLightbox();
  setupTabs();

  // カード内「ルートに追加」
  document.addEventListener("click", (e) => {
    const b = e.target.closest("[data-add]");
    if (b && b.classList.contains("add-route")) addToRoute(b.dataset.add);
  });

  // 確定／未確定バッジ（カード・スケジュール共通）: どこで押しても全タブに反映
  document.addEventListener("click", (e) => {
    const t = e.target.closest("[data-status-toggle]");
    if (t) toggleStatus(t.dataset.statusToggle);
  });

  // ルート編集ボタン
  $("#route-reset").addEventListener("click", () => { routeIds = DEFAULT_ROUTE.slice(); syncRoute(); });
  $("#route-clear").addEventListener("click", () => { routeIds = []; syncRoute(); });

  // スケジュール編集ボタン
  $("#sched-add-row").addEventListener("click", () => { schedule.push({ time: "", text: "", status: "tentative" }); saveSchedule(); renderScheduleEditor(); });
  $("#sched-reset").addEventListener("click", () => { schedule = SCHED_DEFAULT.map(x => ({ ...x })); saveSchedule(); syncRouteFromSchedule(); renderScheduleEditor(); });
  $("#sched-clear").addEventListener("click", () => { schedule = []; saveSchedule(); syncRouteFromSchedule(); renderScheduleEditor(); });
  $("#sched-save-plan").addEventListener("click", addCurrentScheduleAsPlan);
  $("#sched-export").addEventListener("click", exportSchedule);

  // 注意タブの編集モード（誤タップ防止：既定は閲覧モード）
  $("#info-edit-toggle").addEventListener("click", () => { infoEditing = !infoEditing; renderInfo(); });
  $("#info-add").addEventListener("click", () => {
    infoItems.push({ warn: false, title: "", text: "" });
    saveInfo(); infoEditing = true; renderInfo();
    const last = $$("#info-content .info-title").pop(); if (last) last.focus();
  });
  $("#info-reset").addEventListener("click", () => {
    if (!confirm("注意タブを初期状態に戻しますか？（同行者の端末にも反映されます）")) return;
    infoItems = INFO_DEFAULT.map(x => ({ ...x })); saveInfo(); renderInfo();
  });
  $("#info-export").addEventListener("click", exportInfo);
}

if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
else init();
