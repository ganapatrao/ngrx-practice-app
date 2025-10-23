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

