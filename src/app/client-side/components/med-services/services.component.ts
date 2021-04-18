import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class servicesComponent implements OnInit {

  dentalSerivces: any[] = [
    {
      name: "Bleaching",
      nameAr: "تبييـض الاسـنان",
      description: "يعد من امن الطرق التجميلية ويستخدم باحدث الوسائل الحديثه التى تدوم لمده اطول ويتم بشكل أسرع",

    }, {
      name: "veneers",
      nameAr: " القشور الخزفيه",
      description: " هي طبقة من مصنوعة من مادة ما توضع على الأسنانإما لتحسين جماليات الأسنان أو لحماية سطح الأسنان من التلف او لتعالج مشاكل الاسنان الأماميه كاللونالغامق والشكل الغير مناسب كقصر طول الأسنانأو تآكلها أو عدم تناسقهمتصنع القشره من ماده أيماكس التي تتميز بصلابتهاوكذلك بدرجه شفافيه عاليه لتحاكي طبقه الميناالطبيعيه للأسنان لتظهر بالشكل واللون الطبيعي الذي  تتمناه."
    }, {
      name: "fixed prosthetics",
      nameAr: "التركيبات الثابته ",
      description: ""
    }, {
      name: "Estheitc restorations",
      nameAr: " الحشوات التجميليه",
      description: "عبارة عن تركيب غطاء خزفى لترميم الاسنان المكسورةولحماية الاسنان المتضرره من التسوس وعلاج الجذور على المدى الطويل لتحسين شكل الابتسامه"
    }, {
      name: "Endodontics treatment",
      nameAr: "علاج العصب ",
      description: "يحدث بسبب إهمال تسوس الاسنان فيقوم الطبيب بإجراء عدة جلسات تتطلب القيام بتنظيف العصب  الملتهب من البكتيريا ثم حشوه"
    }, {
      name: "Implant dentistry",
      nameAr: "زراعه الاسنان  ",
      description: "تعتبر زراعه الاسنان الاختيار البديل لتعويض الاسنان nالمفقوده وهوا عبارة عن جزء يتم غرسه ف الفك مكون من معدن التيتانيوم لانه سريع الالتحام مع عظم الفك  مع مراعاه تنضيف اللثه بشكل مستمر وإجراء الكشف الدورى على الاسنان كل 6 اشهر"
    }, {
      name: "periodontal treatment",
      nameAr: "علاج امراض اللثه ",
      description: "جراء الجراحات التجميلية لعلاج تضخم اللثه والإبتسامة اللثويه وكحت الجيوب اللثويه"
    }, {
      name: "Dental Surgery",
      nameAr: "جراحه الاسنان ",
      description: "كل مايخص الخلع الجراحى لضروس  العقل وجراحات الوجه والفكين"
    }, {
      name: "Orthodontics",
      nameAr: "تقويم الاسنان  ",
      description: "لمعالجه عيوب اطباق الاسنان ومشاكل  الفكين للحصول على ابتسامه مثاليه"
    }, {
      name: "Pediatrics",
      nameAr: "طب الاطفال ",
      description: "متخصصون في التعامل مع الاطفال  والتشخيص المبكر لمشاكل الاسنان  وكل مايخص اسنان الطفل"
    }, {
      name: "Removable prosthetics",
      nameAr: "تركيب اطقم الاسنان المتحركه ",
      description: "يتم الاستعانه بها لتعويض فك اسنان كامل او جزئى او الفكين معا ف يتم تصنيع اطقم  اسنان متخصصة بمقاس يتلائم مع الفم دون  أن يسبب اى ازعاج وبلون مطابق للاسنان الطبيعيه"
    }, {
      name: "scaling & polishing",
      nameAr: "تنظيف الاسنان ",
      description: "تتكون طبقه من الجير والترسبات مما يؤدى إلى تسوس ف الاسنان والتهاب ف اللثه لذا يجب ازاله الجير والترسبات على الأقل مره كل 6 اشهر من أجل الحفاظ على على صحه ونظافه  الاسنان طول الوقت"
    }
  ];

  dermatologySerivces: any[] = [
    {
      name: "Laser Hair Removal",
      nameAr: "إزاله الشعر بالليزر ",
      description: "باحدث جهاز كانديلا برو بدون  , الم وبأقل عدد جلسات ,عن  طريق اطباء اخصائيين"
    }, {
      name: "Derma Pen",
      nameAr: " ديرما بن",
      description: "يعمل عن طريق ال micro needling لتحفير وتصنيع كولاجين وايلاستين جديد لينتج عنه بشره نضره خاليه من العيوب وعلامات الاجهاد"
    }, {
      name: "Botox Injection ",
      nameAr: " حقن البوتكس",
      description: "   لعلاج تجاعيد الجبهه  والتجاعيد الدقيقه وعلاج مشكله فرط التعرق "
    }, {
      name: "Filler Injection ",
      nameAr: " حقن الفيلر ",
      description: "لرسم الخدود وملئ تجويف  العين وتوريد الشفايف "
    }, {
      name: " Hydrofacial",
      nameAr: "الهيدرافيشيال  ",
      description: "للحصول على بشره جذابه صحيه نضره لامعه  والتخلص من الارهاق وشد الجلد  الجهاز يعمل على تنضيف البشره عن طريق ازاله طبقات الجلد   واستخدام أحدث أنواع الماسكات والسكراب  للحصول على جلد مشدود عن طريق  التردد الحراري و موجات فوق صوتيه للحصول على مظهر صحى  ومشرق"
    }, {
      name: " Dark Circles Treatment",
      nameAr: " الهالات السوده",
      description: " سواء كانت وراثية أو غير وراثيه الناتجه عن عدم مرور الدم بصورة غير منتظمه  ف الاوعيه الدمويه أو تحرك دهون تحت العين من مكانها أو فقدانها أو تصبغ ف طبقه الجلد الرقيقه نفسها .يعتبر حقن الميزوثيرابى الحل الامثل لعلاج الهالات السوداء عند طريق تنشيط الدورة الدموية بشكل سريع الذى يعمل على إخفاء اللون أو حقن الفيلر البديل الاسرع والأسهل والامن"
    }, {
      name: " Stretch Marks Treatment",
      nameAr: "ال سترتش مارك ",
      description: "يعتبر الميزوثيرابى الحل الافضل والاقرب لعلاج الاسترتش  مارك  عن طريق حقنه ف المكان المراد علاجه على فترات من الجلسات الذى يعمل على إنتاج خلايا جديدة ويمد  الجلد بكولاحين وايلاستين كى يعود بصوره طبيعيه كما  كان"
    }, {
      name: "Plasma ",
      nameAr: "البلازما ",
      description: "  عبارة عن صفائح دمويه موجوده بالدم بتركيز عالى   تعمل على حل مشاكل الشعر والبشره عن طريق  تجديد الكولاجين وتحفيز انقسام الخلايا الجذعية  المسؤوله عن تجديد الخلايا التالفه وتجديد الانسجه وتعزيز نمو الاوعيه الدمويه الجديدة وكل العناصر   اللازمه لشعر صحى بدون مشاكل وبشره ناضرة"
    }
  ];

  plasticSurgeryServices:any[] = [
    {
      name:" Abdominoplasty",
      nameAr:"شد البطن ",
      description:" عملية تجميلية لشد البطن والتخلص من الجلد الزائد فى تلك المنطقه "
    },{
      name:" Blepharoplasty",
      nameAr:"شد الجفون",
      description:" عمليه تجميليه لتحسين شكل الجفون العلوية أو السفليه أو كلايهما معا      "
    },{
      name:" Brachioplasty",
      nameAr:"شد الذراعين",
      description:" عمليه لشد الذراعين وشد الترهلات فيهما      "
    },{
      name:" Mastopixy",
      nameAr:"شد ورفع الثدى",
      description:"عمليه يتم إجراؤها لتجميل ورفع الثدى "
    },{
      name:" Breast reduction",
      nameAr:"تصغير الثدى",
      description:"لمعالجه ترهلات الثدى "
    },{
      name:"  Breast Augmentation",
      nameAr:"تكبير الثدى ",
      description:" "
    },{
      name:"  Lip reduction",
      nameAr:"تصغير الشفايف",
      description:"عمليه تجميليه لتصغير الشفايف وتنسيق حجمهما "
    },{
      name:" liposuction",
      nameAr:"شفط الدهون ",
      description:"يتم شفط الدهون عن طريق ادوات ومعدات لانقاص الوزن واكساب الجسم الشكل المثالى      "
    },{
      name:" Face and Neck lift",
      nameAr:"شد الوجه والرقبه ",
      description:" "
    },{
      name:" Double Chin ",
      nameAr:"شفط اللغد ",
      description:" لمعالجه الذقن المزدوجه"
    },{
      name:" Rhinoplasty",
      nameAr:"تجميل الانف  ",
      description:"اعادة تشكيل الأنف عن طريق اضافه او ازاله عظم أو غضروف لتحسين مظهرها      "
    },{
      name:" Thigh lift",
      nameAr:"شد الجزء العلوي من القدم ",
      description:" "
    }
  ];

  surgeryServices:any[] = [
    {
      name:" Conservative breast surgery",
      nameAr:"العلاج التحفظي لأورام الثدي ",
      description:"الغاية من عملية الاستئصال الجزئي للثدي هو إخراج ورم من الثدي (حميد أو خبيث)، تعتبر هذه العملية الجراحية جراحة محافظة بحيث تتيح الحفاظ على شكل الثدي، قدر الإمكان، عن طريق استئصال أنسجة الورم، التي يتم الكشف عنها بعد تشخيص سرطان الثدي، والحفاظ على أنسجة الثدي السليمة."
    },{
      name:" Modified radical mastectomy",
      nameAr:"استئصال كامل الثدي والغدد اللمفاوية ",
      description:" يُعد استئصال الثدي جراحة لإزالة جميع أنسجة الثدي من الثدي كطريقة لعلاج سرطان الثدي أو منع الإصابة به.  للمصابين بسرطان الثدي في مرحلة مبكرة، قد يكون استئصال الثدي أحد الخيارات العلاجية. قد تكون الجراحة التحفظية للثدي (استئصال الكتلة الورمية)، حيث تتم فيها إزالة الورم فقط من الثدي، خيارًا آخر. "
    },{
      name:" Total Thyroidectomy",
      nameAr:"استئصال كامل للغدة الدرقية ",
      description:" استئصال الغدة الدرقية هو استئصال جراحي للغدة الدرقية بالكامل أو جزء منها. الغدة الدرقية عبارة عن غدة صغيرة على شكل فراشة تقع في الجزء السفلي من الرقبة. وتُنتج الهرمونات التي تتحكم في عملية الأيض بأكملها، بدءًا من التحكم في معدَّل ضربات القلب إلى مدى سرعة الجسم في حرق السعرات الحرارية. ويعالج استئصال الغدة الدرقية اضطرابات الغدة الدرقية مثل السرطان، والتضخم غير السرطاني للغدة الدرقية (دُرَاق)، وفرط نشاط الغدة الدرقية (فَرط الدرقية). "
    },{
      name:"Superficial Parotidectomy ",
      nameAr:"استئصال الغدة النكافية ",
      description:" عملية استئصال الغدة النكافية هي عملية تتم فيها إزالة الغدد النكافية بسبب وجود ورم فيها، ومثل هذه الأورام يمكن أن تكون حميدة أو خبيثة، لكن من الأفضل إزالتها من الجسم لأنها قد تنشر خلايا سرطانية في الجسم عبر النظام اللمفاوي."
    },{
      name:" Laparoscopic Cholecystectomy",
      nameAr:"استئصال المرارة بالمنظار ",
      description:"استئصال المرارة هو عملية شائعة، ولا تنطوي إلا على خطر بسيط لحدوث مضاعفات. في معظم الحالات، يمكنك الذهاب إلى بيتك في اليوم نفسه الذي أجريت فيه عملية استئصال المرارة. "
    },{
      name:"Oncoplastic Surgery ",
      nameAr:"العلاج التجميلي لجراحات الثدي مع علاج اورم الثدي ",
      description:"لا تعتبر استعادة الثدي إجراءً تجميليًا، بل جراحة ترميمية، نظرًا لأنها تعتبر جزءًا من علاج مرض ما تشمل زرع الثدي و الاستعانة بالأنسجة و إعادة بناء الحلمة "
    },{
      name:"Laparoscopic Hernial repair ",
      nameAr:"تصليح الفتق الاربي بالمنظار ",
      description:"تتوافر طريقتان لعلاج الفتق الإربي الطريقة الأولى هي التدخل الجراحي التقليدي والأخرى وهي الأحدث والأفضل عن طريق المنظار وهي الطريقة الأكثر شيوعا نظرا لمميزاتها المتعددة. والفتق الإربي هو ضعف في جدار البطن في المنطقة الإربية تعود مسبباته إلى عوامل عديدة منها مسببات خلقية ومنها ما هو نتيجة ضعف يحدث مع تقدم العمر أو نتيجة ممارسة الرياضة بشكل عنيف أو الإمساك المزمن أو حمل الأشياء الثقيلة "
    },
    {
      name:"Laparoscopic Colectomy ",
      nameAr:"استئصال اورم القولون بالمنظار ",
      description:"استئصال القولون هو إجراء جراحي لإزالة القولون كله أو جزء منه. والقولون جزء من الأمعاء الغليظة على هيئة عضو طويل شبيه بالأنبوب يقع في نهاية السبيل الهضمي. وقد يكون استئصال القولون ضروريًا لعلاج الأمراض والحالات التي تصيب القولون والوقاية منها. "
    }
  ];

  laserServices:any[] = [
    {
      name:"Laser Hair removal With Candela pro 2020",
      nameAr:"أزالة الشعر ب الليزر بجهاز كانديلا برو 2020 ",
      description:"تهدف عمليات ازالة الشعر بالليزر لمعالجة نمو الشعر، ومن أجل منع عودته مجددا في مناطق الجسم التي لا يرغب الشخص بنمو الشعر فيها، لأسباب تجميلية، أو بدافع علاج الشعر الزائد.   خلال السنوات الأخيرة، بدأ الرجال والنساء على حد سواء بالتوجه لعلاجات الليزر الهادفة لإزالة الشعر من عدة مناطق في الجسم، سواء كانت هذه المناطق مرئية أو مخفية: الصدر، الظهر، الساقين، تحت الإبط، الوجه، أعلى الفخذين، وغيرها من المناطق.  يمنع العلاج بالليزر نمو خلايا الميلانين الموجودة في طبقات الجلد وفي بصيلات الشعر مجددا "
    },{
      name:" Fractional Laser",
      nameAr:"فراكشنال ليزر ",
      description:" تقنية الفراكشنال ليزر ثوره حديثه وأسلوب متطور وأمن لصنفرة البشرة وعلاج مشاكلها ومع ظهور التقنية الأحدث وهي الفراكشنال ليزر CO2 أصبحت النتائج أفضل وخاصة للندبات الأعمق التي لم تستجب بشكل جيد للفراكشنال ليزر بدون تقشير.  تعد صنفرة البشرة بالليزر من أهم الوسائل لعلاج مشاكل عديدة في البشرة مثل الندبات بجميع أنواعها كندبات ما بعد حب الشباب والندبات الجراحية وأيضاً علاج الحفر والمسام الواسعة وأيضاً التصبغات والتجاعيد.  "
     }
  ];

  obsServices:any[]=[

    {
      name:"Tubal ligation",
      nameAr:"ربط قناه فالوب ",
      description:"عمليه جراحيه تعتبر من إحدى الطرق لمنع الحمل بصورة دائمه عند النساء من خلال إغلاق مسار البويضه"
    },{
      name:"Hysterectomy ",
      nameAr:"استئصال الرحم",
      description:"إجراء جراحى يتم فيه ازاله الرحم كليا أو جزئيا وقد تشمل ازاله الرحم فى العديد من الأحيان ازاله عنق الرحم أو المبيضان أو قناتا فالوب وبعض المبانى المحيطة"
    },{
      name:" Salpingectomy",
      nameAr:"استئصال قناتا فالوب",
      description:" إجراء جراحى لازاله أنبوب فالوب الهدف منها منع الحمل أو مشاكل حدوث الحمل خارج الرحم أو الوقايه من الامراض السرطانيه في المبيض"
    },{
      name:" Cervicectomy",
      nameAr:" استئصال عنق الرحم",
      description:"تُعالَج معظم أنواع سرطان عنق الرحم في مراحلها المبكِّرة عن طريق عملية الاستئصال الجذري للرحم، والتي تشمل إزالة كل من عنق الرحم والرحم وجزء من المهبل والعُقَد الليمفاوية المجاورة. يُمكن لعملية استئصال الرحم أن تُعالِج سرطان عنق الرحم في مراحله المبكِّرة وتمنع ارتداده. "
    },{
      name:"Oophorectomy ",
      nameAr:"استئصال المبيض",
      description:"هوا إجراء جراحى يتم فيه استئصال المبيض غالبا ما يستعمل لعلاج أمراض مثل تكيسات المبيض أوالسرطان أو وقائيا للحد من فرص إصابة المبيض بالسرطان أو سرطان الثدي أو، أو بالتزامن مع استئصال الرحم "
    }
  ];

  nutritionServices:any[]=[

    {
      name:"Individualized plan",
      nameAr:" ",
      description:"القيام بعمل انظمه غذائيه على حسب حاله المريض وانواع الاكل المناسبة له"
    },{
      name:"Health coaching",
      nameAr:" ",
      description:"الدعم النفسى له فى مرحله نزول الوزن"
    },{
      name:"Balanced life style diet",
      nameAr:" ",
      description:"الاهتمام بأن العميل ياخد احتياجاته الاساسيه من مجموعات الطعام والتعلم أن يعيش حياه صحيه"
    },{
      name:"In body",
      nameAr:" ",
      description:" جهاز متقدم جداً يعمل بتقنية عاليه وهي المقاومة الداخلية لجسمك الناتجة عند مرور تيار كهربائي متناهي الصغر فيه (عدا الرقبة والرأس) دون أن تشعر به، هذا الجهاز سيغير مفاهيمك عن طريق تحليل مكونات جسمك مع تقديم تقرير مفصل يشمل أكثر من قياس منها النسبه الكليه للمياه ف الجسم و كتلة الدهون و كتله العضلات والمياه داخل وخارج الخلايا ومؤشر كتله الجسم ومعدل الحرق الداخلى  وكمية المعادن والبروتين في الجسد و كميه الدهون والعضلات فى اليدين والرجلين كما يمكنه تقييم توازن مظهرك ومساعدتك في تحديد أسلوب الحياة الصحي الأنسب لك"
    }
  ];

  internalMedicineServices:any[]=[
    {
      name:"Intragastric balloon ",
      nameAr:"بالون المعده  ",
      description:"هو بالون من السيليكون يتم تركيبه بالمنظار فى المعدة و ملئه بمحلول طبى معقم ليأخذ حيز كبير بالمعدة فيعطى الشعور بالشبع و الإمتلاء يتم تركيبها عن طريق عملية غير جراحية سريعة، لا تستغرق أكثر من بضع دقائق. -يحقق نتائج رائعة فى النزول فى الوزن. حيث يفقد المريض أكثر من 80% من وزنه بعد الإجراء. 4-يتخلص المريض من الكثير من مضاعفات السمنة و على رأسهم مرض السكر ، إرتفاع ضغط الدم و غيرها.  بعد أداء البالون لدوره والانتهاء منه، يقوم الطبيب بإزالته عن طريق استخراجه عبر الفم باستخدام منظار المعدة بنفس طريقة التركيب. "
   
    },{
      name:"Laparoscopy ",
      nameAr:"منظار البطن ",
      description:" هي عملية جراحية قصيرة وبسيطة تجرى في البطن أو الحوض وتستخدم إما لفحص وتشخيص حالة أو لإجراء عمليات جراحية وتتم من خلال عمل فتحة صغيرة على الجلد فوق أو تحت الصرة حيث يتم نفخ البطن بغاز ثاني أكسيد الكربون لدرجة معينة (النفخ يحدث فراغ داخل البطن لعمل حيز للمشاهدة ولإجراء العمل الجراحي) ومن ثم يتم إدخال كاميرا تنظير ويتم رؤية الجهاز الهضمي من الداخل من خلال ما تنقله الكاميرا على شاشة تلفزيونية يمكن متابعتها بالعين المجردة وتستخدم هذه التقنية لفحص وتشخيص حالة أو إجراء عمليات جراحية فهي عملية جراحية قصيرة وبسيطة تجرى للوصول إما لتشخيص أو معالجة سبب الشكوى وفي كثير من الأحيان يتم اكتشاف الأسباب وعلاجها في نفس الوقت حيث يستطيع الطبيب المعالج عن طريقها رؤية الأعضاء التناسلية مثل الرحم والمبيضين بالإضافة إلى رؤية المثانة والأمعاء الدقيقة والأمعاء الغليظة والزائدة الدودية والكبد والمرارة "
    }
  ];

  activeArr = this.dermatologySerivces;
  activeSpeciality="Dermatology";

  changeActiveArr(speciality: string){
    switch(speciality) {
      case 'dermatology': this.activeArr = this.dermatologySerivces;
      this.activeSpeciality="Dermatology";

    break;
    case 'dental': this.activeArr = this.dentalSerivces;
          this.activeSpeciality="Dentistry";

    break;

    case 'internal': this.activeArr = this.internalMedicineServices;
          this.activeSpeciality="Internal Medicine";

    break;

    case 'obs': this.activeArr = this.obsServices;
          this.activeSpeciality="Obsetrics";

    break;

    case 'nutrition': this.activeArr = this.nutritionServices;
          this.activeSpeciality="Nutrition";

    break;

    case 'surgery': this.activeArr = this.surgeryServices;
          this.activeSpeciality="Surgery";

    break;

    case 'plastic': this.activeArr = this.plasticSurgeryServices;
          this.activeSpeciality="Plastic Surgery";

    break;
  }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
