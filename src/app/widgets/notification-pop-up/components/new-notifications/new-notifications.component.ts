import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { WebsocketService } from 'src/app/shared/api/websocket.service';

@Component({
  selector: 'app-new-notifications',
  templateUrl: './new-notifications.component.html',
  styleUrls: ['./new-notifications.component.scss'],
})
export class NewNotificationComponents
  implements OnInit, OnDestroy, AfterViewInit
{
  @ViewChild('notification') notificationRef!: ElementRef;

  listener: any;

  constructor(
    public webSocketService: WebsocketService,
    private renderer2: Renderer2
  ) {
    // this.listener = this.renderer2.listen('window', 'scroll', (e) => {
    //   console.log(e);
    // });
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    // this.notificationRef.nativeElement.addEventListener('scroll', (e: any) => {
    //   console.log(e);
    // });

    this.renderer2.listen(this.notificationRef.nativeElement, 'scroll', (e) => {
      setInterval(() => {
        console.log(e);
      }, 1000);
    });
  }

  getYPosition(e: Event): number {
    return (e.target as Element).scrollTop;
  }

  ngOnDestroy(): void {
    // this.listener?.unsubscribe();
    this.renderer2.destroy();
  }
}
