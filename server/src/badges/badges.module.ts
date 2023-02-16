import { Module } from '@nestjs/common';
import { BadgesService } from './badges.service';
import { BadgesController } from './badges.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Badge, BadgeSchema } from './schema/badge.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: Badge.name,
      schema: BadgeSchema
    }])
  ],
  controllers: [BadgesController],
  providers: [BadgesService],
  exports: [BadgesService]

})
export class BadgesModule {}
