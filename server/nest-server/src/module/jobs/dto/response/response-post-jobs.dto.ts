import { ApiProperty } from '@nestjs/swagger';
import { JobDto } from 'src/common/dto/response-object/job.dto';

class DataResponsePostJobsDto {
    @ApiProperty({ example: JobDto })
    job: JobDto

}

export class ResponsePostJobsDto {
    @ApiProperty({ example: "success" })
    status: string

    @ApiProperty({ example: "성공" })
    message: string

    @ApiProperty({ example: 201 })
    statusCode: number

    @ApiProperty({ example: DataResponsePostJobsDto })
    data: DataResponsePostJobsDto

}   