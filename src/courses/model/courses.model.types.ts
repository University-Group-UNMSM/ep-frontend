export interface CourseModel {
  courseId: string;
  courseTitle: string;
  description: string;
  price: number;
  discount: number;
  category: string;
  bannerUrl: string;
  topicsCovered: string;
  learningOutcomes: string;
  courseOverview: string;
  targetAudience: string;
  userId: string;
  sections: Section[];

  readonly hasDiscount: boolean;
  readonly priceWithDiscount: number;
}

export interface AddCourseModel {
  message: string;
  courseId?: string;
}
export interface Section {
  sectionId: string; // Identificador único de la sección
  sectionName: string; // Nombre de la sección
  videoTitle: string; // Título del video asociado a la sección
  sectionUrl: string; // URL del video o contenido
  sectionDescription: string; // Descripción de la sección
  documentKeys: string; // Documentos asociados en forma de cadena separada por comas
}
