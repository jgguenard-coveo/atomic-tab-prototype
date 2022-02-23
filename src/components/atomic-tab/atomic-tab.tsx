import { Component, Element, h, State, Prop, Listen } from "@stencil/core";
import { Bindings, initializeBindings } from "@coveo/atomic";
import {
  buildSearchParameterSerializer,
  buildSearchStatus,
  buildTab,
  SearchStatusState,
  Tab,
  TabState,
  Unsubscribe
} from "@coveo/atomic/headless";

@Component({
  tag: 'atomic-tab',
  styleUrl: 'atomic-tab.css',
  shadow: true,
})
export class AtomicTab {

  private bindings?: Bindings;
  private tabController!: Tab;
  private tabUnsubscribe: Unsubscribe = () => {};
  private statusUnsubscribe: Unsubscribe = () => {};

  @Prop() tabId: string = '';
  @Prop() caption: string = '';
  @Prop() expression: string = '';
  @Prop() isDefault: boolean = false;

  @State() private tabState!: TabState;
  @State() private statusState!: SearchStatusState;

  @Element() private host!: Element;

  @Listen('click')
  handleScroll(event: MouseEvent) {
    event.preventDefault();
    this.tabController.select();
  }

  async connectedCallback() {
    this.bindings = await initializeBindings(this.host);
    const statusController = buildSearchStatus(this.bindings.engine);
    const searchParamSerializer = buildSearchParameterSerializer();
    const urlState = searchParamSerializer.deserialize(window.location.hash.slice(1));
    const isActive = (urlState.tab === this.tabId) || (urlState.tab === undefined && this.isDefault);
    this.tabController = buildTab(this.bindings.engine, {
      initialState: { isActive },
      options: {
        id: this.tabId,
        expression: this.expression
      }
    });
    this.tabUnsubscribe = this.tabController.subscribe(() => (this.tabState = this.tabController.state));
    this.statusUnsubscribe = statusController.subscribe(() => (this.statusState = statusController.state));
  }

  disconnectedCallback() {
    this.tabUnsubscribe();
    this.statusUnsubscribe();
  }

  render() {
    if (!this.bindings || !this.statusState.hasResults) {
      return;
    }
    const cssClass = 'tab' + (this.tabState.isActive ? ' tab--active' : '');
    return (<button class={cssClass}>{this.caption}</button>);
  }
}
