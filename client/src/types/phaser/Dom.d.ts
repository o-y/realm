namespace Phaser.DOM {
    /**
     * Adds the given element to the DOM. If a parent is provided the element is added as a child of the parent, providing it was able to access it.
     * If no parent was given it falls back to using `document.body`.
     * @param element The element to be added to the DOM. Usually a Canvas object.
     * @param parent The parent in which to add the element. Can be a string which is passed to `getElementById` or an actual DOM object.
     */
    function AddToDOM(element: HTMLElement, parent?: string | HTMLElement): HTMLElement;

    /**
     * Inspects the readyState of the document. If the document is already complete then it invokes the given callback.
     * If not complete it sets up several event listeners such as `deviceready`, and once those fire, it invokes the callback.
     * Called automatically by the Phaser.Game instance. Should not usually be accessed directly.
     * @param callback The callback to be invoked when the device is ready and the DOM content is loaded.
     */
    function DOMContentLoaded(callback: ContentLoadedCallback): void;

    /**
     * Attempts to determine the document inner height across iOS and standard devices.
     * Based on code by @tylerjpeterson
     * @param iOS Is this running on iOS?
     */
    function GetInnerHeight(iOS: boolean): number;

    /**
     * Attempts to determine the screen orientation using the Orientation API.
     * @param width The width of the viewport.
     * @param height The height of the viewport.
     */
    function GetScreenOrientation(width: number, height: number): string;

    /**
     * Attempts to get the target DOM element based on the given value, which can be either
     * a string, in which case it will be looked-up by ID, or an element node. If nothing
     * can be found it will return a reference to the document.body.
     * @param element The DOM element to look-up.
     */
    function GetTarget(element: HTMLElement): void;

    /**
     * Takes the given data string and parses it as XML.
     * First tries to use the window.DOMParser and reverts to the Microsoft.XMLDOM if that fails.
     * The parsed XML object is returned, or `null` if there was an error while parsing the data.
     * @param data The XML source stored in a string.
     */
    function ParseXML(data: string): DOMParser | ActiveXObject;

    /**
     * Attempts to remove the element from its parentNode in the DOM.
     * @param element The DOM element to remove from its parent node.
     */
    function RemoveFromDOM(element: HTMLElement): void;

    /**
     * Abstracts away the use of RAF or setTimeOut for the core game update loop.
     * This is invoked automatically by the Phaser.Game instance.
     */
    class RequestAnimationFrame {
        /**
         * True if RequestAnimationFrame is running, otherwise false.
         */
        isRunning: boolean;

        /**
         * The callback to be invoked each step.
         */
        callback: FrameRequestCallback;

        /**
         * The most recent timestamp. Either a DOMHighResTimeStamp under RAF or `Date.now` under SetTimeout.
         */
        tick: number;

        /**
         * True if the step is using setTimeout instead of RAF.
         */
        isSetTimeOut: boolean;

        /**
         * The setTimeout or RAF callback ID used when canceling them.
         */
        timeOutID: number;

        /**
         * The previous time the step was called.
         */
        lastTime: number;

        /**
         * The target FPS rate in ms.
         * Only used when setTimeout is used instead of RAF.
         */
        target: number;

        /**
         * The RAF step function.
         * Updates the local tick value, invokes the callback and schedules another call to requestAnimationFrame.
         */
        step: FrameRequestCallback;

        /**
         * The SetTimeout step function.
         * Updates the local tick value, invokes the callback and schedules another call to setTimeout.
         */
        stepTimeout: Function;

        /**
         * Starts the requestAnimationFrame or setTimeout process running.
         * @param callback The callback to invoke each step.
         * @param forceSetTimeOut Should it use SetTimeout, even if RAF is available?
         * @param targetFPS The target fps rate (in ms). Only used when setTimeout is used.
         */
        start(callback: FrameRequestCallback, forceSetTimeOut: boolean, targetFPS: number): void;

        /**
         * Stops the requestAnimationFrame or setTimeout from running.
         */
        stop(): void;

        /**
         * Stops the step from running and clears the callback reference.
         */
        destroy(): void;

    }

}