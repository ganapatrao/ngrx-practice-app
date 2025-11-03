npm install @ngrx/store@18 --legacy-peer-deps
with this we can create store action and reducer



ng add @ngrx/store 
-it only installs the NgRx packages and modifies package.json
-It does NOT automatically add provideStore() to your appConfig.
-add manually like this
export const appConfig = {
  providers: [
    provideStore({ count: counterReducer })  // <-- manually add this
  ]
};

for <16 versiuon
in app.module its
 imports: [BrowserModule, StoreModule.forRoot({ count: counterReducer })],
 >



chech we passed props
we created interface for the state
how we pass from props and how to we get check-- we have used action


// used selector //createFeatureSelector , creteselector
const getCounterState = createFeatureSelector<CounterState>('count'); // we can use the key and access the state

export const getCounter = createSelector(
    getCounterState,
    (state: CounterState) => state.counter
);  

export const getToggle = createSelector(
    getCounterState,
    (state: CounterState) => state.toggle
);

//  constructor(private store: Store<{count:CounterState}>) { 
    // this.showinput$ = this.store.select(state => state.count.toggle)
    //with selector
    this.showinput$ = this.store.select(getToggle)
  }

      constructor(private store: Store<{ count: CounterState }>) { 
   // this.counter$ = this.store.select((state) => state.count.counter)
this.counter$ = this.store.select(getCounter)
      }

      // install redux tool extensions
      https://chromewebstore.google.com/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en&pli=1