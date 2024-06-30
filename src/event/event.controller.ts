import { Body, Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { EventService } from './event.service';

@Controller()
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Get(':startDate/:endDate')
  async getDataBetweenDates(@Param('startDate', ParseIntPipe) startDate: number,
    @Param('endDate', ParseIntPipe) endDate: number,
    @Body() searchParameters) {
      return (await this.eventService.getEventsBetweenDates(startDate, endDate, searchParameters)).data;
  }
}
