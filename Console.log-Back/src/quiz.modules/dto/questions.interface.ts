import { ApiProperty } from "@nestjs/swagger";

export class IQuestions {
  @ApiProperty()
  title: string;
  @ApiProperty()
  is_correct: boolean;
}
