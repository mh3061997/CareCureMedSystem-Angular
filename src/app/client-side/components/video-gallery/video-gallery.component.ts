import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
      selector: 'app-video-gallery',
      templateUrl: './video-gallery.component.html',
      styleUrls: ['./video-gallery.component.css']
})
export class VideoGalleryComponent implements OnInit {



      DermatolgyArr: any[] = [
            {
                  title: " candela lase pro U 2020 كل الاسئلة الشائعة عن ازالة الشعر بجهاز ",
                  url: "https://www.youtube.com/embed/07f8PZXsI4k"
            },
            {
                  title: "استخدامات الفراكشنل ليزر",
                  url: "https://www.youtube.com/embed/YyR3t90Ts1U"
            },
            {
                  title: "نضارة البشرة",
                  url: "https://www.youtube.com/embed/7Ahw-fm0My8"
            },    {
                  title: " candela lase pro U 2020 كل الاسئلة الشائعة عن ازالة الشعر بجهاز ",
                  url: "https://www.youtube.com/embed/1BVcbkw74os"
            },    {
                  title: "حقن البوتكس",
                  url: "https://www.youtube.com/embed/nYTBIV8kp1U"
            },    {
                  title: "الهالات السوداء",
                  url: "https://www.youtube.com/embed/l9Oo7ZyiavU"
            },    {
                  title: "ازالة الشعر بالليزر",
                  url: "https://www.youtube.com/embed/xF0AaxFSAuc"
            },    {
                  title: "ازالة الشعر بجهاز كانديلا ليز برو و استخدامات تا فراكشنل ليزر",
                  url: "https://www.youtube.com/embed/6LpJ2dz5uOM"
            }
      ];
      DentalArr: any[] = [
            {
                  title: "تبيض الاسنلن",
                  url: "https://www.youtube.com/embed/gF-3QwpNL1I"
            },
            {
                  title: "فينير الاسنان",
                  url: "https://www.youtube.com/embed/c598_UYUTNY"
            }, {
                  title: "ضروس العقل المدفونة",
                  url: "https://www.youtube.com/embed/T1Gi3FbPo3o"
            }, {
                  title: "أهمية تقويم الاسنان",
                  url: "https://www.youtube.com/embed/KyGVgewj1Tk"
            }, {
                  title: "حشو العصب عند الأطفال",
                  url: "https://www.youtube.com/embed/WyRoPSTSQfs"
            }, {
                  title: "الاسنان اللبنية عند الأطفال",
                  url: "https://www.youtube.com/embed/oQqXH1mGAE4"
            }, {
                  title: "إبني وقع و سنانة اتكسرت",
                  url: "https://www.youtube.com/embed/v8w_MdEB9zc"
            },];

      InternalMedcineArr: any[] = [
            {
                  title: "تليف الكبد الدهني",
                  url: "https://www.youtube.com/embed/sJcy2DhxDbI"
            }, {
                  title: "القولون العصبي",
                  url: "https://www.youtube.com/embed/cu4Hj-HOv2o"
            }, {
                  title: "الكبد الدهني",
                  url: "https://www.youtube.com/embed/FrcEO43x_Fo"
            }, {
                  title: "الجهاز الهضمي",
                  url: "https://www.youtube.com/embed/o5SnVS-pAvU"
            }, {
                  title: "يعني ايه بالون المعدة",
                  url: "https://www.youtube.com/embed/xVMQSVUPQOQ"
            }, {
                  title: "Keep Hydrated",
                  url: "https://www.youtube.com/embed/FwiQSpEfDhI"
            }, {
                  title: "اهمية شرب الماية",
                  url: "https://www.youtube.com/embed/0CsXQGRfKJc"
            }, {
                  title: "شرب القهوة",
                  url: "https://www.youtube.com/embed/88XsZvnFikY"
            }, {
                  title: "المنظار مكانة في المستشفي مش العيادة",
                  url:"https://www.youtube.com/embed/TbTk2D-MfsA"
            }, {
                  title: "البالون هتخسسنا إزاى",
                  url: "https://www.youtube.com/embed/6RWxHdVY5Z0"
            }, {
                  title: "فوائد شرب المياة",
                  url: "https://www.youtube.com/embed/dd_qAx8_eDU"
            }, {
                  title: "مميزات البالون المعدة",
                  url: "https://www.youtube.com/embed/DQ2ounOYGk8"
            }, {
                  title: "منظار الجهاز الهضمي",
                  url: "https://www.youtube.com/embed/yxtUr5Ua_0A"
            }, {
                  title: "صعوبة البلع",
                  url: "https://www.youtube.com/embed/-d2Hxeg-U0k"
            }, {
                  title: "منظار المعدة",
                  url: "https://www.youtube.com/embed/_HXkuPKbcgU"
            },
      ];

