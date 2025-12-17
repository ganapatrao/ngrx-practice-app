import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HighlightTeacherDirective ,
  InfiniteScrollDirective,
  CountdownDirective,
  CourseModeDirective,
LazyImageDirective,
AutoScrollReviewDirective,
PermissionDirective,
EnrollButtonDirective,
RatingColorDirective,
DurationFormatDirective,
EventTagDirective,
ScrollToSectionDirective,
ShowMoreDirective,
PriceTagDirective,
AvailableSlotsDirective,
FocusInvalidDirective,
TrackClicksDirective,


} from '../ecommerce-directive.directive';



@Component({
  selector: 'app-ecommerce-directives',
  standalone: true,
  imports: [
    CommonModule, FormsModule,
    CountdownDirective,
    LazyImageDirective,
    AutoScrollReviewDirective,
    PermissionDirective,
    DurationFormatDirective,
    EventTagDirective,
    ScrollToSectionDirective,
    PriceTagDirective,
    FocusInvalidDirective,
    CountdownDirective,
    InfiniteScrollDirective,
    RatingColorDirective,
    PriceTagDirective,
    CourseModeDirective,
    EnrollButtonDirective,
    AvailableSlotsDirective,
    HighlightTeacherDirective

],
  templateUrl: './ecommerce-directives.component.html',
  styleUrl: './ecommerce-directives.component.css'
})
export class EcommerceDirectivesComponent {
 teacher = {
    name: 'Rita Mam',
    rating: 4.8,
    seats: 3,
    bio: 'Expert math teacher with 10+ years of experience, known for fun and interactive classes...',
    img: 'https://picsum.photos/seed/t11/400/300'
  };

  course = {
    title: 'Full Stack Web Development',
    price: 499,
    original: 1299,
    duration: 180,
    mode: 'ONLINE',
    event: 'LIVE',
    img: 'https://picsum.photos/seed/c22/400/300'
  };

  reviews = [
    'Amazing teacher!',
    'Learned so much!',
    'Perfect examples.',
    'Very easy to follow.',
    'Highly recommended!'
  ];

  liveClassTime = new Date(Date.now() + 1000 * 60 * 60 * 3).toISOString();

  items = Array.from({ length: 10 }).map((_, i) => `Item ${i + 1}`);

  loadMore = () => {
    const next = this.items.length + 1;
    this.items.push(...Array.from({ length: 5 }).map((_, i) => `Item ${next + i}`));
  };
}
