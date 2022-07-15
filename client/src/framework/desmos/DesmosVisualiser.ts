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
      latex: `\\left(${y},\\ ${x}\\right)`,
      label: label,
      showLabel: label.length > 0
    });

    return this;
  }

  public clearGraph(): DesmosVisualiser {
    // Looks like there's no easy way to clear the graph of data, destroy is
    // as the name suggests destructive, so we must recreate the entire scene.
    // TODO: validate this is correct, as this operation could be expensive if
    // called every frame update.
    this.calculator.setBlank();
    return this;
  }
}