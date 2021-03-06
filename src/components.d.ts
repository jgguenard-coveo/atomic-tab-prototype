/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AtomicTab {
        "caption": string;
        "expression": string;
        "isDefault": boolean;
        "tabId": string;
    }
    interface ResultsManager {
    }
}
declare global {
    interface HTMLAtomicTabElement extends Components.AtomicTab, HTMLStencilElement {
    }
    var HTMLAtomicTabElement: {
        prototype: HTMLAtomicTabElement;
        new (): HTMLAtomicTabElement;
    };
    interface HTMLResultsManagerElement extends Components.ResultsManager, HTMLStencilElement {
    }
    var HTMLResultsManagerElement: {
        prototype: HTMLResultsManagerElement;
        new (): HTMLResultsManagerElement;
    };
    interface HTMLElementTagNameMap {
        "atomic-tab": HTMLAtomicTabElement;
        "results-manager": HTMLResultsManagerElement;
    }
}
declare namespace LocalJSX {
    interface AtomicTab {
        "caption"?: string;
        "expression"?: string;
        "isDefault"?: boolean;
        "tabId"?: string;
    }
    interface ResultsManager {
    }
    interface IntrinsicElements {
        "atomic-tab": AtomicTab;
        "results-manager": ResultsManager;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "atomic-tab": LocalJSX.AtomicTab & JSXBase.HTMLAttributes<HTMLAtomicTabElement>;
            "results-manager": LocalJSX.ResultsManager & JSXBase.HTMLAttributes<HTMLResultsManagerElement>;
        }
    }
}
