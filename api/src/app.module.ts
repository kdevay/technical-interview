import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JobModule } from './job/jobs.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://kat:9eT2N0cd3W0ENixU@technicaltask.60hhy.mongodb.net/',
    ),
    JobModule,
  ],
})
export class AppModule {}
