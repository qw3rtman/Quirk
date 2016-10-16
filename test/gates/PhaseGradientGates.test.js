import {Suite} from "test/TestUtil.js"
import {assertThatRandomTestOfCircuitShaderActsLikeMatrix} from "test/CircuitOperationTestUtil.js"
import {phaseGradient} from "src/gates/PhaseGradientGates.js"

import {Complex} from "src/math/Complex.js"
import {Matrix} from "src/math/Matrix.js"

let suite = new Suite("PhaseGradientGates");

suite.webGlTest('phaseGradient', () => {
    assertThatRandomTestOfCircuitShaderActsLikeMatrix(
        ctx => phaseGradient(ctx, 3, 1),
        Matrix.generateDiagonal(8, i => Complex.polar(1, i*Math.PI/8)));

    assertThatRandomTestOfCircuitShaderActsLikeMatrix(
        ctx => phaseGradient(ctx, 4, -1),
        Matrix.generateDiagonal(16, i => Complex.polar(1, -i*Math.PI/16)));
});
