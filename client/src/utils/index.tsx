// Formats numbers as cash results
export function formatCash(number: number): string {
  if (!number) return '';
  const cash = Intl.NumberFormat('en-US').format(number);
  return `$${cash}`;
};

// Job sub-types
export type ValueObject = {
  [key: string]: string | number,
  value: string,
};

type ValueIdObject = {
  [key: string]: string | number,
  value: string,
  id: number,
};

type Coordinates = {
  [key: string]: string | number[],
  type: string,
  coordinates: number[],
};

type Location = {
  [key: string]: number | Coordinates,
  lat: number,
  lon: number,
  coordinates: Coordinates,
};

// Fetched schema document type
export type Job = {
  body: string,
  career_area_name: string,
  city_name: string,
  company_name: string,
  company_raw: string,
  edulevels_name: ValueIdObject[],
  employment_type_name: string,
  title_name: string,
  title_raw: string,
  expiredAt?: Date | null,
  location: Location,
  max_salary: number,
  min_salary: number,
  min_edulevels_name: string,
  min_years_experience: number,
  onet: string,
  onet_name: string,
  posted: Date,
  remote_type: number,
  remote_type_name: string,
  riasec: string[],
  salary: number,
  skills_name: ValueObject[],
  is_earn_and_learn: boolean,
  is_gateway_job: boolean,
  url: ValueObject[],
  createdAt: Date,
  updatedAt?: Date | null,
  state_name: string,
};