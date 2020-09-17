/**
 * Responsible for validating positions and is used
 * when manipulating positions across the application
 */
export default class Position {
  left: number;
  top: number;
  right: number;
  bottom: number;

  constructor({ left = 0, top = 0, right = 0, bottom = 0 } = {}) {
    this.left = left;
    this.right = right;
    this.top = top;
    this.bottom = bottom;
  }

  /**
   * Checks if the position is valid to be highlighted
   */
  canHighlight() {
    return this.left < this.right && this.top < this.bottom;
  }
}
