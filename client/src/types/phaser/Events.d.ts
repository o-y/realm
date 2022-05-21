namespace Phaser.Events {
  /**
   * EventEmitter is a Scene Systems plugin compatible version of eventemitter3.
   */
  class EventEmitter {
    /**
     * Removes all listeners.
     */
    shutdown(): void;

    /**
     * Removes all listeners.
     */
    destroy(): void;

    /**
     * Return an array listing the events for which the emitter has registered listeners.
     */
    eventNames(): (string|symbol)[];

    /**
     * Return the listeners registered for a given event.
     * @param event The event name.
     */
    listeners(event: string | symbol): Function[];

    /**
     * Return the number of listeners listening to a given event.
     * @param event The event name.
     */
    listenerCount(event: string | symbol): number;

    /**
     * Calls each of the listeners registered for a given event.
     * @param event The event name.
     * @param args Additional arguments that will be passed to the event handler.
     */
    emit(event: string | symbol, ...args: any[]): boolean;

    /**
     * Add a listener for a given event.
     * @param event The event name.
     * @param fn The listener function.
     * @param context The context to invoke the listener with. Default this.
     */
    on(event: string | symbol, fn: Function, context?: any): this;

    /**
     * Add a listener for a given event.
     * @param event The event name.
     * @param fn The listener function.
     * @param context The context to invoke the listener with. Default this.
     */
    addListener(event: string | symbol, fn: Function, context?: any): this;

    /**
     * Add a one-time listener for a given event.
     * @param event The event name.
     * @param fn The listener function.
     * @param context The context to invoke the listener with. Default this.
     */
    once(event: string | symbol, fn: Function, context?: any): this;

    /**
     * Remove the listeners of a given event.
     * @param event The event name.
     * @param fn Only remove the listeners that match this function.
     * @param context Only remove the listeners that have this context.
     * @param once Only remove one-time listeners.
     */
    removeListener(event: string | symbol, fn?: Function, context?: any, once?: boolean): this;

    /**
     * Remove the listeners of a given event.
     * @param event The event name.
     * @param fn Only remove the listeners that match this function.
     * @param context Only remove the listeners that have this context.
     * @param once Only remove one-time listeners.
     */
    off(event: string | symbol, fn?: Function, context?: any, once?: boolean): this;

    /**
     * Remove all listeners, or those of the specified event.
     * @param event The event name.
     */
    removeAllListeners(event?: string | symbol): this;

  }

}