import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export type JobDocument = mongoose.HydratedDocument<Job>;

@Schema()
export class Coordinates {
  @Prop()
  type: string;

  @Prop()
  coordinates: number[];
}

@Schema()
export class Location {
  @Prop()
  lat: number;

  @Prop()
  lon: number;

  @Prop({ type: Coordinates })
  coordinares: Coordinates;
}

@Schema()
export class Job {
  @Prop()
  body: string;

  @Prop()
  career_area_name: string;

  @Prop()
  city_name: string;

  @Prop()
  company_name: string;

  @Prop()
  company_raw: string;

  @Prop({ type: [Object] })
  edulevels_name: [{ value: string }];

  @Prop()
  employment_type_name: string;

  @Prop()
  location: Location;

  @Prop()
  max_salary: number;

  @Prop()
  min_edulevels_name: string;

  @Prop()
  min_salary: number;

  @Prop()
  min_years_experience: number;

  @Prop()
  onet: string;

  @Prop()
  onet_name: string;

  @Prop()
  posted: Date;

  @Prop()
  remote_type: number;

  @Prop()
  remote_type_name: string;

  @Prop({ type: Number, nullable: true })
  salary: number;

  @Prop()
  score: number;

  @Prop({ type: [Object] })
  skills_name: [{ value: string }];

  @Prop()
  title: string;

  @Prop()
  title_name: string;

  @Prop()
  title_raw: string;

  @Prop({ type: [Object] })
  url: [{ value: string }];

  @Prop()
  riasec: string[];

  @Prop()
  is_earn_and_learn: boolean;

  @Prop()
  is_gateway_job: boolean;

  @Prop({ type: mongoose.Schema.Types.Date, nullable: true })
  expiredAt: Date | null;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;
}

export const JobSchema = SchemaFactory.createForClass(Job);
