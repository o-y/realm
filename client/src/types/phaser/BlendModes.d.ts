namespace Phaser {
  /**
   * Phaser Blend Modes.
   */
  export enum BlendModes {
    /**
     * Skips the Blend Mode check in the renderer.
     */
    SKIP_CHECK,
    /**
     * Normal blend mode. For Canvas and WebGL.
     * This is the default setting and draws new shapes on top of the existing canvas content.
     */
    NORMAL,
    /**
     * Add blend mode. For Canvas and WebGL.
     * Where both shapes overlap the color is determined by adding color values.
     */
    ADD,
    /**
     * Multiply blend mode. For Canvas and WebGL.
     * The pixels are of the top layer are multiplied with the corresponding pixel of the bottom layer. A darker picture is the result.
     */
    MULTIPLY,
    /**
     * Screen blend mode. For Canvas and WebGL.
     * The pixels are inverted, multiplied, and inverted again. A lighter picture is the result (opposite of multiply)
     */
    SCREEN,
    /**
     * Overlay blend mode. For Canvas only.
     * A combination of multiply and screen. Dark parts on the base layer become darker, and light parts become lighter.
     */
    OVERLAY,
    /**
     * Darken blend mode. For Canvas only.
     * Retains the darkest pixels of both layers.
     */
    DARKEN,
    /**
     * Lighten blend mode. For Canvas only.
     * Retains the lightest pixels of both layers.
     */
    LIGHTEN,
    /**
     * Color Dodge blend mode. For Canvas only.
     * Divides the bottom layer by the inverted top layer.
     */
    COLOR_DODGE,
    /**
     * Color Burn blend mode. For Canvas only.
     * Divides the inverted bottom layer by the top layer, and then inverts the result.
     */
    COLOR_BURN,
    /**
     * Hard Light blend mode. For Canvas only.
     * A combination of multiply and screen like overlay, but with top and bottom layer swapped.
     */
    HARD_LIGHT,
    /**
     * Soft Light blend mode. For Canvas only.
     * A softer version of hard-light. Pure black or white does not result in pure black or white.
     */
    SOFT_LIGHT,
    /**
     * Difference blend mode. For Canvas only.
     * Subtracts the bottom layer from the top layer or the other way round to always get a positive value.
     */
    DIFFERENCE,
    /**
     * Exclusion blend mode. For Canvas only.
     * Like difference, but with lower contrast.
     */
    EXCLUSION,
    /**
     * Hue blend mode. For Canvas only.
     * Preserves the luma and chroma of the bottom layer, while adopting the hue of the top layer.
     */
    HUE,
    /**
     * Saturation blend mode. For Canvas only.
     * Preserves the luma and hue of the bottom layer, while adopting the chroma of the top layer.
     */
    SATURATION,
    /**
     * Color blend mode. For Canvas only.
     * Preserves the luma of the bottom layer, while adopting the hue and chroma of the top layer.
     */
    COLOR,
    /**
     * Luminosity blend mode. For Canvas only.
     * Preserves the hue and chroma of the bottom layer, while adopting the luma of the top layer.
     */
    LUMINOSITY,
    /**
     * Alpha erase blend mode. For Canvas and WebGL.
     */
    ERASE,
    /**
     * Source-in blend mode. For Canvas only.
     * The new shape is drawn only where both the new shape and the destination canvas overlap. Everything else is made transparent.
     */
    SOURCE_IN,
    /**
     * Source-out blend mode. For Canvas only.
     * The new shape is drawn where it doesn't overlap the existing canvas content.
     */
    SOURCE_OUT,
    /**
     * Source-out blend mode. For Canvas only.
     * The new shape is only drawn where it overlaps the existing canvas content.
     */
    SOURCE_ATOP,
    /**
     * Destination-over blend mode. For Canvas only.
     * New shapes are drawn behind the existing canvas content.
     */
    DESTINATION_OVER,
    /**
     * Destination-in blend mode. For Canvas only.
     * The existing canvas content is kept where both the new shape and existing canvas content overlap. Everything else is made transparent.
     */
    DESTINATION_IN,
    /**
     * Destination-out blend mode. For Canvas only.
     * The existing content is kept where it doesn't overlap the new shape.
     */
    DESTINATION_OUT,
    /**
     * Destination-out blend mode. For Canvas only.
     * The existing canvas is only kept where it overlaps the new shape. The new shape is drawn behind the canvas content.
     */
    DESTINATION_ATOP,
    /**
     * Lighten blend mode. For Canvas only.
     * Where both shapes overlap the color is determined by adding color values.
     */
    LIGHTER,
    /**
     * Copy blend mode. For Canvas only.
     * Only the new shape is shown.
     */
    COPY,
    /**
     * Xor blend mode. For Canvas only.
     * Shapes are made transparent where both overlap and drawn normal everywhere else.
     */
    XOR,
  }
}