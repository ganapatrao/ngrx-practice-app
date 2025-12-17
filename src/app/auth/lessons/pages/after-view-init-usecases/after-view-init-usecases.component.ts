import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-after-view-init-usecases',
  standalone: true,
  imports: [],
  templateUrl: './after-view-init-usecases.component.html',
  styleUrl: './after-view-init-usecases.component.css'
})
export class AfterViewInitUsecasesComponent implements AfterViewInit {

  // Product Slider
  @ViewChild('productSlider', { static: false }) productSlider!: ElementRef;

  // Image Zoom
  @ViewChild('zoomImage', { static: false }) zoomImage!: ElementRef;

  // Reviews Section
  @ViewChild('reviewsSection', { static: false }) reviewsSection!: ElementRef;

  // Filters Sidebar
  @ViewChild('filterBox', { static: false }) filterBox!: ElementRef;

  // Product Comparison Table
  @ViewChild('comparisonHeader', { static: false }) comparisonHeader!: ElementRef;
  @ViewChild('comparisonBody', { static: false }) comparisonBody!: ElementRef;

  // Infinite Scroll
  @ViewChild('infiniteAnchor', { static: false }) infiniteAnchor!: ElementRef;

  // Promo Code Autofocus
  @ViewChild('promoInput', { static: false }) promoInput!: ElementRef;

  ngAfterViewInit(): void {
    // 1️⃣ Initialize Product Image Slider
    this.initSlider();

    // 2️⃣ Enable Image Zoom (requires dimensions)
    this.initZoomEffect();

    // 3️⃣ Scroll to Reviews Section
    this.scrollToReviews();

    // 4️⃣ Measure Filters Sidebar Height
    this.measureSidebar();

    // 5️⃣ Sync Comparison Table Column Widths
    this.syncComparisonWidths();

    // 6️⃣ Infinite Scroll Trigger
    this.initInfiniteScroll();

    // 7️⃣ Auto-focus Promo Code Input
    this.promoInput.nativeElement.focus();
  }

  /* -------------------- FEATURE METHODS -------------------- */

  initSlider() {
    console.log('Slider initialized on:', this.productSlider.nativeElement);
    // Swiper init code here...
  }

  initZoomEffect() {
    const img = this.zoomImage.nativeElement;
    console.log('Zoom Image Dimensions:', img.clientWidth, img.clientHeight);
    // Zoom logic using dimensions...
  }

  scrollToReviews() {
    this.reviewsSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  measureSidebar() {
    const height = this.filterBox.nativeElement.offsetHeight;
    console.log('Filter Sidebar Height:', height);
  }

  syncComparisonWidths() {
    const header = this.comparisonHeader.nativeElement;
    const body = this.comparisonBody.nativeElement;
    body.style.width = header.clientWidth + 'px';
  }

  initInfiniteScroll() {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        console.log('Load more products...');
      }
    });
    observer.observe(this.infiniteAnchor.nativeElement);
  }
}