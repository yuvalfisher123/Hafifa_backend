import { Injectable } from '@nestjs/common';
import api_connection from 'src/api_connection/api_connection';

@Injectable()
export class EventService {
  async getEventsBetweenDates(startDate: number, endDate: number, searchParameters) {
    return await api_connection.post(`/${startDate}/${endDate}`, searchParameters);
  }
}
