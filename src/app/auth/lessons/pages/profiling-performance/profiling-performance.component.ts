import { NgFor } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-profiling-performance',
  standalone: true,
  imports: [NgFor],
  templateUrl: './profiling-performance.component.html',
  styleUrl: './profiling-performance.component.css'
})
export class ProfilingPerformanceComponent  implements OnDestroy {

  items: any[] = [];
  bigImageUrl = 'https://picsum.photos/2000/1500?random=1'; // heavy image

  // Memory leak simulation
  leakSubscription: Subscription;

  constructor() {
    // 1. Large list (10000 items)
    for (let i = 0; i < 10000; i++) {
      this.items.push({ id: i, name: 'Item ' + i });
    }

    // 2. Memory leak: interval subscription never unsubscribed
    this.leakSubscription = interval(1000).subscribe(() => {
      console.log('Leaking subscription running...');
    });
  }

  // 3. Expensive function used in template
  heavyCalculation(num: number) {
    let total = 0;
    for (let i = 0; i < 20000000; i++) {  // HUGE loop
      total += i * num;
    }
    return total;
  }

  ngOnDestroy() {
    // Intentionally not unsubscribing leakSubscription to simulate memory leak
  }
}
