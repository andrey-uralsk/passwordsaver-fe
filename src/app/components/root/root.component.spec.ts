import { TestBed } from '@angular/core/testing';
import 'jasmine';

import {RootComponent} from './root.component';

describe('App', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({ declarations: [RootComponent]});
    });

    it ('should work', () => {
        let fixture = TestBed.createComponent(RootComponent);
        expect(fixture.componentInstance instanceof RootComponent).toBe(true, 'should create AppComponent');
    });
});