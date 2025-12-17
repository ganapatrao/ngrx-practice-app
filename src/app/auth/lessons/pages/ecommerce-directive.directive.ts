import { AfterViewInit, Directive, ElementRef, HostBinding, HostListener, Input, OnDestroy, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';

// @Directive({
//   selector: '[appEcommerceDirective]',
//   standalone: true
// })
// export class EcommerceDirectiveDirective {


@Directive({ selector: '[appHighlightTeacher]',standalone: true })
export class HighlightTeacherDirective {
@Input('appHighlightTeacher') rating = 0;
constructor(private el: ElementRef, private r: Renderer2) {}
ngOnChanges() {
if (this.rating > 4.5) {
this.r.setStyle(this.el.nativeElement, 'boxShadow', '0 0 0 3px rgba(0,200,100,0.12)');
this.r.setStyle(this.el.nativeElement, 'border', '1px solid #0b8');
}
}
}


@Directive({ selector: '[appAgeGroupFilter]',standalone: true })
export class AgeGroupFilterDirective {
@Input('appAgeGroupFilter') allowedAge = 0;
constructor(private template: TemplateRef<any>, private vc: ViewContainerRef, private el: ElementRef) {}
ngOnInit() {
// This directive is a no-op in isolation; component will control insertion
}
}


@Directive({ selector: '[appCourseMode]',standalone: true })
export class CourseModeDirective {
@Input('appCourseMode') mode = '';
constructor(private el: ElementRef, private r: Renderer2) {}
ngOnInit() {
const badge = this.r.createElement('span');
this.r.setStyle(badge, 'marginLeft', '8px');
this.r.setStyle(badge, 'padding', '2px 6px');
this.r.setStyle(badge, 'fontSize', '11px');
this.r.setStyle(badge, 'borderRadius', '4px');
if (this.mode === 'ONLINE') this.r.setStyle(badge, 'background', '#e6f7ff');
if (this.mode === 'OFFLINE') this.r.setStyle(badge, 'background', '#fff2e6');
if (this.mode === 'HYBRID') this.r.setStyle(badge, 'background', '#f3e8ff');
const text = this.r.createText(this.mode);
this.r.appendChild(badge, text);
this.r.appendChild(this.el.nativeElement, badge);
}
}


@Directive({ selector: '[appLazyImage]',standalone: true })
export class LazyImageDirective implements AfterViewInit, OnDestroy {
@Input('appLazyImage') src = '';
private io?: IntersectionObserver;
constructor(private el: ElementRef<HTMLImageElement>, private r: Renderer2) {}
ngAfterViewInit() {
if ('IntersectionObserver' in window) {
this.io = new IntersectionObserver((entries) => {
entries.forEach(e => {
if (e.isIntersecting) {
this.r.setAttribute(this.el.nativeElement, 'src', this.src);
this.io?.disconnect();
}
});
});
this.io.observe(this.el.nativeElement);
} else {
// fallback
this.r.setAttribute(this.el.nativeElement, 'src', this.src);
}
}
ngOnDestroy() { this.io?.disconnect(); }
}


@Directive({ selector: '[appAutoScrollReview]',standalone: true  })
export class AutoScrollReviewDirective implements AfterViewInit, OnDestroy {
@Input('appAutoScrollReview') intervalMs = 3000;
private timer: any;
constructor(private el: ElementRef) {}
ngAfterViewInit() {
const container = this.el.nativeElement as HTMLElement;
this.timer = setInterval(() => {
container.scrollBy({ left: 200, behavior: 'smooth' });
}, this.intervalMs);
}
ngOnDestroy() { clearInterval(this.timer); }
}


@Directive({ selector: '[appPermission]',standalone: true  })
export class PermissionDirective {
@Input('appPermission') allowedRoles: string[] = [];
constructor(private el: ElementRef, private r: Renderer2) {}
ngOnInit() {
// simple mock role (in real app inject auth service)
const current = (window as any).__MOCK_ROLE__ || 'STUDENT';
if (!this.allowedRoles.includes(current)) {
this.r.setStyle(this.el.nativeElement, 'display', 'none');
}
}
}


@Directive({ selector: '[appEnrollButton]' ,standalone: true })
export class EnrollButtonDirective {
@Input('appEnrollButton') seatsLeft = 0;
@HostBinding('class.disabled') get disabled() { return this.seatsLeft <= 0; }
@HostListener('click', ['$event']) onClick(e: Event) {
if (this.seatsLeft <= 0) { e.preventDefault(); e.stopImmediatePropagation(); alert('Enrollment closed'); }
}
}


@Directive({ selector: '[appRatingColor]',standalone: true  }) 
export class RatingColorDirective {
@Input('appRatingColor') rating = 0;
constructor(private el: ElementRef, private r: Renderer2) {}
ngOnChanges() { this.apply(); }
ngOnInit() { this.apply(); }
apply() {
const el = this.el.nativeElement;
if (this.rating >= 4.5) this.r.setStyle(el, 'color', 'green');
else if (this.rating >= 3) this.r.setStyle(el, 'color', 'orange');
else this.r.setStyle(el, 'color', 'crimson');
}
}


@Directive({ selector: '[appDurationFormat]' ,standalone: true    })
export class DurationFormatDirective {
@Input('appDurationFormat') mins = 0;
constructor(private el: ElementRef) {}
ngOnInit() {
const h = Math.floor(this.mins / 60);
const m = this.mins % 60;
this.el.nativeElement.innerText = (h ? h + ' hrs ' : '') + (m ? m + ' mins' : '0 mins');
}
}


@Directive({ selector: '[appEventTag]',standalone: true })
export class EventTagDirective {
@Input('appEventTag') tag = '';
constructor(private el: ElementRef, private r: Renderer2) {}
ngOnInit() {
if (!this.tag) return;
const span = this.r.createElement('span');
this.r.setStyle(span, 'marginLeft', '6px');
this.r.setStyle(span, 'padding', '2px 8px');
this.r.setStyle(span, 'background', '#fff3cd');
this.r.setStyle(span, 'borderRadius', '12px');
this.r.appendChild(span, this.r.createText(this.tag));
this.r.appendChild(this.el.nativeElement, span);
}
}
@Directive({ selector: '[appScrollToSection]',standalone: true })
export class ScrollToSectionDirective {
@Input('appScrollToSection') targetId = '';
constructor(private el: ElementRef) {}
@HostListener('click') go() {
const t = document.getElementById(this.targetId);
if (t) t.scrollIntoView({ behavior: 'smooth' });
}
}

@Directive({ selector: '[appShowMore]',standalone: true })
export class ShowMoreDirective {
@Input('appShowMore') length = 100;
private expanded = false;
constructor(private el: ElementRef, private r: Renderer2) {}
ngOnInit() { this.render(); }
render() {
const full = this.el.nativeElement.textContent || '';
if (!this.expanded && full.length > this.length) {
const shown = full.slice(0, this.length) + '... ';
this.el.nativeElement.innerText = shown;
const btn = this.r.createElement('a');
btn.href = 'javascript:void(0)';
btn.innerText = 'Show more';
this.r.listen(btn, 'click', () => { this.expanded = true; this.el.nativeElement.innerText = full; });
this.r.appendChild(this.el.nativeElement, btn);
}
}
}


@Directive({ selector: '[appPriceTag]' ,standalone: true})
export class PriceTagDirective {
@Input('appPriceTag') priceInfo: { price: number; original?: number } = { price: 0 };
constructor(private el: ElementRef) {}
ngOnInit() {
const p = this.priceInfo;
if (p.original && p.original > p.price) {
this.el.nativeElement.innerHTML = `₹${p.price} <small style="text-decoration:line-through;margin-left:8px">₹${p.original}</small>`;
} else this.el.nativeElement.innerText = `₹${p.price}`;
}
}

@Directive({ selector: '[appAvailableSlots]' ,standalone: true})
export class AvailableSlotsDirective {
@Input('appAvailableSlots') seats = 0;
constructor(private el: ElementRef, private r: Renderer2) {}
ngOnInit() {
if (this.seats <= 2) this.r.setStyle(this.el.nativeElement, 'color', 'crimson');
else if (this.seats <= 5) this.r.setStyle(this.el.nativeElement, 'color', 'orange');
else this.r.setStyle(this.el.nativeElement, 'color', 'green');
this.el.nativeElement.innerText = `${this.seats} seats left`;
}
}


@Directive({ selector: '[appFocusInvalid]' ,standalone: true})
export class FocusInvalidDirective {
constructor(private el: ElementRef) {}
@HostListener('submit') onSubmit() {
const form = this.el.nativeElement as HTMLFormElement;
const invalid = form.querySelector(':invalid') as HTMLElement | null;
if (invalid) invalid.focus();
}
}

@Directive({ selector: '[appTrackClicks]' })
export class TrackClicksDirective {
@Input('appTrackClicks') eventName = '';
constructor(private el: ElementRef) {}
@HostListener('click') onClick() {
console.log('Analytics: click', this.eventName || this.el.nativeElement.innerText);
}
}


// @Directive({ selector: '[appHoverPreview]',standalone: true })
// export class HoverPreviewDirective {
// @Input('appHoverPreview') preview = '';
//  tooltip?: HTMLElement;
// constructor(private el: ElementRef, private r: Renderer2) {}
// @HostListener('mouseenter') onEnter() {
// this.tooltip = this.r.createElement('div');
// this.r.setStyle(this.tooltip, 'position', 'fixed');
// this.r.setStyle(this.tooltip, 'background', '#fff');
// this.r.setStyle(this.tooltip, 'border', '1px solid #ddd');
// this.r.setStyle(this.tooltip, 'padding', '8px');
// this.r.setStyle(this.tooltip, 'boxShadow', '0 2px 8px rgba(0,0,0,.12)');
// this.r.setProperty(this.tooltip, 'innerText', this.preview);
// document.body.appendChild(this.tooltip);
// }
// @HostListener('mousemove', ['$event']) onMove(e: MouseEvent) {
// if (!this.tooltip) return; this.tooltip.style.left = e.clientX + 12 + 'px'; this.tooltip.style.top = e.clientY + 12 + 'px';
// }
// @HostListener('mouseleave') onLeave() { if (this.tooltip) document.body.removeChild(this.tooltip); this.tooltip = undefined; }
// }


@Directive({ selector: '[appCountdown]',standalone: true  })
export class CountdownDirective implements AfterViewInit, OnDestroy {
@Input('appCountdown') isoDate = '';
private timer: any;
constructor(private el: ElementRef) {}
ngAfterViewInit() {
const target = new Date(this.isoDate).getTime();
this.timer = setInterval(() => {
const now = Date.now();
let diff = Math.max(0, Math.floor((target - now) / 1000));
const h = Math.floor(diff / 3600); diff %= 3600; const m = Math.floor(diff / 60); const s = diff % 60;
this.el.nativeElement.innerText = `${h}h ${m}m ${s}s`;
if (target <= Date.now()) clearInterval(this.timer);
}, 500);
}
ngOnDestroy() { clearInterval(this.timer); }
}


@Directive({ selector: '[appInfiniteScroll]',standalone: true  })
export class InfiniteScrollDirective implements AfterViewInit, OnDestroy {
@Input('appInfiniteScroll') callback!: () => void;
private io?: IntersectionObserver;
constructor(private el: ElementRef) {}
ngAfterViewInit() {
this.io = new IntersectionObserver(entries => {
if (entries[0].isIntersecting) this.callback?.();
});
this.io.observe(this.el.nativeElement);
}
ngOnDestroy() { this.io?.disconnect(); }
}