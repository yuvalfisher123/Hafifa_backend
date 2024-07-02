import { Body, Controller, Get, Param, ParseIntPipe, UseFilters } from '@nestjs/common';
import { EventService } from './event.service';
import { HttpExceptionFilter } from 'src/error/httpExeption.filter';

@Controller()
@UseFilters(HttpExceptionFilter)
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Get(':startDate/:endDate')
  async getDataBetweenDates(@Param('startDate', ParseIntPipe) startDate: number,
    @Param('endDate', ParseIntPipe) endDate: number,
    @Body() searchParameters) {
      return (await this.eventService.getEventsBetweenDates(startDate, endDate, searchParameters)).data;
  }
}
