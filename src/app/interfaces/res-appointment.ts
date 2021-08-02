import { ResDoctor } from "./res-doctor"
import { ResInvoice } from "./res-invoice"
import { ResNoteAppointment } from "./res-note-appointment"
import { ResPatient } from "./res-patient"

export interface ResAppointment {
    code:number;
    speciality:string;
    dateCreated:string;
    dateToVisit:string;
    status:string;
    type:string;
    notes:string;
    doctor:ResDoctor;
    patient:ResPatient;
    invoice?:ResInvoice;
    doctorNotes?:ResNoteAppointment[];
    userLoggerName?:string;

    
	//History
	complain?:string;
	presentIllnessHistory?:string;
	pastHistory?:string;
	drugHistory?:string;
	familyHistory?:string;
	lumpOrUlcerHistoryDuration?:string;
	lumpOrUlcerHistoryFirstSymptoms?:string;
	lumpOrUlcerHistoryOtherSymptoms?:string;
	lumpOrUlcerHistoryProgression?:string;
	lumpOrUlcerHistoryMultiplicity?:string;
	lumpOrUlcerHistoryCauses?:string;

	//Examination
	generalCondition?:string;
	vitalData?:string;
	chestExamination?:string;
	abdominalExamination?:string;
	localExaminationForUlcerAndLumpSite?:string;
	localExaminationForUlcerAndLumpShape?:string;
	localExaminationForUlcerAndLumpSize?:string;
	localExaminationForUlcerAndLumpColor?:string;
	localExaminationForUlcerAndLumpTemperature?:string;
	localExaminationForUlcerAndLumpTenderness?:string;
	localExaminationForUlcerAndLumpSurface?:string;
	localExaminationForUlcerAndLumpAge?:string;
	localExaminationForUlcerAndLumpConsistence?:string;
	localExaminationForUlcerAndLumpReducability?:string;
	localExaminationForUlcerAndLumpRelationToSurroundStructure?:string;
	localExaminationForUlcerAndLumpLymphDrainage?:string;
	breastExaminationAbnormalFindingsDuringBreastExam?:string;
	breastExaminationNippleDischarge?:string;
	breastExaminationSkinInvolvement?:string;
	breastExaminationAxillaryMass?:string;
	breastExaminationBreastMass?:string;
	breastExaminationMobileRight?:string;
	breastExaminationSize?:string;
	neckExamination?:string;

	//Investigations
	lab?:string;
	radiology?:string;
	endoscopic?:string;
	biopsy?:string;

	//Diagnoses
	provisionalDiagnoses?:string;
	finalDiagnosis?:string;
	planOfManagement?:string;
	operativeDetails?:string;
	postOperativeComplication?:string;

}
