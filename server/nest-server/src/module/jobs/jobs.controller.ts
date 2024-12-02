import { Controller, Get, Param, Query } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { GetJobsDto } from './dto/get-jobs.dto';

@Controller('jobs')
export class JobsController {
    constructor(private readonly jobsService: JobsService) { }

    @Get()
    async getJobs(@Query() getJobsDto: GetJobsDto) {
        return await this.jobsService.getJobs(getJobsDto);
    }

    @Get(':id')
    async getJob(@Param('id') id: number) {
        return await this.jobsService.getJob(id);
    }
}
