import Desmos from 'desmos';

export class DesmosVisualiser {
  public static GLOBAL_DESMOS_DEBUG_ID: string = "GLOBAL_DESMOS_DEBUG_ID";

  private static instance: DesmosVisualiser;

  private calculator: Desmos.Calculator;

  public static getInstance(): DesmosVisualiser {
    return DesmosVisualiser.instance == null
        ? DesmosVisualiser.instance = new DesmosVisualiser()
        : DesmosVisualiser.instance;
  }

  private constructor() {
    const parent = document.getElementById(DesmosVisualiser.GLOBAL_DESMOS_DEBUG_ID)!
    this.calculator = Desmos.GraphingCalculator(parent)
  }

  public getCalculator(): Desmos.Calculator {
    return this.calculator;
  }

  public setPoint(x: number, y: number, label: string = ""): DesmosVisualiser {
    this.calculator.setExpression({
      latex: `\\left(${x},\\ ${y}\\right)`,
      label: label,
      showLabel: label.length > 0
    });

    return this;
  }
}