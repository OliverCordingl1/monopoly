export interface CoreEventMap {}

export abstract class EventManager<T extends CoreEventMap> {
  private emitter = new EventTarget();

  emit<K extends keyof T>(event: K): void {
    this.emitter.dispatchEvent(new Event(String(event)));
    this.emitter.dispatchEvent(new Event("tick"));
  }

  on(event: string, handler: () => void): () => void {
    this.emitter.addEventListener(event, handler);

    return () => this.emitter.removeEventListener(event, handler);
  }
}
