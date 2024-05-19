export interface ICourseSeries {
  amount?: number;
  contentType?: string;
  courseHours?: number;
  id: string;
  language?: string;
  originalAmount?: number;
  series?: {
    id?: string;
    order?: any;
  };
  subtitle?: string;
  thumbnail?: {
    id: string;
    version?: number;
    domain?: string;
    basePath?: string;
    key?: string;
  };
  title: string;
}
