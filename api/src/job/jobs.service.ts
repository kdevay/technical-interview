import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { JobDocument, Job } from './schemas/job.schema';

@Injectable()
export class JobsService {
  constructor(
    @InjectModel(Job.name) private readonly jobModel: Model<JobDocument>,
  ) {}

  async findAll(): Promise<Job[]> {
    return this.jobModel
      .find({ expiredAt: null }) // Exclude expired jobs
      .sort({ createdAt: -1 }) // sort in descending order
      .exec();
  }
}
