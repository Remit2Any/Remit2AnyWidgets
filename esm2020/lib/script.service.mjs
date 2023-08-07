import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import * as i0 from "@angular/core";
export class ScriptService {
    constructor(document) {
        this.document = document;
    }
    /**
     * Append the JS tag to the Document Body.
     * @param renderer The Angular Renderer
     * @param src The path to the script
     * @returns the script element
     */
    loadJsScript(renderer, src) {
        const script = renderer.createElement('script');
        script.type = 'text/javascript';
        script.src = src;
        renderer.appendChild(this.document.body, script);
        return script;
    }
}
ScriptService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ScriptService, deps: [{ token: DOCUMENT }], target: i0.ɵɵFactoryTarget.Injectable });
ScriptService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ScriptService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ScriptService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: Document, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9odi1reWMvc3JjL2xpYi9zY3JpcHQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWEsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7O0FBSzNDLE1BQU0sT0FBTyxhQUFhO0lBRXhCLFlBQzRCLFFBQWtCO1FBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7SUFDMUMsQ0FBQztJQUVOOzs7OztPQUtHO0lBQ0ssWUFBWSxDQUFDLFFBQW1CLEVBQUUsR0FBVztRQUNsRCxNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2hELE1BQU0sQ0FBQyxJQUFJLEdBQUcsaUJBQWlCLENBQUM7UUFDaEMsTUFBTSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDakIsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNqRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOzswR0FsQlUsYUFBYSxrQkFHZCxRQUFROzhHQUhQLGFBQWEsY0FGWixNQUFNOzJGQUVQLGFBQWE7a0JBSHpCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzswQkFJSSxNQUFNOzJCQUFDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZW5kZXJlcjIsIEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgU2NyaXB0U2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogRG9jdW1lbnRcbiAgKSB7IH1cblxuIC8qKlxuICAqIEFwcGVuZCB0aGUgSlMgdGFnIHRvIHRoZSBEb2N1bWVudCBCb2R5LlxuICAqIEBwYXJhbSByZW5kZXJlciBUaGUgQW5ndWxhciBSZW5kZXJlclxuICAqIEBwYXJhbSBzcmMgVGhlIHBhdGggdG8gdGhlIHNjcmlwdFxuICAqIEByZXR1cm5zIHRoZSBzY3JpcHQgZWxlbWVudFxuICAqL1xuICBwdWJsaWMgbG9hZEpzU2NyaXB0KHJlbmRlcmVyOiBSZW5kZXJlcjIsIHNyYzogc3RyaW5nKTogSFRNTFNjcmlwdEVsZW1lbnQge1xuICAgIGNvbnN0IHNjcmlwdCA9IHJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgIHNjcmlwdC50eXBlID0gJ3RleHQvamF2YXNjcmlwdCc7XG4gICAgc2NyaXB0LnNyYyA9IHNyYztcbiAgICByZW5kZXJlci5hcHBlbmRDaGlsZCh0aGlzLmRvY3VtZW50LmJvZHksIHNjcmlwdCk7XG4gICAgcmV0dXJuIHNjcmlwdDtcbiAgfVxufSJdfQ==