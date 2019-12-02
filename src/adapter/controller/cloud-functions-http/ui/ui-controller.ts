import { Response } from 'express';
import { index } from './index-html';

export class UIController {
  public handle(res: Response): void {
    res.type('text/html; charset=utf-8');
    res.status(200).send(index);
  }
}