      ObsArr: any[] = [
            {
                  title: "الفرق ما بين الحقن المجهري و التلقيح الصناعي",
                  url: "https://www.youtube.com/embed/zqa3Gc-N5xo"
            },
            ];

      NutritionArr: any[] =  [
        
            {

                  title: "خطواط تحسسنا بالشبع دايما",
                  url: "https://www.youtube.com/embed/6hp2xE66F7M"
            },      {
                  title: "عزومة رمضان",
                  url: "https://www.youtube.com/embed/07XlAuwA4X8"
            },      {
                  title: "السوايل في رمضان",
                  url: "https://www.youtube.com/embed/3Wnhd34ciCo"
            },      {
                  title: "نلعب رياضة امتي في رمضان",
                  url: "https://www.youtube.com/embed/kbvGWvhfDjk"
            },      {
                  title: "افضل نصائح التغذية لشهر رمضان الكريم",
                  url: "https://www.youtube.com/embed/BJz5LXL1K-Q"
            },
            ];

      SurgeryArr: any[] = [
            {
                  title: "إفرازات الثدي أنواعها وأسبابها",
                  url: "https://www.youtube.com/embed/qfn-gvKptwE"
            },  {
                  title: "اورام الثدي الحميدة - اعراض و تشخيص و علاج",
                  url: "https://www.youtube.com/embed/mWt9sKTlLJo"
            },  {
                  title: "هل عينة ورم الثدي تساعد علي انتشاره ؟",
                  url: "https://www.youtube.com/embed/k4bKOu-3gX8"
            },  {
                  title: "التشخيص المبكر لأورام الثدى",
                  url: "https://www.youtube.com/embed/mRa2-HPFXe0"
            },  {
                  title: "حصوات المرارة.. أعراضها وأسبابها ومضاعفاتها",
                  url: "https://www.youtube.com/embed/SzEUMX4kFIE"
            },  {
                  title: "الغده الدرقية , اسبابها و اعراضها و طرق علاجها",
                  url: "https://www.youtube.com/embed/xf-XoS2TP5c"
            },  {
                  title: "الفرق كا بين القولون العصبي و اورام القولون",
                  url: "https://www.youtube.com/embed/f8rGNsefRRc"
            },
      ];

      PlasticSurgeyArr: any[] =  [
            {
                  title: "إمتي ينفع نعمل شفط دهون وإمتى مينفعش",
                  url: "https://www.youtube.com/embed/wNUK1RbJA4Q"
            }, {
                  title: "شد البطن",
                  url: "https://www.youtube.com/embed/VSiMeQaQQ8E"
            }, {
                  title: "إعادة بناء الثدى",
                  url: "https://www.youtube.com/embed/ZJV67Irhmf8"
            },
            ];

      activeArr: any[] = this.DermatolgyArr;
      activeSpeciality: any = "Dermatology";


      changeActiveArr(speciality: string) {
            switch (speciality) {
                  case 'dermatology': this.activeArr = this.DermatolgyArr;
                        this.activeSpeciality = "Dermatology";

                        break;
                  case 'dental': this.activeArr = this.DentalArr;
                        this.activeSpeciality = "Dentistry";

                        break;

                  case 'internal': this.activeArr = this.InternalMedcineArr;
                        this.activeSpeciality = "Internal Medicine";

                        break;

                  case 'obs': this.activeArr = this.ObsArr;
                        this.activeSpeciality = "Obsetrics";

                        break;

                  case 'nutrition': this.activeArr = this.NutritionArr;
                        this.activeSpeciality = "Nutrition";

                        break;

                  case 'surgery': this.activeArr = this.SurgeryArr;
                        this.activeSpeciality = "Surgery";

                        break;

                  case 'plastic': this.activeArr = this.PlasticSurgeyArr;
                        this.activeSpeciality = "Plastic Surgery";

                        break;
            }
            this.viewportScroller.scrollToAnchor("scrollAnchor");

      }

      constructor(private viewportScroller: ViewportScroller) {}

      ngOnInit(): void {
      }

}

