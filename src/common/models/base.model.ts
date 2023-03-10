import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class BaseModel {
  @Field()
  id: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
