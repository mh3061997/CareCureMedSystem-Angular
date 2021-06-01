import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
      selector: 'app-doctors',
      templateUrl: './doctors.component.html',
      styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {

      DentalArr: any = [
            { name: 'Prof. Mohamed Nasser', speciality: 'Dentist', bio: 'Professor of dentistry in Ain Shams University ', img: '../../../../assets/Doctors/Dental/Prof. Mohamed Nasser-Dentist-Professor of dentistry in Ain Shams University .png' },
            { name: 'Dr. Noha Hussien', speciality: 'Orthodontics specialist', bio: 'Professor of Orthodontics in Shams University', img: '../../../../assets/Doctors/Dental/Dr. Noha Hussien-Orthodontics specialist-Professor of Orthodontics in Shams University.png' },
            { name: 'Dr. Omar Efat', speciality: 'Dentist', bio: 'Assistant lecturer in Ain Shams University ', img: '../../../../assets/Doctors/Dental/Dr. Omar Efat-Dentist-Assistant lecturer in Ain Shams University .png' },
            { name: 'Dr. Amani Yasser', speciality: 'Dentist', bio: 'Assistant lecturer in Ain Shams University', img: '../../../../assets/Doctors/Dental/Dr. Amani Yasser-Dentist-Assistant lecturer in Ain Shams University -.png' },
            { name: 'Dr. Dina Gamal', speciality: 'Dentist', bio: 'Assistant lecturer in Ain Shams University ', img: '../../../../assets/Doctors/Dental/Dr. Dina Gamal-Dentist-Assistant lecturer in Ain Shams University .png' },
            { name: 'Dr. Lamia Huissen', speciality: 'pediatric Dentist', bio: 'Assistant lecturer in Ain Shams University ', img: '../../../../assets/Doctors/Dental/Dr. Lamia Huissen-pediatric Dentist-Assistant lecturer in Ain Shams University .png' },
            { name: 'Dr. Sara Mohsen', speciality: 'Dentist', bio: 'Assistant lecturer in Ain Shams University ', img: '../../../../assets/Doctors/Dental/Dr. Sara Mohsen-Dentist-Assistant lecturer in Ain Shams University .png' },
            { name: 'Dr.Marwa Ashour', speciality: 'Dentist', bio: 'Assistant lecturer in Ain Shams University ', img: '../../../../assets/Doctors/Dental/Dr.Marwa Ashour-Dentist-Assistant lecturer in Ain Shams University .png' },
      ];

      DermatolgyArr: any = [{ name: 'Dr. Eman Dayhoum', speciality: 'Dermatologist and Cosmetologist', bio: 'Master degree of Dermatology in Ain Shams University ', img: '../../../../assets/Doctors/Dermatolgy/Dr. Eman Dayhoum-Dermatologist and Cosmetologist-Master degree of Dermatology in Ain Shams University .png' },
      { name: 'Dr. Heba Taher', speciality: 'Dermatologist and Cosmetologist', bio: 'Master degree of Dermatology in Ain Shams University ', img: '../../../../assets/Doctors/Dermatolgy/Dr. Heba Taher-Dermatologist and Cosmetologist-Master degree of Dermatology in Ain Shams University .png' },
      { name: 'Dr. Reem Zerwally', speciality: 'Dermatologist and Cosmetologist', bio: 'Master degree of Dermatology in Ain Shams University ', img: '../../../../assets/Doctors/Dermatolgy/Dr. Reem Zerwally-Dermatologist and Cosmetologist-Master degree of Dermatology in Ain Shams University .png' },
      { name: 'Dr. Sara Alaa El Din', speciality: 'Dermatologist and Cosmetologist', bio: 'Master degree of Dermatology in Ain Shams University ', img: '../../../../assets/Doctors/Dermatolgy/Dr. Sara Alaa El Din-Dermatologist and Cosmetologist-Master degree of Dermatology in Ain Shams University .png' },];

      InternalMedcineArr: any = [{ name: 'Dr. Ahmed Radwan', speciality: 'Specialist in Internal Medicine and Hebatology', bio: 'Master degree of Internal Medcine in Ain Shams University ', img: '../../../../assets/Doctors/Internal medcine/Dr. Ahmed Radwan-Specialist in Internal Medicine and Hebatology-Master degree of Internal Medcine in Ain Shams University .png' },];

      NutritionArr: any = [{ name: 'Dr. Maha Mosaad', speciality: 'Nutritionist', bio: 'Nutrition consultant in Ain Shams University', img: '../../../../assets/Doctors/Nutrition/Dr. Maha Mosaad-Nutritionist-Nutrition consultant in Ain Shams University.png' },
      { name: 'Dr. Nermeen', speciality: 'Nutritionist', bio: 'Nutrition expert and health coach', img: '../../../../assets/Doctors/Nutrition/Dr. Nermeen-Nutrition expert and health coach.png' },];

      ObsArr: any = [{ name: 'Prof. Ahmed El Hossieny', speciality: '', bio: 'professor of obstetrics and gynecology in Ain Shams University', img: '../../../../assets/Doctors/Obs/Prof. Ahmed El Hossieny--professor of obstetrics and gynecology in Ain Shams University.png' },];

      PlasticSurgeyArr: any = [{ name: 'Dr. Helen El kaabi', speciality: 'Plastic Surgeon', bio: 'Master Degree of Plastic Surgery In Shams University ', img: '../../../../assets/Doctors/Plastic surgey/Dr. Helen El kaabi-Plastic Surgeon-Master Degree of Plastic Surgery In Shams University .png' },
      { name: 'Prof. Ayman Abo El Makarm', speciality: 'Plastic Surgeon', bio: 'Professor of Plastic Surgery In Shams University ', img: '../../../../assets/Doctors/Plastic surgey/Prof. Ayman Abo El Makarm-Plastic Surgeon-Professor of Plastic Surgery In Shams University .png' },
      ];

      SurgeryArr: any = [{ name: 'Prof. Mohamed Khalfalla', speciality: 'Surgeon', bio: 'profesor of surgical oncology in Ain Shams university', img: '../../../../assets/Doctors/Surgery/Prof Mohamed Khalfalla-Surgeon-profesor of surgical oncology in Ain Shams university.jpeg' },];


      activeArr = this.DermatolgyArr;
      activeSpeciality = "Dermatology";

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
      constructor(private viewportScroller: ViewportScroller) { }

      ngOnInit(): void {
      }

}
