import { Controller, Get } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { Job } from './schemas/job.schema';

@Controller('/')
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  @Get()
  async findAll(): Promise<Job[]> {
    return this.jobsService.findAll();
  }
}
